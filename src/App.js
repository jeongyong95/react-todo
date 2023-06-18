import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import React, {useCallback, useMemo, useReducer, useRef} from "react";
import {reduceItems} from "./Reducer";
import {TodoDispatchContext, TodoStateContext} from "./context/Context";

function App() {
    const [items, dispatch] = useReducer(reduceItems, [])

    const nextId = useRef(3)

    const createItem = useCallback((title) => {
        dispatch({
            type: 'CREATE',
            item: {
                id: nextId.current++,
                title: title,
                isDone: false,
                createdAt: new Date().getTime()
            }
        })
    }, [])

    const updateItem = useCallback((targetId) => {
        dispatch({
            type: 'UPDATE',
            targetId: targetId
        })
    }, [])

    const deleteItem = useCallback((targetId) => {
        dispatch({
            type: 'DELETE',
            targetId: targetId
        })
    }, [])

    const memorizedDispatches = useMemo(() => {
            return {createItem, updateItem, deleteItem}
        }, []
    )

    return (
        <div className="App">
            <Header/>
            <TodoStateContext.Provider value={items}>
                <TodoDispatchContext.Provider value={memorizedDispatches}>
                    <TodoEditor/>
                    <TodoList/>
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
