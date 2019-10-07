import { toMoney } from './convert';

export const getPaymentByTermName = (paymentTerm) => {
  switch (paymentTerm) {
    case 'biWeekly':
      return (monthlyPayment) => toMoney((monthlyPayment * 12) / 26);
    case 'biWeeklyAccelerate':
      return (monthlyPayment) => toMoney(monthlyPayment / 2);
    case 'weekly':
      return (monthlyPayment) => toMoney((monthlyPayment * 12) / 52);
    case 'weeklyAccelerate':
      return (monthlyPayment) => toMoney(monthlyPayment / 4);
    default:
      return (monthlyPayment) => toMoney(monthlyPayment);
  }
};

const paymentPriods = [
  {
    id: 1,
    name: 'monthly',
    title: 'Monthly',
    payment: getPaymentByTermName('monthly'),
  },
  {
    id: 2,
    name: 'biWeekly',
    title: 'Bi-Weekly',
    payment: getPaymentByTermName('biWeekly'),
  },
  {
    id: 3,
    name: 'biWeeklyAccelerate',
    title: 'Bi-Weekly Accelerate',
    payment: getPaymentByTermName('biWeeklyAccelerate'),
  },
  {
    id: 4,
    name: 'weekly',
    title: 'Weekly',
    payment: getPaymentByTermName('weekly'),
  },
  {
    id: 5,
    name: 'weeklyAccelerate',
    title: 'Weekly Accelerate',
    payment: getPaymentByTermName('weeklyAccelerate'),
  },
];

export default paymentPriods;
