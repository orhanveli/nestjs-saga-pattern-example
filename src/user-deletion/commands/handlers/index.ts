import { CancelRetrySchedulerHandler } from './cancel-retry-scheduler.handler';
import { ScheduleRetryHandler } from './schedule-retry.handler';
import { StartUserDeletionHandler } from './start-user-deletion.handler';
import { UpdateUserDeletionStatusHandler } from './update-user-deletion-status.handler';

export const CommandHandlers = [
  StartUserDeletionHandler,
  UpdateUserDeletionStatusHandler,
  ScheduleRetryHandler,
  CancelRetrySchedulerHandler,
];
