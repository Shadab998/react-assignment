import React, { useState, useEffect } from 'react';
import Button from '../../shared/components/FormElements/Button';

import SelectDate from '../components/SelectDate';
//import SelectSlot from '../components/SelectSlot';

import './HomePage.css';

const HomePage = props => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://mentorplus.s3.ap-south-1.amazonaws.com/config/availability.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if(error) {
    return <div>Error: {error.message}</div>
  } else if(!isLoaded) {
    return <div>Loading...</div>
  } else {
  return (
      <React.Fragment>
      <SelectDate items={items}/>
      
      <div className='newline'></div>
      <Button  to={`/`}>Proceed to Pay</Button>
      </React.Fragment>
  );}
};

export default HomePage;