
import './css/Home.css'
import Posts from './posts/Posts';
import SliderHome from './slide/SliderHome';

import offer1 from '../img/mini2_big.jpg';
import offer2 from '../img/mini4_big.jpg';


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
                        <img src={offer1}  alt="" />
                        <h2>Discount up to 50% All Excursions</h2>
                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                </div>
                <div className="offer-left">
                    <h2>January's Promo: Buy 1 Get 1 free</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <img src={offer2}  alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;