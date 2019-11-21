// below is confidential Api key //

const APP_KEY = "d1559d3e87e73a1d721adcee728b18c8";

// Async ApI //

async function recipeName() {
const APIcall =  `https://api.edamam.com/search?q=chicken&app_key=`+ APP_KEY;
const input = document.getElementById("name").value
console.log( input);

// fetch method //

await fetch(`https://api.edamam.com/search?q=${input}&app_id=3a1a3ab4&app_key=d1559d3e87e73a1d721adcee728b18c8`)
.then(res => res.json())
.then(result => {
    console.log(result);
}).catch(err => {
console.error(err)
})
};
document.getElementById('run').addEventListener('click', recipeName );
