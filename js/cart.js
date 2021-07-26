let addToCart = document.querySelectorAll(".addCart");

// var product = JSON.parse(localStorage.getItem("products"));


var arr=JSON.parse(localStorage.getItem("items"))||[];
var product = JSON.parse(localStorage.getItem("products"))||[];

let id;

function search(item_id){
   arr=JSON.parse(localStorage.getItem("items"))||[];

   if(arr.length==0){
    document.querySelector("#" +id).innerHTML = "In Cart";

     return -1;
   }
  for(let i=0;i<arr.length;i++){
        if(arr[i].id == item_id){
          return 1;
        }
      document.querySelector("#" +id).innerHTML = "In Cart";
  }
}

for(let i=0;i<addToCart.length;i++){
    addToCart[i].addEventListener("click",function(event){
  
      id = addToCart[i].id;
      console.log(id);
  
      if(search(product[i].id)!=1){
        arr.push({
          title:product[i].title,
          price:product[i].price,
          img:product[i].img,
          id:product[i].id,
          inCart:product[i].inCart+1
        })

        localStorage.setItem("items",JSON.stringify(arr));
        document.querySelector(".cart_counter").innerHTML = arr.length;

      }
    });
}

document.querySelector(".cart_counter").innerHTML = arr.length;

for(let i=0;i<arr.length;i++){
  id = arr[i].id;
  document.querySelector("#p" +id).innerHTML = "In Cart";
}

