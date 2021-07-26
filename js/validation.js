
let arr = localStorage.getItem("login")||[];

function validateForm() {
  let arr = JSON.parse(localStorage.getItem("login"))||[];

  var email = document.myform.email.value;
  var password = document.myform.password.value;
  var confirm = document.myform.confirm.value;

 
  if(email==null ||email == ""){
    alert("name can't be blank");
      return false;
  }
  if(email=="admin" && password=="admin"){
    alert("you are logged in as "+email);
  
  }

  
  if(password.length<6){
    alert("Password needs to be 6 character long");
  }
  if(confirm!=password){
    alert("Passwords Do Not match");
    return false;
  }
  if(password.length>6 && confirm==password ){
    alert("you are logged in as "+email);
  
  }

  let ob={
    email:email,
    password:password
  }
  arr.push(ob);
  console.log(arr);
  localStorage.setItem("login",JSON.stringify(arr));
}


function validate_my_Form(){

    var login = JSON.parse(localStorage.getItem("login"))||[];

    var userName = document.myform.email.value;
    var userPw = document.myform.password.value;

    let bool=0;

    if(userName=== "admin" && userPw === "admin"){
      alert('You are logged in as admin');
      window.open("admin.html");
      return true;
    }
 
    for(let i=0;i<login.length;i++){
       if(login[i].email == userName && userPw == login[i].password){
        console.log("xwqjkn");  
          alert('You are logged in as '+login[i].email);
          bool=1;
          window.open("index.html");
          break;
      }
    }

     if(bool==0) {
      alert('Either Username or Password is incorrect');
      return false;
    }


}
