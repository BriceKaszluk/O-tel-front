import React, { useEffect } from 'react';
import bulmaCalendar, { isRange } from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

import './styles.scss';

function Calendar({ className }) {
  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', isRange);

    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
      calendar.on('date:selected', (date) => {
        console.log(date);
      });
    });

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#calendar');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
        console.log(datepicker.data.value());
      });
    }
  }, []);

  return (
    <section className="calendar__section">
      <div className={className} className="calendar__section__div">
        <input id="calendar" type="date" />
      </div>
    </section>
  );
}

export default Calendar;

