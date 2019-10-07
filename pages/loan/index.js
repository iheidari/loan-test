import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';
import Input from '../../components/loan/input';
import Output from '../../components/loan/output';
import { toQueryString } from '../../util/object';
import { toMoney } from '../../util/convert';
import { debounce } from '../../util/performance';

const initialVale = { principle: 100000, interest: 2.8, term: 25 };

const covertStringToNum = (stringValue) => {
  if (stringValue) {
    let strValue = stringValue;
    if (stringValue[stringValue.length - 1] === '.')
      strValue = stringValue.substring(0, stringValue.length - 1);
    return parseFloat(strValue);
  }
  return 0;
};

const calculatePayment = (loanParams) => {
  if (loanParams) {
    const principle = covertStringToNum(loanParams.principle);
    const interest = covertStringToNum(loanParams.interest);
    const term = covertStringToNum(loanParams.term);
    return toMoney(
      (principle * (Math.pow(1 + interest / 200, 1 / 6) - 1)) /
        (1 - Math.pow(Math.pow(1 + interest / 200, 1 / 6), -12 * term)),
    );
  }
  return 0;
};

const setAllCalculationParams = (newLoanParams, setMonthlyPayment) => {
  console.log('called');
  const payment = calculatePayment(newLoanParams);
  setMonthlyPayment(payment);
  const href = `/loan?${toQueryString(newLoanParams)}`;
  const as = href;
  Router.push(href, as, { shallow: true });
};

const Home = () => {
  const router = useRouter();
  const slug = router.query;
  // TODO: Check if slug is safe
  const [loanParameters, setLoanParameters] = useState({
    ...slug,
    ...initialVale,
  });
  const [monthlyPayment, setMonthlyPayment] = useState(
    calculatePayment(initialVale),
  );
  console.log('render');
  const valueChanged = (paramName) => (event) => {
    const newLoanParams = {
      ...loanParameters,
      [paramName]: event.target.value,
    };

    setLoanParameters(newLoanParams);

    debounce(
      () => setAllCalculationParams(newLoanParams, setMonthlyPayment),
      1000,
    )();
  };

  return (
    <Layout>
      <Input {...loanParameters} valueChanged={valueChanged} />
      <Output monthlyPayment={monthlyPayment} {...loanParameters} />
    </Layout>
  );
};

export default Home;
