let cartData = {
  cartItem: [],
  totalPrice: 0,
};
let itemsArray = [
  {
    id: 1,
    name: "Product One",
    price: 10,
  },
  {
    id: 2,
    name: "Product Two",
    price: 15,
  },
  {
    id: 3,
    name: "Product Three",
    price: 20,
  },
];

function addItemIntoCartHandler(productId) {
  cartData.cartItem.push(itemsArray[productId]);
}
function removeItemIntoCartHandler(productId) {
  cartData.cartItem = cartData.cartItem.filter((e) => e.id != productId);
}
