import React from "react";
import "./Calendar.css";
import ReactCalendar from 'react-calendar'

class Calendar extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="calendarRoot">
                <div className="calendarContainer">
                    <ReactCalendar className="reactCalendarContainer"
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}
export default Calendar;