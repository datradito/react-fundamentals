// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// const smallBox = <div className="box box--small" style={{backgroundColor: "lightblue" }}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: "pink" }}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: "orange" }}>large orange box</div>

const Box = ( props) => {
  const {size , style, txt} = props
  const boxSize = {
    small:"box--small",
    medium:"box--medium",
    large:"box--large"
  }
  console.log(boxSize[size])

  return (
    <div className={`${boxSize[size]} box`} style={{...style, fontStyle: "italic"}}>
      {txt}
    </div>
  )}
function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: "lightblue" }} txt="small lightblue box"/>
      <Box size="medium" style={{ backgroundColor: "pink" }} txt="medium pink box"/>
      <Box size="large" style={{ backgroundColor: "orange" }} txt="large orange box"/>
    </div>
  )
}

export default App
