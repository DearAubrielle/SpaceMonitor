import { useTaskStore } from "./store";
import { useState } from "react";

const Tasks: React.FC = () => {
    const { tasks, addTask, toggleTask, deleteTask } = useTaskStore();
    const [title, setTitle] = useState("");

    return (
        <div className="container">
            <h1>Task List</h1>

            {/* Add Task */}
            <input
                type="text"
                placeholder="New Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={() => {
                if (title.trim()) addTask(title);
                setTitle("");
            }}>
                Add Task
            </button>

            {/* Task List */}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        <span onClick={() => toggleTask(task.id)}>
                            {task.title}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>❌</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tasks;
