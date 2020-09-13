import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../api/movies';
import Banner from '../components/Banner';
import Tabs from '../components/Tabs';
import About from '../components/About';
import {fetchCredits} from '../api/cast';
import Slider from '../components/Slider';
const tabs =[
    'О фильме','Трейлеры','Галерея'
];

const Movie = () =>{
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const {id: movieID} = useParams();
    const [activeTab, setActiveTab] = useState(tabs[0]);

    useEffect(() => {
        const getMovie = async () =>{
            const response = await fetchMovie(movieID);
            
            if (response) setMovie (response);
        };

        getMovie();
    },[movieID]);

    useEffect(() => {
        const getCast = async () =>{
            const response = await fetchCredits(movieID);
            
            if (response) setCast (response.cast);
        };

        getCast();
    },[movieID]);
    if(!movie) return null;
    console.log(cast)

    return <div className="movie">
        <Banner data={movie} />
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        <div className="movie__content">
            {
                activeTab === "О фильме" && (
                <>
                    <About data={movie} />
                    <Slider title="Актерский состав" items={cast} titleKey="name" imgKey="profile_path"/>
                </>
                )}
        </div>
    </div>
    
} 
export default Movie;