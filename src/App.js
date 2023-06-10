import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import {useRef, useState} from "react";

function App() {
    const [items, setItems] = useState([])

    const nextId = useRef(3)
    const createItem = (title) => {
        const item = {
            id: nextId.current++,
            title: title,
            isDone: false,
            createdAt: new Date().getTime()
        }
        setItems([item, ...items])
    }

    const updateItem = (targetId) => {
        setItems(
            items.map(
                it => {
                    if (it.id === targetId) {
                        return {
                            ...it,
                            isDone: !it.isDone
                        }
                    } else {
                        return it
                    }
                }
            )
        )
    }

    const deleteItem = (targetId) => {
        setItems(items.filter(item => item.id !== targetId))
    }

    return (
        <div className="App">
            <Header/>
            <TodoEditor createItem={createItem}/>
            <TodoList items={items} updateItem={updateItem} deleteItem={deleteItem}/>
        </div>
    );
}

export default App;
