import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDeletionModule } from './user-deletion/user-deletion.module';

@Module({
  imports: [UserDeletionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
