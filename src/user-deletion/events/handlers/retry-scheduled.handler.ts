import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RetryScheduledEvent } from '../impl';

@EventsHandler(RetryScheduledEvent)
export class RetryScheduledHandler
  implements IEventHandler<RetryScheduledEvent>
{
  handle(event: RetryScheduledEvent) {
    console.log(
      `RetryScheduledEvent handled  userId: ${event.userId}, serviceName: ${event.serviceName}`,
    );
  }
}
