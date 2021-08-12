import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserDeletionController } from './user-deletion.controller';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { QueryHandlers } from './queries/handlers';
import { UserDeletionSagas } from './sagas/user-deletion.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [UserDeletionController],
  providers: [
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    UserDeletionSagas,
  ],
})
export class UserDeletionModule {}
