import { AggregateRoot } from '@nestjs/cqrs';
import {
  RetryScheduledEvent,
  RetrySchedulerCancelledEvent,
  UserAccountInfoDeleteStartedEvent,
  UserDeletionCreatedEvent,
  UserDeletionStatusChangedEvent,
  UserReferralInfoDeleteStartedEvent,
} from '../events/impl';

export class UserDeletion extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  start() {
    this.apply(new UserDeletionCreatedEvent(this.id));
    this.apply(new UserReferralInfoDeleteStartedEvent(this.id));
    this.apply(new UserAccountInfoDeleteStartedEvent(this.id));
  }

  scheduleRetry(serviceName: string) {
    this.apply(new RetryScheduledEvent(this.id, serviceName));
  }

  cancelRetryScheduler(serviceName: string) {
    this.apply(new RetrySchedulerCancelledEvent(this.id, serviceName));
  }

  updateStatus(serviceName: string, status: string) {
    this.apply(
      new UserDeletionStatusChangedEvent(this.id, serviceName, status),
    );
  }
}
