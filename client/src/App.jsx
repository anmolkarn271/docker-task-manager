import { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    const fetchTasks = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            setTasks(data);
        } catch (error) {
            console.error("Failed to fetch tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    const addTask = async (event) => {
        event.preventDefault();

        if (!title.trim()) {
            return;
        }

        try {
            await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: title
                })
            });

            setTitle("");
            fetchTasks();
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    };

    const toggleTask = async (task) => {
        try {
            await fetch(`${API_URL}/${task._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    completed: !task.completed
                })
            });

            fetchTasks();
        } catch (error) {
            console.error("Failed to update task:", error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            fetchTasks();
        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    };

    return (
        <div>
            <h1>Docker Task Manager</h1>

            <form onSubmit={addTask}>
                <input
                    type="text"
                    placeholder="Enter your task"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <button type="submit">
                    Add Task
                </button>
            </form>

            <hr />

            <h2>Tasks</h2>

            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                tasks.map((task) => (
                    <div key={task._id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task)}
                        />

                        <span>
                            {task.title}
                        </span>

                        <button
                            onClick={() => deleteTask(task._id)}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;