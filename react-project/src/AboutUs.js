import React, { useState } from "react";
import './AboutUs.css';
import Showcase from './Edit';
import CardList from './CardList';

function AboutUs() {

    const [openInfo, setopenInfo] = useState(true);
    const [openFAQ, setOpenFAQ] = useState(false);
    const [openCF, setOpenCF] = useState(false);
    const [openPrivacy, setOpenPrivacy] = useState(false);
    const [open, setOpen] = useState(false);

    const handleInfoTab = () => {
        setopenInfo(true);
        setOpenFAQ(false)
        setOpenCF(false)
        setOpenPrivacy(false)
        setOpen(false)
    };

    const handleFAQTab = () => {
        setopenInfo(false);
        setOpenFAQ(true)
        setOpenCF(false)
        setOpenPrivacy(false)
        setOpen(false)
    };

    const handleComplaintTab = () => {
        setopenInfo(false);
        setOpenFAQ(false)
        setOpenCF(true)
        setOpenPrivacy(false)
        setOpen(false)
    };

    const handlePrivacyTab = () => {
        setopenInfo(false);
        setOpenFAQ(false)
        setOpenCF(false)
        setOpenPrivacy(true)
        setOpen(false)
    };

    const handleTab = () => {
        setopenInfo(false);
        setOpenFAQ(false)
        setOpenCF(false)
        setOpenPrivacy(false)
        setOpen(true)
    };

    return (
        <div className="main">
            <div className="aboutUs">About Us</div>
            <img src="https://elred.io/wp-content/uploads/2022/03/el-red-logo-v4.svg" />
            <Showcase />
            <div className='tabsContainer'>
                <button onClick={handleInfoTab}>Info</button>
                <button onClick={handleFAQTab}>FAQ</button>
                <button onClick={handleComplaintTab}>Complaints and Feedback</button>
                <button onClick={handlePrivacyTab}>Privacy</button>
                <button onClick={handleTab}>Terms and Conditions</button>
            </div>
            <hr />
            {openInfo && (
                <CardList />
            )}
            {openFAQ && (
                <FAQ />
            )}
            {openCF && (
                <Complaints />
            )}
            {openPrivacy && (
                <Privacy />
            )}
            {open && (
                <Terms />
            )}
        </div>
    );
}

export default AboutUs;

function FAQ() {

    return (
        <div>
            faq
        </div>
    );
}

function Complaints() {

    return (
        <div>
            Complaints and Feedback
        </div>
    );
}
function Privacy() {

    return (
        <div>
            Privacy
        </div>
    );
}
function Terms() {

    return (
        <div>
            Terms and Condition
        </div>
    );
}
