import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import FavoriteIcon from "@mui/icons-material/Favorite"
import StarIcon from "@mui/icons-material/Star"
import { SimpleSlider } from "./simple-slider"

export const GigPreview = ({ owner, _id, title, price, likedByUsers, imgUrls }) => {
  const [liked, setLiked] = useState()
  console.log("OWNER", owner)
  const handleLike = () => {
    setLiked(!liked)
  }
  return (
    <div className="gig-preview">
      <SimpleSlider imgUrls={imgUrls} gigId={_id} />
      <div className="preview-details">
        <div className="seller-details">
          <img className="prerview-avatar" src={`${owner.imgUrl}`} />
          <div className="seller-details-text">
            <p>
              {""}
              <Link
                to={`/user/${owner._id}`}
                className="preview-seller-name"
              >{`${owner.fullname}`}</Link>
            </p>
            <span className="preview-seller-level">
              Level {`${owner.level}`} Seller
            </span>
          </div>
        </div>
        <div className="preview-title">
          <Link to={`/gig/${_id}`}>{`${title}`}</Link>
        </div>
        <div className="stars">
          {/* ⭐rate */}
          <StarIcon />
          {owner.rate}
          <span className="reviews-amount">({owner.reviewsAmount})</span>
        </div>
        <div className="preview-footer">
          <FavoriteIcon
            className={`like ${liked ? "liked" : "heart"}`}
            onClick={() => handleLike()}
          />
          <span className="liked-by">({likedByUsers.length})</span>
          <Link to={`/gig/${_id}`} className="preview-offer">
            <p className="start-at">starting at</p>
            <p className="price">${price}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

