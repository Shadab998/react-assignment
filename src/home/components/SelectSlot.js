import React from 'react';

import Button from '../../shared/components/FormElements/Button';

import './SelectSlot.css';

const SelectSlot = props => {
  
  return (
    <React.Fragment>
      <h2>Select Slot</h2>
      <div className="scrolling-wrapper" style={{margin:"20px",overflow:"scroll"}}>
        {
          props.items.map((item,index) =>(
            (index === props.time_slot? item.available.map((time)=>(
              <Button inverse>
                {time.hour}{time.min===0 ?"":":"+time.min}{time.hour>12 ? "PM" : "AM"} - {time.hour+1}{time.min===0 ?"":":"+time.min}{time.hour>12 ? "PM" : "AM"}
              </Button>
            )) : null)
          ))
        }
        
      </div>
    </React.Fragment>
  )
};

export default SelectSlot;