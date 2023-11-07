document.querySelectorAll(".myPreTag").forEach((item, index) => {
  item.setAttribute("data-value", "Copy");
  item.addEventListener("click", async (event) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      return;
    }
    try {
      await navigator.clipboard.writeText(event.target.innerText);
      item.setAttribute("data-value", "Copied");
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  });
});
