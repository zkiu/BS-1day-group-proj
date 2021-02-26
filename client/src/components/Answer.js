// import react, {Component} from 'react';
// //option #1//
// function Answer() {

//     clickHandler = (event) => {
//         console.log('button clicked');
//         event.preventDefault();
//     }
//     return (

//         <div className="full-answer">
//             <h1>Did you guess right?</h1>
//             <button onClick={clickHandler} className="button">Get Answer</button>
//              <ul>
//                  <li className="character-name"><h2>{props.picture}</h2></li>
//                 <li className="character-name"><h2>{props.name}</h2></li>
//             </ul>
//         </div>
//     )
// }

// //option #2//
// class GiveAnswer extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             picture: '',
//             name:'',
//         }
//         this.clickHandlerTwo = this.clickHandlerTwo.bind (this)
//     }

//     clickHandlerTwo() {
//         this.setState({
//            picture:{this.name.picture},
//            name:{this.name.name},
//         })
//         console.log(this)
//     }
//     render (){
//         return (
//             <div>
//                 <div>{this.state.picture}</div>
//                 <div>{this.state.name}</div>
//                 <button onClick={this.clickHandlerTwo}>Get Answer</button>
//             </div>
//         )
//     }
// }

// // export default Answer;
// // export default GiveAnswer;

// import react from "react";

// function Answer(props) {
//   return (
//     <ul className="full-answer">
//       <li key={props.id} className="character-name">
//         <h2>{props.name}</h2>
//       </li>
//     </ul>
//   );
// }

// export default Answer;
