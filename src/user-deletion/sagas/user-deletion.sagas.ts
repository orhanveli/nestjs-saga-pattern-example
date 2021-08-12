import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import {
  CancelRetrySchedulerCommand,
  ScheduleRetryCommand,
} from '../commands/impl';
import { UserDeletionStatusChangedEvent } from '../events/impl';

@Injectable()
export class UserDeletionSagas {
  @Saga()
  userDeletionStatusChanged = (
    events$: Observable<any>,
  ): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserDeletionStatusChangedEvent),
      delay(1000),
      map((event) => {
        console.log('inside UserDeletionSagas UserDeletionStatusChangedEvent');
        if (event.status === 'SUCCESS') {
          return new CancelRetrySchedulerCommand(
            event.userId,
            event.serviceName,
          );
        } else {
          return new ScheduleRetryCommand(event.userId, event.serviceName);
        }
      }),
    );
  };
}
