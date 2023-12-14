import list from "./list.js";
import { setCountdown } from "./countdown.js";
import { showQuote } from "./dialog.js";
import EMAIL_BODY from "./email_body.js";

const LOGOS_FOLDER = "img/logos/";
const EMAIL_SUBJECT = encodeURIComponent(
  "RIP women's solidarity: Emergency response needed!"
);

function main() {
  const containerEl = document.querySelector("#orgs");

  const fragment = document.createDocumentFragment();

  list.forEach((org) => {
    const listItem = document.createElement("li");
    listItem.style.backgroundImage = `url(${LOGOS_FOLDER}${org.image})`;
    listItem.className = "org";
    listItem.setAttribute("title", org.name);
    if (org.denounced) {
      listItem.dataset.denounced = "1";
      listItem.title = "Click to view statement";
    } else if (org.email) {
      listItem.dataset.email = "1";
      listItem.title = "Click to email " + org.name;
    }

    const orgName = document.createElement("span");
    orgName.textContent = org.name;
    orgName.className = "org-name";

    listItem.appendChild(orgName);
    fragment.appendChild(listItem);
  });

  containerEl.appendChild(fragment);

  containerEl.addEventListener("click", (event) => {
    const orgEl = event.target.closest(".org");
    const org = list.find(({ name }) => name === orgEl.textContent);

    if (org.quote) {
      showQuote(org.name, org.quote);
    } else {
      if (org.email) {
        const mailToURL = `mailto:${org.email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`;
        window.location.href = mailToURL;
      }
    }
  });

  setCountdown();
}

main();
