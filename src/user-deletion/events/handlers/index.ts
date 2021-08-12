import { UserAccountInfoDeleteStartedEvent } from '../impl';
import { RetryScheduledHandler } from './retry-scheduled.handler';
import { RetrySchedulerCancelledHandler } from './retry-scheduler-cancelled.handler';
import { UserAccountInfoDeletedHandler } from './user-account-info-deleted.handler';
import { UserDeletionCreatedHandler } from './user-deletion-created.handler';
import { UserDeletionStatusChangedHandler } from './user-deletion-status-changed.handler';
import { UserReferralInfoDeleteStartedHandler } from './user-referral-info-delete-started.handler';
import { UserReferralInfoDeletedHandler } from './user-referral-info-deleted.handler';

export const EventHandlers = [
  UserDeletionStatusChangedHandler,
  UserDeletionCreatedHandler,
  UserReferralInfoDeletedHandler,
  UserReferralInfoDeleteStartedHandler,
  UserAccountInfoDeletedHandler,
  UserAccountInfoDeleteStartedEvent,
  RetryScheduledHandler,
  RetrySchedulerCancelledHandler,
];
