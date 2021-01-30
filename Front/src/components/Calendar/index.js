/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import 'bulma-calendar/dist/css/bulma-calendar.min.css';

import './styles.scss';

const invalidDates = [
  new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
  new Date(new Date().getTime() + 192 * 60 * 60 * 1000),
];

function Calendar({ className }) {
  useEffect(() => {
    const options = {
      type: 'date',
      startDate: '',
      endDate: '',
      showHeader: false,
      labelFrom: 'Check-in',
      labelTo: 'Check-out',
      dateFormat: 'DD-MM-YYYY',
      displayMode: 'dialog',
      lang: 'fr',
      disabledDates: invalidDates,
    };

    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', options);

    // Loop on each calendar initialized
    calendars.forEach((calendar) => {
      // Add listener to date:selected event
      calendar.on('date:selected', (Checkin) => {
        console.log(Checkin);
      });
      calendar.on('date:selected', (Checkout) => {
        console.log(Checkout);
      });
    });

    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#bulma-datepicker');
    if (element) {
      // bulmaCalendar instance is available as element.bulmaCalendar
      element.bulmaCalendar.on('select', (datepicker) => {
        console.log(datepicker.data.value());
      });
    }
  }, []);

  return (
      <section className="calendar__section field">
          <div className={className} className="calendar__section__div control">
              <input id="bulma-datepicker" type="date" data-is-range="true" />
          </div>
      </section>
  );
}

export default Calendar;

// Exemple for label
// bulmaCalendar.attach('#bulma-datepicker', {
//   labelFrom: 'Check-in',
//   labelTo: 'Check-out',
//     lang: 'fr'
// });
