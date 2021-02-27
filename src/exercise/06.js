// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  
  const inputRef = React.useRef();
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
    // setUsername(value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(e.target)
    console.log(inputRef.current.value)
    //Another way to access de value from the DOM
    console.log(e.target.elements.usernameInput.value)
    onSubmitUsername(inputRef.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput" >Username:</label>
        <input id="usernameInput" ref={inputRef} onChange={handleChange} type="text" />
        <div style={{color:'rebeccapurple'}}>{error}</div>
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
