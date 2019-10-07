import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
`;
const Section = styled.div``;

const LoanSummary = ({ values }) => {
  const paymentCount = values.length;
  const totalInterest = values.reduce((accumulator, currentValue) => {
    accumulator += currentValue[1];
    return accumulator;
  }, 0);
  return (
    <Container>
      <Section>Number of Payments: {paymentCount}</Section>
      <Section>Total Interest: {totalInterest}</Section>
    </Container>
  );
};

export default LoanSummary;
