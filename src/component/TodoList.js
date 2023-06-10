import "./TodoList.css"
import TodoItem from "./TodoItem";
import {useState} from "react";

const TodoList = ({items, updateItem, deleteItem}) => {
    const [keyword, setKeyword] = useState('')

    const changeSearchKeyword = (event) => {
        setKeyword(event.target.value)
    }

    return (
        <div className={"TodoList"}>
            <h4>Todo List 🍀</h4>
            <input className={"SearchBar"} value={keyword} onChange={changeSearchKeyword} placeholder={"검색어를 입력하세요"}/>
            <div className={"ListWrapper"}>
                {items.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase()))
                    .map(item => <TodoItem key={item.id} {...item} updateItem={updateItem} deleteItem={deleteItem}/>)
                }
            </div>
        </div>
    )
}

export default TodoList