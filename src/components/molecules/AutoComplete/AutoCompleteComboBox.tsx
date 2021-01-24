import React from 'react';
import { VariableSizeList as List, ListChildComponentProps } from 'react-window';

// material core
import TextField from '@material-ui/core/TextField';
import Autocomplete, { AutocompleteRenderOptionState } from '@material-ui/lab/Autocomplete';
import ListSubheader from '@material-ui/core/ListSubheader';

const LISTBOX_PADDING = 8; // px

const renderRow = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  return React.cloneElement(data[index], {
    style: {
      ...style,
      top: (style.top as number) + LISTBOX_PADDING,
    },
  });
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: any) {
  const ref = React.useRef<List>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}

const ListboxComponent = React.forwardRef<HTMLDivElement>(function ListboxComponent(props, ref) {
  const { children, ...other } = props;
  const itemData = React.Children.toArray(children);
  const itemSize = 48;
  const itemCount = itemData.length;

  const getChildSize = (child: React.ReactNode) => {
    if (React.isValidElement(child) && child.type === ListSubheader) {
      return 48;
    }
    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }
    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  const gridRef = useResetCache(itemCount);

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <List
          itemData={itemData}
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          innerElementType="div"
          ref={gridRef}
          outerElementType={OuterElementType}
          itemSize={(index) => getChildSize(itemData[index])}
          overscanCount={5}
          itemCount={itemData.length}
        >
          {renderRow}
        </List>
      </OuterElementContext.Provider>
    </div>
  );
});

export type IAutoComponentComboxBoxProps<T extends object> = {
  id: string;
  label: string;
  placeholder?: string;
  value?: object | any;
  data: T[];
  error?: boolean;
  getOptionLabel?: (value: T) => string;
  renderOption?: (option: T, state: AutocompleteRenderOptionState) => React.ReactNode;
  onChangeValue?: (value: T | null) => void;
  getOptionSelected?: (option: T, value: T) => boolean;
};

const AutoCompleteComboBox = <T extends object>({
  id,
  label,
  data,
  value = null,
  placeholder = '',
  error = false,
  onChangeValue,
  getOptionLabel,
  renderOption,
  getOptionSelected,
}: IAutoComponentComboxBoxProps<T>) => {
  return (
    <Autocomplete
      id={id}
      options={data}
      value={value}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      getOptionSelected={getOptionSelected}
      ListboxComponent={ListboxComponent as React.ComponentType<React.HTMLAttributes<HTMLElement>>}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          InputLabelProps={{
            shrink: true,
          }}
        />
      )}
      onChange={(_: React.ChangeEvent<{}>, value: T | null) => onChangeValue && onChangeValue(value)}
    />
  );
};

export default AutoCompleteComboBox;
