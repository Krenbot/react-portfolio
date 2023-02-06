import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit Form', formState);
    //     }
    // };

    // const onFormUpdate = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [e.target.name]: e.target.value });
    //         console.log('Handle Form', formState);
    //     }
    // };

    return (
        <div className="container pt-5">
            <div className="mb-3">
                <label className="form-label"></label>
                Name:
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name Here..." />
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                Email:
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@email.com..." />
            </div>
            <div className="mb-3">
                <label className="form-label"></label>
                Message:
                <textarea className="form-control" placeholder="Questions, comments, concerns..." id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="text-center btn btn-outline-light btn-floating m-1">
                <i className="bi bi-envelope-paper-heart-fill"> Submit</i>
            </button>
        </div>
    );
}

export default Contact;