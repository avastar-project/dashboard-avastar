import React from 'react';
import styled from 'styled-components';
// MUI components
import { Box } from '@mui/material';

import {
  useTable,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table';

import fakeData from '../../../fake-data/fake-data-agg.json';

const Container = styled.div`
  display: flex;

  & select {
    /* Reset Select */
    outline: 0;
    border: 0;
    box-shadow: none;

    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: #fff;
    background-color: #34495e;
    background-image: none;
    cursor: pointer;
    border-radius: 0.25em;
    width: 3.8rem;
  }

  & option {
    background-color: var(--tab-clr-bg2);
    color: black;
  }
`;

const Styles = styled(Box)`
  overflow: auto;
  margin: 2rem 0 2rem 0;
  background: var(--tab-clr-bg);
  border: solid 0.2rem var(--tab-clr-bg2);
  border-radius: var(--tab-radius);
  width: 100%;
  height: auto;
  box-shadow: 1px 0 5px 0px #888;
`;

const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: hidden;
`;

const STHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

const STHeadTR = styled.tr`
  width: 100%;
  background: var(--tab-clr-bg);
`;

const STH = styled.th`
  padding: 0 var(--tab-smSpacing) var(--tab-smSpacing) var(--tab-smSpacing);
  color: var(--tab-clr-text);
  text-transform: capitalize;
  font-weight: 600;
  font-size: 14px;
  :not(:last-of-type) {
    border-right: var(--tab-clr-bg2);
  }
`;

const STBody = styled.tbody``;

const STBodyTR = styled.tr`
  background: var(--tab-clr-white);
`;

const STD = styled.td`
  padding: var(--tab-smSpacing);
  border: 1px solid var(--tab-clr-bg2);
  font-size: 0.8rem;

  :first-child {
    font-weight: 500;
    color: #34495e;
  }
`;

const Pagination = styled(Box)`
  display: flex;
  position: absolute;
  width: 85%;
  left: 18%;

  @media screen and (min-width: 870px) and (max-width: 1200px) {
    width: 97%;
    left: 21%;
    font-size: smaller;
  }
`;

const PagiBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: auto;

  @media screen and (min-width: 870px) and (max-width: 1200px) {
    gap: 0.5rem;
  }

  button {
    width: 2.3rem;
    height: auto;
    background-color: #34495e;
    color: white;
    font-weight: bold;
    border-radius: 0.3rem;

    @media screen and (min-width: 870px) and (max-width: 1200px) {
      width: 1.3rem;
    }

    :disabled {
      background-color: var(--tab-clr-bg2);
      color: var(--tab-clr-bg3);
    }
  }

  input {
    width: 2.3rem;
    text-align: center;
    background-color: #34495e;
    color: white;
    font-weight: bold;
    border-radius: 0.3rem;

    @media screen and (min-width: 870px) and (max-width: 1200px) {
      font-size: smaller;
    }
  }

  & select {
    /* Reset Select */
    outline: 0;
    border: 0;
    box-shadow: none;

    /* Personalize */
    flex: 1;
    padding: 0 1em;
    color: #fff;
    background-color: #34495e;
    background-image: none;
    cursor: pointer;
    border-radius: 0.3rem;
    height: 1.5em;

    @media screen and (min-width: 870px) and (max-width: 1200px) {
      font-size: smaller;
    }
  }

  & option {
    background-color: var(--tab-clr-bg2);
    color: black;
  }
`;

const SearchBox = styled(Box)`
  padding: 1rem;

  span {
    padding: 0.3rem 0;
    color: #34495e;
  }

  input {
    margin-left: 0.5rem;
    padding: 0.3rem 0;
    background: var(--tab-clr-bg);
    border: none;
    border-bottom: 1px solid #34495e;

    ::placeholder {
      font-size: 0.9rem;
    }
  }
`;

const SearchHeaderBox = styled(Box)`
  width: 0.1rem;
  height: auto;
  input {
    outline: none;
    opacity: 0;
    cursor: default;
    background-color: var(--tab-clr-bg3);
    border: 1px solid #34495e;
    font-weight: bold;
    border-radius: 0.3rem;
    height: 1.5em;

    ::placeholder {
      padding-left: 0.5rem;
      color: #34495e;
      font-weight: normal;
    }
  }
`;
//Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: any) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <SearchBox>
      <span>
        Search:{' '}
        <input
          value={value || ''}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </span>
    </SearchBox>
  );
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}: any) {
  const count = preFilteredRows.length;

  return (
    <SearchHeaderBox>
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    </SearchHeaderBox>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: any = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: { values: { [x: string]: unknown } }) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <Container>
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All </option>
        {options.map((option: any, i: any) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
}

function Table({ columns, data }: { columns: any; data: any }) {
  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <Box position="relative" pb={2}>
        <STable {...getTableProps()}>
          <STHead>
            {headerGroups.map((headerGroup) => (
              <STHeadTR {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <STH
                    style={{ minWidth: column.minWidth }}
                    {...column.getHeaderProps()}
                  >
                    <Box mb={2}>{column.render('Header')}</Box>
                    {/* Render the columns filter UI */}
                    <Box>
                      {column.canFilter ? column.render('Filter') : null}
                    </Box>
                  </STH>
                ))}
              </STHeadTR>
            ))}
            <tr>
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: 'left',
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={state.globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
            </tr>
          </STHead>
          <STBody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <STBodyTR {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <STD {...cell.getCellProps()}>{cell.render('Cell')}</STD>
                    );
                  })}
                </STBodyTR>
              );
            })}
          </STBody>
        </STable>
      </Box>
      <Box pb={5}>
        {/*
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <Pagination>
          <PagiBox>
            <Box>
              <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
              </button>{' '}
            </Box>
            <Box>
              <button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                {'<'}
              </button>{' '}
            </Box>
            <Box>
              <span>
                Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
              </span>
            </Box>
            <Box>
              <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
              </button>{' '}
            </Box>
            <Box>
              <button
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                {'>>'}
              </button>{' '}
            </Box>
          </PagiBox>
          <PagiBox>
            <Box>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </Box>
            <Box>
              <span>
                | Go to page:{' '}
                <input
                  type="number"
                  min="0"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  style={{ width: '2.5rem' }}
                />
              </span>{' '}
            </Box>
          </PagiBox>
        </Pagination>
      </Box>
    </>
  );
}

export default function DataTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: '',
        isVisible: false,
        id: 'default',
        columns: [
          {
            Header: 'Platform',
            accessor: 'platform',
            Filter: SelectColumnFilter,
            filter: 'includes',
            minWidth: '2.8rem',
          },
          {
            Header: 'Source',
            accessor: 'source',
            Filter: SelectColumnFilter,
            filter: 'includes',
            minWidth: '19rem',
          },
          {
            Header: 'Data type',
            accessor: 'data_type',
            Filter: SelectColumnFilter,
            filter: 'includes',
            minWidth: '1.5rem',
          },
          {
            Header: 'Data origin',
            accessor: 'data_origin',
            Filter: SelectColumnFilter,
            filter: 'includes',
            minWidth: '5.4rem',
          },
          {
            Header: 'Action',
            accessor: 'action',
            Filter: SelectColumnFilter,
            filter: 'includes',
            minWidth: '11.4rem',
          },
          {
            Header: 'Interaction date',
            accessor: 'interaction_date',
            minWidth: '7.3rem',
          },
          {
            Header: 'Details',
            accessor: 'details',
            minWidth: '17.27rem',
          },
        ],
      },
    ],
    []
  );

  const data = fakeData.data_classification;

  return (
    <Box>
      <Styles>
        <Table columns={columns} data={data} />
      </Styles>
    </Box>
  );
}
