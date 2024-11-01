import React from 'react'
import './Footer.css'
import logo from '../assets/logo.jpg'

const Footer = () => {
    return (
        <>

            <div className="divider"></div>
            <div className='Footer'>
                <div className="logoContainer">
                    <img src={logo} />
                </div>
                <div className="footerContainer">
                    <div className="left">
                        <h1>SIGN UP FOR NEWS</h1>
                        <h4>Receive updates on new arrivals, special offers and other discounts.</h4>
                        <div className="inputContainer">
                            <input type="email" name="email" id="footerEmail" placeholder='Email Address' />
                            <button>SIGN UP</button>
                        </div>
                        <h4>By signing up via text, you agree to receive recurring automated promotional and personalized marketing text messages (e.g. cart reminders) from Anastasia Beverly Hills at the cell number used when signing up. Consent is not a condition of any purchase. Reply HELP for help and STOP to cancel. Msg frequency varies. Msg & data rates may apply. View Terms & Privacy.</h4>
                    </div>
                    <div className="right">
                        <div className="socialMedia">
                            <li>PINTEREST</li>
                            <li>INSTAGRAM</li>
                            <li>X</li>
                            <li>FACEBOOK</li>
                            <li>YOUTUBE</li>
                        </div>
                        <div className="About">
                            <li>ABOUT US</li>
                            <li>ABH INNER CIRCLE</li>
                            <li>FIND A STORE</li>
                            <li>SALON</li>
                            <li>GIFT CARDS</li>
                            <li>CHECK YOUR BALANCE</li>
                            <li>SUBSCRIPTIONS</li>
                            <li>STUDENT & GRADUATE DISCOUNT</li>
                            <li>CAREERS</li>
                            <li>CUSTOMER SERVICE</li>
                            <li>SHIPPING AND RETURNS</li>
                            <li>TRACK YOUR ORDERS</li>
                            <li>MAKE A RETURN</li>
                        </div>
                        <div className="TC">
                            <li>TERMS AND CONDITIONS</li>
                            <li>LOYALTY TERMS AND CONDITIONS</li>
                            <li>PRIVACY POLICY</li>
                            <li>CALIFORNIA NOTICE OF COLLECTION</li>
                            <li>MANNAGE COOKIE PREFERENCES</li>
                            <li>ACCESSIBILITY STATEMENT</li>
                            <li>COUNTERFEIT EDUCATION</li>
                            <li>SUPPLY CHAIN ACT</li>
                            <li>PROMOTIONAL DISCLAIMERS</li>
                            <li>GIVEAWAY TERMS & CONDITIONS</li>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    COPYRIGHT &copy; 2024 SONOMAN. ALL RIGHTS RESERVED.
                </div>
            </div>
        </>
    )
}

export default Footer