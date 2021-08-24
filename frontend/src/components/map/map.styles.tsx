import styled, { css } from 'styled-components';

const ReactLeafletGeosearchCSS = css`
/* global styling */
.leaflet-control-geosearch *,
.leaflet-control-geosearch *:before,
.leaflet-control-geosearch *:after {
  box-sizing: border-box;
}

/* leaflet button styling */
.leaflet-control-geosearch .leaflet-bar-part {
  border-radius: 4px;
  border-bottom: none;
  ///
  width: 40px;
  height: 40px;
}

.leaflet-control-geosearch a.leaflet-bar-part:before,
.leaflet-control-geosearch a.leaflet-bar-part:after {
  position: absolute;
  display: block;
  content: '';
}

/* magnifying glass */
.leaflet-control-geosearch a.leaflet-bar-part:before {
  top: 26px;
  left: 21px;
  width: 10px;
  border-top: 2px solid #555;
  transform: rotateZ(45deg);
}

.leaflet-control-geosearch a.leaflet-bar-part:after {
  top: 10px;
  left: 10px;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid #555;
}

/* resets for pending and error icons */
.leaflet-control-geosearch.error a.leaflet-bar-part:before,
.leaflet-control-geosearch.pending a.leaflet-bar-part:before {
  display: none;
}

.leaflet-control-geosearch.pending a.leaflet-bar-part:after,
.leaflet-control-geosearch.error a.leaflet-bar-part:after {
  left: 50%;
  top: 50%;
  width: 18px;
  height: 18px;
  margin: -9px 0 0 -9px;
  border-radius: 50%;
}

/* pending icon */
.leaflet-control-geosearch.pending a.leaflet-bar-part:after {
  content: '';
  border: 2px solid #555;
  border-top: 2px solid #f3f3f3;
  animation: spin 1s linear infinite;
}

/* error icon */
.leaflet-control-geosearch.error a.leaflet-bar-part:after {
  content: '!';
  line-height: initial;
  font-weight: 600;
  font-size: 18px;
  border: none;
}

/* search form styling */
.leaflet-control-geosearch form {
  display: none;
  position: absolute;
  top: -2px;
  left: 28px;
  border-radius: 0 4px 4px 0;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-left: none;
  background-color: #fff;
  background-clip: padding-box;
  z-index: -1;
  height: auto;
  margin-right: 14px;
  padding: 0 8px;
}

.leaflet-control-geosearch.active form {
  display: block;
}

.leaflet-control-geosearch form input {
  min-width: 200px;
  width: 100%;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  font-size: 12px;
  height: 40px;
  border-radius: 0 4px 4px 0;
  text-indent: 8px;
}

.leaflet-control-geosearch .results {
  background: #fff;
  ///////
  position: absolute;
  bottom:105%;
  width: 100%;
  right: .5%;
}

.leaflet-control-geosearch .results > * {
  line-height: 24px;
  padding: 0 8px;
  border: 1px solid transparent;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.leaflet-control-geosearch .results.active {
  padding: 8px 0;
  border-top: 1px solid #c6c6c6;
}

.leaflet-control-geosearch .results > .active,
.leaflet-control-geosearch .results > :hover {
  background-color: #f8f8f8;
  border-color: #c6c6c6;
  cursor: pointer;
}

/* add missing border to form */
.leaflet-control-geosearch .results.active:after {
  content: '';
  display: block;
  width: 0;
  border-left: 2px solid rgba(0, 0, 0, .2);
  position: absolute;
  left: -2px;
  bottom: -2px;
  top: 30px;
}

/* animations */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.leaflet-top .leaflet-control-geosearch.bar,
.leaflet-bottom .leaflet-control-geosearch.bar {
  display: none;
}

.leaflet-control-geosearch.bar {
  /* position: relative; */
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  display: block;
  height: auto;
  width: 200px;
  margin: 10px auto 0;
  cursor: auto;
  z-index: 1000;
}

.leaflet-control-geosearch.bar form {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

.leaflet-control-geosearch.bar form input {
  min-width: 100%;
  width: 100%;
}

.leaflet-control-geosearch.bar .results.active:after {
  opacity: .2;
}

.leaflet-right .leaflet-control-geosearch form {
  right: 28px;
  left: initial;
  border-radius: 4px 0 0 4px;
  border-left: inherit;
  border-right: none;
}

.leaflet-control-geosearch a.reset {
  color: black;
  position: absolute;
  line-height: 40px;
  padding: 0 8px;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
}

.leaflet-control-geosearch a.reset:hover {
  background: #f5f5f5;
}

@media only screen and (min-width: 576px){
  .leaflet-control-geosearch form input {
    min-width: 400px;
  }
}
`

// https://coolors.co/26532b-399e5a-5abcb9-63e2c6-6ef9f5
const LeafletContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .fetch-btn {
    position: absolute;
    z-index: 500;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    white-space: nowrap;
    font-size: 1em;
    font-weight: 700;
    color: #0d4c75;
    padding: 12px 40px;
    border: none;
    border: 2px solid #5ABCB9;
    border-radius: 20px;
    background: #63E2C6;
    cursor: pointer;
    letter-spacing: 0.5px;
    transition: all .3s ease;

    &:hover {
      background: #0d4c75;
      color: #63E2C6;
      border-color: #0d4c75;
    }
}

  .bouncy{
        animation:bouncy 5s infinite linear;
      }

  @keyframes bouncy {
    0%{top:80%}
    40%{top:80%}
    43%{top:78%}
    46%{top:80%}
    48%{top:78%}
    50%{top:80%}
    100%{top:80%;}
  } 

  & > div{
    width: 100%;
    height: 100%;

    ${ReactLeafletGeosearchCSS}
  }
`;

export default LeafletContainer;
