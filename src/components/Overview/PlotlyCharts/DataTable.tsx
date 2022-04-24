import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import fakeData from '../../../fake-data/fake-data-agg.json';

const Styles = styled.div`
  padding: 1rem;
  table {
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }: { columns: any; data: any }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function DataTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'Platform',
            accessor: 'platform',
          },
          {
            Header: 'Source',
            accessor: 'source',
          },
          {
            Header: 'Data type',
            accessor: 'data_type',
          },
          {
            Header: 'Data origin',
            accessor: 'data_origin',
          },
          {
            Header: 'Interaction date',
            accessor: 'interaction_date',
          },
          {
            Header: 'Action',
            accessor: 'action',
          },
          {
            Header: 'Details',
            accessor: 'details',
          },
        ],
      },
    ],
    []
  );

  const data = fakeData.data_classification;

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
