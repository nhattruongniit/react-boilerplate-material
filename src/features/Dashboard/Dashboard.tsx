import React from 'react';
import Chart from 'react-apexcharts';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  table: {
    width: '100%',
  },
  progressInprocess: {
    '& div': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  progressCompleted: {
    '& div': {
      backgroundColor: theme.palette.success.main,
    },
  },
}));

function createData(status: string, number: number) {
  return { status, number };
}

const rows = [createData('Meat', 44), createData('Vegetable', 55), createData('Rice', 13)];

function createDataTodo(title: string, author: string, progress: number, status: string) {
  return { title, author, progress, status };
}

const todos = [
  createDataTodo('Learn React', 'Tony Nguyen', 100, 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 0, 'New'),
  createDataTodo('Learn React', 'Tony Nguyen', 20, 'Inprocess'),
  createDataTodo('Learn React', 'Tony Nguyen', 100, 'Completed'),
  createDataTodo('Learn React', 'Tony Nguyen', 0, 'New'),
  createDataTodo('Learn React', 'Tony Nguyen', 60, 'Inprocess'),
];

function createDataUser(email: string, role: string) {
  return { email, role };
}

const users = [
  createDataUser('nhattruong1811@gmail.com', 'Admin'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('khanh@gmail.com', 'Collaborator'),
  createDataUser('minh@gmail.com', 'Collaborator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
  createDataUser('david@gmail.com', 'Operator'),
];

const options: any = {
  chart: {
    type: 'pie',
  },
  labels: ['Meat', 'Vegetable', 'Rice'],
};

const series = [44, 55, 13];

function LinearProgressWithLabel(props: any) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

function Dashboard() {
  const classes = useStyles();

  return (
    <div>
      <h2>Report</h2>
      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Box m={2}>
              <Grid container item xs={12}>
                <h2>Products</h2>
              </Grid>
              <Grid container justify="space-between">
                <Grid item xs={12} sm={12} md={4}>
                  <TableContainer>
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Category</TableCell>
                          <TableCell align="right" />
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, idx) => (
                          <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                              {row.status}
                            </TableCell>
                            <TableCell align="right">{row.number}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <Grid container justify="center" item xs={12} sm={12} md={6}>
                  <div>
                    <FormControlLabel control={<Checkbox size="small" name="legend" color="primary" />} label="Legend" />
                    <br />
                    <Chart options={options} series={series} type="pie" width={500} />
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <Paper>
            <Box m={2}>
              <Grid container item xs={12}>
                <h2>Tasks</h2>
              </Grid>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell width="30%">Title</TableCell>
                      <TableCell width="25%">Author</TableCell>
                      <TableCell width="30%">Progress</TableCell>
                      <TableCell width="15%">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell>{row.author}</TableCell>
                        <TableCell>
                          <LinearProgressWithLabel
                            className={clsx(
                              row.progress > 0 && row.progress < 99 && classes.progressInprocess,
                              row.progress === 100 && classes.progressCompleted,
                            )}
                            value={row.progress}
                          />
                        </TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Paper>
            <Box m={2}>
              <Grid container item xs={12}>
                <h2>Users</h2>
              </Grid>
              <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell component="th" scope="row">
                          {row.email}
                        </TableCell>
                        <TableCell>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
