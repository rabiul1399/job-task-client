import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Footer from '../Shared/Footer';
const Calendar = () => {
const [data , setDate] = useState(new Date());
let footer = <p>Please pick a day.</p>;
  if (data) {
    footer = <p>You picked {format(data, 'PP')}.</p>;
  }

    return (
        <div>
          <div className="card w-96 mb-8 mx-auto mt-14 bg-base-100 shadow-xl">
        <DayPicker 
        mode="single"
        selected={data}
          onSelect={setDate}
          footer={footer} />
        
       
      </div>
      <Footer></Footer>
        </div>

    );
};

export default Calendar;