import React from 'react';
import About from '../components/about';
import MainView from '../components/main_view';
// import Contact from '../components/contact';
import Mission from '../components/mission_vision'

const Home = () => {

    return(
        <>
            <MainView/>
            <About/>
            <Mission/>
        </>
    );
}

export default Home;
