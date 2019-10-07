import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { toQueryString } from '../../util/object';
import paymentPeriods from '../../util/paymentPeriods';

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Output = ({ principle, interest, term, monthlyPayment }) => {
  const paymentRows = paymentPeriods.map((period) => (
    <TableRow key={period.id}>
      <TableCell>{period.title}</TableCell>
      <TableCell>{period.payment(monthlyPayment)}</TableCell>
      <TableCell>
        <Link
          href={`/loan/payment?${toQueryString({
            principle,
            interest,
            term,
            payment: period.payment(monthlyPayment),
            type: period.name,
          })}`}
        >
          <a>Payment</a>
        </Link>
      </TableCell>
    </TableRow>
  ));
  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Priod</TableCell>
            <TableCell>Payment</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{paymentRows}</TableBody>
      </Table>
    </Container>
  );
};

export default Output;
