import React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';

// material core
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';

// matrial icon
import HelpIcon from '@material-ui/icons/Help';

// styles
import TypographyBase from 'components/atoms/TypographyBase';
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
  maxLength?: number | null;
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
  helperText?: string | React.ReactNode;
  showTextLength?: boolean;
};

const TextFieldController = ({
  showRequiredLabel = false,
  showTooltip = false,
  title,
  titleTooltip = '',
  placement = 'right',
  maxLength = null,
  value,
  onChangeValue,
  helperText = '',
  showTextLength = true,
  ...props
}: ITextFieldShrinkProps) => {
  const classes = useStyles();

  return (
    <div>
      <TextField
        fullWidth
        inputProps={{ maxLength }}
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
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        helperText={
          <strong className={classes.helperText}>
            <span className={classes.textGrow}>{helperText}</span>
            {maxLength && showTextLength && (
              <TypographyBase color="textSecondary" component="span" fontSize="12px" className={classes.messageCount}>
                {value?.length} / {maxLength}
              </TypographyBase>
            )}
          </strong>
        }
        {...props}
      />
    </div>
  );
};

export default TextFieldController;
