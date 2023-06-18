import React from "react";
import "./Home.css";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from "framer-motion";

export default function Home() {
    return(
        <section className="home-wrapper">
            <div className="paddings innerWidth flexCenter home-container">
                <div className="flexColStart home-left">
                    <div className="home-title">
                        <div className="orange-circle"></div>
                        <motion.h1
                          initial={{y:"2rem", opacity: 0}}
                          animate={{y:0, opacity: 1}}
                          transition={{duration:2, type:"spring"}}
                        >
                            Discover <br /> most suitable <br /> property</motion.h1>
                    </div>
                    <div className="flexColStart home-des">
                        <span className="secondaryText">Find a variety of properties that suit you very easily</span>
                        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter home-searchBar">
                        <HiLocationMarker color="var(--blue)" size={25} />
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Projects</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1850} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={45} />
                                <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winning</span>
                        </div>
                    </div>
                </div>
                <div className="home-right flexCenter">
                    <motion.div 
                      initial={{x:"7rem", opacity: 0}}
                      animate={{x:0, opacity: 1}}
                      transition={{duration:2, type:"spring"}}
                    className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}