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
