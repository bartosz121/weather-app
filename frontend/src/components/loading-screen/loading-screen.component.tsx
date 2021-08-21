import React from 'react'

import LoadingScreenContainer from './loading-screen.styles'

// https://codepen.io/AlexWarnes/pen/jXYYKL
const LoadingScreen = () => {
    return (
        <LoadingScreenContainer>
            <div className="spinner-box">
                <div className="circle-border">
                    <div className="circle-core" />
                </div>  
            </div>
        </LoadingScreenContainer>
    )
}

export default LoadingScreen
