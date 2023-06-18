import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useCallback, useReducer, useRef} from "react";
import {reduceItems} from "./Reducer";

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

    return (
        <div className="App">
            <Header/>
            <TodoEditor createItem={createItem}/>
            <TodoList items={items} updateItem={updateItem} deleteItem={deleteItem}/>
        </div>
    );
}

export default App;
