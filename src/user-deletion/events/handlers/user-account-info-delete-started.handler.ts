import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserAccountInfoDeleteStartedEvent } from '../impl';

@EventsHandler(UserAccountInfoDeleteStartedEvent)
export class UserAccountInfoDeleteStartedHandler
  implements IEventHandler<UserAccountInfoDeleteStartedEvent>
{
  handle(event: UserAccountInfoDeleteStartedEvent) {
    console.log('UserAccountInfoDeleteStartedEvent handled');
  }
}
