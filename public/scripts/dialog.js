const dialogEl = document.querySelector("#quote-dialog");
const dialogTitleEl = document.querySelector("#quote-dialog-title");
const dialogTextEl = document.querySelector("#quote-dialog-text");

document.querySelector("#quote-dialog-close").addEventListener("click", () => {
  dialogEl.close();
});

export function showQuote(name, text) {
  dialogTitleEl.textContent = name;
  dialogTextEl.textContent = text;

  dialogEl.showModal();
}
