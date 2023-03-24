import React from "react";
import styled from "styled-components";
import image from "../img/INEC.png";

function Footer() {
  return (
    <Wrapper>
      <div className="image">
        <img src={image} alt="Inec" />
      </div>

      <h3>National Electoral Commission</h3>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 80px;
  width: 100%;
  margin-top: 60px;
  border-top: 1px solid gray;
  display: flex;
  align-items: center;
  .image {
    height: 50px;
    width: 50px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  h3 {
    color: green;
  }
`;

export default Footer;
