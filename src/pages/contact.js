import { faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import * as emailjs from 'emailjs-com'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Buttons from '@/components/Button';
import Head from 'next/head';

const Contact = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
        sent: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            to_name: "Vivek Kumar",
            message: formData.message,
        };

        emailjs.send(
            "service_vykriea",
            "template_t0y46ue",
            templateParams,
            "EcGvOoH382pMC_z2a"
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        loading: false,
                        alertmessage: "SUCCESS! ,Thank you for your messege",
                        variant: "success",
                        show: true,
                        sent: true,
                    });
                    window.alert(formData.alertmessage);
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        loading: false,
                        alertmessage: `Faild to send!,${error.text}`,
                        variant: "danger",
                        show: true,
                    });
                    window.alert({ message: formData.alertmessage });
                }
            );
    };

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return (<>
        <Head>
            <title>Vivek Kumar | Contact Me</title>
            <meta name="description" content="Vivekumar08/Contact" />
        </Head>
        <section className="py-6 min-h-screen font-mont dark:bg-gray-800 dark:text-gray-50">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4 text-justify">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I d love to hear from you. Simply
                        fill the from to start a conversation and send me an email.
                    </p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <FontAwesomeIcon
                                className="w-5 h-5 mr-2 sm:mr-6"
                                icon={faLocation}
                            />
                            <span>
                                1452, 2nd Floor, Punjabi Maholla, Delhi <br /> New Delhi,
                                India
                            </span>
                        </p>
                        <p className="flex items-center">
                            <FontAwesomeIcon
                                className="w-5 h-5 mr-2 sm:mr-6"
                                icon={faPhone}
                            />
                            <span>+91-7088980706</span>
                        </p>
                        <p className="flex items-center">
                            <FontAwesomeIcon
                                className="w-5 h-5 mr-2 sm:mr-6"
                                icon={faEnvelope}
                            />
                            <span>vivekumar2003bsr@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
                >
                    <label className="block mt-2">
                        <span className="mb-1 font-semibold">Full name</span>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="e.g- John Doe"
                            className="block w-full h-10 my-2 px-4 rounded-md  shadow-sm focus:ring focus:ring-opacity-75 text-gray-800 focus:ring-blue-400 dark:bg-gray-800"
                            spellCheck="false"
                            data-ms-editor="true"
                            required
                            value={formData.name || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block my-2">
                        <span className="mb-1 font-semibold">Email address</span>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="e.g- johndoe@gmail.com"
                            className="block w-full h-10 my-2 rounded-md px-4 shadow-sm focus:ring focus:ring-opacity-75 text-gray-800 focus:ring-blue-400 dark:bg-gray-800"
                            required
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="block mb-2">
                        <span className="mb-1 font-semibold">Message</span>
                        <textarea
                            rows="10"
                            name="message"
                            placeholder="Enter your message here ..."
                            className="block w-full my-2 py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 text-gray-800 focus:ring-blue-400 dark:bg-gray-800"
                            spellCheck="false"
                            data-ms-editor="true"
                            required
                            value={formData.message || ""}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    <div className="flex flex-row h-[50px] items-center ">
                        <Buttons
                            type={"submit"}
                            title={formData.loading ? "Sending..." : "Send"}
                        />
                        <div className={formData.loading ? "lds-facebook" : "d-none"}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div
                            className={
                                formData.sent
                                    ? "flex flex-row my-3 mx-3 justify-star md:text-lg text-sm font-satisfy items-center"
                                    : "hidden d-none"
                            }
                        >
                            <span className="capitalize">Thank You for your message</span>
                            <div className="lds-heart">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
    )
}

export default Contact