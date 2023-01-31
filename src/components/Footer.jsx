import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillPhone, AiTwotoneMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="container background-color"
            style={{
                backgroundColor: '61A5FF',
            }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
                        <svg className="bi" width={30} height={24}><use xlinkHref="#bootstrap" /></svg>
                    </a>
                    <span className="mb-3 mb-md-0 ">© 2022 Steven Krenn</span>
                </div>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="" href="https://github.com/Krenbot"><BsGithub /></a></li>
                    <li className="ms-3"><a className="" href="https://www.linkedin.com/in/krenbot/"><BsLinkedin /></a></li>
                    <li className="ms-3"><a className="" href="tel:262-707-8842"><AiFillPhone /></a></li>
                    <li className="ms-3"><a className="" href="mailto: 'stevekrenn@gmail.com"><AiTwotoneMail /></a></li>
                </ul>
            </footer>
        </div>
    );
}

export default Footer