import React from 'react';


// Function to generate random number
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function sound() {

    const k = randomNumber(1, 3)
  let audio = new Audio("/"+k+".mp3")

  const start = () => {
    audio.play()
  }

  return (
    < div >
      <button onClick={start}>Play</button>
    </div >
  );
}

export default sound;