import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserReferralInfoDeletedEvent } from '../impl';

@EventsHandler(UserReferralInfoDeletedEvent)
export class UserReferralInfoDeletedHandler
  implements IEventHandler<UserReferralInfoDeletedEvent>
{
  handle(event: UserReferralInfoDeletedEvent) {
    console.log('UserReferralInfoDeletedEvent handled');
  }
}
