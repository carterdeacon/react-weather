import './Welcome.css'
import {Animated} from "react-animated-css";
import { useState } from 'react'

const Welcome = () =>{

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