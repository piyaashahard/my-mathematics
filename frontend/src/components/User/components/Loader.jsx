import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading-screen">
        <div className="solid">
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
          <div className="side" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  :root {
    --i: 0;
  }

  .loading-screen[move="1"] {
    animation: disappear 2s ease-in-out forwards;
  }
  .loading-screen[move="2"] {
    animation: reappear 2s ease-in-out forwards;
  }

  @keyframes disappear {
    0% {
      opacity: 100%;
      transform: translateY(0%);
    }
    50% {
      background-color: transparent;
      opacity: 0%;
    }
    100% {
      transform: translateY(100%);
    }
  }

  @keyframes reappear {
    0% {
      opacity: 0%;
      transform: translateY(100%);
      background-color: transparent;
    }
    50% {
      opacity: 100%;
    }
    100% {
      background-color: #d8e0d8;
      transform: translateY(0%);
    }
  }

  .solid {
    position: relative;
    width: 100px;
    height: 100px;
    animation: spin 16s infinite linear;
    transform-style: preserve-3d;
  }
  .solid .side {
    position: absolute;
    left: 0;
    bottom: 50%;
    border-bottom: 86.6px solid black;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    transform-origin: 50% 0%;
  }
  .solid .side:nth-child(1) {
    transform: translateY(-9.25px) rotateY(72deg) rotateX(52.62deg);
    border-bottom-color: rgba(134, 7, 147, 0.4);
  }
  .solid .side:nth-child(2) {
    transform: translateY(-9.25px) rotateY(144deg) rotateX(52.62deg);
    border-bottom-color: rgba(42, 160, 39, 0.4);
  }
  .solid .side:nth-child(3) {
    transform: translateY(-9.25px) rotateY(216deg) rotateX(52.62deg);
    border-bottom-color: rgba(209, 83, 84, 0.4);
  }
  .solid .side:nth-child(4) {
    transform: translateY(-9.25px) rotateY(288deg) rotateX(52.62deg);
    border-bottom-color: rgba(244, 202, 236, 0.4);
  }
  .solid .side:nth-child(5) {
    transform: translateY(-9.25px) rotateY(360deg) rotateX(52.62deg);
    border-bottom-color: rgba(73, 232, 200, 0.4);
  }
  .solid .side:nth-child(6) {
    transform: translateY(180.9px) rotateY(468deg) rotateX(127.38deg);
    border-bottom-color: rgba(105, 77, 3, 0.4);
  }
  .solid .side:nth-child(7) {
    transform: translateY(180.9px) rotateY(540deg) rotateX(127.38deg);
    border-bottom-color: rgba(255, 45, 71, 0.4);
  }
  .solid .side:nth-child(8) {
    transform: translateY(180.9px) rotateY(612deg) rotateX(127.38deg);
    border-bottom-color: rgba(177, 172, 3, 0.4);
  }
  .solid .side:nth-child(9) {
    transform: translateY(180.9px) rotateY(684deg) rotateX(127.38deg);
    border-bottom-color: rgba(175, 200, 228, 0.4);
  }
  .solid .side:nth-child(10) {
    transform: translateY(180.9px) rotateY(756deg) rotateX(127.38deg);
    border-bottom-color: rgba(187, 195, 141, 0.4);
  }
  .solid .side:nth-child(11) {
    transform: translateY(43.3px) rotateY(828deg) translateZ(85.05px)
      rotateX(-10.81deg);
    border-bottom-color: rgba(212, 249, 1, 0.4);
  }
  .solid .side:nth-child(12) {
    transform: translateY(43.3px) rotateY(900deg) translateZ(85.05px)
      rotateX(-10.81deg);
    border-bottom-color: rgba(85, 161, 43, 0.4);
  }
  .solid .side:nth-child(13) {
    transform: translateY(43.3px) rotateY(972deg) translateZ(85.05px)
      rotateX(-10.81deg);
    border-bottom-color: rgba(15, 209, 47, 0.4);
  }
  .solid .side:nth-child(14) {
    transform: translateY(43.3px) rotateY(1044deg) translateZ(85.05px)
      rotateX(-10.81deg);
    border-bottom-color: rgba(131, 69, 22, 0.4);
  }
  .solid .side:nth-child(15) {
    transform: translateY(43.3px) rotateY(1116deg) translateZ(85.05px)
      rotateX(-10.81deg);
    border-bottom-color: rgba(43, 13, 170, 0.4);
  }
  .solid .side:nth-child(16) {
    transform: translateY(128.35px) rotateY(1152deg) rotateZ(180deg)
      translateZ(85.05px) rotateX(-10.81deg);
    border-bottom-color: rgba(68, 85, 95, 0.4);
  }
  .solid .side:nth-child(17) {
    transform: translateY(128.35px) rotateY(1224deg) rotateZ(180deg)
      translateZ(85.05px) rotateX(-10.81deg);
    border-bottom-color: rgba(159, 76, 176, 0.4);
  }
  .solid .side:nth-child(18) {
    transform: translateY(128.35px) rotateY(1296deg) rotateZ(180deg)
      translateZ(85.05px) rotateX(-10.81deg);
    border-bottom-color: rgba(54, 95, 172, 0.4);
  }
  .solid .side:nth-child(19) {
    transform: translateY(128.35px) rotateY(1368deg) rotateZ(180deg)
      translateZ(85.05px) rotateX(-10.81deg);
    border-bottom-color: rgba(162, 92, 204, 0.4);
  }
  .solid .side:nth-child(20) {
    transform: translateY(128.35px) rotateY(1440deg) rotateZ(180deg)
      translateZ(85.05px) rotateX(-10.81deg);
    border-bottom-color: rgba(218, 1, 139, 0.4);
  }

  @keyframes spin {
    0% {
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(720deg) rotateZ(1080deg);
    }
  }
`;

export default Loader;
