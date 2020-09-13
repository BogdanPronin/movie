import React, {useState,useEffect} from 'react';
import Banner from '../components/Banner'
import {fetchPopularMovies} from '../api/movies'
import {fetchPopularTvs} from '../api/tv'
import Slider from '../components/Slider'

const Main = () => {
    const [popular, setPopular] = useState([])
    const [popularTv, setPopularTv] = useState([])

    useEffect(() => {
        const getPopularMovies = async () => {
            const res = await fetchPopularMovies();
            if (res) setPopular(res.results);
        };

        getPopularMovies();
    }, []);

    useEffect(() => {
        const getPopularTv = async () => {
            const res = await fetchPopularTvs();
            if (res) setPopularTv(res.results);
        };

        getPopularTv();
    }, []);

    const bannerData = [...popularTv, ...popular]
    
    const randomData = bannerData[Math.floor(Math.random() * bannerData.length)]
    console.log(randomData)
    return (
        <div className="">
            <Banner data={randomData}/>
            <Slider title="Популярные фильмы" items={popular} /> 
            <Slider title="Популярные сериалы" items={popularTv}></Slider>
        </div>
    )
}
export default Main;