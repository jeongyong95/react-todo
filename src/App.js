import './App.css';
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
    return (
        <div className="App">
            <Header></Header>
            <TodoEditor></TodoEditor>
            <TodoList></TodoList>
        </div>
    );
}

export default App;
