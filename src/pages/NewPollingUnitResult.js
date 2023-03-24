import React from "react";
import styled from "styled-components";
import { newPUResult } from "../data";

function NewPollingUnit() {
  return (
    <Wrapper>
      <div className="header">
        <h1>independent National electoral commission</h1>
        <h1 style={{ color: "crimson" }}>
          statement of result of poll from polling unit
        </h1>
        <h1>2011 presidential election</h1>
      </div>
      <div className="puInfo">
        <div className="flex">
          <h3>State :</h3>
          <span>Delta </span>
        </div>
        <div className="flex">
          <h3>State ID:</h3>
          <span>25 </span>
        </div>
        <div className="flex">
          <h3>Local Goverment Area :</h3>
          <span>Isoko South</span>
        </div>
        <div className="flex">
          <h3>Polling Unit ID :</h3>
          <span> 20</span>
        </div>
      </div>
      {/* polling unit result table */}
      <div className="table">
        <table className="resultTable">
          <thead>
            <tr>
              <th>result_id</th>
              <th>PU uniqueID</th>
              <th>Party Abbreviation</th>
              <th>Party Score</th>
              <th>Entered by User</th>
              <th>Date Entered</th>
              <th>User IP address</th>
            </tr>
          </thead>

          {newPUResult.map((result) => {
            const {
              resultID,
              pollingUnitUniqueID,
              partyAbbreviation,
              partyScore,
              EnteredByUser,
              dateEntered,
              userIpAddress,
            } = result;

            return (
              <tbody key={partyAbbreviation}>
                <tr>
                  <td>{resultID}</td>
                  <td>{pollingUnitUniqueID}</td>
                  <td>{partyAbbreviation}</td>
                  <td>{partyScore}</td>
                  <td>{EnteredByUser}</td>
                  <td>{dateEntered}</td>
                  <td>{userIpAddress}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 95%;
  margin: 10px auto;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: capitalize;
  }
  .puInfo {
    margin-top: 20px;
  }
  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      color: green;
    }
  }
  .table {
    margin-top: 20px;
    overflow: scroll;
  }
  .resultTable {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    tr > th {
      background-color: #04aa6d;
      color: white;
    }
    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }
  @media screen and (max-width: 600px) {
    .header {
      font-size: 12px;
    }
    h3 {
      font-size: 14px;
    }
    .table {
      font-size: 14px;
    }
  }
`;

export default NewPollingUnit;
