// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
//             if (existingItemIndex >= 0) {
//                 const updatedCart = state.map((item, index) =>
//                     index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
//                 );
//                 return updatedCart;
//             }
//             return [...state, { ...action.payload, quantity: 1 }];

//         case 'REMOVE_FROM_CART':
//             return state.filter(item => item.id !== action.payload);

//         case 'INCREASE_QUANTITY':
//             return state.map(item =>
//                 item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//             );

//         case 'DECREASE_QUANTITY':
//             return state.reduce((acc, item) => {
//                 if (item.id === action.payload) {
//                     const updatedItem = { ...item, quantity: item.quantity - 1 };
//                     if (updatedItem.quantity > 0) {
//                         acc.push(updatedItem);
//                     }
//                     // If quantity is 0, the item will not be added to the updated state
//                 } else {
//                     acc.push(item);
//                 }
//                 return acc;
//             }, []);

//         default:
//             return state;
//     }
// };
// export default cartReducer;

const cartReducer = (state, action) => {
    switch (action.type) {
        // case 'ADD_TO_CART': {
        //     const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
        //     if (existingItemIndex >= 0) {
        //         return state.map((item, index) =>
        //             index === existingItemIndex
        //                 ? { ...item, quantity: item.quantity + action.payload.quantity }
        //                 : item
        //         );
        //     }
        //     return [...state, { ...action.payload, quantity: action.payload.quantity }];
        // }

        case 'ADD_TO_CART': {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                // If the item is already in the cart, update its quantity
                const updatedItem = {
                    ...state[itemIndex],
                    quantity: action.payload.quantity // Set to the new quantity
                };
                return [
                    ...state.slice(0, itemIndex),
                    updatedItem,
                    ...state.slice(itemIndex + 1)
                ];
            } else {
                // If the item is not in the cart, add it
                return [...state, action.payload];
            }
        }

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);

        case 'INCREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case 'DECREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            ).filter(item => item.quantity > 0);

        default:
            return state;
    }
};

export default cartReducer;
