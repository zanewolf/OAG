import React from 'react';
// import {Button} from "../Button"
import styled from 'styled-components';
import {Image} from 'gatsby-plugin-image'
import '../styles/hero.module.css'

export default function Hero({title, size, image,darkened, children}){
    // let heroImage = image? image : "../images/ocean.png"
    //
    console.log(darkened)
    return(
        // <div className={"hero-container"}>
        <HeroContainer size={size}>
            <HeroImage image={image} size={size} darkened/>
            <HeroContent>
                <HeroH1>
                    {title}
                </HeroH1>
                {children}
            </HeroContent>
        </HeroContainer>
        //     <h1>{title}</h1>
        //     {children}
        // </div>
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
  height: ${({size})=>(size)};
  position: relative;
  //padding: 0 1rem;
  width: auto;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`
//
const HeroContent = styled.div`
 
  margin-top: 5vh;
  background-color: transparent;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-content: center;
  //justify-content: center;
  color: white;
  z-index: 500;
`

const HeroImage = styled.div`
  background: 
  linear-gradient(to bottom, rgba(0,0,0,0),
  ${({darkened})=>(darkened? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)')}),
  url(${({image})=>(image ? image : null)}) center center/cover no-repeat;
    position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -50;
      height: ${({size}) => (size)};
  //background: ;
      // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
      & > img {
        object-fit: ${(props) => props.fit || 'cover'} !important;
        object-position: ${(props) => props.position || '50% 50%'} !important;
        font-family: 'object-fit: ${(props) => props.fit || 'cover'} !important; object-position: ${(
        props,
    ) => props.position || '50% 50%'} !important;'
      }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`
//
// const HeroItems = styled.div`
//   //background-color: #0a6699;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `
//
const HeroH1 = styled.h1`
  //background-color: #0a6699;
  display: flex;
  font-size:3em;
  justify-content: center;
  align-items: center;
  margin: auto 2vw;
  
  @media screen and (max-width: 1076px ){
    text-align: center;
}
`
//
// const HeroH2 = styled.h2`
//   background-color: #0a6699;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `
//
// const HeroP = styled.p`
//   background-color: #0a6699;
//   display: flex;
//   justify-content: center;
// `
//
//
// const HeroBg = styled.div`
//   position: absolute;
//   top: 0;
//   //background-color: rgba(0,0,0,0.99)
//   //background: linear-gradient(
//   //        180deg,
//   //        rgba(0,0,0,0.2),0%,
//   //        rgba(0,0,0,0.6) 100%
//   //),
//   //linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
// ;
//
// `
