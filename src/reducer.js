export const initialState = {
    basket : [],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {// action: add to basket
    switch (action.type) {
        // new case 
        // update when user logged in or out
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
    
        case 'ADD_TO_BASKET':
            // logic for adding item to basket
            return {
                ...state, // return how it looks
                basket: [...state.basket, action.item]  // change basket
            };
        // break;
        case 'REMOVE_FROM_BASKET':
            // logic for removing item from basket
            
            //cloned basket
            let newBasket = [...state.basket]; // copy
            // check to see if the product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            
            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket,
            };
        // break;
        default: // 위 두 케이스 아닐 경우
            return state;
    }
};

export default reducer;