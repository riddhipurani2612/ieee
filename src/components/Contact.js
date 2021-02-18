import React from 'react';
import {Container,Table} from 'react-bootstrap';
import styled from "styled-components";
const Styles = styled.div`
  .main-bg {
    background: #2e151b;
  }
  .text{
    color: white;
  }
`;
const ContactUs =() =>{
    return(
        <Styles>
            <div className="main-bg text">
                <div className="display-3 text-center"> Contact Us
                </div>
                <div className="display-5 text-justify my-3 mx-5">
                  
Dr. Shiv Mohan<br></br>

Visiting Scientist<br></br>

PLANEX, Physical Research Laboratory<br></br>

Thaltej Campus, Ahmedabad – 380059 (Gujarat), India<br></br>

Former Scientist, Space Applications Centre (ISRO), Ahmedabad<br></br>

Ph: +91-79-26850454;<br></br>

Mobile: 0-9712128524<br></br>

Email: shivmohan.isro@gmail.com<br></br><br></br><br></br><br></br><br></br>

Dr. Suchit Purohit<br></br>
Department Of Computer Science<br></br>
Gujarat University,Ahmedabad<br></br>
E-Mail: suchit.s.purohit@ieee.org<br></br>
                </div>
            </div>
        </Styles>
    )
}

export default ContactUs;