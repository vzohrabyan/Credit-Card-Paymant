import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
import {BiSolidError} from "react-icons/bi"
import {TiDelete} from "react-icons/ti"
import "./Loading.scss"

const Loading = ({complete}) => {
  return (
    <div className="loading">
        <div className="loading-modal">
            <div className="response">
                <div className="loading-circle"></div>
                <p>Please wait,your request has been sent, if everything goes well, it will be posted, it will take a few seconds</p>
            </div>
            <div className="success">
                {(complete === "done") ?  (
                    <>
                        <AiFillCheckCircle className='success-icon' style={{color: "rgb(42, 141, 42)"}}/>
                        <p>Your transfer has been completed</p>
                    </>
                ) : (complete === "dont have enough balance") ? (
                        <>
                            <BiSolidError className='success-icon' style={{color: "rgb(205, 189, 44)"}}/>
                            <p>You dont have enough balance</p>
                        </>
                ) : (
                    <> 
                            <TiDelete className='success-icon' style={{color: "red"}} />
                            <p>Sorry, but we don't have a cheetah card in our database</p>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default Loading