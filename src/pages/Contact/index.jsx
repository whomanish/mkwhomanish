import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import { createIcon } from '../../utils/utils';
import { CONTACT_DETAILS, SOCIAL_ICONS, CONTACT_ERROR } from '../../utils/CONSTANTS';
import { ContactWrapper } from './style';
import { useState } from 'react';

const Contact = ({ skinColor, switcherColor }) => {
    const [buttonState, setButtonState] = useState('Send Message');
    const formik = useFormik({
        initialValues: {
            from_name: '',
            to_name: process.env.REACT_APP_ADMIN_EMAIL,
            subject: '',
            reply_to: '',
            message: ''
        },
        validationSchema: Yup.object({
            from_name: Yup.string()
                .required(CONTACT_ERROR.name),
            subject: Yup.string()
                .required(CONTACT_ERROR.subject),
            reply_to: Yup.string().email(CONTACT_ERROR.invalidEmail)
                .required(CONTACT_ERROR.email),
            message: Yup.string().required(CONTACT_ERROR.message)
        }),
        onSubmit: (values, { setSubmitting, resetForm }) => {
            const sentMessage = document.getElementById('output');
            setButtonState('Sending...');
            try {
                emailjs.send(process.env.REACT_APP_FORMIK_SERVICE_ID, process.env.REACT_APP_FORMIK_TEMPLATE_ID, values, process.env.REACT_APP_FORMIK_USER_ID)
                    .then(() => {
                        sentMessage.classList.add('success');
                        sentMessage.innerHTML = CONTACT_ERROR.success;
                        setButtonState('Send Email');
                        setSubmitting(false);
                        resetForm();
                    });
            }
            catch {
                sentMessage.classList.add('error');
                sentMessage.innerHTML = CONTACT_ERROR.error;
                setButtonState('Send Email');
                setSubmitting(false);
            }
        },
    });
    return (
        <ContactWrapper className="section contact-section" id="contact" switcherColor={switcherColor} skinColor={skinColor} style={{ display: 'block' }}>
            <Helmet>
                <title>Manish Jha Portfolio | Contact Page</title>
                <link rel="canonical" href="https://mkwhomanish.netlify.app/contact" />
            </Helmet>
            <div id="contact-content">
                <div className="heading text-left text-md-center">
                    <h2>
						get <span>in touch</span>
                    </h2>
                </div>
                <div className="container">
                    <div className="row boxes">
                        {
                            CONTACT_DETAILS.map((val, i) =>
                                <div key={val.title + i} className="col-12 col-lg-4">
                                    <div className="box last-box">
                                        <span className="material-icons">
                                            {createIcon(val.icon, '#fff')}
                                        </span>
                                        <p>{val.title}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="separator"></div>
                    <div className="row">
                        <div className="col-12 col-lg-4 leftside">
                            <div>
                                <h4 className="mb-0">send me an email</h4>
                                <p>
									Feel free to get in touch with me. I am always open to discussing new projects or creative ideas.
                                </p>
                            </div>
                            <div>
                                <h4>follow me</h4>
                                <ul className="social list-unstyled mb-5 mb-lg-0 p-0 d-flex">
                                    {
                                        SOCIAL_ICONS.map((val) =>
                                            <li key={val.icon}>
                                                <a title={val.icon} href={val.url} target="_blank" rel="noreferrer">
                                                    {createIcon(val.icon, skinColor === 'dark' ? '#fff' : '#212529', val.icon === 'Angellist' ? '1.25rem' : '1rem')}
                                                </a>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8">
                            <form className="formcontact" onSubmit={formik.handleSubmit}>
                                <div className="row contactform">
                                    <div className="col-12 col-md-4">
                                        <label htmlFor="from_name" />
                                        <input
                                            id="from_name"
                                            name="from_name"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="YOUR NAME"
                                            onChange={formik.handleChange}
                                            value={formik.values.from_name}
                                        />
                                        <div className={`expandable ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`}>{formik.errors.from_name}</div>
                                        {/* <input type="text" name="name" placeholder="YOUR NAME" autoComplete="off" /> */}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label htmlFor="subject" />
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            autoComplete="off"
                                            placeholder="SUBJECT"
                                            onChange={formik.handleChange}
                                            value={formik.values.subject}
                                        />
                                        <div className={`expandable ${formik.touched.subject && formik.errors.subject ? 'show' : ''}`}>{formik.errors.subject}</div>
                                        {/* <input type="text" name="name" placeholder="SUBJECT" autoComplete="off" /> */}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <label htmlFor="reply_to" />
                                        <input id="reply_to" type="email"
                                            name="reply_to" placeholder="YOUR EMAIL"
                                            autoComplete="off"
                                            onChange={formik.handleChange}
                                            value={formik.values.reply_to}
                                        />
                                        <div className={`expandable ${formik.touched.reply_to && formik.errors.reply_to ? 'show' : ''}`}>{formik.errors.reply_to}</div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" />
                                        <textarea id="message" name="message" placeholder="YOUR MESSAGE"
                                            autoComplete="off"
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                        />
                                        <div className={`expandable ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>{formik.errors.message}</div>
                                    </div>
                                    <div className="col-12">
                                        <button disabled={formik.isSubmitting} type="submit" className="btn main-btn"><span>{buttonState}</span></button>
                                    </div>
                                    <div className="col-12 form-message">
                                        <span id='output' className="output_message text-center text-uppercase" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    );
};

Contact.propTypes = {
    skinColor: PropTypes.object,
    switcherColor: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        skinColor: state.color.skinColor,
        switcherColor: state.color.switcherColor
    };
};

export default connect(mapStateToProps)(Contact);