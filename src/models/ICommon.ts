export type HeadCell = {
  id: string;
  label: string;
};

export type IOrder = 'asc' | 'desc';

export type IPagination = {
  perPage: number;
  totalPage: number;
  pageIndex: number;
  order: IOrder;
  orderBy: string;
  handleRequestSort: (property: string) => () => void;
  changePage: (value: number) => void;
  changePerPage: (value: number) => void;
};

export type IHistory = {
  push(url: string): void;
  replace(url: string): void;
};
