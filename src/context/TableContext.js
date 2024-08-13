import React, { createContext, useReducer } from 'react';
import tableReducer from '../reducers/tableReducer';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const initialState = {
        tableNo: null,
        orderList: [],  // This will store all the orders for the table
    };

    const [state, dispatch] = useReducer(tableReducer, initialState);

    const setTable = (tableNo) => {
        dispatch({ type: 'SET_TABLE', payload: tableNo });
    };

    const addOrderToTable = (order) => {
        dispatch({ type: 'ADD_ORDER_TO_TABLE', payload: order });
    };

    return (
        <TableContext.Provider value={{ table: state, setTable, addOrderToTable }}>
            {children}
        </TableContext.Provider>
    );
};

export default TableContext;
