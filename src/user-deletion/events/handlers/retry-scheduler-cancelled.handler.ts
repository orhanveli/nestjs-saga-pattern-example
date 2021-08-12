import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { RetrySchedulerCancelledEvent } from '../impl';

@EventsHandler(RetrySchedulerCancelledEvent)
export class RetrySchedulerCancelledHandler
  implements IEventHandler<RetrySchedulerCancelledEvent>
{
  handle(event: RetrySchedulerCancelledEvent) {
    console.log(
      `RetrySchedulerCancelledEvent handled  userId: ${event.userId}, serviceName: ${event.serviceName}`,
    );
  }
}
