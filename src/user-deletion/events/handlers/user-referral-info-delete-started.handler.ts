import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserReferralInfoDeleteStartedEvent } from '../impl';

@EventsHandler(UserReferralInfoDeleteStartedEvent)
export class UserReferralInfoDeleteStartedHandler
  implements IEventHandler<UserReferralInfoDeleteStartedEvent>
{
  handle(event: UserReferralInfoDeleteStartedEvent) {
    console.log('UserReferralInfoDeleteStartedEvent handled');
  }
}
