import React from 'react'
import logo from "../assets/banking-khabar-logo.jpg"
import { FaList } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Footer() {
    return (
        <>
            <footer className='mt-3 top'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <img className='w-100 mt-' src={logo} alt="" />
                            <span className="mb-2 d-flex align-items-center gap-2"> <FaList /> सूचना विभाग दर्ता नं : २९१/०७३-७४66</span> <br />
                            <span ><FaPhone /> फोन नं : 9851215417</span> <br />
                            <span><FaPhone /> Office no: 01-5908911</span> <br />
                            <span><IoIosMail /> समाचार : bankingkhabar72@gmail.com</span> <br />
                        </div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4 text-endborder-bottom">
                            <h2 className='border-bottom'>Chief Editor</h2>
                            <h5>Madhav Nirdosh</h5> <br />
                            <h2 className='border-bottom'>Coordinator</h2>
                            <h5>Sandip B. K</h5>
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
