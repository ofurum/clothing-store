import { createSelector } from "reselect";

const cartItem = state => state.cart

export const selectedCartItem = createSelector(
    [cartItem],
    cart => cart.cartItems
);

export const itemsCounted = createSelector(
    [selectedCartItem],
    cartItems => cartItems.reduce((accumulatedquantity, cartItemQuantity)=> (
        accumulatedquantity + cartItemQuantity.quantity
    ), 0)
);

export const cartHidden = createSelector(
    cartItem,
    cart => cart.hidden
);