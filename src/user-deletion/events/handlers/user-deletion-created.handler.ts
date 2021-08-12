import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserDeletionCreatedEvent } from '../impl';

@EventsHandler(UserDeletionCreatedEvent)
export class UserDeletionCreatedHandler
  implements IEventHandler<UserDeletionCreatedEvent>
{
  handle(event: UserDeletionCreatedEvent) {
    console.log('UserDeletionCreatedEvent handled');
  }
}
