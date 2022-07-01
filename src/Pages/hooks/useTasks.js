import { useEffect, useState } from "react";

const useTasks = () => {
const [tasks, setTasks] = useState([]);
useEffect(() => {
    fetch('http://localhost:5000/task ', {
        method: 'GET',
        headers: {
            authorization: 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => setTasks(data))
}, []);


return [tasks]
};

export default useTasks;