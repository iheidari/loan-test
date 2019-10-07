import { getPaymentByTermName } from './paymentPeriods';
import { toMoney } from './convert';

export const calculatePayments = ({
  principle,
  interest,
  term,
  payment,
  type,
}) => {
  const payments = [];
  const convertFun = getPaymentByTermName(type);
  const dailyInterest = convertFun(interest / 1200);

  let remainingPrinciple = principle;
  let paymentCounter = 0;

  while (remainingPrinciple > 0) {
    const paymentInterest = toMoney(remainingPrinciple * dailyInterest);
    const paymentPrinciple = toMoney(payment - paymentInterest);
    remainingPrinciple -= paymentPrinciple;
    if (remainingPrinciple < 0) {
      paymentPrinciple += remainingPrinciple;
      remainingPrinciple = 0;
    }
    paymentCounter++;
    const paymentDetails = [];
    paymentDetails.push(
      paymentCounter,
      paymentInterest,
      paymentPrinciple,
      remainingPrinciple,
    );
    payments.push(paymentDetails);
    if (paymentCounter > 3000) break;
  }
  return payments;
};
