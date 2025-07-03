import React from 'react';
//import './style.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Footer from './components/footer';

export default function App() {
 return (
 <div>
    <Navbar />
 <Header />
 <h1 style={{ backgroundColor: 'rgb(255, 255, 255)', color: 'black', padding: '1rem' }}>
   Hello World
   </h1>
 <p>Let us learn ReactJS</p>
 <Footer />
 </div>
 );
}