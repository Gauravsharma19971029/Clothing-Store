export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    //returning new array as changes in old array will not be rendered
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    //returning new array as changes in old array will not be rendered
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  else{
    return cartItems.map(
      (cartItem) => (
      cartItemToRemove.id === cartItem.id 
      ? {...cartItem,quantity:(cartItem.quantity-1)}
      : cartItem
    ))
  }

};
