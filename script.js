// heart counter

document
  .getElementsByClassName("heart-icon")[0]
  .addEventListener("click", function () {
    let heartCount = parseInt(
      document.getElementsByClassName("heart-count")[0].innerText
    );
    heartCount++;

    document.getElementsByClassName("heart-count")[0].innerText = heartCount;
  });

// copy button
document.getElementById("copy-btn").addEventListener("click", function () {
  const copyText = document.getElementById("copy-content").innerText;
  navigator.clipboard.writeText(copyText).then(function () {
    console.log("Copied to clipboard: " + copyText);
    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;
  });
});

// call button
document.getElementById("call-btn").addEventListener("click", function () {
  const callNumber = document.getElementById("call-content").innerText;
  const copyNumber = document.getElementById("copy-content").innerText;
  alert("Calling: " + callNumber + " - " + copyNumber);
});
// balance feature
document.getElementById("call-btn").addEventListener("click", function () {
  const balance = document.getElementById("call-currency");
  let currency = parseInt(balance.innerText);
  currency = Math.max(0, currency - 20); // Prevent negative currency
  balance.innerText = currency;
  if (currency === 0) {
    alert("Insufficient balance");
  }
});
