import React, { useState, useRef } from 'react';
import Resume1Image from './Resume1.jpg';
import Resume2Image from './Resume2.jpg';
import './Home.css';

const Home = ({ onSelectResume }) => {
    const [zoomedPicture, setZoomedPicture] = useState(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    const handlePictureClick = (picture) => {
        setZoomedPicture(picture);
    };

    const closeZoomedPicture = () => {
        setZoomedPicture(null);
    };

    const toggleTooltip = (event, show) => {
        setShowTooltip(show);

        if (tooltipRef.current) {
            tooltipRef.current.style.left = `${event.currentTarget.offsetLeft}px`;
            tooltipRef.current.style.top = `${event.currentTarget.offsetTop + event.currentTarget.offsetHeight + 10}px`;
        }
    };

    return (
        <div className="home-page">
            
            <div className="pictures">
            <h1 className="brand-name"><br/>
                <i className="fas fa-fire ">Edysync-Resume-Builder</i>
            </h1>
                <div className="picture-item">
                    <img
                        src={Resume1Image}
                        alt="First Resume"
                        onClick={() => handlePictureClick(Resume1Image)}
                        onMouseEnter={(e) => toggleTooltip(e, true)}
                        onMouseLeave={() => toggleTooltip(null, false)}
                    />
                    <br/>
                    <button className="primary-btn" onClick={() => onSelectResume('resume1')}>
                        First Resume
                    </button>
                </div>
                <div className="picture-item">
                    <img
                        src={Resume2Image}
                        alt="Second Resume"
                        onClick={() => handlePictureClick(Resume2Image)}
                        onMouseEnter={(e) => toggleTooltip(e, true)}
                        onMouseLeave={() => toggleTooltip(null, false)}
                    />
                    <br/>
                    <button className="primary-btn" onClick={() => onSelectResume('resume2')}>
                        Second Resume
                    </button>
                </div>
                {showTooltip && (
                    <div className="tooltip" ref={tooltipRef}>
                        Click to zoom in
                    </div>
                )}
            </div>
            {zoomedPicture && (
                <div className="zoomed-picture" onClick={closeZoomedPicture}>
                    <span className="close-btn">&times;</span>
                    <img src={zoomedPicture} alt="Zoomed Picture" />
                </div>
            )}
        </div>
    );
};

export default Home;
