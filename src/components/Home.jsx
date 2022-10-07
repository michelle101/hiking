
import './css/Home.css'
import SliderHome from './slide/SliderHome';

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
            </div>
        </div>
     );
}
 
export default Home;