
import './css/Home.css'
import Posts from './posts/Posts';
import SliderHome from './slide/SliderHome';

import offer1 from '../img/mini2_big.jpg';
import offer2 from '../img/mini4_big.jpg';
import ripTop from '../img/rip_top.png';
import ripBottom from '../img/rip_bottom.png';
import climbing from '../img/climbing.jpg';
import { Link } from 'react-router-dom';

import  instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import phone from '../img/phone.png';

const Home = () => {
    return ( 
        <div className='home-wrapper'>  
            <div  className='home-slide'>
                <SliderHome />
            </div>
            <div className='home-gallery'>
                <h1>Let's go</h1>
                <p>HIKING, walking in nature as a recreational activity. Especially among those with sedentary occupations, 
                    hiking is a natural exercise that promotes physical fitness, is economical and convenient, and requires no special equipment. 
                    Because hikers can walk as far as they want, there is no physical strain unless they walk among hills or mountains.</p>
                <Posts />
            </div>
            <div className = "home-offers">
                <div className="offer-right">
                    <div className="offer-image">
                        <img src={offer1}  alt="" />
                    </div>
                    <div className="offer-text">
                        <h2>Discount up to 50% All Excursions</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                        <button className="offer-btn">Read More</button>
                    </div>
                </div>
                <div className="offer-right offer-left">
                    <div className="offer-text">
                        <h2>January's Promo: Buy 1 Get 1 free</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                        <button className="offer-btn">Read More</button>
                    </div>
                    <div className="offer-image">
                        <img src={offer2}  alt="" />
                    </div>
                </div>  
            </div>
            <div className="hike-mt">
                <div className="white-gap"></div>
                <div className="offer-rip-bottom"><img src={ripTop} alt="" /></div>
                <h2>Hiking in the mountains</h2>
                <p>Hiking is an activity of moderate difficulty, which involves walking across long distances generally on trails or paths. The duration of the activity varies between short half-day programs and longer itineraries of over 20 days. It is usually an activity that allows groups of different sizes.</p>
                <div className="hike-rip-bottom"><img src={ripBottom} alt="" /></div>
                <div className="white-gap"></div>
            </div>
            <div className="climbing">     
                <div className="climbing-image"><img src={climbing} alt='' /></div>
                <div className="climbing-top"><img src={ripTop} alt="" /></div>
            </div>
            <div className="saying">
                <div className="saying-top"><img src={ripBottom} alt="" /></div>
                < div className="sayings-selected">
                <div className="sayings-box">
                    <h3>Lorem Ipsum</h3>
                   <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </div>
                    <div className="sayings-box">
                        <h3>Lorem Ipsum</h3>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </div>
                    <div className="sayings-box">
                        <h3>Lorem Ipsum</h3>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    </div>
                    <div className="open-quote">"</div>
                    <div className="quote">
                        <p>There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...</p>
                    </div>
                    <div className="quote-name">Lorem Ipsum</div>
                </div>
            </div>
            <div className="subscription">
                <img className="rip-top" src={ripTop} alt="" />
                <h1>Subscription</h1>
                <p>If your subscription is canceled, but has expired. Feel free to subscribe again.</p>
                <div className="subscribe-input">
                    <input type="text" value="Your Email" />
                    <button>Subscribe</button>
                </div>
                <img className="subs-rip-bottom" src={ripBottom} alt="" />
            </div>
            <div className="white-gap"></div>
            <div className="footer">
                <img src={ripTop} alt="" />
                <div className="footer-blocks">
                    <div>
                        <h4>Title Here</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur semper ipsum aliquet eros imperdiet, quis pharetra nisl condimentum. Integer commodo felis eget ornare ultricies. </p>
                        <div className="social-icons">
                            <Link to ="/"><img src={instagram} alt="Instagram" /></Link>
                            <Link to ="/"><img src={facebook} alt="Facebook" /></Link>
                            <Link to ="/"><img src={twitter} alt="Twitter" /></Link>
                            <Link to ="/"><img src={phone} alt="Phones" /></Link>
                        </div>
                    </div>
                    <div>
                        <h4>About</h4>
                        <Link to ="/">History</Link>
                        <Link to ="/">Our Team</Link>
                        <Link to ="/">Brand Guidelines</Link>
                        <Link to ="/">Term & Condition</Link>
                        <Link to ="/">Privacy Policy</Link>
                    </div>
                    <div>
                        <h4>Services</h4>
                        <Link to ="/">How to Order</Link>
                        <Link to ="/">Our Product</Link>
                        <Link to ="/">Order Status</Link>
                        <Link to ="/">Promo</Link>
                        <Link to ="/">Payment Method</Link>
                    </div>
                    <div>
                        <h4>Other</h4>
                        <Link to ="/">Contact Us</Link>
                        <Link to ="/">Help</Link>
                        <Link to ="/">Privacy</Link>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Home;