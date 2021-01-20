import React from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';


export default () => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', isRange);

    // Loop on each calendar initialized
    calendars.forEach(calendar => {
      // Add listener to select event
      calendar.on('select', date => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    const element = document.querySelector('#my-element');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', datepicker => {
        console.log(datepicker.data.value());
      });
    }

    return(
        <div>
           
        </div>
    )
}
