import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
import moment from 'moment';

function App() {
  const [date, setDate] = useState(new Date());

  const handleChange = (date) => setDate(date);

  const m = moment(date, 'YYYY-MM-DD');
  console.log(m.format('LLLL'));

  return (
    <div className='App'>
      <h1>React Date Picker</h1>
      <DatePicker
        selected={date}
        onChange={handleChange}
        showTimeSelect
        dateFormat='MMMM d, yyyy h:mm aa'
      />
      <p>{m.format('LLLL')}</p>
    </div>
  );
}

export default App;
