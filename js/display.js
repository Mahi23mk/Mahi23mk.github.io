let productContainer = document.querySelector(".products");

var array=JSON.parse(localStorage.getItem("items"))||[];

var grand_total=0;


for(let i=0;i<array.length;i++){

  grand_total= array[i].price*array[i].inCart + parseInt(grand_total);
 
}

for(var i=0;i<array.length;i++){
  productContainer.innerHTML +=`
  <div class="Container">
  <tr class="totalCost" id="p${array[i].id}">
    <td>
    <ion-icon name="close-circle-outline"  onclick= removeProduct(${array[i].id})></ion-icon>
    </td>
    <td class="cols image_container">
      <img class="image" src=${array[i].img}>
    </td>
    <td class="cols image_container1">
      <h4>${array[i].title}</h4>

    </td>
    <td class="cols">
      <p>Rs ${array[i].price}</p>
    </td>
    <td class="cols">
      <ion-icon name="chevron-back-circle-outline" onclick=decrement(${array[i].id})></ion-icon>
      <span class="inc">${array[i].inCart}</span>
      <ion-icon name="chevron-forward-circle-outline" onclick=increment(${array[i].id})></ion-icon>
    </td>
    <td class="cols">
      <p >Rs <span class="total">${array[i].price*array[i].inCart}</span>.00</p>
    </td>
  </tr>
  </div>
  `
}


productContainer.innerHTML +=`
    <tr class="totalCost">
       <td class="subcost1" colspan="4"><h4>Total Cost</h4> </td>
       <td class="subcost2"colspan="1"><h4> Rs <span class="grand_total">${grand_total}</span>.00 </h4></td>
    </tr>
    `
// function rec(){
// increment();
// }
function increment(id){
  let index;

   let arr = JSON.parse(localStorage.getItem("items"));
   for(let i=0;i<arr.length;i++){
     if(arr[i].id== id){
       index = i;
       arr[i].inCart++;
      // arr[i].price = arr[i].price*arr[i].inCart;
       localStorage.setItem("items",JSON.stringify(arr));
       let new_arr = JSON.parse(localStorage.getItem("items"));
       document.querySelectorAll(".inc")[index].innerHTML = new_arr[index].inCart;
      document.querySelectorAll(".total")[index].innerHTML = arr[i].inCart*arr[i].price ;
     
      console.log(grand_total+"cnejksns", arr[i].price);  
      grand_total= parseInt(arr[i].price)+parseInt(grand_total);
      console.log(grand_total+"cnejksns");  
    
      document.querySelector(".grand_total").innerHTML = grand_total ;

       break;
     }
   }
}

function decrement(id){
   let index;
   let arr = JSON.parse(localStorage.getItem("items"));
   for(let i=0;i<arr.length;i++){
     if(arr[i].id== id && arr[i].inCart>1){
       index = i;
       arr[i].inCart--;
       localStorage.setItem("items",JSON.stringify(arr));
       let new_arr = JSON.parse(localStorage.getItem("items"));
       document.querySelectorAll(".inc")[index].innerHTML = new_arr[index].inCart;
      document.querySelectorAll(".total")[index].innerHTML = arr[i].inCart * arr[i].price ;
     // grand_total-=arr[i].price;
      grand_total= parseInt(grand_total)-parseInt(arr[i].price);

      document.querySelector(".grand_total").innerHTML = grand_total ;
       break;
     }
   }
}


function removeProduct(item){
//  item = JSON.stringify(item);
  // let temp = localStorage.getItem("productsInCart");
  // var ob = JSON.parse(temp);
    var newArr=[...array];
  console.log(item, "hello");
  newArr=array.filter((i)=>{
    return i.id !==item;
  })
  localStorage.setItem("items",JSON.stringify(newArr));
  console.log(JSON.parse(localStorage.getItem("items")));
  location.reload();

}

