import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Industry.css";

function Industry({ industryData, parameters }) {
  return (
    <div className="industry">
      <h2>Industry Page</h2>
      <Link to="/industry/register">
        <button className="add-industry-button">Add Industry</button>
      </Link>
      {/* Display the list of registered industries in a styled table */}
      <Paper className="table-container">
        <Table>
          <TableHead>
            <TableRow className="table-header-row">
              <TableCell className="table-cell">Industry Name</TableCell>
              <TableCell className="table-cell">Category</TableCell>
              {/* Include the added parameters in the table header */}
              {parameters.map((param, index) => (
                <TableCell key={index} className="table-cell">
                  {param}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {industryData.map((industry, index) => (
              <TableRow
                key={index}
                className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
              >
                <TableCell className="table-cell">
                  {industry.industryName}
                </TableCell>
                <TableCell className="table-cell">
                  {industry.industryCategory}
                </TableCell>
                {/* Include the added parameters in the table row */}
                {parameters.map((param, index) => (
                  <TableCell key={index} className="table-cell">
                    {industry[param] ? "Yes" : "No"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Industry;
