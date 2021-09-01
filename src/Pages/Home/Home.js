import React from 'react';

//components
import Navigation from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
//bootstrap components
import Container from 'react-bootstrap/Container';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Container>
                <h1>gal-anonim</h1>
            </Container>
            <Footer />
        </div>
    )
};


export default Home;