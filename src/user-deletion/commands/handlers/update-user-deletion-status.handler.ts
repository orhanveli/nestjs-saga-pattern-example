import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UserDeletion } from 'src/user-deletion/models/user-deletion.model';
import { UpdateUserDeletionStatusCommand } from '../impl';

@CommandHandler(UpdateUserDeletionStatusCommand)
export class UpdateUserDeletionStatusHandler
  implements ICommandHandler<UpdateUserDeletionStatusCommand>
{
  constructor(private readonly publisher: EventPublisher) {}

  async execute(command: UpdateUserDeletionStatusCommand) {
    console.log('UpdateUserDeletionStatusCommand executed');

    const { userId, serviceName, status } = command;
    const userDeletionFromRepo = new UserDeletion(userId);
    const userDeletion =
      this.publisher.mergeObjectContext(userDeletionFromRepo);
    userDeletion.updateStatus(serviceName, status);
    userDeletion.commit();
  }
}
