const getN = () => Number(document.querySelector("#n").value);
const show = (text) => (document.querySelector("#result").textContent = text);
const valid = (n) => Number.isInteger(n) && n >= 1 && n <= 100;

document.querySelector("#fact").addEventListener("click", () => {
  const n = getN();
  if (!valid(n)) return show("Enter a whole number from 1 to 100.");
  let result = 1n;
  let i = BigInt(n);
  while (i > 1n) {
    result *= i;
    i--;
  }
  show(`${n}! = ${result}`);
});

document.querySelector("#sum").addEventListener("click", () => {
  const n = getN();
  if (!valid(n)) return show("Enter a whole number from 1 to 100.");
  let sum = 0;
  let i = 1;
  do {
    sum += i;
    i++;
  } while (i <= n);
  show(`Sum of the first ${n} numbers = ${sum}`);
});

document.querySelector("#avg").addEventListener("click", () => {
  const n = getN();
  if (!valid(n)) return show("Enter a whole number from 1 to 100.");
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  show(`Average of the first ${n} numbers = ${total / n}`);
});
