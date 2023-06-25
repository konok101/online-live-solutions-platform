import React, { useState } from 'react'
import Faq from './Faq';
import faqImg from '../../../images/faq-draw-bgremove.png';
import Box from '@mui/material/Box';
import { Container, Grid } from "@mui/material";

function FaqQuestions() {

    const [faqs, setfaqs] = useState([
        {
            question: "	Do you have the Government approval?",
            answer: 'No. Education live solutions is not approved by the Government of Bangladesh',
            open: true
        },
        {
            question: "What is the full name of the platform?",
            answer: 'Educational live solutions Platform ',
            open: false
        },
        {
            question: "Address?",
            answer: 'Dhanmondi 27, Dhaka, Bangladesh.',
            open: false
        },
        {
            question: "	Contact Number?",
            answer: '+8801795598566, 01947473492',
            open: false
        },
        {
            question: "	E-mail Address?",
            answer: 'livesolutionssupport@gmail.com',
            open: false
        },
        {
            question: "	Website Address?",
            answer: 'http://www.education.live.solutions.bd/',
            open: false
        }
    ]);
    const headderStyle = {
        padding: '25px',
        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
        display: 'flex',
        justifyContent: 'center',
        color:'white',
        fontWeight:'300',

    };
    const imgStyle = {
        borderRadius:900,
        position: 'related',
        marginTop: '4%',
        marginBottom: '2%',
    };
    const faqsStyle = {
        width: '100%',
        height:'100%',
        marginTop:'5%',
        alignItems:'center'
    };
    const faqQuestionStyle = {
        marginTop: '0',
    };
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <div>
            
                <Container style={faqsStyle}>
                    <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"  spacing={{ xs: 3, md: 2}} >
                        <Grid  component="div" item  xs={12} sm={12} md={6} style={imgStyle} //data-aos="fade-up"
                        >
                            <img src={faqImg}></img>
    </Grid>

                        <Grid 
                        className='faqs' item  xs={12} sm={12} md={6}  component="div" style={faqQuestionStyle}>
                            <h1 className='htag' style={headderStyle}>Frequently Asked Questions</h1>
                            {
                                faqs.map((faq, i) => (
                                    <Faq faq={faq} index={i} toggleFAQ={toggleFAQ}></Faq>
                                ))
                            }
                        </Grid>

                    </Grid>
                </Container>
        </div>
    )
}

export default FaqQuestions;