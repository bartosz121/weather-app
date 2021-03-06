import styled from 'styled-components';

const LoadingScreenContainer = styled.div`
    min-height: 100vh;
    min-width: 97vw;
    background: #1d2630;

    .spinner-box {
        width: 200px;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;

        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }

    /* ALTERNATING ORBITS */

    .circle-border {
        width: 150px;
        height: 150px;
        padding: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgb(63,249,220);
        background: linear-gradient(0deg, rgba(63,249,220,0.1) 33%, rgba(63,249,220,1) 100%);
        animation: spin .8s linear 0s infinite;
    }

    .circle-core {
        width: 100%;
        height: 100%;
        background-color: #1d2630;
        border-radius: 50%;
    }

    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to{
            transform: rotate(359deg);
        }
    }
`

export default LoadingScreenContainer;