import heroImg from '../assets/images/hero-img.png';
import featureImg1 from '../assets/images/feature-1.png';
import featureImg2 from '../assets/images/feature-2.png';
import featureImg3 from '../assets/images/feature-3.png';
import logo from '../assets/images/logo2.png';


export default function Home () {
    return (
        <>
            <div class="container">
                <section class="hero">
                    <div class="hero-text">
                        <h1>Your Amazon Price Tracker</h1>
                        <p>Save money and stay updated on the products you love.</p>
                        <a href="#" class="cta-button">Get Started</a>
                    </div>
                    <div class="hero-image">
                        <img src={heroImg} alt="logo"></img>
                    </div>
                </section>

                <section class="features">
                    <div class="features-heading">
                        <h2>Key Features</h2>
                    </div>
                    <div class="feature-container">
                        <div class="feature">
                            <img src={featureImg1} alt="logo"></img>
                            <h3>Real-Time Tracking</h3>
                            <p>Monitor price changes in real-time for your favorite Amazon products.</p>
                        </div>
                        <div class="feature">
                            <img src={featureImg2} alt="logo"></img>
                            <h3>Price Alerts</h3>
                            <p>Receive price drop notifications via email or mobile alerts.</p>
                        </div>
                        <div class="feature">
                            <img src={featureImg3} alt="logo"></img>
                            <h3>Personalized Watchlist</h3>
                            <p>Create a personalized watchlist of products to track your desired items.</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}