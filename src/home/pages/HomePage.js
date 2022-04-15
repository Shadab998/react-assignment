import React from 'react';
import Button from '../../shared/components/FormElements/Button';

import SelectDate from '../components/SelectDate';
import SelectSlot from '../components/SelectSlot';

const HomePage = props => {
  return (
      <React.Fragment>
      <SelectDate/>
      <SelectSlot/>
      <Button to={`/`}>Proceed to Pay</Button>
      </React.Fragment>
  );
};

export default HomePage;