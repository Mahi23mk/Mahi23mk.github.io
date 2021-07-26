var display_title = document.getElementsByClassName('image__title');
var display_price = document.getElementsByClassName('image__description1');
var product = JSON.parse(localStorage.getItem("products"))||[];

for(let i=0;i<product.length;i++){
    display_title[i].innerHTML = product[i].title;
    display_price[i].innerHTML = product[i].price;
    
  }