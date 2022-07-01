import React from 'react';

const AddTask = () => {
    const handelDailyTask = event =>{
        event.preventDefault();
       const title = event.target.task.value
       const details = event.target.details.value
       const time = event.target.time.value
       const data ={title,details,time}




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
        <div>
                    <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                {/* <div className="drawer-content ">

                    <label htmlFor="my-drawer-4" className="btn m-8  btn-dark text-white">Add Daily task +</label>
                </div> */}
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                    <div className='menu p-4 overflow-y-auto w-4/6 bg-base-100 text-base-content '>
                        <form onSubmit={handelDailyTask} className='mx-auto'>
                            <label className="block">
                                <input type="text" name="task" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm " placeholder="New Task" />
                            </label>
                            <label className="block">
                                <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm' name="details" cols="30" rows="10" placeholder="Task details..."></textarea>
                            </label>
                            <label className="block">Set date & Time: 
                                <input className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm "  type="datetime-local" name="time" />
                            </label>
                            <button className='btn  w-full mt-8'>seve</button>


                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AddTask;