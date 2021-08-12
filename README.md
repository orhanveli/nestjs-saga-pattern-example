<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

This is an example usage of CQRS pattern with
[Nest](https://github.com/nestjs/nest).

Here is the related [documentation](https://docs.nestjs.com/recipes/cqrs).

## Case Study

It's a user deletion process case study.

- a user deletion can be triggered with [DELETE] `/user-delete/:userId` then user deletion orchestration starts with
  - Command: `StartUserDeletionCommand`
  - this command dispatches these events
    - `UserDeletionCreatedEvent`
    - `UserAccountInfoDeleteStartedEvent`
    - `UserReferralInfoDeleteStartedEvent`
- deletion process can be monitred by [GET] `/user-delete/:userId`
  - `GetDeletionByUserQuery` provides the output data
- Every service is responsible to update process status by calling [PATCH] `/user-delete/:userId`/update-status (or dispatching a message via MQ)
  - this endpoint triggers `UpdateUserDeletionStatusCommand`
  - this command dispatches `UserDeletionStatusChangedEvent`
    - `UserDeletionSagas` captures this update event
      - if deletion status of the service result is successful: `CancelRetrySchedulerCommand` is triggering
      - if deletion result is failed: `ScheduleRetryCommand` is triggering

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

Nest is [MIT licensed](LICENSE).
