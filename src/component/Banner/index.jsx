import image from '../../assets/images/banner.png'
import './banner.css'

const Banner = () => {
    return (
        <header className={'banner'}>
            <img src={image} alt="Index principal" />
        </header>
    )
}

export default Banner