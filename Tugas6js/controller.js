import users from "./data.js";


const index = () => {
  const list = document.getElementById("userList");
  list.innerHTML = "";
  users.map((user, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${user.nama} | ${user.umur} th | ${user.alamat} | ${user.email}`;
    list.appendChild(li);
  });
};

const store = (user) => {
  users.push(user);
  index(); // 5 data ada di file main.js //
};

                              
const destroy = () => {
  users.pop();
  index(); 
};

export { index, store, destroy };