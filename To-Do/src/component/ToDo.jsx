import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function ToDo(){
    const [todo, addTask] = useState( () =>{
        const data = localStorage.getItem("task")
        return data ? JSON.parse(data) : []
    })
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(todo))

    }, [todo])

    let addNewTask = () =>{
        if(newTodo == "") return;
        addTask((prevTodos) => {
            return [ ...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        })
      
        setNewTodo("");
        
    }
    let updateTaskValue = (event) => {
        console.log(event.target.value);
        let newTask = event.target.value;

        setNewTodo(newTask)
        
    }
    let deleteTodo = (id) =>{
        console.log(id);
        // console.log(todo.id);
        addTask((prevTodos) => todo.filter((t) => t.id != id));
    }

    let markOne = (id) => {
        addTask((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, isDone: !t.isDone } : t
            )
        );
    };
    let markAll = () => {
        addTask((prev) => (prev.map( (t) => {
            return{
                ...t,
                task: t.task.toUpperCase(),
                isDone: !t.isDone
            };
        }))); 
        
    }

    return(
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center mb-4">To-Do List</h2>

            {/* Input Field */}
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Add a task..."
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={addNewTask}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Add
                </button>
            </div>

            {/* Task List */}
            <ul className="mt-8">
                {todo.map((t) => (
                    <li
                        key={t.id}
                        className="flex items-center justify-between bg-gray-200 p-3 rounded-md mb-6 shadow-xl"
                        
                    >
                        <input type="checkbox" className="w-5 h-8" 
                        checked = {t.isDone}
                        onClick={() => markOne(t.id)}
                        />
                        
                        
                        <span className={`flex-1 text-xl font-semibold  ${t.isDone ? "opacity-50 line-through" : ""}`}>{t.task}</span>
                        <div className="flex gap-6">
                            <button
                                onClick={() => markOne(t.id)}
                                className="text-green-600 hover:text-green-800  text-2xl"
                            >
                                {t.isDone ? "" : "✔"}
                            </button>
                            <button
                                onClick={() => deleteTodo(t.id)}
                                className="text-red-600 hover:text-red-800 text-xl"
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}