// below is confidential Api key //

const APP_KEY = "d1559d3e87e73a1d721adcee728b18c8";

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

for (let i = 0; i< 10 ; i++)
{
show_calorie(result.hits[i].recipe.ingredientLines);
console.log(result.hits[i].recipe.ingredientLines);

}

for (let i =0; i< 10 ; i++)
{
show_image(result.hits[i].recipe.image);
console.log(result.hits[i].recipe.image);
}

}).catch(err => {
console.error(err)
})

};
function show_calorie(src) 
{
    var line = document.createElement("lines");
    line.src = src;
    document.body.appendChild(line);
};

function show_image(src, width, height, alt) 
{
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
    
};

document.getElementById('run').addEventListener('click', recipeName );
