import React from 'react';
import { getLocation } from '../../util/url';
import Table from '../../components/table/table';
import Layout from '../../components/layout/layout';
import { calculatePayments } from '../../util/loan';
import LoanSummary from '../../components/loan/loanSummary';

const Payment = () => {
  const {
    search: { principle, interest, term, payment, type },
  } = getLocation();
  const payments = calculatePayments({
    principle,
    interest,
    term,
    payment,
    type,
  });
  return (
    <Layout>
      <LoanSummary values={payments} />
      <Table
        header={['#', 'Interest', 'Principle', 'Remaining Principle']}
        values={payments}
      />
    </Layout>
  );
};

export default Payment;
