import React from 'react'

import "./Scoreboard.css"

function Scoreboard({scores,xPlaying}) {

  const {xScore, oScore} =scores

  return (
    <div className='scoreborad'>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  )
}

export default Scoreboard