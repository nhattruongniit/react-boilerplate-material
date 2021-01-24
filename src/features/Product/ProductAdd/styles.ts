import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  boxButtons: {
    '& button + button': {
      marginLeft: 24,
    },
  },
  head: {},
  headTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    '& span': {
      display: 'inline-block',
      marginRight: 5,
    },
  },
  headLead: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  textError: {
    color: '#f44336',
  },
  checkLocales: {
    display: 'flex',
    alignItems: 'center',
    '& span': {
      fontSize: 14,
    },
  },
  aliasLocales: {
    flexGrow: 1,
  },
  iconClose: {
    flex: '0 0 48px',
  },
  externalLink: {
    marginBottom: 20,
  },
  alertRoot: {
    margin: '12px 0',
    '& p': {
      padding: 0,
      margin: 0,
      fontSize: 12,
    },
    '& span': {
      fontSize: 12,
    },
  },
  alertTitle: {
    '& div': {
      marginBottom: 5,
    },
  },
  alertLink: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
    fontSize: 12,
    marginTop: 10,
    textDecoration: 'underline',
  },
  aliasArtist: {
    '& + &': {
      marginTop: 20,
    },
  },
}));

export default useStyles;
