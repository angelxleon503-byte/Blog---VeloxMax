import { Routes, Route, useLocation } from 'react-router';

import Header from './Components/Header.jsx';
import Ranking from './Components/Ranking.jsx';
import Footer from './Components/Footer.jsx';

import Inicio from './Pages/Inicio.jsx';
import Tienda from './Pages/Tienda.jsx';
import Tecnologia from './Pages/Tecnologia.jsx';
import Historia from './Pages/Historia.jsx';
import Datos from './Pages/Datos.jsx';

import { useEffect } from 'react';
import axios from 'axios';


function ScrollToTop() {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
}


function App() {

    const getusers = async () => {
        const response = axios.get("https://jsonplaceholder.typicode.com/users");
        setData(response.data);
        console.log(response);
    }

    useEffect(() => {
        getusers();
    }, []);


    return (

        <>
            <Header />

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/ranking" element={<Ranking />} />
                <Route path="/tienda" element={<Tienda />} />
                <Route path="/tecnologia" element={<Tecnologia />} />
                <Route path="/historia" element={<Historia />} />
                <Route path="/datos" element={<Datos />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;