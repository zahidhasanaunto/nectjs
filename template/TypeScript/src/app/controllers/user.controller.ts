
import { Body, Delete, Get, JsonController, Param, Post, Put, QueryParams } from 'routing-controllers';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { UserRepository } from '../../db/repositories/user.repository';
import { User } from '../../db/entities/user.entity';

@JsonController('/users')
export class UserController {
  public static MODEL: string = 'User';

  private relations: string[] = [];

  constructor(@InjectRepository() private repository: UserRepository) { }

  @Get('/')
  public async all(@QueryParams() queryParams: any) {
    return this.repository.getDataAll(queryParams, this.relations);
  }

  @Get('/:uuid')
  public async byId(@Param('uuid') uuid: string) {
    return this.repository.getDataById(uuid, this.relations);
  }

  @Post('/')
  public async create(@Body() data: User) {
    return this.repository.insertData(data);
  }

  @Put('/:uuid')
  public async updateById(@Param('uuid') uuid: string, @Body() body: any) {
    return this.repository.updateData(uuid, body);
  }

  @Delete('/:uuid')
  public async deleteById(@Param('uuid') uuid: string) {
    return this.repository.deleteData(uuid);
  }
}