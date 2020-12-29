import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  selectEmpty: {
    marginLeft: theme.spacing(2),
    minWidth: 75,
    '& > div': {
      paddingLeft: 10,
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPage: {
    width: 70,
    textAlign: 'center',
    marginRight: 10,
    '& input': {
      textAlign: 'center',
    },
  },
  pageNumber: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
