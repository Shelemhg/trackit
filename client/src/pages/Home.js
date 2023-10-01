import heroImg from '../assets/images/hero-img.png';
import featureImg1 from '../assets/images/feature-1.png';
import featureImg2 from '../assets/images/feature-2.png';
import featureImg3 from '../assets/images/feature-3.png';


export default function HomePage () {
    return (
        <>
            {/* Container for the entire page content */}
            <div className="container">

                {/* Hero section for the main page header */}
                <section className="hero">
                    <div className="hero-text">
                        {/* Main heading for the page */}
                        <h1>Your Amazon Price Tracker</h1>
                        
                        {/* Subtitle or description for the hero section */}
                        <p>Save money and stay updated on the products you love.</p>
                        
                        {/* Call-to-action button for starting the tracking process */}
                        <a href="#" className="cta-button">Get Started</a>
                    </div>
                    
                    {/* Container for the hero image/logo */}
                    <div className="hero-image">
                        {/* Image/logo displayed within the hero section */}
                        <img src={heroImg} alt="logo"></img>
                    </div>
                </section>

                {/* Section for displaying key features */}
                <section className="features">
                    <div className="features-heading">
                        {/* Heading for the key features section */}
                        <h2>Key Features</h2>
                    </div>
                    <div className="feature-container">
                        {/* Individual feature blocks */}
                        <div className="feature">
                            {/* Image representing the feature */}
                            <img src={featureImg1} alt="logo"></img>
                            
                            {/* Title of the feature */}
                            <h3>Real-Time Tracking</h3>
                            
                            {/* Description of the feature */}
                            <p>Monitor price changes in real-time for your favorite Amazon products.</p>
                        </div>
                        
                        <div className="feature">
                            <img src={featureImg2} alt="logo"></img>
                            <h3>Price Alerts</h3>
                            <p>Receive price drop notifications via email or mobile alerts.</p>
                        </div>
                        
                        <div className="feature">
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