import { makeStyles } from '@material-ui/core/styles';

import { IStyles } from './AlertConfirm';

const useStyles = (props: IStyles) =>
  makeStyles(() => ({
    title: {
      display: 'flex',
      alignItems: 'center',
      fontSize: 20,
      color: '#fff',
      padding: 10,
      marginBottom: 10,
      boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12)',
      backgroundColor: props.backgroundColor || '#f44336',
      textTransform: 'capitalize',
      '& svg': {
        marginRight: 10,
      },
    },
  }));

export default useStyles;
