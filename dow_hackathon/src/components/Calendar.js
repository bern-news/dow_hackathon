import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Calendar extends Component {
    render() {
        return (  
        <InfiniteCalendar
            width={400}
            height={300}
            selected={today}
            disabledDays={[0,6]}
            minDate={lastWeek}
            theme={{
                accentColor: '#233750',
                floatingNav: {
                  background: '#233750',
                  chevron: '#FFA726',
                  color: '#FFF',
                },
                headerColor: '#233750',
                selectionColor: '#233750',
                textColor: {
                  active: '#FFF',
                  default: '#333',
                },
                todayColor: '#FFA726',
                weekdayColor: '#233750',
              }}
            displayOptions={{
                showHeader: false,
                showOverlay: false,
                shouldHeaderAnimate: false,
                todayHelperRowOffset: 0
              }}
        />
        )
    }
}

export default Calendar;