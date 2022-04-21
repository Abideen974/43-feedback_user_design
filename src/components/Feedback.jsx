import React from 'react'
import './feedback.css'
function Feedback() {
  return (
    <>
        <div id="panel" className="panel container">

            <strong>How satistied are you with our <br />
            customer support performance?</strong>
            <div className="ratings-container">
                <div className="rating">
                    <img src="https://image.flaticon.com/icons/svg/187/187150.svg" alt="" />
                    <small>Unhappy</small>
                </div>

                <div className="rating active">
                    <img src="https://image.flaticon.com/icons/svg/187/187136.svg" alt="" />
                    <small>Unhappy</small>
                </div>

                <div className="rating">
                    <img src="https://image.flaticon.com/icons/svg/187/187133.svg" alt="" />
                    <small>Sarisfied</small>
                </div>

            </div>
            <button className="btn" id="send">Send Reviwed</button>
        </div>
        
    </>
  )
}

export default Feedback