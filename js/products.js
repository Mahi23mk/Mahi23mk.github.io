let productsInCart = [
    {
      title:"Teddy Bear",
      price:6000,
      id:1,
      img:"https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      inCart:0
    },
    {
      title:"Toy Set",
      price:5000,
      id:2,
      img:"https://images.pexels.com/photos/191360/pexels-photo-191360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      inCart:0
    },
    {
      title:"Car Set",
      price:2000,
      id:3,
      img:"https://images.pexels.com/photos/42230/teddy-teddy-bear-association-ill-42230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      inCart:0
    },
    {
      title:"Barbie Set",
      price:5000,
      id:6,
      img:"https://i.ytimg.com/vi/yiMN1YHsLQo/maxresdefault.jpg",
      inCart:0
    },
    {
      title:"Bag",
      price:2000,
      id:4,
      img:"https://images.all-free-download.com/images/graphicthumb/food_picture_05_hd_picture_167519.jpg",
      inCart:0
    },
    {
      title:"Lake House",
      price:3000,
      id:5,
      img:"https://i.pinimg.com/564x/f3/c8/b5/f3c8b546cebad98dd8bfb7ecd755b763.jpg",
      inCart:0
    }
  ]
  var bool = localStorage.getItem("products")||[];
    if(bool.length<=0){
    localStorage.setItem("products",JSON.stringify(productsInCart));
  }