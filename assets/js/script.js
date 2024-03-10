function increment() {
  const firstInput = parseInt(document.getElementById(`firstInput`).value);
  const secondInput = parseInt(document.getElementById(`secondInput`).value);

  if (isNaN(firstInput)) {
    return 0;
  } else if (isNaN(secondInput)) {
    return 0;
  } else {
    const result = firstInput + secondInput;
    document.getElementById(`result`).innerHTML = result;
  }
}

document.getElementById("firstInput").addEventListener("input", increment);
document.getElementById("secondInput").addEventListener("input", increment);

increment();
