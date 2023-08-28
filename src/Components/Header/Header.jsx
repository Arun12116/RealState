import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <>
            <div className='h-wrapper'>

                <div className="h-container">

                    <img src="./logo.png" alt="logo" width={100} />
                    <div className="h-menu">
                        <a href="/">Residencies</a>
                        <a href="/">OurValue</a>
                        <a href="/">Get Started</a>
                        <button className='button'>
                        <a href="/">Contact</a>
                           

                        </button>


                    </div>

                </div>
            </div>
        </>

    )
}

export default Header