import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDeletionByUserQuery } from '../impl';

@QueryHandler(GetDeletionByUserQuery)
export class GetDeletionByUserHandler
  implements IQueryHandler<GetDeletionByUserQuery>
{
  // constructor(private readonly repository: GetDeletionByUserRepository) {}

  async execute(query: GetDeletionByUserQuery) {
    // this should be fetchin deletion info from DB...
    console.log(`GetDeletionByUserQuery executed for id: ${query.userId}`);
    return {
      id: 'F9D28C8D-0077-44F3-9376-0D4DC91B8BE2',
      userId: 'userId-2aidja98j9dad',
      operations: [
        {
          serviceName: 'referral',
          status: 'PROCESSING',
          error: null,
        },
        {
          serviceName: 'account',
          status: 'SUCCESS',
          error: null,
        },
        {
          serviceName: 'card',
          status: 'FAIL',
          error: {
            message:
              'ValidationError: Expected string, but was null in [0].firstName at new ValidationError (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:131:32) at Object.check (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:318:19) at HttpClient.<anonymous> (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:5518:48) at step (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:91:27) at Object.next (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:72:57) at fulfilled (/app/node_modules/@pentadev/penta-client/dist/penta-node.umd.js:62:62) at processTicksAndRejections (internal/process/task_queues.js:85:5)',
          },
        },
      ],
    };
  }
}
