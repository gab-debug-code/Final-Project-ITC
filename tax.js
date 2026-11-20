
const brackets = [
  [250000, 0, 0, 0],
  [400000, 0, 0.20, 250000],
  [800000, 30000, 0.25, 400000],
  [2000000, 130000, 0.30, 800000],
  [8000000, 490000, 0.32, 2000000],
  [Infinity, 2410000, 0.35, 8000000]
];


const computeTax = (income) => {
  const [, basic, rate, lower] = brackets.find(([limit]) => income <= limit);
  return basic + (income - lower) * rate;
};

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const income = Number(document.querySelector("#income").value);
  const tax = computeTax(income);
  document.querySelector("#result").textContent =
    `Income Tax: ₱${tax.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;
});
