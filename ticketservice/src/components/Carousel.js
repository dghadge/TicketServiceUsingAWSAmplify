import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import image1 from '.././images/21Pilots.jpg';
import image2 from '.././images/edsheeran.jpg';
import image3 from '.././images/gaga.jpg';
import image4 from '.././images/Drake.jpg';
import image5 from '.././images/jt.jpeg';
import image6 from '.././images/Springstien.jpg';
const items = [
    {
        src: image1
    }, {
        src: image2
    }, {
        src: image3
    }, {
        src: image4
    }, {
        src: image5
    }, {
        src: image6
    }
];

const Carousel = () =>
    <div>
        <UncontrolledCarousel items={items} />;
        <div className="mywell" style={{ marginTop: '25px' }}>
            <div className="row">
                <div className="form-group col-sm-6">
                    <input type="email" className="form-control" placeholder="Enter email" required></input>
                </div>
                <div className="form-group col-sm-4">
                    <input type="numSeats" className="form-control" placeholder="Enter Number of Seats" required></input>
                </div>
                <div className="form-group col-sm-2">
                    <button type="submit" id="form-submit" class="btn btn-success btn-md pull-right ">Submit</button>
                </div>
            </div>
        </div>
    </div>

UncontrolledCarousel.defaultProps = {
    indicators: false,
    autoPlay: true
};
export default Carousel;