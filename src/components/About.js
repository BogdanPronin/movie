import React from 'react';

const About = ({ data }) => (
    data ? <div className="about">
        <div className="about__img">
            <img
                src={process.env.REACT_APP_POSTER + data.poster_path}
                alt={data.title}
            />
        </div>
        <div className="about__info">
            <h2>{data.title}</h2>
            <p>{data.overview}</p>
            <ul>
                <li>
                    <div className="about-list__name">Релиз</div>
                    <div className="about-list__value">{data.release_date}</div>
                </li>
                <li>
                    <div className="about-list__name">Время</div>
                    <div className="about-list__value">{Math.floor(data.runtime / 60)}h {data.runtime % 60}m</div>
                </li>
                <li>
                    <div className="about-list__name">Жанры</div>
                    <div className="about-list__value">
                        {data.genres.map((genre,key) => (
                            <>
                                <span>{genre.name}</span>{" "} 
                                {key !== data.genres.length - 1 ? "," :null}
                            </>
                        ))}
                    </div>
                </li>

            </ul>
        </div>
    </div> : null
)

export default About;