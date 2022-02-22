import CircularProgress from '@mui/material/CircularProgress';
import { sample } from 'lodash'
import { Animated } from 'react-animated-css';
import './Loading.css'

const Loading = () => {
    const randomLoadMessage = () => {
        let messages = ['Making something up', 'Falsifying forecast', 'Waking up', 'Shooting probes at the sun', 'Bloody technology', 'Colouring clouds mistyrose', 'Refactoring', 'Predicting the future']
        return sample(messages)
    }

    return (
        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
            <div className='loader'>
                <div>
                    < CircularProgress />
                    <p>{randomLoadMessage()}...</p>
                </div>
            </div>
        </Animated>
    )
}

export default Loading