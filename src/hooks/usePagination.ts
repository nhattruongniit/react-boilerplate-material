import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);

  const _changePage = (newPage: number) => setPage(newPage);

  const _changePerPage = (newPerPage: number) => {
    setPerPage(newPerPage);
    setPage(1);
  };

  return {
    page,
    perPage,
    _changePage,
    _changePerPage,
  };
};

export default usePagination;
