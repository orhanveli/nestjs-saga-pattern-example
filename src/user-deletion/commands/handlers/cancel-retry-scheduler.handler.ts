import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserDeletion } from 'src/user-deletion/models/user-deletion.model';
import { CancelRetrySchedulerCommand } from '../impl';

@CommandHandler(CancelRetrySchedulerCommand)
export class CancelRetrySchedulerHandler
  implements ICommandHandler<CancelRetrySchedulerCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: CancelRetrySchedulerCommand) {
    console.log('CancelRetrySchedulerCommand handler executed');

    const { userId, serviceName } = command;
    const userDeletionFromRepo = new UserDeletion(userId);
    const userDeletion =
      this.publisher.mergeObjectContext(userDeletionFromRepo);
    userDeletion.cancelRetryScheduler(serviceName);
    userDeletion.commit();
  }
}
