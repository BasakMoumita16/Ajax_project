// below is confidential Api key //

const APP_KEY = "d1559d3e87e73a1d721adcee728b18c8";
const div = document.querySelector(".div");
const para = document.querySelector("#para");
console.log(div);


// Async ApI here added a extra line of code for resolve the access deny problem//

async function recipeName()
{
const APIcall =  (`https://api.edamam.com/search?q=chicken&app_key=`+ APP_KEY , {
mode: 'no-cors',
header: 
{
'Access-Control-Allow-Origin':'*',
}
});
const input = document.getElementById("name").value
console.log(input);

// fetch method //

await fetch(`https://api.edamam.com/search?q=${input}&app_id=3a1a3ab4&app_key=d1559d3e87e73a1d721adcee728b18c8`)
.then(res => res.json())
.then(result =>
{
console.log(result);
result.hits.forEach(element => {
div.appendChild(show_name(element.recipe.label,element.recipe.shareAs));
div.appendChild(show_image(element.recipe.image, 150,250,'k'))
element.recipe.ingredientLines.forEach(element => {
    div.appendChild(show_ingredient(element))
})

});

}).catch(err => {
console.error(err)
})

// Functions for ingredients//

function show_ingredient(src) 
{
var ing = document.createElement('p');
ing.innerHTML = src;
return ing;
};
// Functions for recipe link//
function show_name(name,src) 
{
var nam = document.createElement('a');
nam.innerHTML = name;
nam.setAttribute('href', src)
return nam;
};
// Functions for images//
function show_image(src, width, height, alt) 
{
var img = document.createElement("img");
img.src = src;
img.width = width;
img.height = height;
img.alt = alt;
return img;
};
};
document.getElementById('run').addEventListener('click', recipeName );
