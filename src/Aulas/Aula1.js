import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Componente de classe



// Eliminando o constructor (Public class fields)
// constructor(props) {
//   super(props);

//   //Bind do this (método handlePClick)
//   this.handlePClick = this.handlePClick.bind(this);

//   this.state = {
//     name: 'Victor',
//     counter: 0
//   };
class App extends Component {
  state = {
    name: 'Victor',
    counter: 0
  };

  handlePClick = () => {
    this.setState({ name: 'Medrado' });
  }

  //Se criado o método com arrow function, não necessário fazer o bind (hack)
  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    //Pegando direto do estado (sem destructuring)
    //const name = this.state.name;

    //Atribuindo com destructuring
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* Eventos sintéticos React */}
          {/* <p onClick={() => console.log('clique')}> Passando o evento direto no elemento*/}

          {/* Usando métodos */}
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>

          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link A
          </a>
        </header>
      </div >
    );
  }

}

// handlePClick() {
//   //Forma longa:

//   //Só é possível usar o this no método, após fazer o bind

//   // const {name} = this.state;
//   // console.log(`clique ${name}`);

//   //Mudando o state no evento clique
//   this.setState({ name: 'Medrado' });
// }









//Componente de função
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
