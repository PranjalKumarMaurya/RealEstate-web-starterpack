import React from "react";
import "./Contact.css";
import { Phone, ChatCircleDots, VideoCamera, EnvelopeSimple } from "@phosphor-icons/react";

export default function Contact() {
    return(
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contacts</span>
                    <span className="primaryText">Easy to Contact us</span>
                    <span className="secondaryText">We always ready to help by providing the best services for you. We believe a good place to live can make your life better.</span>

                    <div className="c-cards">
                        <div className="c-card">
                            <div className="upperLayer">
                               <Phone size={32} />
                               <div className="c-info">
                                  <span>Call</span>
                                  <span className="secondaryText">02112314514</span>
                               </div>
                            </div>
                            <button className="button">Call Now</button>
                        </div>
                        <div className="c-card">
                            <div className="upperLayer">
                               <ChatCircleDots size={32} />
                               <div className="c-info">
                                  <span>Call</span>
                                  <span className="secondaryText">02112314514</span>
                               </div>
                            </div>
                            <button className="button">Call Now</button>
                        </div>
                        <div className="c-card">
                            <div className="upperLayer">
                               <VideoCamera size={32} />
                               <div className="c-info">
                                  <span>Call</span>
                                  <span className="secondaryText">02112314514</span>
                               </div>
                            </div>
                            <button className="button">Call Now</button>
                        </div>
                        <div className="c-card">
                            <div className="upperLayer">
                               <EnvelopeSimple size={32} />
                               <div className="c-info">
                                  <span>Call</span>
                                  <span className="secondaryText">02112314514</span>
                               </div>
                            </div>
                            <button className="button">Call Now</button>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}