
import React from "react";
import Carousel from 'react-bootstrap/Carousel';


class Main extends React.Component{
    render(){
        return(
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://wallpapercave.com/wp/wp3414789.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://wallpaperaccess.com/full/88231.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://img1.wallspic.com/crops/6/2/3/0/4/140326/140326-tree-sky-sunset-atmosphere-nature-3840x2160.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            
            </div>
        )
    }
}

export default Main;
