const tableReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TABLE':
            return {
                ...state,
                tableNo: action.payload,
                orderList: [], // Reset order list when a new table is set
            };

        case 'ADD_ORDER_TO_TABLE':
            return {
                ...state,
                orderList: [...state.orderList, action.payload],
            };

        default:
            return state;
    }
};

export default tableReducer;
