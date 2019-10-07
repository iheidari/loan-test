import React from 'react';
import UiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Table = ({ header, values }) => {
  const headerCell = header.map((column) => <TableCell>{column}</TableCell>);
  const rows = values.map((row) => (
    <TableRow>
      {row.map((cell) => (
        <TableCell>{cell}</TableCell>
      ))}
    </TableRow>
  ));

  return (
    <UiTable>
      <TableHead>
        <TableRow>{headerCell}</TableRow>
      </TableHead>
      <TableBody>{rows}</TableBody>
    </UiTable>
  );
};

export default Table;
