import { EntityRepository } from 'typeorm';
import { BaseRepository } from './base/base.repository';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super();
  }
}
