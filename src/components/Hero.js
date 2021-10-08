import React from 'react';
import styled from 'styled-components';
import '../styles/hero.module.css';

export default function Hero({title, size, image,darkened, color, children}){
    // let heroImage = image? image : "../images/ocean.png"
    //
    console.log(darkened)
    return(
        // <div className={"hero-container"}>
        <HeroContainer size={size}>
            <HeroImage image={image} size={size} color={color} darkened/>
            <HeroContent>
                <HeroH1>
                    {title}
                </HeroH1>
                <HeroBody>
                    {children}
                </HeroBody>
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

  max-width: 100vw;
  //padding: 0 1rem;
  //width: auto;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`
//
const HeroContent = styled.div`
  
  background: transparent;
  justify-content: center;
  display: flex;
  margin: 5vh auto;
  flex-direction: column;
  align-content: center;
  color: white;
  //z-index: 500;
  
  @media screen and (max-width: 980px){
    margin-top: var(--phone-nav-bar-height)
  }
`

const HeroImage = styled.div`
  //background: url(${({image})=>(image ? image : null)}) center center/cover no-repeat;
  background: ${({image,color})=>(image ? `url(${image}) center center/cover no-repeat` : `${color}`)};
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

const HeroH1 = styled.h1`
  //background-color: #0a6699;
  display: flex;
  flex-direction: row;
  font-size:3em;
  margin: auto 2vw;
  text-align: center;
  
  @media screen and (max-width: 1076px ){
    //height: auto;
    //margin: auto;
    flex-direction: column;
    justify-content: center;
}
`
const HeroBody=styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  
`