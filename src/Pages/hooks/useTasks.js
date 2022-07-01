import { useEffect, useState } from "react";

const useTasks = () => {
const [tasks, setTasks] = useState([]);
useEffect(() => {
    fetch('https://arrogant-smarties-24731.herokuapp.com/task ', {
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