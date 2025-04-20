import React, { Component } from 'react'

function Hero({heroName}) {
   if(heroName==='Joker'){
    throw new Error('Not ')
   }
    return (
      <div>
        {heroName}
      </div>
    )
  }

export default Hero 
