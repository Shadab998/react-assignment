import React from 'react';

import Button from '../../shared/components/FormElements/Button';



const SelectSlot = props => {
  console.log("Inside Select Slot",props.items)
  
  return (
    <React.Fragment>
      <h2>SelectDate Works!</h2>
      <div style={{margin:"20px"}}>
        {
          props.items.map((item) => (
            item.available.map((time)=>(
              console.log("Hours:",time.hour,"Mins: ",time.min)
            ))        
          ))
        }
        <Button inverse to={`/`}>
          TIME
        </Button>
      </div>
    </React.Fragment>
  )
};

export default SelectSlot;