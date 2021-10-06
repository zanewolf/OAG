import React from "react";
// import ReactFullpage from "@fullpage/react-fullpage";
import Layout from "../components/Layout";
// import styled from "styled-components";
// import Events from '../components/Events'

export default function Test (){

    return(
        <Layout pageTitle="Test">
        </Layout>
    )
};


// <ReactFullpage
//     slidesNavigation
//     afterLoad={(origin, destination, fullpage_api)=>{
//         clearInterval(g_interval);
//         console.log({fullpage_api})
//         // 1000 milliseconds lapse*/}
//         const lapse = 1000;
//         const shouldAutoPlay = destination.item.hasAttribute('autoPlay');
//         const hasSlides = destination.item.querySelectorAll('.fp-slides').length;
//         // if(shouldAutoPlay && hasSlides){*/}
//         //     g_interval = setInterval(function () {*/}
//         //         fullpageApi.moveSlideRight();*/}
//         //     }, lapse);*/}
//         // }*/}
//     }}
//     {...fullpageProps}
//     render={({ state, fullpageApi }) => {
//         console.log("render prop change", state); // eslint-disable-line no-console
//         if (state.callback === "onLeave") {
//             if (state.direction === "down") {
//                 console.log("going down..." + state.origin.index);
//             }
//         }
//         return (
//             <EventsDiv id="fullpage-wrapper">
//                 <div className="section" autoPlay
//                     <div className="slide" >
//                         <div>
//                             <h2>George Lauder</h2>
//                         </div>
//                     </div>
//                     <div className="slide" >
//                         <div>
//                             <h2>Sylvia Plath</h2>
//                         </div>
//                     </div>
//                     <div className="slide">
//                         <h3>Slide 2.3</h3>
//                     </div>
//                 </div>
//             </EventsDiv>
//         );
//     }}
// />
// export default Test;
//
// const EventsDiv = styled.div`
//   background: midnightblue;
//   height: 100vh;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-content: center;
//   margin: auto;
// `
//
// const SliderDiv = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-content: center;
//   margin: auto;
// `