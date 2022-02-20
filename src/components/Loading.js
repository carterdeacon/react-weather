import CircularProgress from '@mui/material/CircularProgress';
import './Loading.css'

const Loading = () => {


    return (
        <div className='loader'>
            <div>
                <CircularProgress />
                <p>Making shit up...</p>
            </div>
        </div>
    )
}

export default Loading