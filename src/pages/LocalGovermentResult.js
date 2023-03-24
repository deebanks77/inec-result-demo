import React, { useState } from "react";
import styled from "styled-components";
import { localGovermentList, LGResult } from "../data";

function LocalGovermentResult() {
  const [pollingUnit, setPollingUnit] = useState("Aniocha North");

  return (
    <Wrapper>
      <div className="header">
        <h1>independent National electoral commission</h1>
        <h1 style={{ color: "crimson" }}>
          statement of result from local goverment
        </h1>
        <h1>2011 presidential election</h1>
      </div>
      <div>
        <label htmlFor="localGoverment">Select a Local Goverment: </label>{" "}
        <select
          name="localGoverment"
          id="localGoverment"
          onChange={(e) => setPollingUnit(e.target.value)}
        >
          {localGovermentList.map((localG) => {
            return (
              <option key={localG} value={localG}>
                {localG}
              </option>
            );
          })}
        </select>
      </div>
      {/* Local Goverment Table Result */}
      <div className="lgTable">
        <h2 className="tableHead">{pollingUnit} Local Goverment</h2>

        <div className="table">
          <table className="resultTable">
            <thead>
              <tr>
                <th>Result ID</th>
                <th>lga Name</th>
                <th>Party Abbreviation</th>
                <th>Party Score</th>
                <th>Entered by User</th>
                <th>Date Entered</th>
                <th>User IP address</th>
              </tr>
            </thead>

            {LGResult[pollingUnit]?.map((unit) => {
              const {
                resultID,
                lgaName,
                partyAbbreviation,
                partyScore,
                EnteredByUser,
                dateEntered,
                userIpAddress,
              } = unit;

              return (
                <tbody key={partyAbbreviation}>
                  <tr>
                    <td>{resultID}</td>
                    <td>{lgaName}</td>
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
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 10px;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-transform: capitalize;
  }
  h1 {
    text-align: center;
    color: crimson;
  }
  label {
    font-size: 20px;
    color: #04aa6d;
  }
  #localGoverment {
    margin-top: 20px;
    padding: 5px;
  }

  .tableHead {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .table {
    width: 100%;
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

export default LocalGovermentResult;
