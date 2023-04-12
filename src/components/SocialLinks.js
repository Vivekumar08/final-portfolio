import React from 'react'
import styles from "../styles/socialLinks.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const SocialLinks = () => {
    return (
        <nav className={styles.social}>
            <ul>
                <li><a href="https://github.com/Vivekumar08" target="_blank" className='flex items-center justify-end group'>Github
                    <FontAwesomeIcon className={`${styles.sociaIcon} group-hover:bg-black group-hover:text-light `} icon={faGithub} />
                </a></li>
                <li><a href="https://instagram.com/__vivekumar08" target="_blank" className='flex items-center justify-end group'>Instagram
                    <FontAwesomeIcon className={`${styles.sociaIcon} group-hover:bg-[#d62976] group-hover:text-light `} icon={faInstagram} />
                </a></li>
                <li><a href="mailto:vivekumar2003bsr@gmail.com" target="_blank" className='flex items-center justify-end group'>Mail
                    <FontAwesomeIcon className={`${styles.sociaIcon} group-hover:bg-red-500 group-hover:text-light `} icon={faEnvelope} />
                </a></li>
                <li><a href=" https://wa.me/7088980706" target="_blank" className='flex items-center justify-end group'>WhatsApp
                    <FontAwesomeIcon className={`${styles.sociaIcon} group-hover:bg-green-700 group-hover:text-light `} icon={faWhatsapp} />
                </a></li>
                <li ><a href="https://www.linkedin.com/in/vivek-kumar-1b65a2201/" target="_blank" className='flex items-center justify-end relative group'>
                    <p>LinkkedIn</p>
                    <FontAwesomeIcon className={`${styles.sociaIcon} group-hover:bg-blue-400 group-hover:text-light `} icon={faLinkedin} />
                </a></li>
            </ul>
        </nav>
    )
}

export default SocialLinks