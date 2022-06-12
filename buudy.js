const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => buddyDisplay(data))
}

loadBuddies();
const buddyDisplay = (data) => {
    const buddies = data.results;
    const buddeisContainer = document.getElementById('baddies');
    for (const buddy of buddies) {
        const P = document.createElement('p');
        P.innerText =`Name: ${buddy.name.first} ${buddy.name.last}
        Email: ${buddy.email}
        
        Phone:${buddy.gender}`;
        buddeisContainer.appendChild(P);
    }

}