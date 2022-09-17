import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';




export const GigImgsCarousel = ({ imgList }) => {


    console.log(imgList);

    return (
        <div className="gig-imgs-carousel">
            <Carousel
                autoPlay={false}
                showIndicators={false}
                infiniteLoop
                showStatus={false}
                renderArrowPrev={(onClickHandler, label) => (
                    <button
                        className="carousel-btn"

                        type="button"
                        onClick={onClickHandler}
                        style={{
                            left: 15
                        }}
                    >
                        <ArrowBackIosNewIcon />
                    </button>
                )}
                renderArrowNext={(onClickHandler, label) => (
                    <button
                        className="carousel-btn"

                        type="button"
                        onClick={onClickHandler}
                        style={{
                            right: 15
                        }}
                    >
                        <ArrowForwardIosIcon />
                    </button>
                )}
            >
                {imgList.map((img, idx) => {
                    return <div key={idx}>
                        <img
                            alt=""
                            src={img}
                        />
                    </div>
                })}

            </Carousel>
        </div>
    )
}