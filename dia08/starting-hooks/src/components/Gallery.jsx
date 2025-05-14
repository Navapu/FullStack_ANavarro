import { useState } from "react"
import { imageGallery } from '../data/gallerydata'

const Gallery = () => {
    const [position, setPosition] = useState(0)
    const handlePrevious = () => {
        if (position - 1 === -1) {
            setPosition(imageGallery.length - 1)
        } else {
            setPosition(prevState => prevState - 1)
        }
    }

    const handleNext = () => {
        if (position + 1 === imageGallery.length) {
            setPosition(0)

        } else {
            setPosition(prevState => prevState + 1)
        }
    }
    const prevImg = (position === 0) ? imageGallery.length - 1 : position - 1
    const nextImg = (position === imageGallery.length - 1) ? 0 : position + 1
    return (
        <div className='movie-section'>
            <img src={imageGallery[position].url} className='movie-img' />
            <h2>{imageGallery[position].title}</h2>
            <div className='container-buttons'>
                <div className='img-buttons'>
                    <img src={imageGallery[prevImg].url} />
                    <button onClick={handlePrevious}>Prev</button>
                </div>
                <div className='img-buttons'>
                    <button onClick={handleNext}>Next</button>
                    <img src={imageGallery[nextImg].url} />
                </div>
            </div>
        </div>
    )
}
export default Gallery;