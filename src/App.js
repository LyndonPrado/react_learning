import React,{useState} from 'react'
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      {name: 'Max', age:28 },
      {name: 'Manu', age:29 },
      {name: 'Stephanie', age:26}
    ]
  });

  const [ otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);
  const switchNameHandler = (Name) => {
    console.log('Was clicked!');
    setPersonsState({
      persons:[
      {name: Name, age:28 },
      {name: 'Manu', age:29 },
      {name: 'Stephanie', age:27}
      ]
    });
  };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={personsState.persons[0].name} 
          age={personsState.persons[0].age}></Person>
        <Person 
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
          click={() => switchNameHandler('Max')}>My Hobbies: Racing</Person>
        <Person 
          name={personsState.persons[2].name} 
          age={personsState.persons[2].age}></Person>
      </div>
    );
};
export default App;
