import React from 'react'
import "./Hero.css"
import { HiLocationMarker } from "react-icons/hi"
const Hero = () => {
    return (
        <>
            <section className="hero-wrapper">

                <div className="hero-container">

                    <div className="hero-left">
                        <div className="hero-title">
                            <div className='orange-circle'></div>
                            <h1>Discover <br /> Most Sutible <br /> Property</h1>
                        </div>
                        <div className="decription">
                            <span>Find a varity of Property that you suitable</span>
                            <span>Forget all dificulties in Finding residence for you </span>

                        </div>

                        <div className="serach-bar">

                            <HiLocationMarker color='blue' size={25} />
                            <input type="text" className='inpute' />
                            <button className='button'>Search</button>
                        </div>
                        <div className="first-start">
                            <div className="first-Start-Container">
                                <div>
                                    <span>6000 <span className='round'>+</span></span>
                                    <p>happy Customer</p>

                                </div>
                                <div>
                                    <span>9000  <span className='round'>+</span></span>
                                    <p>Premium Customer</p>

                                </div> <div>

                                    <span>8000 <span className='round'>+</span></span>
                                    <p>Award Wining</p>
                                    

                                </div>


                            </div>
                          

                        </div>

                        <div>

                        </div>

                    </div>
                    <div className="hero-right">
                        <div className="hero-image-container">
                            <img src="./hero-image.png" alt="logo" />

                        </div>

                    </div>

                </div>


            </section>




        </>
    )
}

export default Hero