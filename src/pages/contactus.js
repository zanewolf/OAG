import React from 'react'
import styled from "styled-components";
import '../styles/contactform.module.css';
import Layout from "../components/Layout";
import ocean from '../images/ocean3.jpg'
import {Button} from "react-bootstrap";

export default function Contactus() {
    return (
        <Layout>
            <ContactUsForm className={'get-in-touch'} image={ocean}>

                <ContactSection className="contact-wrap">
                    <ContactHeader>
                            what's on your mind?
                    </ContactHeader>
                    <ContactForm>
                        <form id="contact-form" className="form-vertical" role="form" method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">>
                            <input type="hidden" name="form-name" value="contact"/>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" id="name" placeholder="NAME" name="name"
                                           defaultValue="" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-12">
                                    <input type="email" className="form-control" id="email" placeholder="EMAIL"
                                           name="email" defaultValue="" required/>
                                </div>
                            </div>

                            <textarea className="form-control" rows="10"
                                      placeholder="MESSAGE"
                                      name="message"
                                      required></textarea>

                            <div className="HEYA" id="submit" type="submit" value="SEND" style={{display: "flex",justifyContent:"center"}}>
                                <Button style={{borderRadius: "10px",border: "none",width: '15vw', height: '5vh',fontSize:"1.5em", backgroundColor:"darkgray", color:"white"}} type='submit' size='lg' variant="secondary">Send Message</Button>
                            </div>

                        </form>
                        {/*<form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">*/}
                        {/*    <input type="hidden" name="bot-field" />*/}
                        {/*    <div className="form-field col x-50">*/}
                        {/*        <input id="name" className="input-text js-input" type="text" required/>*/}
                        {/*            <label className="label" htmlFor="name">Name</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-field col x-50">*/}
                        {/*        <input id="email" className="input-text js-input" type="email" required />*/}
                        {/*            <label className="label" htmlFor="email">E-mail</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-sm-12">*/}
                        {/*        <div className="input-block">*/}
                        {/*            <input id="subject" className="input-text js-input" type="text" required />*/}
                        {/*            <label className="label" htmlFor="subject">Subject</label>*/}
                        {/*            /!*<label htmlFor="">Message Subject</label>*!/*/}
                        {/*            /!*<input type="text" className="form-control"/>*!/*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-field col x-100">*/}
                        {/*        <input id="message" className="input-text js-input" type="text" required />*/}
                        {/*            <label className="label" htmlFor="message">Message</label>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-field col x-100 align-center">*/}
                        {/*        <input className="submit-btn" type="submit" value="Submit"/>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                    </ContactForm>
                </ContactSection>
                {/*<form action="POST" name="contact" method="POST" data-netlify="true">*/}
                {/*    <div class={"fields"}>*/}
                {/*        <p>*/}
                {/*            <label> Name <input type="text" id={"name"} name="name" /></label>*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            <label> Email <input type="email" id={"email"} name="email" /></label>*/}
                {/*        </p>*/}
                {/*        <div class="form-group">*/}
                {/*            <label for="c-form-profession">*/}
                {/*                <span class="label-text">Subject </span>*/}
                {/*                <span class="contact-error"></span>*/}
                {/*            </label>*/}
                {/*            <select name="subject" class="c-form-subject form-control" id="c-form-subject">*/}
                {/*                <option value="Profile">Update/Remove Directory Profile</option>*/}
                {/*                <option value="Announcement">Newsletter Annoucement</option>*/}
                {/*                <option value="Other">Other</option>*/}
                {/*            </select>*/}
                {/*        </div>*/}
                {/*        <p>*/}
                {/*            <label>Message <textarea name="message"></textarea></label>*/}
                {/*        </p>*/}
                {/*        <p>*/}
                {/*            <button type="submit">Send</button>*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</form>*/}
            </ContactUsForm>
        </Layout>
    )
}

const ContactUsForm = styled.div`
  background: ${({image})=>(`url(${image}) center center/cover no-repeat`)};
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-content: center;



  //justify-content: right;
  //width:40vw;
  //margin-left: auto;
  //margin-right: 10vw;
  
`

const ContactSection = styled.div`
  //margin-top: var(--screen-nav-bar-height);
  background-color: rgba(0,0,0,0.3);
  width: 70vw;
  height: 70vh;
  border-radius: 20px;
  justify-content: center;
  align-content: center;
  margin: auto;
  color: white;
  font-weight: 500;
  
`

const ContactHeader = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: auto;
  padding: 2vw;
`

const ContactForm = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-content: flex-start;
  margin: auto;
`