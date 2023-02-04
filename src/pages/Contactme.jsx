import React from 'react'

const Contactme = () => {
    return (
        <section>
            <br />
            <form id="contact-form" action='mailto: stevekrenn@gmail.com' method="post" enctype="text/plain">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Your name here'

                    />
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder='user@test.com'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder='Enter message...'
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default Contactme