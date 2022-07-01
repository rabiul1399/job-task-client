import React from 'react';
import useTasks from '../hooks/useTasks';
import { Link } from "react-router-dom";
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ToDo = ({ task, index }) => {
    const { title, _id } = task;
    let id = _id;
    const handelchecked = (event) => {
        event.preventDefault();
        fetch('https://arrogant-smarties-24731.herokuapp.com/complite', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if (data.insertedId == id) {
                    fetch(`https://arrogant-smarties-24731.herokuapp.com/task/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)

                        })
                }
            })







    }
    return (
        <div className=' bg-base-300 pt-2 '>
            <ul className="card  px-3 w-full  ">
                <li className='flex justify-between bg-base-200 p-1 my-1 shadow rounded '><span className='mr-8'>{index}</span><Link to={`/detail/${_id}`}>{title} </Link> <input onClick={handelchecked} type="checkbox" className="checkbox ml-0" readOnly /> </li>

            </ul>

            <div className='flex justify-center'>
                <label htmlFor="my-modal-5" className="btn fixed bottom-0 mb-2   btn-dark text-white">Add task <FontAwesomeIcon className='text-xl ml-2 text-red-400' icon={faCirclePlus}></FontAwesomeIcon> </label>
            </div>
        </div>
    );
};

export default ToDo;