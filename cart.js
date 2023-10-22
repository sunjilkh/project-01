const product = [
  {
    id: 1,
    title: "NIKE Sports X",
    price: 5200,
    image: "image/shoes.png",
  },
  {
    id: 2,
    title: "NIKE Air Max",
    price: 3220,
    image: "image/shoes1.png",
  },
  {
    id: 3,
    title: "NIKE Black Fit",
    price: 8520,
    image: "image/shoes2.png",
  },
  {
    id: 4,
    title: "NIKE Special",
    price: 4220,
    image: "image/shoes3.png",
  },
  {
    id: 5,
    title: "NIKE Fashion II",
    price: 5202,
    image: "image/shoes4.png",
  },
  {
    id: 6,
    title: "NIKE Lab",
    price: 3220,
    image: "image/shoes5.png",
  },
  {
    id: 7,
    title: "NIKE Free",
    price: 4120,
    image: "image/shoes6.png",
  },
  {
    id: 8,
    title: "NIKE Air Jordan",
    price: 6220,
    image: "image/shoes7.png",
  },
];

const categories = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class = 'Box'>
            <div class = 'img-box'>
                <img class = 'images' src=${image}></img>
            </div>
         <div class ='bottom'><p>${title}</p>
                    <h2>৳ ${price}</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `
        </div>
      </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}

function displaycart(a) {
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML="৳ "+0+"";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total=total+price;
        document.getElementById("total").innerHTML="৳ "+total+"";
        return (
          `<div class ='cart-item'>
          <div class='row-img'>
            <img class='rowing' src=${image}>
          </div>
          <p style='font-size:12px;'>${title}</p>
          <h2 style='font-size:16px;'>
          $ ${price}</h2>` +
          "<i class='fa-solid fa-trash'onclick='delElement(" +
          j++ +
          ")' ></i></div>" 
        );
      })
      .join("");
  }
}
function delElement(a){
  cart.splice(a,1);
  displaycart();
}

