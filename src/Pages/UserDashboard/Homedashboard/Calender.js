import React from 'react'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

function Calender() {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    //   if (selected) {
    //     footer = <p>You picked {format(selected, 'PP')}.</p>;
    //   }
    return (
        <>
            
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
            {/*<div style={{color:'#08558b'}}>
    Today : {format(date, 'PP')}
        </div>*/}
        </>
    )
}

export default Calender