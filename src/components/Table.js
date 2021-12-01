import styled from "styled-components";
import Fade from "react-reveal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#32ABFD",
    color: "white",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F5F5F5",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function BasicTable({ title, schedule }) {
  const eventSchedule = schedule;

  return (
    <Fade bottom>
      <br />
      <TableTitle>{title}</TableTitle>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Time</StyledTableCell>
              <StyledTableCell align="center">Duration</StyledTableCell>
              <StyledTableCell align="center">Programs</StyledTableCell>
              {title === "Day 2" && (
                <StyledTableCell align="center">Venue</StyledTableCell>
              )}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {eventSchedule.map((row) => (
              <StyledTableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row" align="center">
                  {row.time}
                </StyledTableCell>
                <StyledTableCell align="center">{row.duration}</StyledTableCell>
                <StyledTableCell align="center">{row.program}</StyledTableCell>
                {title === "Day 2" && (
                  <StyledTableCell align="center">
                    {row.venue}
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fade>
  );
}

const TableTitle = styled.h2`
  text-align: center;
  color: white;
`;
