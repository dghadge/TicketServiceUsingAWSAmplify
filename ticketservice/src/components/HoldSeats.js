import React, { Component } from 'react';
import classNames from 'classnames';
import '../App.css'

class HoldSeats extends Component {
    render() {
        const dg = classNames('customLabel', 'btnSuccess')
        return (
            <form className="formRow">
                <h1 className='customMargin'>Check Available Seats</h1>
                <div className='form-inline' >
                    <div className='form-group col-sm-6'>
                        <input type="email" className='customLabel' id="email" placeholder="Enter email" name="email"></input>
                    </div>
                    <div className='form-group col-sm-4'>
                        <input type="email" className='customLabel' id="numSeats" placeholder="Enter Number of Seats" name="numSeats"></input>
                    </div>
                    <div className='form-group col-sm-2'>
                        <button type="submit" className='customLabel' style={{backgroundColor: "#3CB371"}} >Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default HoldSeats;