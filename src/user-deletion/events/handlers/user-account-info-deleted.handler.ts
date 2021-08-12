import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserAccountInfoDeletedEvent } from '../impl';

@EventsHandler(UserAccountInfoDeletedEvent)
export class UserAccountInfoDeletedHandler
  implements IEventHandler<UserAccountInfoDeletedEvent>
{
  handle(event: UserAccountInfoDeletedEvent) {
    console.log('UserAccountInfoDeletedEvent handled');
  }
}
