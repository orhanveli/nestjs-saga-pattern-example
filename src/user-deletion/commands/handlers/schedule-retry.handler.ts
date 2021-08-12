import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserDeletion } from 'src/user-deletion/models/user-deletion.model';
import { ScheduleRetryCommand } from '../impl';

@CommandHandler(ScheduleRetryCommand)
export class ScheduleRetryHandler
  implements ICommandHandler<ScheduleRetryCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: ScheduleRetryCommand) {
    console.log('ScheduleRetryCommand handler executed');

    const { userId, serviceName } = command;
    const userDeletionFromRepo = new UserDeletion(userId);
    const userDeletion =
      this.publisher.mergeObjectContext(userDeletionFromRepo);
    userDeletion.scheduleRetry(serviceName);
    userDeletion.commit();
  }
}
