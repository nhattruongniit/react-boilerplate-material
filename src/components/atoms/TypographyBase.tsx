import React, { FC } from 'react';
import clsx from 'clsx';

// material core
import { makeStyles, Theme } from '@material-ui/core/styles';

type IStyles = {
  fontSize?: string;
  fontWeight?: 'normal' | 'bold';
};

type IProps = IStyles & {
  color?:
    | 'primary'
    | 'secondary'
    | 'textPrimary'
    | 'textSecondary'
    | 'lightOrange'
    | 'textPrimaryBlue'
    | 'textLightBlue'
    | 'textReview'
    | 'secondaryOpacity'
    | 'disabledOpacity'
    | undefined;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'a' | 'p' | 'span' | 'caption';
  className?: {};
};

const useStyles = (props: IStyles) =>
  makeStyles((theme: Theme) => ({
    typography: {
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      wordBreak: 'break-word',
      whiteSpace: 'pre-wrap',
    },
    primary: {
      color: theme.palette.primary.main,
    },
    secondary: {
      color: theme.palette.secondary.main,
    },
    textPrimary: {
      color: theme.palette.text.primary,
    },
    textSecondary: {
      color: theme.palette.text.secondary,
    },
  }));

const TypographyBase: FC<IProps> = ({
  color,
  component: Component = 'span',
  fontSize = '14px',
  children,
  className,
  fontWeight = 'normal',
}) => {
  const classes = useStyles({ fontSize, fontWeight })();

  return (
    <Component
      className={clsx(
        className,
        classes.typography,
        color === 'textPrimary' && classes.textPrimary,
        color === 'textSecondary' && classes.textSecondary,
        color === 'primary' && classes.primary,
        color === 'secondary' && classes.secondary,
      )}
    >
      {children}
    </Component>
  );
};

export default TypographyBase;
