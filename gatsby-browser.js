require('./src/styles/styles.css')


// exports.shouldUpdateScroll = ({
//     routerProps: { location },
//     getSavedScrollPosition
//   }) => {
//
//     if (location.hash) {
//       return false;
//     }
//
//     return true;
// };

exports.onRouteUpdate = args => {
    if (typeof window !== 'undefined' && args.action == "PUSH") {
        window.scrollTo(0, 0)
    }
}

// exports.shouldUpdateScroll = args => {
//     //  scroll on < back, forward >, refresh, but not link clicks
//     return (
//         args.prevRouterProps == null ||
//         (args.prevRouterProps && args.prevRouterProps.history.action == "POP")
//     ) ? true : false;
// };