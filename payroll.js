const employees = [];
const peso = (n) => `₱${n.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

const render = () => {
  const body = document.querySelector("#body");
  body.textContent = "";
  if (employees.length === 0) {
    const td = body.insertRow().insertCell();
    td.colSpan = 7;
    td.className = "empty";
    td.textContent = "No employees yet. Add one above.";
    return;
  }
  employees.forEach(({ name, days, rate, deduction }, i) => {
    const gross = days * rate;                 
    const net = gross - deduction;            
    const row = body.insertRow();
    [i + 1, name, days, peso(rate), peso(gross), peso(deduction), peso(net)].forEach((value, c) => {
      const td = row.insertCell();
      td.textContent = value;
      if (c !== 1) td.className = "n";
    });
  });
};


document.querySelector("#addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  employees.push({
    name: document.querySelector("#name").value.trim(),
    days: Number(document.querySelector("#days").value),
    rate: Number(document.querySelector("#rate").value),
    deduction: Number(document.querySelector("#ded").value)
  });
  document.querySelector("#message").textContent = "";
  e.target.reset();
  render();
});

// Delete by line number
document.querySelector("#delForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const line = Number(document.querySelector("#delNo").value);
  const message = document.querySelector("#message");
  if (!Number.isInteger(line) || line < 1 || line > employees.length) {
    message.textContent = `Line number ${line} does not exist.`;
    return;
  }
  const [removed] = employees.splice(line - 1, 1);
  message.textContent = `Deleted line ${line}: ${removed.name}.`;
  e.target.reset();
  render();
});

render();
