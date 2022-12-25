var courses = [{
        image: './images/courses/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: './images/courses/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: './images/courses/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: './images/courses/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: './images/courses/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/courses/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/courses/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: './images/courses/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/courses/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: './images/courses/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/courses/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/courses/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/courses/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: './images/courses/cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        image: './images/courses/phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        image: './images/courses/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/courses/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: './images/courses/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        image: './images/courses/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }
]


let image=[];
courses.forEach((e,i)=>{
    image[i]=e.image;
})
let title=[];
courses.forEach((e,i)=>{
    title[i]=e.title;
})
let price=[];
courses.forEach((e,i)=>{
    price[i]=e.price;
})
let div=document.getElementById("images");


let nbr;
function generatingnbr(){let nbr=parseInt((Math.random()*10)+(Math.random()*10));
while (nbr>19){
    let nbr=parseInt((Math.random()*10)+(Math.random()*10));
}
return nbr;
}
nbr=generatingnbr();

for(let i=0;i<3;i++){
    div.innerHTML+="<div class='image'> <img src='template"+image[nbr].slice(1,image[nbr].length)+"'><p class='tt'>"+title[nbr]+"</p><p class='tt1'>"+price[nbr]+" $</p></div>";
    nbr=generatingnbr();
}
