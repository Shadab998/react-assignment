import React from 'react';

import Button from '../../shared/components/FormElements/Button';



const SelectSlot = props => {
  console.log(props.items[props.time_slot])
  
  return (
    <React.Fragment>
      <h2>SelectSlot Works!</h2>
      <div style={{margin:"20px"}}>
        {
          props.items.map((item,index) =>(
            (index === props.time_slot? item.available.map((time)=>(
              <Button inverse to={`/`}>
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