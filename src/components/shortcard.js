import React from 'react'
import './shortcard.css'
import demo from '../img/krishna-profile.png'
import { Link } from 'react-router-dom'
import creditscore from '../img/credit-score-img.png'

function Shortcard() {
  return (
    <>
       <div className='card-section'>
         <img src={demo} alt='card Profile'/> 
         <h5>krishna yadav</h5>
         <p>Micro LAP</p>
         <p className='number-para'> &#8377; 5,000,00</p>

         <Link to='/'>Approve Now</Link>

         <img className='credit-img' src={creditscore} alt='img'/>

       </div>
    </>
  )
}

export default Shortcard;