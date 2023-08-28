import React from 'react'
import "./Value.css"
import data from "../Utiles/Accordion"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading, AccordionItemButton,
    AccordionItemPanel,


} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from "react-icons/md"


const Value = () => {
    return (
        <>

            <section className="value-wrapper">
                <div className="value-wrapper-body">

                    <div className="left-side">
                        <div className="value-image">
                            <img src="./value.png" alt="logo" />
                        </div>

                    </div>
                    <div className="right-side">
                        <div className="right-items">

                            <span className='orange-text'>Our Value</span>
                            <br />
                            <span className='primary-text'>
                                <h2>
                                    Value we give to You
                                </h2>
                            </span>
                            <br />
                            <span className='secondry-text'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />

                                Placeat ratione iure vero temporibus fug debitis rerum minus corrupti mollitia, similique facilis odit! Minus, quidem! </span>

                            <Accordion className='accordion' allowMultipleExpanded={false}
                                preExpanded={[0]}
                                style={{width:"50vw"}}
                            >
                                {
                                    data.map((itms, i) => {
                                        return (
                                            <>
                                                <AccordionItem className='accordionItem' key={i}>
                                                    <AccordionItemHeading>
                                                        <AccordionItemButton>

                                                            <div style={{ display: "flex", justifyContent: "center",color:"blue" }}>{itms.icon}</div>
                                                            <span style={{ display: "flex", justifyContent: "center" }}>{itms.heading}</span>
                                                            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                                                {<MdOutlineArrowDropDown size={20} />}

                                                            </div>
                                                        </AccordionItemButton>
                                                    </AccordionItemHeading>

                                                    <AccordionItemPanel>
                                                        <p style={{ fontSize: "10px", width: "30rem" }}>{itms.deatiles}</p>
                                                    </AccordionItemPanel>
                                                </AccordionItem>

                                            </>

                                        )
                                    })
                                }

                            </Accordion>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default Value