import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(roomType, numberOfRooms, fat, carbs, protein) {
  return { roomType, numberOfRooms, fat, carbs, protein };
}

const rows = [
  createData('Двойна', 6, '90 лв', '65 лв', '55 лв'),
  createData('Тройна', 6, '100 лв', '80 лв', '65 лв'),
  createData('Четворна', 3, '110 лв', '90 лв', '75 лв')
];

export default function RoomsTable() {
  const classes = useStyles();

  return (
    <div style={{ paddingBottom: '50px' }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Тип Стая</TableCell>
              <TableCell align="center"> Брой стай от тип</TableCell>
              <TableCell align="left">
                <p className="table-head-p">Цена силен летен</p>
                <span className="table-head-span">(01.07 - 31.08)</span>
              </TableCell>
              <TableCell align="left">
                <p className="table-head-p">Цена слаб летен</p>
                <span className="table-head-span">(01.06 - 30.06) (01.09 - 20.09)</span>
              </TableCell>
              <TableCell align="left">
                <p className="table-head-p">Друг сезон</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.roomType}>
                <TableCell component="th" scope="row">
                  {row.roomType}
                </TableCell>
                <TableCell align="center">{row.numberOfRooms}</TableCell>
                <TableCell align="left">{row.fat}</TableCell>
                <TableCell align="left">{row.carbs}</TableCell>
                <TableCell align="left">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
