import React from 'react';

const Home = () => {
    return (
        <div>

            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">

                    <label for="my-drawer-4" class="btn m-8  btn-dark text-white">Add Daily task +</label>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer-4" class="drawer-overlay"></label>

                    <div className='menu p-4 overflow-y-auto w-4/6 bg-base-100 text-base-content '>
                        <form className='mx-auto'>

                            <label class="block">
                                <input type="text" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-96 rounded-md sm:text-sm " placeholder="New Task" />



                            </label>
                            <label class="block">
                                <textarea className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500   w-96 rounded-md sm:text-sm' name="" id="" cols="30" rows="10" placeholder="Task details..."></textarea>
                            </label>
                            <label class="block" for="meeting-time">Set date & Time: 

                                <input type="datetime-local" name="meeting-time" />
                            </label>                       


                            <button className='btn ml-14'>seve</button>


                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;