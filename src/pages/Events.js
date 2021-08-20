import * as React from 'react'
import Hero from "../components/Hero";
import {Button} from "../components/Button";
import Layout from "../components/Layout";
import ocean from '../images/ocean.jpg';
// import ReactFullpage from "@fullpage/react-fullpage/components/ReactFullpage";

const EventPage = () => {

//     const onLeave = (origin, destination, direction) =>  {
//         console.log("Leaving section " + origin.index);
//     }
//     const afterLoad = (origin, destination, direction) =>  {
//         console.log("After load: " + destination.index);
//     }
//
//     return (
//         <ReactFullpage
//             scrollOverflow={true}
//             sectionsColor={["orange", "purple", "green"]}
//             onLeave={onLeave}
//             afterLoad={afterLoad}
//             render={({ state, fullpageApi }) => {
//                 return (
//                     <div id="fullpage-wrapper">
//                         <div className="section section1">
//                             <h3>Section 1</h3>
//                         </div>
//                         <div className="section">
//                             <div className="slide">
//                                 <h3>Slide 2.1</h3>
//                             </div>
//                             <div className="slide">
//                                 <h3>Slide 2.2</h3>
//                             </div>
//                             <div className="slide">
//                                 <h3>Slide 2.3</h3>
//                             </div>
//                         </div>
//                         {/*<div className="section">*/}
//                         {/*    <h3>Section 3</h3>*/}
//                         {/*    <button onClick={() => fullpageApi.moveTo(1, 0)}>*/}
//                         {/*        Move top*/}
//                         {/*    </button>*/}
//                         {/*</div>*/}
//                     </div>
//                 );
//             }}
//         />
//     );
//     // }
// }

    return (
        <Layout pageTitle="About Me">
            <Hero
                title={"Our Mission, should you choose to accept it"}
                size={"50vh"}
                image={ocean}

            >
                <div className={"hero-btns"}>
                    <Button fontBig big primary> Join Now</Button>
                </div>
            </Hero>
        </Layout>
    )
}
export default EventPage