document.querySelectorAll(".myPreTag").forEach((item, index) => {
  item.setAttribute("data-value", "Copy");
  item.setAttribute("id", "id"+index);
  item.addEventListener("click", async (event) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    try {
      await navigator.clipboard.writeText(event.target.innerText);
      item.setAttribute("data-value", "Copied");
    } catch (err) {
      var range = document.createRange();
      range.selectNode(document.getElementById("id"+index));
      window.getSelection().removeAllRanges(); // clear current selection
      window.getSelection().addRange(range); // to select text
      document.execCommand("copy");
      window.getSelection().removeAllRanges();// to deselect
    }
  });
});
