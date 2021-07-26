
var admin_form = document.getElementsByClassName("adminform")[0];
var product = JSON.parse(localStorage.getItem("products"));
var id = JSON.parse(localStorage.getItem("id")); 


function updateProd(id){
  id-=1;
  localStorage.setItem("id",JSON.stringify(id));
  window.open("adminForm.html");
  
}

admin_form.innerHTML += `
<form   action="admin.html" onsubmit="return updateMyData(${id})"method="post" autocomplete="off">

  <div class="input_container">
    <h3>Title</h3>

    <input type="text" class="form-control input1"  id="title"value="${product[id].title}" >
  </div>

    <br>
    <div class="input_container">
      <h3>Price</h3>

    <input type="text" class="form-control input1" id="price" value="${product[id].price}">

  </div>
      <input type="submit" class="button_update" value="Update">
  </form>
`

function updateMyData(id){
    var title = document.getElementById("title").value;
    var price = document.getElementById("price").value;
    var prod =  JSON.parse(localStorage.getItem("products"));
    var item = JSON.parse(localStorage.getItem("items"));
  
    prod[id].title = title;
    prod[id].price = price;
    if(item[id]){
      item[id].title = title;
      item[id].price = price;  
    }
    localStorage.setItem("products",JSON.stringify(prod));
    localStorage.setItem("items",JSON.stringify(item));
}
