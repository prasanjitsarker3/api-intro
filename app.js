// // function loadData() {
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //         .then(res => res.json())
// //         .then(data => loadUsers(data));

// // }

// // function loadUsers(data) {
// //     const ul = document.getElementById('users');
// //     for (const user of data) {
// //         const li = document.createElement('li');
// //         li.innerText = `Name: ${user.name}
// //         Email: ${user.email}`;
// //         ul.appendChild(li);
// //     }
// // }

// // 
// function showData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => showDataBase(data))
// }
// function showDataBase(data) {
//     const ul = document.getElementById("showingData");
//     for (const user of data) {
//         const li = document.createElement("li");
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }
const loadKanye=()=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data=>displayKanye(data))
}

const displayKanye=(data)=>{
  const kanyeElemen=document.getElementById('posts');
  kanyeElemen.innerText=data.quote;
}

 