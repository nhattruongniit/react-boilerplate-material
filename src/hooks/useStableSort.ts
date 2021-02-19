import { useState } from 'react';

// types
import { IOrder } from 'models/ICommon';

const useStableSort = () => {
  const [order, setOrder] = useState<IOrder>('asc');
  const [orderBy, setOrderBy] = useState<string>('name');
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(20);

  const handleRequestSort = (property: string) => () => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangePerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return {
    order,
    orderBy,
    page,
    perPage,
    handleRequestSort,
    handleChangePage,
    handleChangePerPage,
  };
};

export default useStableSort;
