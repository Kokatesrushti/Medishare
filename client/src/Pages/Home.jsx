import React from 'react';
import './Home.css';
import img1 from '../components/images/cardimg1.jpeg';
import img2 from '../components/images/cardimg2.jpeg';
import img3 from '../components/images/cardimg3.jpeg';


const Home = () => {
    return (

        <div>
            <div className='hero-div'>
            <div className='hero-rect'></div>
                <div className="hero-caption">Healing yourself <br></br>is connected with<br></br> healing others</div>
                
                <div className='hero-img'></div>
                </div>
                <div class="search-home">
      <input type="text" class="searchTerm" placeholder="What are you looking for?">
        </input>
      <button type="submit" class="searchButton">
        <i class="fa fa-search"></i>
     </button>
   </div>
                <div className="search-icon"></div>

                <div className='hero-content-container'>
                    <div id='card1' className='hero-card'>
                        <div><img src={img1} width="86px" height="86px"className='imgcards'></img></div>
                        <div className='card-caption'>Donate Medicine</div>
                        <span className='line'></span>
                        <div className='card-content'>Donate medicine rather than<br></br>discarding them.  </div>
                    </div>
                    <div id='card2' className='hero-card'>
                    <div><img src={img2} width="89px" height="101px" className='imgcards'></img></div>
                    <div className='card-caption'>Doctor’s Approval</div>
                    <span className='line'></span>
                    <div className='card-content'>Doctor’s approval on every<br></br> medicine. <br></br>Consultation available as well </div>
                    </div>
                    <div id='card3' className='hero-card'>
                    <div><img src={img3} width="86px" height="86px" className='imgcards' ></img></div>
                    <div className='card-caption'>Genuine Medicine</div>
                    <span className='line'></span>
                    <div className='card-content'>Genuine medicine from trusted <br></br>sources. </div>
                    </div>
                </div>
                <footer>
                    
                </footer>
        </div>
    );
}
export default Home;