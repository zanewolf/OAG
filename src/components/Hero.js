import React from 'react';
import styled from 'styled-components';
import '../styles/hero.module.css';
import {convertToBgImage} from "gbimage-bridge";
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// import ocean3_gradient2 from '../images/ocean3_gradient_subwidth.jpg';

export default function Hero({title,position, size, imageData,darkened, color, children, position2}){
    // let heroImage = image? image : "../images/ocean.png"


    const image = getImage(imageData)
    const bgImage = convertToBgImage(image)
    return(
        // <div className={"hero-container"}>
        <HeroContainer size={size}>
            <HeroImage
                Tag = 'section'
                {...bgImage}
                size={size}
                alt={'Oceanic Background Image'}
                position2={position2}
            >
                <HeroContent  position={position}>
                    {/*<HeroH1>*/}
                    {/*    {title}*/}
                    {/*</HeroH1>*/}
                    <HeroBody position={position}>
                        {children}
                    </HeroBody>
                </HeroContent>
            </HeroImage>
        </HeroContainer>

    )

}

// export default function Hero({title, subtitle,image,alt, children}) {
//     return (
//         <HeroContainer >
//             <HeroContent>
//                 <HeroItems>
//                     <HeroH1>
//                         {title}
//                     </HeroH1>
//                     {subtitle &&
//                     <HeroH2>{subtitle}</HeroH2>
//                     }
//                     <HeroP>
//                         {children}
//                     </HeroP>
//                 </HeroItems>
//             </HeroContent>
//         </HeroContainer>
//     )
// }
//
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content:center;
  height: ${({size})=>(size)};
  position: relative;

  max-width: 100vw;
  //padding: 0 1rem;
  //width: auto;

  @media screen and (max-width: 1100px) {
    min-height: 100vh;
    height: auto;
    overflow: visible;
  }
`
//
const HeroContent = styled.div`
  
  background: transparent;
  //width: 100%;
  justify-content: ${({position}) => (position)};
  align-content: center;
  margin-right: ${({position})=>(position==='right' ? '5vw' : 'auto')};
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;  
  flex-direction: column;
  color: white;
  
  @media screen and (max-width: 980px){
    margin-top: var(--phone-nav-bar-height);
    align-content: center;
    justify-content: center;
    margin: auto;
  }
`
// const HeroImage = styled(GatsbyImage)`
//   //background: url(${({image})=>(image ? image : null)}) center center/cover no-repeat;
//   // background: ${({image,color,position2})=>(image ? `url(${image}) ${position2} center/cover no-repeat` : `${color}`)};
//   position: relative;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: ${({size}) => (size)};
//   background-position: ${({position2}) => (position2)};
//   background-repeat: no-repeat;
//   background-size: cover;
//
//   @media screen and (max-width: 1100px) {
//       //overflow: visible
//     height: auto;
//     background-position: ${({position2}) => (position2)};
//   }
//   //background: ;
//       // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
//
//
//   @media screen and (max-width: 1100px) {
//     min-height: 100vh;
//     z-index: 10;
//     //height: auto;
//     //background-size: fill;
//   }
// `
const HeroImage = styled(BackgroundImage)`
  //background: url(${({image})=>(image ? image : null)}) center center/cover no-repeat;
  // background: ${({image,color,position2})=>(image ? `url(${image}) ${position2} center/cover no-repeat` : `${color}`)};
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({size}) => (size)};
  background-position: ${({position2}) => (position2)};
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1100px) {
      //overflow: visible
    height: auto;
    background-position: ${({position2}) => (position2)};
  }
  //background: ;
      // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill


  @media screen and (max-width: 1100px) {
    min-height: 100vh;
    z-index: 10;
    //height: auto;
    //background-size: fill;
  }
`


const HeroBody=styled.div`
  display: flex;
  justify-content: ${({position}) => (position)};
  align-content: center;
  margin-right: ${({position})=>(position==='right' ? '10vw' : 'auto')}
  margin-left: auto;
  
`