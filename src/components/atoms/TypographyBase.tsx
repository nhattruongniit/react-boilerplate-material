import React from 'react';

// material core
import { Typography, TypographyProps } from '@material-ui/core';

type IProps = TypographyProps & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption';
  color?: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  component?: 'div' | 'a' | 'p' | 'span';
  text?: string;
};

const TypographyBase = ({ variant = 'subtitle2', color = 'textSecondary', component = 'div', text }: IProps) => {
  return (
    <Typography variant={variant} color={color} component={component}>
      {text}
    </Typography>
  );
};

export default TypographyBase;
