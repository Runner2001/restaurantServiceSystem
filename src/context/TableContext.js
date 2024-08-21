import React, { createContext, useReducer, useEffect } from 'react';
import tableReducer from '../reducers/tableReducer';
import useFetch from '../hooks/useFetch';

const TableContext = createContext();

export const TableProvider = ({ children }) => {
    const initialState = {
        tableNo: null,
        // orderList: [],
        currentTableData: null,
    };

    const [state, dispatch] = useReducer(tableReducer, initialState);

    const { data: tableData, loading, error } = useFetch('/tableData.json');

    useEffect(() => {
        if (tableData && state.tableNo !== null) {
            const filteredTableData = tableData.find(
                (table) => table.tableNo === parseInt(state.tableNo, 10)
            );

            dispatch({ type: 'SET_CURRENT_TABLE_DATA', payload: filteredTableData });
        }
    }, [tableData, state.tableNo]);

    const setTable = (tableNo) => {
        if (tableNo !== state.tableNo) {
            dispatch({ type: 'SET_TABLE', payload: tableNo });
        }
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
