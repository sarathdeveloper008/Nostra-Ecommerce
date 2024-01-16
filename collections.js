


var offerBar = document.querySelector(".offer-bar")

document.getElementById("offer-close").addEventListener("click",

function(){
    offerBar.style.display="none"
}
)

var sideNavMenu=document.querySelector(".navbar-menu-toggle")
var sidenavbar = document.querySelector(".side-navbar")
sideNavMenu.addEventListener("click",function(){

    sidenavbar.style.marginLeft="0px"
})

document.getElementById("side-navbar-close").addEventListener("click",()=>{
    document.querySelector(".side-navbar").style.marginLeft = "-60%"
})




     


var products = document. querySelector(".products")
var count=0

    var search=document.getElementById("search")
    // inside productcontainer.all div (querySelectorAll("div"))
    var productlist=products.querySelectorAll("div")
    // key up when button press
    search.addEventListener("keyup",function(){
        // toUpperCase() used to eg One  uppercase O search because default lower case
        // when you search o you get upper and lower case o
    var enteredvalue = event.target.value.toUpperCase()


    for(count=0; count<productlist.length;count=count+1){

    //    take product name
        var productname = productlist[count].querySelector("h1").textContent
        // -1 or <0 means dont match
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            // its not match =none
            productlist[count].style.display="none"
        }
        else{
            // its match= block
            productlist[count].style.display="block"
        }
    }
    })





    
    
    document.addEventListener("DOMContentLoaded", function () {
        const checkboxes = document.querySelectorAll(".filter-section input[type='checkbox']");
        const products = document.querySelectorAll(".product");
    
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                filterProducts();
            });
        });
    
        function filterProducts() {
            products.forEach((product) => {
                const productName = product.querySelector("h1").textContent.toLowerCase();
                let shouldDisplay = true;
    
                checkboxes.forEach((checkbox) => {
                    const value = checkbox.value.toLowerCase();
    
                    if (checkbox.checked && !productName.includes(value)) {
                        shouldDisplay = false;
                    }
                });
    
                product.style.display = shouldDisplay ? "block" : "none";
            });
        }
    });
    