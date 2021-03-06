import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../breakpoints';
import { projectData } from '../../data';

//
import Footer from '../Footer';

const ChowDining = () => {
    return (
        <div>
            <Wrapper>
            <div className='intro-container'>
                <h1>{projectData.chow.title}</h1>

                <p className='intro-paragraph'>
                    The Chow Restaurant is a static website for a local Italian and seafood restuarant. 
                    We also utilized GitHub pages as a server to host Chow, because of it's ease of deployment
                    for static sites.
                </p>
                
                <div className='tech-stack'>
                    <div>
                        <p><span>Tech Stack:</span><br/>{projectData.chow.tech}</p>
                    </div>
                    <div className='cta'>
                        <a href={projectData.chow.live} target='_blank' rel="noopener noreferrer">Live Demo</a>
                        <a href={projectData.chow.git} target='_blank' rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>

                <div>
                    <img src={projectData.chow.mainImage} alt='homepage screenshot' className='main-image'/>
                </div>
                
            </div>
            
            
            <div className='purpose-container'>
                <h3>Purpose + Goal</h3>
                <div>
                    <p>The goal of this project was to create a full restaurant site from scratch.
                        With HTML and CSS grids, 
                    </p>
                </div>
            </div>

            <div className='spotlight-container'>
                <h3>Web Stack</h3>
                <div className='spotlight-flex'>
                    <div>
                        <p>Since this site is static, HTML/CSS and Bootstrap were best choices for building this site.</p>
                    </div>
                    <div>
                        <div>
                            <img src={projectData.chow.snapOne} alt='project screenshot' className='snap-one-image'/>
                            {/* <img src='' alt='project screenshot'/> */}
                        </div>
                    </div> 
                </div>
                
                
            </div>

            {/* <div className='lessons-container'>
                <h3>Problems + Lessons Learned</h3>
                <div>
                    
                    <p>This project included 3 phases. There are many variations of passages of Lorem Ipsum available, but the majority 
                        have suffered alteration in some form, by injected humour, or randomised words 
                        which don't look even slightly believable. If you are going to use a passage of 
                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the 
                        middle of text.</p>
                </div>
            </div> */}
            {/* <div className='more-projects'>
                <div className='more-proj-one'>
                    aht
                </div>
                <div className='more-proj-two'>
                    aht
                </div>
            </div> */}
            </Wrapper>
            <Footer/>
        </div>
        
    )
}

export default ChowDining;

const Wrapper = styled.section`

  display: grid;
  place-items: center;
  margin: 0 20px;
    .intro-container, .purpose-container, .spotlight-container, .lessons-container {
        padding-bottom: 50px;
    }

    h1 {
      font-family: 'Anton', sans-serif;
      font-size: 50px;
      text-align: center;
      text-transform: uppercase;
      padding: 40px 0;
      color: #CE7672;
    }

    p {
        line-height: 25px;
        padding-bottom: 10px;
    }

    .tech-stack {
        padding: 20px 0;
    }

    .tech-stack span {
        color: #DC8666;
        font-weight: 600;
    }

    .cta {
        padding-bottom: 40px;
    }

    .cta a {
        text-decoration: none;
        color: #EEB462;
        font-weight: 500;
        margin-right: 20px;
    }

    .cta a:hover {
        cursor: pointer;
        border-bottom: 4px solid #DC8666;
    }

    img {
      width: 100%;
      -webkit-box-shadow: 5px 5px 18px 5px #B2B2B2; 
      box-shadow: 5px 5px 18px 5px #B2B2B2;
    }

    .purpose-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        text-align: right;
        color: #138085;

    }

    .spotlight-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        color: #138085;

    }

    .lessons-container h3 {
        font-size: 25px;
        padding-bottom: 20px;
        text-align: right;
        color: #138085;
    }

    .more-projects {
        padding: 50px 0 90px 0;
    }

    .snap-one-image {
        width: 100%;
    }

   

    @media only screen and ${breakpoint.device.tablet} {
        // background-color: yellow;

        margin: 0 40px;
        .intro-paragraph {
            text-align: left;
        }

        .tech-stack {
            display: flex;
            justify-content: space-around;
        }
        .cta {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .snap-one-image {
            width: 600px;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        // background-color: red;

        max-width: 1024px;
        margin: 0 auto;

        img {
            width: 900px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .spotlight-flex {
            display: flex;
        }
        .spotlight-flex img{
            margin: 0 50px;
        }
    }
`;