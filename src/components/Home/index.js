// Write your JS code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-home-container">
      <div className="main-home-content">
        <h1 className="main-home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-image"
        />
        <p className="main-home-para">
          Fashion is part of the daily air and id does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in revolution. Your fashion makes you been seen and heard that
          way you are. So, celebrate the seasons new and exciting fashion in
          your own way.
        </p>
        <button type="submit" className="shop-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-image"
      />
    </div>
  </>
)

export default Home
