import "./TodoList.css"
import TodoItem from "./TodoItem";
import {useMemo, useState} from "react";

const TodoList = ({items, updateItem, deleteItem}) => {
    const [keyword, setKeyword] = useState('')
    const changeSearchKeyword = (event) => {
        setKeyword(event.target.value)
    }

    const analyze = useMemo(() => {
        const totalCount = items.length;
        const doneCount = items.filter(it => it.isDone).length
        return {
            totalCount,
            doneCount,
            remainCount: totalCount - doneCount
        }
    }, [items])

    const {totalCount, doneCount, remainCount} = analyze;

    return (
        <div className={"TodoList"}>
            <h4>Todo List 🍀</h4>
            <div>
                <div>전체 : {totalCount}</div>
                <div>한 일 : {doneCount}</div>
                <div>할 일 : {remainCount}</div>
            </div>
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