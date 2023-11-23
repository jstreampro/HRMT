import list from "./list.js";
import { setCountdown } from "./countdown.js";

const LOGOS_FOLDER = "img/logos/";

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
    }

    const orgName = document.createElement("span");
    orgName.textContent = org.name;
    orgName.className = "org-name";

    listItem.appendChild(orgName);
    fragment.appendChild(listItem);
  });

  containerEl.appendChild(fragment);

  setCountdown();
}

main();
