import React from 'react';

import Button from '../../shared/components/FormElements/Button';
import SelectSlot from './SelectSlot';

const SelectDate = props => {
  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  return (
    <React.Fragment>
      <h2>SelectDate Works!</h2>
      <div style={{margin:"20px"}}>
        {
          props.items.map((item) => (
            
            <Button inverse to={`/`}>
              <p>{weekday[new Date(item.date).getUTCDay()+1]}</p>
              <p className='date'>{new Date(item.date).getUTCDate()}</p>
              <p>{month[new Date(item.date).getUTCMonth()]}</p>
            </Button>
          ))
        }
      </div>
      <SelectSlot items={props.items}/>
    </React.Fragment>
  )};

export default SelectDate;