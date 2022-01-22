var temparr =  JSON.parse(localStorage.getItem("cart"))||[]

// console.log(temparr)

// this function is for adding item in cart
let handling = 150;
const displaycart = (temparr)=>{
  let subtotal = 0;
  
  let grandtotal = 0;

 temparr.map((elem,index)=>{
  let cartdiv = document.createElement("div");
  cartdiv.setAttribute("class","cart-items");

  let imagediv = document.createElement("div");
  let imag = document.createElement("img");
  imag.src = elem.image;
  imagediv.append(imag)

  let detailsdiv = document.createElement("div")
  let categ = document.createElement("p")
  categ.innerHTML = elem.category
  let remove = document.createElement("p")
  remove.innerHTML = "Remove"
  remove.setAttribute = ("class","remove-button")
  detailsdiv.append(categ,remove)

  remove.addEventListener("click", function(){
    removeitem(index)
  })
 

  let pricediv = document.createElement("div")
  let price = document.createElement("p")
  price.innerHTML = elem.price;
  pricediv.append(price)


  grandtotal+= elem.price+handling
  

  grand(price,grandtotal)

  cartdiv.append(imagediv,detailsdiv,pricediv)
  

  document.getElementById("cart-div").append(cartdiv)

 })

}
  const grand = (price,grandtotal) => {
  console.log("grand",grandtotal) 
  document.getElementById("subtotal").textContent = grandtotal-handling
  document.getElementById("grandtotal").textContent = grandtotal  
  }


displaycart (temparr)

// this function is for removing items from the cart
function removeitem(index){
 
  temparr.splice(index,1)
  
  localStorage.setItem("cart",JSON.stringify(temparr))
  displaycart (temparr)
  location.reload()
  // displaycart (temparr)
}

