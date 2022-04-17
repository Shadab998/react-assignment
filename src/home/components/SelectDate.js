import React, { useState, useEffect } from 'react';

import Button from '../../shared/components/FormElements/Button';
import SelectSlot from './SelectSlot';

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const SelectDate = props => {
  var content = null;
  var className = "";
  const displaySlotHandler = (event) => {
    //console.log(event.currentTarget.getAttribute('id'))
    setTime(parseInt(event.currentTarget.getAttribute('id')))
  }

  const [TIME, setTime] = useState(0);
  
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 50)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    
}
  })

  if(dimensions.width < 768){
    content = (
      <><Button inverse onClick={displaySlotHandler}>
        <p>date</p>
      </Button><Button inverse onClick={displaySlotHandler}>
          <p>date</p>
        </Button><Button inverse onClick={displaySlotHandler}>
          <p>date</p>
        </Button><Button inverse onClick={displaySlotHandler}>
          <p>date</p>
        </Button></>
    )
    className = "scrolling-wrapper"
  }
  else{
    content = (null)
    className = ""
  }

  

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

  

  return (
    <React.Fragment>
      <h2>Select Date</h2>

        <div className={className} style={{margin:"20px"}}>
          { 
            props.items.map((item,id) => (
              <Button id ={id} inverse onClick={displaySlotHandler}>
                <p>{weekday[new Date(item.date).getUTCDay()+1]}</p>
                <p className='date'>{new Date(item.date).getUTCDate()}</p>
                <p>{month[new Date(item.date).getUTCMonth()]}</p>
              </Button>
            ))
          }
          {content}
        </div>
  
      
      
      <SelectSlot items={props.items} time_slot={TIME}/>
    </React.Fragment>
  )};

export default SelectDate;