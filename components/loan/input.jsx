import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Form, { Control } from '../form';
import styled from '@emotion/styled';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Container = styled.div`
  margin: 0 auto;
  width: ${(props) => (props.isMobile ? '100%' : '400px')};
`;

const Input = ({
  principle = 100000,
  interest = 3,
  term = 25,
  valueChanged,
}) => {
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <Container isMobile={isMobile}>
      <Form>
        <Control>
          <TextField
            label="Principle"
            onChange={valueChanged('principle')}
            value={principle}
          />
        </Control>
        <Control>
          <TextField
            label="Interest"
            onChange={valueChanged('interest')}
            value={interest}
          />
        </Control>
        <Control>
          <TextField
            label="Term"
            placeholder="In year"
            onChange={valueChanged('term')}
            value={term}
          />
        </Control>
        {/* <Control>
          <Button
            variant="contained"
            onClick={() =>
              valueChanged({ principle, interest, term }, setMonthlyPayment)
            }
          >
            Calculate
          </Button>
        </Control> */}
      </Form>
    </Container>
  );
};

export default Input;
