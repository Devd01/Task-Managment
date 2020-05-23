import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

// import './main.scss' // webpack must be configured to do this

export default class Calender extends React.Component {

  render() {
    return (
      <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]} />
    )
  }

}
