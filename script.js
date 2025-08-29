//  Heart counter
document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    const heartCountEl = document.querySelector(".heart-count");
    let heartCount = parseInt(heartCountEl.innerText) || 0;
    heartCount++;
    heartCountEl.innerText = heartCount;
  });
});

//  Copy button
document.querySelectorAll(".copy-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const copyText =
      document.querySelectorAll(".copy-content")[index].innerText;
    navigator.clipboard.writeText(copyText).then(() => {
      console.log("Copied to clipboard: " + copyText);
      alert("Number Copied: " + copyText);

      //  copy counter
      const copyCountEl = document.getElementById("copy-count");
      let copyCount = parseInt(copyCountEl.innerText);
      copyCountEl.innerText = copyCount + 1;
    });
  });
});

//  Call button
document.querySelectorAll(".call-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const callNumber =
      document.querySelectorAll(".call-content")[index].innerText;
    const copyNumber =
      document.querySelectorAll(".copy-content")[index].innerText;

    alert("Calling: " + callNumber + " - " + copyNumber + "...");

    // Balance feature
    const balanceEl = document.getElementById("call-currency");
    let currency = parseInt(balanceEl.innerText);
    currency = Math.max(0, currency - 20);
    balanceEl.innerText = currency;
    if (currency === 0) {
      alert("Insufficient balance");
    }

    // History feature
    const historyContainer = document.getElementById("history-container");
    const historyCard = document.createElement("div");
    historyCard.className =
      "h-20 bg-gray-100 rounded-md p-4 flex justify-between items-center mb-4";

    // Info feature
    const cardInfo = document.createElement("div");
    const title = document.createElement("h1");
    title.className = "text-lg font-bold";
    title.innerText = callNumber;
    const content = document.createElement("p");
    content.innerText = copyNumber;
    cardInfo.appendChild(title);
    cardInfo.appendChild(content);

    // Time feature
    const time = document.createElement("div");
    time.className = "text-sm text-gray-500";
    const now = new Date();
    time.innerText = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    historyCard.appendChild(cardInfo);
    historyCard.appendChild(time);

    historyContainer.appendChild(historyCard);
  });
});

// Clear history
document.getElementById("clear-btn").addEventListener("click", () => {
  document.getElementById("history-container").innerHTML = "";
});
