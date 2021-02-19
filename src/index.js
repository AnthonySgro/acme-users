const faker = require("faker");
const userArr = new Array(5).fill("").map((_) => faker.name.firstName());

const list = document.querySelector("#user-list");

const liArr = console.log(list);

const render = () => {
    const html = `
    ${userArr
        .map(
            (user, i) => `
    <li>
        <a href="#${i}">${user}</a>
    </li>
    `,
        )
        .join("")}
    `;
    list.innerHTML = html;
};

render();
