import React from "react";
import {Link} from 'react-router-dom';

const Slider = ({ title, items, showMoreLink = '/', titleKey = 'title', imgKey = 'poster_path'}) => {
    return (
        <div className="slider">
            <div className="slider__title">
                <h2>{title}</h2>
                <Link to={showMoreLink}>Показать больше</Link>
            </div>
            <div className="slider__list">
                {items.map((item) => (
                    <div className="slider__item">
                        {item[imgKey] ?(
                            <img
                            src={process.env.REACT_APP_POSTER + item[imgKey]}
                            alt={item[titleKey]}
                        />
                        ) : (<img
                            src="/profile.png"
                            alt="not found"/>)
                        }
                        
                        <div className="slider__item-title">
                            {item[titleKey]|| item.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;