import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { set } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    // const [myTask, setMyTask] = useState({});
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [details, setDetail] = useState("");
    const [time, setTime] = useState("");


    // const { title, details, time } = myTask;



    useEffect(() => {
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'GET',
            headers: {
                authorization: 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setTitle(data.title)
                setDetail(data.details)
                setTime(data.time)
            }
            )

    }, []);


    const updateTask = () =>{
     
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'PUT',
            headers:{
              'Content-Type':'application/json'
            },
    body:JSON.stringify({title,details,time})
          })
          .then(res => res.json())
          .then(result=>{
            console.log(result)
          })
         
          }

  

    return (
        <div className=' bg-base-300 m-8 rounded shadow '>
            <div className='  p-8'>
                <h2>Task-Title: {title} </h2>
                <h3>Task-Details: {details}  </h3>
                <p>Task-Data: {time}</p>


            </div>
            <div className='text-center pb-3'>

                <label htmlFor="my-modal-6" className="btn  btn-sm  mb-2   btn-dark text-white">Edit <FontAwesomeIcon className='text-xl ml-2 text-red-400' icon={faEdit}></FontAwesomeIcon></label>



                <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                <div className="modal  modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-200">
                        <h2>Edit your task</h2>
                        <form onSubmit={updateTask} className='p-2'>
                            <input className='p-1 px-2 w-full rounded shadow' type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} />

                            <br /><br />

                            <textarea className='p-1 px-2 w-full rounded shadow' value={details} onChange={(e) => { setDetail(e.target.value) }} />
                            <br />
                            <br />
                            <input className=" px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-full rounded-md sm:text-sm " type="datetime-local"
                                value={time} name="time" onChange={(e) => { setTime(e.target.value) }} />


                                <button className='btn btn-sm mt-4'>Update</button>                              

                        </form>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn btn-sm">cencel</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;