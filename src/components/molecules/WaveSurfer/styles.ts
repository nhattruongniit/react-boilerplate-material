import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  wavePlay: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    padding: '0 10px',
    '& button': {
      border: 0,
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      width: 40,
      height: 40,
      flex: '0 0 40px',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      margin: '0 30px 0 10px',
      outline: 0,
      '& svg': {
        color: '#fff',
      },
    },
  },
}));

export default useStyles;
