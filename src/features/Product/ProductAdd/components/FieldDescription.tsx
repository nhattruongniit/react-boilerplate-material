import React, { memo } from 'react';

// atomic
import { TextFieldShrink } from 'components/molecules/TextField';

type IProps = {
  keyReset: number | string;
  isErrorDescription: boolean;
  data: string;
  setIsErrorDescription: (val: boolean) => void;
  setDescription: (val: string) => void;
};

function FieldDescription({ keyReset, isErrorDescription, data, setIsErrorDescription, setDescription }: IProps) {
  return (
    <TextFieldShrink
      key={keyReset}
      id="artist-description"
      title="Description"
      placeholder="Please enter a description to help distinguish this Artist from the others"
      variant="outlined"
      maxHeight={150}
      value={data}
      error={isErrorDescription}
      onChangeValue={(value) => {
        if (value !== '') {
          setIsErrorDescription(false);
        }
        setDescription(value);
      }}
    />
  );
}

export default memo(FieldDescription);
