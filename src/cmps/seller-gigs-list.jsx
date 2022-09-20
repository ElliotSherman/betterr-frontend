export function SellerGigsList() {
  return (
    <section className="seller-gigs-wrapper">
      <div className="seller-gigs">
        <div className="seller-gigs-filter">
          <ul className="seller-gigs-status">
            <li className="active">ACTIVE GIGS</li>
            <li className="">DRAFTS</li>
          </ul>
        </div>

        <div className="gig-card-base seller-gig-card">
          <span>
            <div className="flex btn-share-container">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.42857 8.75C8.823 8.75 8.26642 8.9638 7.82705 9.32135L5.08189 7.56987C5.16319 7.19448 5.16319 6.80549 5.08189 6.4301L7.82705 4.67863C8.26642 5.0362 8.823 5.25 9.42857 5.25C10.8487 5.25 12 4.07474 12 2.625C12 1.17526 10.8487 0 9.42857 0C8.00842 0 6.85714 1.17526 6.85714 2.625C6.85714 2.82073 6.8783 3.01137 6.91811 3.19487L4.17295 4.94635C3.73358 4.5888 3.177 4.375 2.57143 4.375C1.15128 4.375 0 5.55026 0 7C0 8.44974 1.15128 9.625 2.57143 9.625C3.177 9.625 3.73358 9.4112 4.17295 9.05365L6.91811 10.8051C6.87753 10.9923 6.85709 11.1833 6.85714 11.375C6.85714 12.8247 8.00842 14 9.42857 14C10.8487 14 12 12.8247 12 11.375C12 9.92526 10.8487 8.75 9.42857 8.75Z"
                  fill="#1DBF73"
                ></path>
              </svg>
            </div>
            <ul className="clean-list gig-settings">
              <li>
                <a
                  href="/users/zrizony/manage_gigs/never-gonna-give-you-up/edit"
                  className="preview"
                  target="_blank"
                >
                  Preview
                </a>
              </li>
              <li>
                <a
                  href="/users/zrizony/manage_gigs?current_filter=draft&amp;id=276857166"
                  className="edit"
                  target="_blank"
                >
                  Edit
                </a>
              </li>
              <li>
                <a
                  href="/users/zrizony/manage_gigs/never-gonna-give-you-up/edit?step=1"
                  className="update-pricing"
                  target="_blank"
                >
                  Update Pricing
                </a>
              </li>
              <li>
                <a
                  href="/users/zrizony/manage_gigs?current_filter=draft&amp;id=276857166"
                  className="remove"
                  target="_blank"
                >
                  Remove Gig
                </a>
              </li>
              <li>
                <a href="#" className="settings">
                  Settings
                </a>
              </li>
            </ul>
            <div className="header-gig-card">
              <a href="/user/gig-title">
                <div>
                  <figure className="no-image">
                    <img
                      src="https://res.cloudinary.com/dalkffrhf/image/upload/v1663602969/Fiverr-Sprint-4/imgs/gig%20img/1_fi4kgs.png"
                      alt=""
                    />
                  </figure>
                </div>
                <h3>I will never gonna give you up</h3>
              </a>
            </div>
            <a
              href="#!"
              className="btn-gig-menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="10"
                viewBox="0 0 42 10"
              >
                <path
                  fill="#C6C6C6"
                  d="M5 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm16 0c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"
                ></path>
              </svg>
            </a>
            <a href="/user/gig-title" className="gig-min-price">
              <small>Starting at</small>
              $5
            </a>
          </span>
        </div>

        <a
          className="gig-card-base add-new-gig"
          href="/users/userId/manage_gigs/new"
        >
          Create a New Gig
        </a>
      </div>
    </section>
  )
}