import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetDeletionsQuery } from '../impl';

@QueryHandler(GetDeletionsQuery)
export class GetDeletionsHandler implements IQueryHandler<GetDeletionsQuery> {
  // constructor(private readonly repository: GetDeletionsRepository) {}

  async execute(query: GetDeletionsQuery) {
    // this should be fetchin deletion info from DB...
    console.log(`GetDeletionsQuery executed`);
    return [];
  }
}
