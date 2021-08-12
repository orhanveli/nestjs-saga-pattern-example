import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserDeletionStatusChangedEvent } from '../impl';

@EventsHandler(UserDeletionStatusChangedEvent)
export class UserDeletionStatusChangedHandler
  implements IEventHandler<UserDeletionStatusChangedEvent>
{
  handle(event: UserDeletionStatusChangedEvent) {
    console.log(
      `UserDeletionStatusChangedEvent handled  userId: ${event.userId}, serviceName: ${event.serviceName}, status: ${event.status}`,
    );
  }
}
