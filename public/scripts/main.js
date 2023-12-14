import list from "./list.js";
import { setCountdown } from "./countdown.js";
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
    if (org.email) {
      listItem.dataset.email = org.email;
    }
    listItem.setAttribute("title", org.name);
    if (org.denounced) {
      listItem.dataset.denounced = "1";
    }

    const orgName = document.createElement("span");
    orgName.textContent = org.name;
    orgName.className = "org-name";

    listItem.appendChild(orgName);
    fragment.appendChild(listItem);
  });

  containerEl.appendChild(fragment);

  containerEl.addEventListener("click", (event) => {
    const email = event.target.closest(".org").dataset.email;
    if (email) {
      const mailToURL = `mailto:${email}?subject=${EMAIL_SUBJECT}&body=${EMAIL_BODY}`;
      window.location.href = mailToURL;
    }
  });

  setCountdown();
}

main();
