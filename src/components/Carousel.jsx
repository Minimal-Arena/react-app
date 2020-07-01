import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Carousel = props => {
    const {data} = props;
    const [carousel, setCarousel] = useState("");
    const [slider, setSlider] = useState("");
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setCarousel(document.querySelector('.carousel'));
        setSlider(document.querySelector('.slider'));
        setWidth(props.width);
    }, [data])
    let direction;

    const Section = styled.div`
        flex-basis: ${props => props.width}%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px; 
    `

    return (
        <div className="carousel">
            <div className="slider"
                onTransitionEnd={() => {
                    if (direction === "backward") {
                        slider.prepend(slider.lastElementChild);
                    } else {
                        slider.appendChild(slider.firstElementChild);
                    }

                    slider.style.transition = 'none';
                    slider.style.transform = 'translate(0)';
                    setTimeout(() => {
                        slider.style.transition = 'all 0.5s';
                    })
                }}
            >
                {data.data.map(single => {
                    console.log(data.data.length)
                    return (
                        <Section width={width} className="section">
                            <h3>{single.character}</h3>
                            <img src={single.image} alt="" />
                        </Section>
                    )
                })}
            </div>
            <div className="controls">
                <button className="next"
                    onClick={() => {
                        direction = "forward";
                        carousel.style.justifyContent = 'flex-start';
                        slider.style.transform = `translate(-${width}%)`;
                    }}
                >&raquo;</button>
                <button className="prev"
                    onClick={() => {
                        if (direction === "forward") {
                            direction = "backward";
                            slider.appendChild(slider.firstElementChild);
                        }
                        carousel.style.justifyContent = 'flex-end';
                        slider.style.transform = `translate(${width}%)`;

                    }}
                >&laquo;</button>
                <h2>SELECT SKIN</h2>
            </div>
        </div>
    )
}

export default Carousel;