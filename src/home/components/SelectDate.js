import React, { useState } from 'react';

import Button from '../../shared/components/FormElements/Button';
import SelectSlot from './SelectSlot';

const SelectDate = props => {

  const [TIME, setTime] = useState(0);

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  const displaySlotHandler = (event) => {
    //console.log(event.currentTarget.getAttribute('id'))
    setTime(parseInt(event.currentTarget.getAttribute('id')))
  }

  return (
    <React.Fragment>
      <h2>Select Date</h2>
      <div style={{margin:"20px"}}>
        { 
          props.items.map((item,id) => (
            <Button id ={id} inverse onClick={displaySlotHandler}>
              <p>{weekday[new Date(item.date).getUTCDay()+1]}</p>
              <p className='date'>{new Date(item.date).getUTCDate()}</p>
              <p>{month[new Date(item.date).getUTCMonth()]}</p>
            </Button>
          ))
        }
      </div>
      <SelectSlot items={props.items} time_slot={TIME}/>
    </React.Fragment>
  )};

export default SelectDate;