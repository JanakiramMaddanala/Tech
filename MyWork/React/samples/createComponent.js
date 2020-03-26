import React from 'react'
import Logo from './static/images/react-logo.png'

console.log(Logo);

/*
! Functional Component
*/
const App = () => 
    <div>
        <h1>Hello Functional World!</h1>
        <img src={Logo} alt='React Logo'/>
    </div>

/* 
! Class based component
*/
// class App extends React.Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         )
//     }
// }

export default App;
