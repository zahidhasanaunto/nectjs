import { FindManyOptions } from 'typeorm';

export function paginate(options: any, payload: any) {
  const page = Number(options.page) ? Number(options.page) : 1;
  const take = Number(options.take) ? Number(options.take) : 10;
  const skip = page === 1 ? 0 : (page - 1) * take;

  const data = {
    message: `Get Data Success`,
    take: options.take ? Number(options.take) : 10,
    skip,
    page,
    total: payload[1],
    data: payload[0]
  };
  return data;
}

export function paginationOptions(options: any): FindManyOptions {
  const page = Number(options.page) ? Number(options.page) : 1;
  const take = Number(options.take) ? Number(options.take) : 10;
  const skip = page === 1 ? 0 : (page - 1) * take;

  const data: FindManyOptions = {
    take,
    skip
  };

  return data;
}
