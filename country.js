// const loadCountries =()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => displayCountries(data))
// }
// loadCountries()

// const displayCountries = (countries)=>{
//       const countriesDiv=document.getElementById('country');
//       countries.forEach(country =>{
//         const div=document.createElement('div');
//         div.classList.add('country');
//         div.innerHTML=`
//         <h3>${country.name.common}</h3>
//         <p>${country.capital}</p>
//         <button onClick="loadCountryDetails('${country.name.common}')">Show Details</button>
//         `;
//         countriesDiv.append(div)

//       })
// }

// const loadCountryDetails =(name)=>{
//     const url=`https://restcountries.com/v3.1/name/${name}`
//     fetch(url)
//     .then(res=> res.json())
//     .then(data=>displayCountriesDetails(data[0]));
// }
// const displayCountriesDetails = (country)=>{
//     console.log(country);
//     const countryDiv=document.getElementById("country-details");
//     countryDiv.innerHTML=`
//     <h5>${country.name.common}</h5>
//     <p>${country.population}</p>
//     <img width="200px" height=""src="${country.flags.svg}">
//     `
//   console.log(country);
// }


const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data));
}
loadCountries();

const displayCountry = (countries) => {
    const countriesDiv = document.getElementById('country');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Population: ${country.population}</p>
        <button onClick="countryDetails('${country.name.common}')">Show Details</button>
        `
        countriesDiv.appendChild(div);
    })


}

const countryDetails = (name) => {
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
    const displayContaier = document.getElementById("country-details");
    displayContaier.innerHTML = `
    <h5>${country.name.common}</h5>
    <p>${country.population}</p>
   <img width="200px" height=""src="${country.flags.svg}">
    `;
   
}
