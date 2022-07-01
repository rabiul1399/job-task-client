import React, { useEffect, useState } from 'react';

const CompliteTask = () => {
    const [completes,setComplite] = useState([]);
    useEffect(() => {
        fetch('https://arrogant-smarties-24731.herokuapp.com/complite', {
            method: 'GET',
            headers: {
                authorization: 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setComplite(data))
    }, []);
    

    return (
        <div>
            <div className=' bg-base-300  pt-2 '>
            <ul className="card  px-3 w-full  ">
               {
                 completes.map((complete, index) => <li key={complete._id} className='flex justify-between bg-base-200 p-1 my-1 shadow rounded '><span className='mr-8'>{index}</span><a>{complete.title} </a><input type="checkbox" checked="checked" className="checkbox ml-0" readOnly /> </li>)
               }

            </ul>         
        </div>

        </div>  
    );
};

export default CompliteTask;