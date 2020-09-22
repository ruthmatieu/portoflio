import React, { useState } from 'react';
import image from '../images/profile-illustration.png';
import diamond from '../images/icon-slider.png';
import dots from '../images/bg-dots.png';

//


function Landing() {
    const shortestIntro = 'Hi my name is Ruth. But I prefer Alanna.';
    const mediumIntro = `Hi my name is Ruth, But I prefer Alanna. I'm a web developer. Alanna 
      works as a principal developer experience engineer at Netlify, where he works to improve 
      the experience of building and deploying to the modern web.`;
    const longIntro = `I am long intro. Alanna works as a principal developer experience engineer 
      at Netlify, where he works to improve the experience of building and deploying to the modern 
      web. He also hosts Learn With Jason, a live-streamed video show where he pair programs to learn 
      something new in 90 minutes. He spends a lot of time writing to share what he’s learned in tech 
      as well as stories about how he used to suck`;
    const longestIntro = `Alanna works as a principal developer experience engineer at Netlify, 
      where he works to improve the experience of building and deploying to the modern web. 
      He also hosts Learn With Jason, a live-streamed video show where he pair programs to 
      learn something new in 90 minutes. He spends a lot of time writing to share what he’s 
      learned in tech as well as stories about how he used to suck, listened to people who 
      taught him valuable lessons, and made changes that helped him suck less. This frequently 
      boils down to telling people that the formula for success and happiness is to lift each 
      other up at every opportunity and share what we learn, even when it feels like something 
      that’s been shared before or that “everybody already knows”. He is trying his very best 
      to follow his own advice. He lives in Portland, Oregon.`;

    const [intro, setIntro] = useState(shortestIntro); 

  return (
    
    <div>
        
        <div className="intro-container">
          <div className="socials">
            <a href="https://twitter.com/ruthmatieu" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/civil_co/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <hr class="verticalLine"/>
          </div>
          <div className="left-intro">
              <img src={image} alt="" className="landing-img"/>
          </div>
          <div className="right-intro">
            <div>
              <h1>Alanna Mathieu</h1>
              <h6>Fullstack Developer specializing in front end frameworks such as React with a passion for Design Systems, Web Accessibility, and Serverless Technologies</h6>
              <p>Just some text about something and something else. Just keep on repeating etc. Should've
                looked into lorem ipsum.
              </p>
              {/* <div className="browser-only-intro">
                <div>
                <p className="bio-adjuster">Adjust bio length:</p>
                    <div className="landing-btn-div">
                      <p className="landing-page-btn" onClick={()=> setIntro(shortestIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                      <p className="landing-page-btn" onClick={()=> setIntro(mediumIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                      <p className="landing-page-btn" onClick={()=> setIntro(longIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                      <p className="landing-page-btn" onClick={()=> setIntro(longestIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                    </div>
                    <p className="bio-details">{intro}</p>
                </div>
                
              </div> */}
              <div className="arrow-btn">
                {/* <img src={arrow} alt="arrow icon"/> */}
                <a href="">view work</a>
                <hr/>
              </div>
              
            </div>
            
          </div>
        </div>
        <div className="dots-one">
          <img src={dots}/>
        </div>
        <div className="dots-two">
          <img src={dots}/>
        </div>
        <div className="dots-three">
          <img src={dots}/>
        </div>
        <hr/>
        <div className="browser-only-intro">
          <p className="bio-adjuster">Adjust bio length:</p>
              <div className="landing-btn-div">
                <p className="landing-page-btn" onClick={()=> setIntro(shortestIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                <p className="landing-page-btn" onClick={()=> setIntro(mediumIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                <p className="landing-page-btn" onClick={()=> setIntro(longIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
                <p className="landing-page-btn" onClick={()=> setIntro(longestIntro)}><span role="img"><img src={diamond} alt="diamond" className="diamond"/></span></p>
              </div>
              <p className="bio-details">{intro}</p>
        </div>
        
    </div>
  );
}

export default Landing;