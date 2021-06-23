export { PageInfo } from './page-info';
export { Paginated } from './paginated';
export { PaginationArgs } from './pagination.args';

export function encodeCursor(value: number, cond = 'primary_key_asc'): string {
  return Buffer.from(`["${cond}",[${value}]]`).toString('base64');
}

export function encodeNodeId(value: number, entity: string): string {
  return Buffer.from(`["${entity}",${value}]`).toString('base64');
}
