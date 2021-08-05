const navbar_container = document.getElementById("navbar_Body");
const toggle_btn = document.getElementById("toggleButton");
// header scroll 
const header = document.querySelector("header");
const arrow_up = document.querySelector("#arrow_up");

toggle_btn.addEventListener("click", () =>{
    navbar_container.classList.toggle("activeNav");
});

// scroll header change background color 
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 65){
        header.classList.add("headerBg");
    }else{
        header.classList.remove("headerBg");
    }

    // scroll button top to boottom 
    if(window.pageYOffset > 400){
        arrow_up.classList.add("arrow_button");
    }else{
        arrow_up.classList.remove("arrow_button");
    }
})

// testmonial section 
const testmonial_Obj = [
    {
        id : 0,
        image : "image/vice.jpg",
        paragraph : "James is an American business magnate,  developer, investor, author, and philanthropist. He is a co-founder of Microsoft Corporation, along with his late childhood friend Paul Allen.",
        name : "James",
        country : "Nice, USA",
    },

    {
        id : 1,
        image : "image/manager.jpg",
        paragraph : "Robert is an American business magnate, media proprietor, and investor. Bezos is the founder and executive chairman of, having previously served as chairman, president and CEO of the company",
        name : "Robert",
        country : "Nice, Australia",
    },

    {
        id : 2,
        image : "image/product_mamanager.jpg",
        paragraph : "Mary is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding , Inc. and serves as its chairman, chief executive officer, and controlling shareholder.",
        name : "Mary",
        country : "Nice, France",
    },
]

let index = 0;

const testmonail_img = document.getElementById("testmonail_img");
const test_testmonial = document.getElementById("testmonial_text");
const testmonil_name = document.getElementById("testmonil_name");
const testmonial_country = document.getElementById("testmonial_country");
// button 
const left_button = document.getElementById("left_button");
const right_button = document.getElementById("right_button");

function testmonialFunction(){
    let testmonial_index = testmonial_Obj[index];
    testmonail_img.src = testmonial_index.image;
    test_testmonial.innerHTML = testmonial_index.paragraph;
    testmonil_name.innerHTML = testmonial_index.name;
    testmonial_country.innerHTML = testmonial_index.country;
}

window.addEventListener("DOMContentLoaded", function(){
    testmonialFunction();
})

left_button.addEventListener("click", function(){
    index++;
    if(index > testmonial_Obj.length - 1){
        index = 0;
    }
    testmonialFunction();
})

right_button.addEventListener("click", function(){
    index--;
    if(index < 0){
        index = testmonial_Obj.length - 1
    }
    testmonialFunction();
})

// ************************* setInterval *********************************
const tag_display = document.querySelector(".tag_display");
const loadding_none = document.querySelector(".loadding_none");

setInterval(function(){
    tag_display.style.display = "block";
    loadding_none.style.display = "none";
},5000);