import React, { useState, memo } from 'react';
import clsx from 'clsx';

// material core
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';

// material icon
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

// types
import { INavBarExpandItem } from 'models/INavBar';

// styles
import useStyles from './styles';

function NavBarExpandItem({ title, icon: Icon, open = false, children, style }: INavBarExpandItem) {
  const classes = useStyles();
  const [isExpand, setIsExpand] = useState(open);

  const handleToggle = () => {
    setIsExpand((prevOpen: boolean) => !prevOpen);
  };

  return (
    <ListItem className={clsx(classes.item)} disableGutters key={title}>
      <Button className={classes.button} onClick={handleToggle} style={style}>
        {Icon && <Icon className={classes.icon} size="20" />}
        <span className={classes.title}>{title}</span>
        {isExpand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </Button>
      <Collapse in={isExpand}>{children}</Collapse>
    </ListItem>
  );
}

export default memo(NavBarExpandItem);
