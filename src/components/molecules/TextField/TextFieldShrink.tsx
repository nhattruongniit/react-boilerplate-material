import React, { useState, useEffect } from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';

// material core
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

// matrial icon
import HelpIcon from '@material-ui/icons/Help';

// styles
import useStyles from './styles';

const CustomToolTip = withStyles((theme: Theme) => ({
  tooltip: {
    boxShadow: theme.shadows[1],
    fontSize: 14,
    maxWidth: 240,
  },
}))(Tooltip);

export type ITextFieldShrinkProps = TextFieldProps & {
  showRequiredLabel?: boolean;
  showTooltip?: boolean;
  titleTooltip?: string | React.ReactNode | any;
  maxHeight?: number | null;
  placement?:
    | 'right'
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'top-end'
    | 'top-start'
    | 'top'
    | undefined;
  title?: string;
  value?: string;
  onChangeValue: (value: string) => void;
};

const TextFieldShrink = ({
  showRequiredLabel = false,
  showTooltip = false,
  title,
  titleTooltip = '',
  placement = 'right',
  maxHeight = null,
  value,
  onChangeValue,
  ...props
}: ITextFieldShrinkProps) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChangeValue(inputValue || '');
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength: maxHeight }}
        label={
          <div className={classes.textLabel}>
            {showRequiredLabel && <span className={classes.textError}>*</span>}
            <span>{title}</span>
            {showTooltip && (
              <CustomToolTip title={titleTooltip} placement={placement}>
                <HelpIcon />
              </CustomToolTip>
            )}
          </div>
        }
        InputLabelProps={{
          shrink: true,
        }}
        defaultValue={value}
        onChange={(e) => setInputValue(e.target.value)}
        {...props}
      />
      {maxHeight && (
        <div className={classes.messageCount}>
          {value?.length} / {maxHeight}
        </div>
      )}
    </div>
  );
};

export default TextFieldShrink;
