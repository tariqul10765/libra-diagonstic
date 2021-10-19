import React, { useEffect, useState } from 'react';
import './Carousel.css';

export default function Carousel() {
    const [carousel, setCarousel] = useState([]);

    useEffect(() => {
        fetch('fakeData/carousel.json')
            .then(res => res.json())
            .then(json => setCarousel(json))
    }, []);
    return (
        <div>
            <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target="#carouselBasicExample"
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner carousel__container">
                    {
                        carousel.map((caro, index) => {
                            return (
                                <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                    <img
                                        src={caro.imgUrl}
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div> */}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}