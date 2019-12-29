import { ObjectLiteral, Repository, FindManyOptions } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  getSingleDataPlaceholder,
  insertDataPlaceholder,
  paginate,
  paginationOptions,
  updateDataPlaceholder,
  deleteDataPlaceholder
} from '../../../utils';

export class BaseRepository<Entity extends ObjectLiteral> extends Repository<
  Entity
  > {
  constructor() {
    super();
  }

  public async getDataAll(
    options: any,
    relations?: string[]
  ): Promise<any | undefined> {
    const pOptions: any = paginationOptions(options);
    pOptions.where = { ...options };

    if (relations) {
      pOptions.relations = relations;
    }

    const payload = await this.findAndCount(pOptions);
    return paginate(pOptions, payload);
  }

  public async getDataById(
    uuid: any,
    relations?: string[]
  ): Promise<any | undefined> {
    const options: FindManyOptions = {};

    if (relations) {
      options.relations = relations;
    }
    const payload = await this.findByIds([uuid], options);
    return getSingleDataPlaceholder(payload);
  }

  public async insertData(options: any): Promise<any | undefined> {
    const payload = await this.save(options);
    return insertDataPlaceholder(payload);
  }

  public async updateData(
    uuid: string,
    options: QueryDeepPartialEntity<Entity>
  ): Promise<any | undefined> {
    const payload = await this.update(uuid, options);
    return updateDataPlaceholder(payload);
  }

  public async deleteData(uuid: string): Promise<any | undefined> {
    const payload = await this.delete(uuid);
    return deleteDataPlaceholder(payload);
  }
}
