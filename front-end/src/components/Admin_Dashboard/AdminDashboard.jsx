import React from "react";
import { AppBar, Toolbar, Typography, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Card, Box, Stack } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";


function AdminDashboard() {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    {
      id: "population",
      label: "Pickup",
      minWidth: 170,
    },
    {
      id: "size",
      label: "Drop",
      minWidth: 170,
    },
    {
      id: "density",
      label: "Dual Trip",
      minWidth: 170,
    },
    {
      id: "density",
      label: "Number of People",
      minWidth: 170,
    },
    {
      id: "density",
      label: "Document",
      minWidth: 170,
    },
    {
      id: "density",
      label: "Action",
      minWidth: 170,
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 

  return (
    <>
      <AppBar position="static" style={{width:'100wh'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PSG Cars
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
   

      <h1 style={{ color: "lightblue", fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', marginBottom:'50px' }}>Welcome Admin!</h1>
      <h3 style={{color:'lightblue', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif' }}>Booking Requests</h3>

      <Paper sx={{ width: "100%" , borderStyle:'solid', borderColor:'lightblue' }}>
        <TableContainer sx={{ maxHeight: 440}}>
          <Table stickyHeader aria-label="sticky table" >
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth , color:'lightblue', backgroundColor: '#121212' , fontWeight:'bolder'}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align} style={{color:'white' , backgroundColor: '#121212'}}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{color:'lightblue', backgroundColor: '#121212'}}
        />
      </Paper>
      <h3 style={{color:'lightblue', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif' }}>Ongoing Booking</h3>

<Paper sx={{ width: "100%" , borderStyle:'solid', borderColor:'lightblue' }}>
  <TableContainer sx={{ maxHeight: 440 }}>
    <Table stickyHeader aria-label="sticky table" >
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.align}
              style={{ minWidth: column.minWidth , color:'lightblue', backgroundColor: '#121212'}}
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.code}
              >
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align} style={{color:'white' , backgroundColor: '#121212'}}>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  </TableContainer>
  <TablePagination
    rowsPerPageOptions={[10, 25, 100]}
    component="div"
    count={rows.length}
    rowsPerPage={rowsPerPage}
    page={page}
    onPageChange={handleChangePage}
    onRowsPerPageChange={handleChangeRowsPerPage}
    style={{color:'lightblue', backgroundColor: '#121212'}}
  />
</Paper>
<h3 style={{color:'lightblue', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif' }}>Inbox</h3>
<Card variant="outlined" sx={{ maxWidth: 360, color:'lightblue',backgroundColor: '#121212', borderStyle:'solid', borderColor:'lightblue'}}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: 'space-between', alignItems: 'center' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            My Name
          </Typography>
        </Stack>
        <p>myid@mail.com</p>

        <hr />
        <Typography variant="body2" sx={{ color: 'white' }}>
          This is my message.
        </Typography>
      </Box>

    </Card>
    </>
  );
}
export default AdminDashboard;
