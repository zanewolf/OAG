import React from 'react'
import styled from "styled-components";
import Layout from "../components/Layout";
import ocean from '../images/ocean3.jpg'
import {Button} from "react-bootstrap";
import '../styles/contactform.module.css'

export default function Contactus() {
    return (
        <Layout>
            <ContactUsForm className={'get-in-touch'} image={ocean}>
                <ContactSection className="contact-wrap">
                    <ContactHeader>
                            what's on your mind?
                    </ContactHeader>
                    <ContactForm>
                            <InputBox>
                                <input type="text" required/>
                                <label>Name</label>
                            </InputBox>
                            <InputBox>
                                <input type="text" required/>
                                <label>Email</label>
                            </InputBox>
                            <InputBox>
                                <textarea required></textarea>
                                <label>Message</label>
                            </InputBox>

                            <div className="HEYA" id="submit" type="submit" value="SEND" style={{display: "flex",justifyContent:"center"}}>
                                <SubmitButton  type='submit' size='lg' variant="secondary">Submit</SubmitButton>
                            </div>

                        {/*<form id="contact-form" className="form-vertical" role="form" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">*/}
                        {/*    <input className='form-control-input form-control' type="hidden" name="form-name" value="contact"/>*/}

                        {/*    <InputBox className="form-group">*/}
                        {/*            <ContactInput type="text" className="form-control" id="name" placeholder="NAME" name="name"*/}
                        {/*                   defaultValue="" required/>*/}
                        {/*    </InputBox>*/}

                        {/*    <InputBox className="form-group">*/}
                        {/*            <ContactInput type="email" className="form-control-input form-control-cf" id="email" placeholder="EMAIL"*/}
                        {/*                   name="email" defaultValue="" required/>*/}
                        {/*    </InputBox>*/}

                        {/*    <ContactText className="form-control-textarea form-control" rows="10"*/}
                        {/*              placeholder="MESSAGE"*/}
                        {/*              name="message"*/}
                        {/*              required></ContactText>*/}

                        {/*    <div className="HEYA" id="submit" type="submit" value="SEND" style={{display: "flex",justifyContent:"center"}}>*/}
                        {/*        <Button style={{borderRadius: "10px",border: "none",width: '15vw', height: '5vh',fontSize:"1.5em", backgroundColor:"darkgray", color:"white"}} type='submit' size='lg' variant="secondary">Send Message</Button>*/}
                        {/*    </div>*/}

                        {/*</form>*/}
                    </ContactForm>
                </ContactSection>
            </ContactUsForm>
        </Layout>
    )
}

const ContactUsForm = styled.div`
  background: ${({image})=>(`url(${image}) center center/cover no-repeat`)};
  position: absolute;
  width: 100%;
  height: 96vh;
  ////min-height: 98vh;
  //height: auto;
  display: flex;
  justify-content: center;
  align-content: center;



  //justify-content: right;
  //width:40vw;
  //margin-left: auto;
  //margin-right: 10vw;
  
`

const ContactSection = styled.div`
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  width: 50vw;
  height: 80vh;
  justify-content: center;
  align-content: center;
  margin: auto;
  color: white;
  font-weight: 500;

  @media only screen and (max-width: 955px) {
    height: 80%;
    width: 95%;
  }

  //@media only screen and (max-width: 620px) {
  //  height: 80%;
  //  width: 95%;
  //}
  
`

const ContactHeader = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: auto;
  padding: 2vw;
`

const ContactForm = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: flex-start;
  margin: auto;

  @media only screen and (max-width: 650px) {
    width: 80%;
  }
  
`

const InputBox = styled.div`
  width: 100%;
  max-width: 100%;
  float: left;
  margin: 1rem 0;
  position: relative;
  border-radius: 4px;

  :focus {
    border: 2pt white;
  }

  label {
    color: #404040;
    padding: 1.3rem 30px 1rem 30px;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
  }

  input,
  textarea {
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #ffffff;
    color: #000000;
    border-radius: 4px;
  }

  input:focus,
  textarea:focus {
    outline: 0;
  }

  input:focus ~ span,
  textarea:focus ~ span {
    width: 100%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
  }

  textarea {
    width: 100%;
    min-height: 15em;
  }

  input[type=checkbox] + label {
    color: #ccc;
    font-style: italic;
  }

  input[type=checkbox]:checked + label {
    color: #f00;
    font-style: normal;
  }

  input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;

    @media only screen and (max-width: 768px) {
      top: 0pt;
    }
  }

  @media only screen and (max-width: 768px) {    
    input {
      padding: 10pt;
      min-height: 5em;
    }
    
    label {
      top: 10pt;
      left: 10pt;
      padding: 0;
    }
    textarea {
      min-height: 10em;
    }
    
  }

  @media only screen and (max-width: 950px) {
    width: 95%;
  }
`

const SubmitButton = styled.button`
  border-radius: 10px;
  border: none;
  width: 15vw;
  height: 5vh;
  font-size: 1.5em;
  background-color: rgba(34, 82, 255, 0.67);
  color: white;

  @media only screen and (max-width: 955px) {
    width: auto;
    min-width: 40vw;
  }

`