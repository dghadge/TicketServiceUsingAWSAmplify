import React, { Component } from 'react';
import classNames from 'classnames';
import '../App.css'

class ConfirmSeats extends Component {
    render() {
        const dg = classNames('customLabel', 'btnSuccess')
        return (
            <form className="formRow">
                <h1 className='customMargin'>Tickets Confirmed. Enjoy the show.</h1>
                <div className='form-inline' >
                    <div className='form-group col-sm-2'>
                        <button type="submit" className='customLabel' style={{backgroundColor: "#3CB371"}} >Home</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default ConfirmSeats;