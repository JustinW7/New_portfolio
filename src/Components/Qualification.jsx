import React, { useState } from "react";
import { Container, Row,Col } from "react-bootstrap";
import './qualification.css'

function Qualification() {
    const [toggleState,setToggleState] = useState(1)

    const toggleTab = (index)=>{
        setToggleState(index)
    }
  return (
    <section className="qualification-section my-5" id="qualification">
        <div className="d-flex justify-content-center flex-column align-items-center">
            <h2 className="section-title text-dark fw-bold">Qualification</h2>
            <p className="section-subtitle" style={{fontStyle:'italic',fontWeight:'bold'}}>My Personal Journey</p>
        </div>

        <div className="qualification-container container">
            <div className="qualification-tabs d-flex">

            <div className={toggleState ===2 ? "qualification-button qualification-active button-flex":
                 "qualification-button button-flex"} onClick={()=>toggleTab(2)}>
                    <i class="uil uil-bag ms-3 qualification-icon"></i> Experience
                </div>

                <div className={toggleState ===1 ? "qualification-button qualification-active button-flex":
                 "qualification-button button-flex"} onClick={()=>toggleTab(1)}>
                    <i class="uil uil-graduation-cap qualification-icon"></i> Education
                </div>
                

               
            </div>
            <div className="mt-5 qualification-section">
        <div className={toggleState ===1?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3"> 
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
                    <h3 className="qualification-title">Bachelor of Technology (EEE)</h3>
                    <span className="qualification-subtitle">College of Engineering,Chengannur</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2016 - 2022
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
                    <h3 className="qualification-title">Higher Secondary Education</h3>
                    <span className="qualification-subtitle">Mount Bethany EHSS,Mylapra (Computer Science)</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2014 - 2016
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
                    <h3 className="qualification-title">Secondary Education</h3>
                    <span className="qualification-subtitle">Mount Bethany Public School,Kumbazha</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>2013 - 2014
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

        </div>

        <div className={toggleState ===2?"qualification-content qualification-content-active":
    "qualification-content"}>
            <div className="qualification-data mt-3">
                <div data-aos="fade-right" data-aos-easing="linear" data-aos-duration="2000">
                    <h3 className="qualification-title">ME(A)RN Stack Developer Intern</h3>
                    <span className="qualification-subtitle">Luminar Technolab,Kochi</span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>Sep 2023 - Present
                    </div>
                </div>

                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
            </div>

            <div className="qualification-data mt-3">
                <div></div>
                <div>
                    <span className="qualification-rounder"></span>
                    <span className="qualification-line"></span>
                </div>
                
                <div data-aos="fade-left" data-aos-easing="linear" data-aos-duration="2000">
                    <h3 className="qualification-title">Enumerator</h3>
                    <span className="qualification-subtitle">Kerala State Economics and Statistics Department </span>
                    <div className="qualification-calendar">
                    <i class="uil uil-calendar-alt  me-2 calendar-icon"></i>June 2023 - January 2024
                    </div>
                </div>

            </div>

            <div className="qualification-data mt-3"></div>

        </div>
      </div>
        </div>

        
        
    </section>
  );
}

export default Qualification;
