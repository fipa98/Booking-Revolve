import React from "react";
import "./containerAddDate.css";
import ReactCalendar from 'react-calendar'

class containerAddDate extends React.Component {

    state = {
        date: new Date(),
    }

    
    onChange = date => this.setState({ date })

    formChanged(event) {
        alert(event.target.value);
    }
    calendarChanged(event) {
        alert(event.getDate().toString())
    }
    render() {
        return (
            <div className="containerAddDateRoot">
                <div className="containerAddDateContainer">
                    <h1 className="header">Velkommen til Revolve NTNUs Booking System!</h1>
                    <div className="horizontalDivider"></div>
                    <div className="options">
                        <p className="info">Du kan velge innlegg 1 m/ kriterie 1, eller inlegg 2 m/ kriterie 2. Lorem ipsum dolor sit amet...</p>
                        <form className="chooseType" onChange={this.formChanged}>
                            <div className="verticalDivider" />
                            <label>velg innleggstype 1
                                <input name="radioInput" type="radio" value="optionOne" />
                            </label>
                            <div className="verticalDivider" />
                            <label>valg innleggstype 2
                                <input name="radioInput" type="radio" value="optionTwo" />
                            </label>
                            <div className="verticalDivider" />
                        </form>
                    </div>
                    <ReactCalendar className="reactCalendar"
                        onChange={this.calendarChanged}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}
export default containerAddDate;