import React from "react";
import Background from "../assets/images/sidebarbackground.png";
import styled from "styled-components";

const Styles = styled.div`
  .jumbo {
    background: url(${Background}) no-repeat fixed;
    background-size: 100% 100%;
    color: #ccc;
    height: 100vh;
    min-height: 400px;
    position: relative;
    z-index: 0;
  }

  .overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .title-div {
    position: relative;
    width: 100%;
    height: 100%;
    display flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    z-index: 2;
    position: relative;
    padding-left: 75px;
    padding-right: 75px;
  }

  .title p {
    font-size: 6vh;
    color: white;
  }

  .title h1 {
    font-size: 12vh;
    color: white;
  }

  .stage-overlay {
    position: absolute;
    // top: 0;
    // left: 0;
    bottom: 0;
    right: 0;
  }

  .stage {
    display: flex;
    position: relative;
    bottom: 0;
    right: 0;
    // border: 10px solid white;
    margin-right: 150px;
    margin-bottom: 20px;
    width: 40px;
    height: auto;
    -webkit-transition-duration: 0.5s; /* Safari */
    transition-duration: 0.5s;
  }

  .stage:hover {
    opacity: 0.8;
  }

  .stage:active {
    opacity: 0.5;
    -webkit-transition-duration: 0s; /* Safari */
    transition-duration: 0s;
  }

  .box {
    align-self: flex-end;
    animation-iteration-count: infinite;
    width: 100%;
    height: auto;
    margin: 0 auto 0 auto;
    transform-origin: bottom;
    cursor: pointer;
  }

  .bounce {
    animation-duration: 2s;
    animation-name: bounce;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes bounce {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1, 1) translateY(2px);
    }
    30% {
      transform: scale(1, 1) translateY(-40px);
    }
    50% {
      transform: scale(1, 1) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-4px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    70% {
      transform: scale(1, 1) translateY(-2px);
    }
    75% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  .bounce-arrow {
    animation-duration: 2s;
    animation-name: bounce-arrow;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }

  @keyframes bounce-arrow {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-30px);
    }
    50% {
      transform: scale(1.05, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-3px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    70% {
      transform: scale(1, 1) translateY(-1px);
    }
    75% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  @media screen and (max-width: 895px) {
    .header {
      z-index: 2;
      position: absolute;
      width: 100%;
      top: 20%;
      overflow: hidden;
    }
  }

  @media screen and (max-width: 600px) {
    .stage-overlay {
      position: absolute;
      // top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .stage {
      display: flex;
      position: relative;
      bottom: 0;
      right: 0;
      // border: 10px solid white;
      margin-right: 0px;
      margin-bottom: 20px;
      width: 40px;
      height: auto;
    }

    .header h1 {
      font-size: 12vh;
      color: white;
      text-align: center;
      // border: 1px solid white;
      padding-left: 40px;
      padding-right: 40px;
    }

    .header p {
      font-size: 6vh;
      color: white;
      text-align: center;
      // border: 1px solid white;
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  interests::before { 
    content: "Software"; 
  
    animation-duration: 3s;
    animation-name: animate;
    animation-iteration-count: infinite;    
  } 

  @keyframes animate { 
    0% { 
      content: "Software"; 
    } 
    25% { 
      content: "Learning"; 
    } 
    50% { 
      content: "Investing"; 
    } 
    75% { 
      content: "Travelling"; 
    } 
    100% { 
      content: "Software"; 
    } 
  }

  @-webkit-keyframes animate { 
    0% { 
      content: "Learning"; 
    } 
    25% { 
      content: "Software"; 
    } 
    50% { 
      content: "Investing"; 
    } 
    75% { 
      content: "Travelling"; 
    } 
    100% { 
      content: "Software"; 
    } 
} 
`;

type MyProps = {
  // using `interface` is also ok
  message?: string;
};
type MyState = {
  count: number; // like this
};
class SideBar extends React.Component<MyProps, MyState> {
  render() {
    return (
        <Styles>
          <div className="jumbo">
            <div data-align="center" />
            <div className="title-div">
              <div className="title">
                <h1>Jerome Lieow</h1>
                <hr style={{ borderBottom: "2px solid white" }} />
                <p>
                  Engineer
                </p>
              </div>
              </div>
          </div>
      </Styles>
    );
  }
}

export default SideBar;
