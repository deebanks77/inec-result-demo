import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import image from "../img/INEC.png";
// import PollingUnit from "../pages/PollingUnit";

function Navbar() {
  const [active, setActive] = useState("inec-result-demo");
  console.log(active);
  return (
    <Wrapper>
      <div className="image">
        <img src={image} alt="Inec" />
      </div>
      <ul>
        <li>
          <NavLink
            to="/inec-result-demo"
            onClick={() => setActive("pollingUnit")}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Polling Unit
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/localGoverment"
            onClick={() => setActive("localGoverment")}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Local Goverment
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/newPollingUnit"
            onClick={() => setActive("newPollingUnit")}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            New Polling Unit
          </NavLink>{" "}
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: green;
  padding-left: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  /* gap: 100px; */
  .image {
    height: 40px;
    width: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: white;
      font-weight: 400;
    }
  }
  .active {
    background-color: white;
    border: 1px solid white;
    border-radius: 5px;
    color: green;
    padding: 5px;
  }
`;

export default Navbar;
