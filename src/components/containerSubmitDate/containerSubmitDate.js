import React from "react";
import "./containerSubmitDate.css";
//import { Captcha, captchaSettings } from 'reactjs-captcha';

class containerSubmitDate extends React.Component {


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
            <div className="containerSubmitDateRoot">
                <div className="containerSubmitDateContainer">
                    <h1 className="header">Send til post.revolve</h1>
                    <div className="horizontalDivider"></div>
                    <form method="POST" className="submit">
                        <label>Navn - Person
                        </label>
                        <input type="text"></input>
                        <label>Navn - Bedrift
                        </label>
                        <input type="text"></input>
                        <label>Email - Bedrift
                        </label>
                        <input type="text"></input>
                        <label>Tlf. - Bedrift
                        </label>
                        <input type="text"></input>
                        <input type="submit" id="submitButton"></input>
                    </form>
                </div>
            </div>
        );
    }
}
export default containerSubmitDate;