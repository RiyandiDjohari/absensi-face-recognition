import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Function to update the date and time every second
    const updateDateTime = () => {
      const now = new Date();
      const formattedDateTime = format(now, 'PPPP, ppp', { locale: id }); // 'PPP' is the format for date and time in Indonesian
      setCurrentDateTime(formattedDateTime);
    };

    // Call the function immediately and then set up a timer to call it every second
    updateDateTime();
    const timerId = setInterval(updateDateTime, 1000);

    // Clean up the timer when the component unmounts
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className='hidden text-sm font-medium sm:text-base xs:block'>
      {currentDateTime} {currentDateTime ? 'WITA' : ''} 
    </div>
  )
}

export default DateTime;