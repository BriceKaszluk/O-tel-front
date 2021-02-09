import React from 'react';
import DatePicker from 'react-datepicker';

export default ({ name, value, onChange }) => {
    return (
        <DatePicker
            selected={(value && new Date(value)) || null}
            onChange={(val) => {
                onChange(name, val)
            }}
            minDate={new Date()}
            dateFormat='dd/MM/yyyy'
        />
    )
}


