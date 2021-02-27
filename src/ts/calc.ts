/* eslint-disable no-param-reassign */
export {};

const rangeElList = document.querySelectorAll('.js-range');

const checkRange = document.querySelector(
  '.js-check-range',
) as HTMLInputElement;

const profitLabelElList = document.querySelectorAll('.js-profit-result');

const CHECK_VALUE = 800;

let income: number;
let profit: number;

const calcIncome = () => {
  income = (Number(checkRange.value) * CHECK_VALUE);
};

const calcProfit = () => {
  profit = Math.round(income * 0.24);
  profitLabelElList.forEach(el => {
    el.textContent = profit.toLocaleString();
  });
};

calcIncome();
calcProfit();

rangeElList.forEach(el => {
  const rangeEl = el as HTMLInputElement;

  const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

  const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

  rangeEl.style.background = `linear-gradient(to right, #f4af51 0%, #f4af51 ${String(
    (currentStep / steps) * 100,
  )}%, #ffffff ${String((currentStep / steps) * 100)}%, #ffffff 100%)`;
});

rangeElList.forEach(el => {
  el.addEventListener('input', e => {
    const rangeEl = e.currentTarget as HTMLInputElement;

    const steps = (Number(rangeEl.max) - Number(rangeEl.min)) / Number(rangeEl.step);

    const currentStep = (Number(rangeEl.value) - Number(rangeEl.min)) / Number(rangeEl.step);

    rangeEl.style.background = `linear-gradient(to right, #f4af51 0%, #f4af51 ${String(
      (currentStep / steps) * 100,
    )}%, #ffffff ${String((currentStep / steps) * 100)}%, #ffffff 100%)`;

    calcIncome();
    calcProfit();
  });
});
