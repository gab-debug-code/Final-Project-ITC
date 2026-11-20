const formulas = {
  cToF: { fn: (c) => (c * 9) / 5 + 32, from: "°C", to: "°F" },
  fToC: { fn: (f) => ((f - 32) * 5) / 9, from: "°F", to: "°C" },
  mToFt: { fn: (m) => m * 3.28084, from: "m", to: "ft" },
  ftToM: { fn: (ft) => ft / 3.28084, from: "ft", to: "m" }
};

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const value = Number(document.querySelector("#value").value);
  const { fn, from, to } = formulas[document.querySelector("#type").value];
  document.querySelector("#result").textContent =
    `${value} ${from} = ${fn(value).toFixed(2)} ${to}`;
});
