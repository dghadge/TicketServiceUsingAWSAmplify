import React, { Component } from 'react';
import classNames from 'classnames';
import '../App.css'

class ReserveSeats extends Component {
    render() {
        const dg = classNames('customLabel', 'btnSuccess')
        return (
            <form className="formRow">
                <h1 className='customMargin'>Your Seat Information</h1>
                <div className='form-inline' >
                    <div className='form-group col-sm-6'>
                        <input type="text" className='customLabel' id="seatText" name="seatText"></input>
                    </div>
                    <div className='form-group col-sm-4'>
                        <input type="text" className='customLabel' id="seatHoldIdText" name="seatHoldIdText"></input>
                    </div>
                    <div className='form-group col-sm-2'>
                        <button type="submit" className='customLabel' style={{backgroundColor: "#3CB371"}} >Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default ReserveSeats;