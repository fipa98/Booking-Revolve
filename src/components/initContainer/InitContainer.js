import React from "react";
import "./InitContainer.css";
import Calendar from "../calendar/Calendar"

class InitContainer extends React.Component {
    render() {
        return (
            <div className="initContainerRoot">
                <div className="initContainerContainer">
                    <h1 className="header">Velkommen til Revolve NTNUs Booking System!</h1>
                    <div className="horizontalDivider"></div>
                    <div className="options">
                        <p className="info">Du kan velge innlegg 1 m/ kriterie 1, eller inlegg 2 m/ kriterie 2. Lorem ipsum dolor sit amet...</p>
                        <form className="chooseType">
                            <div className="verticalDivider" />
                            <label>velg innleggstype 1
                                <input type="radio" />
                            </label>
                            <div className="verticalDivider" />
                            <label>valg innleggstype 2
                                <input type="radio" />
                            </label>
                            <div className="verticalDivider" />
                        </form>
                    </div>
                    <Calendar />
                </div>
            </div>
        );
    }
}
export default InitContainer;