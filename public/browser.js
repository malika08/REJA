console.log("FrontEndJS started working!");

function itemTemplate(item) {
  return `
  <li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              O'zgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              O'chirish
            </button>
          </div>
        </li>
    `;
}
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please try again!");
    });
});

document.addEventListener("click", function (e) {
  //delete operation
  console.log(e.target);
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")) {
      axios
        .post("./delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("PLease try again!");
        });
    }
  }

  //update operation
  if (e.target.classList.contains("edit-me")) {
    alert("you pressed edit button!");
  }
});
