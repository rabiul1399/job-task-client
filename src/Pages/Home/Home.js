import React from 'react';
import useTasks from '../hooks/useTasks';
import ToDo from './ToDo';

const Home = () => {
    const [tasks] = useTasks({})

    const handelDailyTask = (event,keypress) => {
        event.preventDefault();
        const title = event.target.task.value
        const details = event.target.details.value
        const time = event.target.time.value
        const data = { title, details, time }
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("myBtn").click();
          }

        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })

    }
    return (
        <div className='bg-base-200 '>
           <div>
           {
                tasks.map((task, index) => <ToDo task={task} index={index} key={task._id}></ToDo>)
            }
           </div>

           <div>

           <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box w-10/12 max-w-5xl">
                    <div className='menu p-4 overflow-y-auto w-5/6 bg-base-100 text-base-content '>
                        <form onSubmit={handelDailyTask} className='mx-auto'>
                            <label className="block">
                                <input  type="text" name="task" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm " placeholder="New Task" />
                            </label>
                            <label className="block">
                                <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm' name="details" cols="30" rows="10" placeholder="Task details..."></textarea>
                            </label>
                            <label className="block">Set date & Time:
                                <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm " type="datetime-local" name="time" />
                            </label>
                            <button className='btn  w-full mt-8'>save</button>

                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-sm">cancel</label>
                    </div>
                </div>
           </div>
            </div>


        </div>
    );
};

export default Home;