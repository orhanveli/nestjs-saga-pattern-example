import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  StartUserDeletionCommand,
  UpdateUserDeletionStatusCommand,
} from './commands/impl';
import { UpdateUserDeletionStatusDto } from './dto/update-user-deletion-status.dto';
import { UserDeletion } from './models/user-deletion.model';
import { GetDeletionByUserQuery } from './queries/impl';

@Controller('user-delete')
export class UserDeletionController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Delete(':userId')
  async startDeletion(@Param('userId') userId: string): Promise<UserDeletion> {
    return this.commandBus.execute(new StartUserDeletionCommand(userId));
  }

  @Get(':userId')
  async getById(@Param('userId') userId: string): Promise<UserDeletion> {
    return this.queryBus.execute(new GetDeletionByUserQuery(userId));
  }

  @Patch(':userId/update-status')
  async updateStatus(
    @Param('userId') userId: string,
    @Body() posted: UpdateUserDeletionStatusDto,
  ): Promise<UserDeletion> {
    const { serviceName, status, payload } = posted;
    return this.commandBus.execute(
      new UpdateUserDeletionStatusCommand(userId, serviceName, status, payload),
    );
  }
}
