import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const Calendar = () => {
const [data , setDate] = useState(new Date());
let footer = <p>Please pick a day.</p>;
  if (data) {
    footer = <p>You picked {format(data, 'PP')}.</p>;
  }

    return (
        <div className="card w-96 mx-auto mt-14 bg-base-100 shadow-xl">
        <DayPicker 
        mode="single"
        selected={data}
          onSelect={setDate}
          footer={footer} />
        
      </div>

    );
};

export default Calendar;