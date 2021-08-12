import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserDeletion } from 'src/user-deletion/models/user-deletion.model';
import { StartUserDeletionCommand } from '../impl';

@CommandHandler(StartUserDeletionCommand)
export class StartUserDeletionHandler
  implements ICommandHandler<StartUserDeletionCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: StartUserDeletionCommand) {
    console.log('StartUserDeletionCommand handler executed');

    const { userId } = command;
    const userDeletionFromRepo = new UserDeletion(userId);
    const userDeletion =
      this.publisher.mergeObjectContext(userDeletionFromRepo);
    userDeletion.start();
    userDeletion.commit();
  }
}
