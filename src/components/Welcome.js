import './Welcome.css'
import {Animated} from "react-animated-css";
import { useState } from 'react'

const Welcome = () =>{

    const [message, setMessage] = useState(true);

    const handleMessages = () => {
        setTimeout(setMessage(!message), 2000)
        console.log(message)
        handleMessages();
    }

  

    return (
        <div className='welcome'>
            <Animated animationIn="slideInRight" animationOut="slideOutLeft" isVisible={true}>
                <section className='greeting'>
                    <p>Welcome to</p>
                    <h1>Farmer Weather</h1>
                </section>
            </Animated>
        </div>
    )
}

export default Welcome