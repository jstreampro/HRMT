import {
  EMAIL_SUBJECT,
  EMAIL_BODY,
  EMAIL_SUBJECT_ENCODE,
  EMAIL_BODY_ENCODE,
} from "./email_body.js";

const dialogEl = document.querySelector("#quote-dialog");
const dialogTitleEl = document.querySelector("#quote-dialog-title");
const dialogTextEl = document.querySelector("#quote-dialog-text");

document.querySelector("#quote-dialog-close").addEventListener("click", () => {
  dialogEl.close();
});

export function showQuote(name, text) {
  //close dialog when click outside dialog
  document.addEventListener("click", (event) => {
    if(event.target.id == 'quote-dialog'){
      dialogEl.close();
    }
  });

  dialogTitleEl.textContent = name;
  dialogTextEl.textContent = text;

  dialogEl.showModal();
}

export function showEmail(orgObj) {
  const dialogEl = document.querySelector("#email-dialog");

  document
    .querySelector("#email-dialog-close")
    .addEventListener("click", () => {
      dialogEl.close();
    });

    //close dialog when click outside dialog
    document.addEventListener("click", (event) => {
      if(event.target.id == 'email-dialog'){
        dialogEl.close();
      }
    });

  const emailData = orgObj?.email_data 

  if (emailData) {
    document.querySelector("#email-dialog-link").href = `mailto:${orgObj.email}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.body)}`;
    document.querySelector("#email-dialog-text").textContent = emailData.body;
    document.querySelector("#email-dialog-subject").value = emailData.subject;
    document.querySelector("#email-dialog-address").value = orgObj.email;
  } else {
    document.querySelector("#email-dialog-link").href = `mailto:${orgObj.email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY_ENCODE}`;
    document.querySelector("#email-dialog-text").textContent =EMAIL_BODY;
    document.querySelector("#email-dialog-subject").value =EMAIL_SUBJECT;
    document.querySelector("#email-dialog-address").value = orgObj.email;
  }

  dialogEl.showModal();
}
