import React, { useEffect, useRef, useState } from 'react'
import logo from "../assets/banking-khabar-logo.jpg"
import { Link, Route, Routes } from 'react-router-dom';
import Category from '../Pages/Category';
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import NepaliDate from 'nepali-date-converter';

function Header() {
    const aaja = new NepaliDate();
    const formattedDate = aaja.format('ddd, DD MMMM YYYY');
    
    const navRef = useRef(null);

    
    const closeMenu = () => {
        if (navRef.current) {
            navRef.current.classList.remove('show'); 
        }
    };
    let [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://bankingkhabar.com/wp-json/wp/v2/categories`).then(a => a.json()).then(b => setData(b))
    }, [])
    return (
        <>

            <section className='top py-2'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">{formattedDate}</div>
                    </div>
                </div>
            </section>
            <header className=' py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to="/">
                                <img src={logo} alt="" className='w-100' />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="navbar navbar-expand-lg p-0 navbar-dark" style={{ backgroundColor: '#2D3091' }}>
                <div className="container">
                    {/* Mobile Toggle Button */}
                    <button className="navbar-toggler my-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon" />
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navRef}>
                        <ul className="navbar-nav w-100 d-flex align-items-stretch fw-bold">

                            
                            <li className="nav-item border-end border-white-25 d-flex align-items-center justify-content-center px-3 nav-effect">
                                <Link className="nav-link text-white active fw-bold py-3" to="/" onClick={closeMenu}>मुख्य पेज</Link>
                            </li>

                           
                            {data.slice(0, 8).map((a) => (
                                <li className="nav-item border-end d-flex align-items-center justify-content-center nav-effect" key={a.id}>
                                    <Link className="nav-link text-white text-center py-3" to={`category/${a.id}`} style={{ fontSize: '14px' }} onClick={closeMenu}>
                                        {a.name}
                                    </Link>
                                </li>
                            ))}

                           
                            <li className="nav-item bg-danger d-flex align-items-center justify-content-center px-4 nav-effect ms-lg-auto">
                                <a className="nav-link text-white fw-bold py-3" href="#" onClick={closeMenu}>ENGLISH</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path='/category/:cid' element={<Category />} />
                <Route path='/' element={<Home />} />
                <Route path='/details/:id' element={<Details />} />

            </Routes>
        </>
    )
}

export default Header
