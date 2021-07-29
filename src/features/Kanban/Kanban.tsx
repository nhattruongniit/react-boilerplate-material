import React, { useState } from 'react';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import AddIcon from '@material-ui/icons/Add';

import TaskViewModal from './components/TaskViewModal';
import TaskEditModal from './components/TaskAddEditModal';

// styles
import useStyles from './styles';

const news = [
  {
    id: 1,
    text: 'Learn react',
    author: 'Tony Nguyen',
  },
  {
    id: 2,
    text: 'Learn javacript',
    author: 'Tony Nguyen',
  },
  {
    id: 3,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    author: 'Tony Nguyen',
  },
  {
    id: 4,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    author: 'Tony Nguyen',
  },
  {
    id: 5,
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    author: 'Tony Nguyen',
  },
];

function Kanban() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAddTask, setIsOpenAddTask] = useState(false);

  function handleCloseDialog() {
    setIsOpen(false);
  }

  function handleCloseDialogAddTask() {
    setIsOpenAddTask(false);
  }

  return (
    <div>
      <Grid container alignItems="center">
        <Grid item sm={8}>
          <h2>Kanban Board</h2>
        </Grid>
        <Grid container item sm={4} justify="flex-end">
          <Button variant="contained" color="primary" size="small" startIcon={<AddIcon />} onClick={() => setIsOpenAddTask(true)}>
            Add Task
          </Button>
        </Grid>
      </Grid>
      <Paper variant="outlined">
        <Box m={2}>
          <Grid container item xs={12} spacing={3} className="m-0">
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Card>
                  <CardHeader className={classes.cardHeader} title="New" />
                  <CardContent>
                    {news.map((row) => (
                      <Paper elevation={3} key={row.id} className={classes.paper}>
                        <CardContent>
                          <Typography variant="body2" component="p">
                            {row.text}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small" color="primary">
                            Edit
                          </Button>
                          <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
                            View
                          </Button>
                          <Grid container justify="flex-end">
                            <Typography variant="body2" color="textSecondary" component="p">
                              {row.author}
                            </Typography>
                          </Grid>
                        </CardActions>
                      </Paper>
                    ))}
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Card>
                  <CardHeader className={clsx(classes.cardHeader, classes.cardHeaderInprocess)} title="In Process" />
                  <CardContent>
                    <Paper elevation={3} className={classes.paper}>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                          continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
                          View
                        </Button>
                        <Grid container justify="flex-end">
                          <Typography variant="body2" color="textSecondary" component="p">
                            Tony Nguyen
                          </Typography>
                        </Grid>
                      </CardActions>
                    </Paper>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={3}>
                <Card>
                  <CardHeader className={clsx(classes.cardHeader, classes.cardHeaderCompleted)} title="Completed" />
                  <CardContent>
                    <Paper elevation={3} className={classes.paper}>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                          continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
                          View
                        </Button>
                        <Grid container justify="flex-end">
                          <Typography variant="body2" color="textSecondary" component="p">
                            Tony Nguyen
                          </Typography>
                        </Grid>
                      </CardActions>
                    </Paper>
                    <Paper elevation={3} className={classes.paper}>
                      <CardContent>
                        <Typography variant="body2" component="p">
                          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all
                          continents except Antarctica
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                        <Button size="small" color="primary" onClick={() => setIsOpen(true)}>
                          View
                        </Button>
                        <Grid container justify="flex-end">
                          <Typography variant="body2" color="textSecondary" component="p">
                            Tony Nguyen
                          </Typography>
                        </Grid>
                      </CardActions>
                    </Paper>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <TaskViewModal isOpen={isOpen} handleCloseDialog={handleCloseDialog} />

      <TaskEditModal isOpen={isOpenAddTask} handleCloseDialogAddTask={handleCloseDialogAddTask} />
    </div>
  );
}

export default Kanban;
