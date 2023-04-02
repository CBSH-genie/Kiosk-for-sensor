import React, {useState} from 'react'
import '../App.css'

function Numpad() {

  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    // logic for processing user input
  }

  // https://youtu.be/U9MvFwGlqR4

  return (
    <div className='Numpad'>
      <section className='keyboard'>
        <div className='keyboard-row'>
          <button className='one-block'>7</button>
          <button className='one-block'>8</button>
          <button className='one-block'>9</button>
        </div>
        <div className='keyboard-row'>
          <button className='one-block'>4</button>
          <button className='one-block'>5</button>
          <button className='one-block'>6</button>
        </div>
        <div className='keyboard-row'>
          <button className='one-block'>1</button>
          <button className='one-block'>2</button>
          <button className='one-block'>3</button>
        </div>
        <div className='keyboard-row'>
          <button className='one-block'>del</button>
          <button className='one-block'>0</button>
          <button className='one-block'>enter</button>
        </div>
      </section>

    </div>
  )
}

export default Numpad
