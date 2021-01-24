import React, { memo } from 'react';

// atomic
import { TextFieldShrink } from 'components/molecules/TextField';

type IProps = {
  keyReset: string | number;
  data: string;
  valueArtistName: string | null;
  setValueArtistName: (value: string) => void;
  handleArtistNameChange: (name: string, value: string) => void;
};

function FieldArtistName({ keyReset, data, valueArtistName, setValueArtistName, handleArtistNameChange }: IProps) {
  return (
    <TextFieldShrink
      key={keyReset}
      showRequiredLabel
      id="artist-name"
      title="Artist Name"
      value={data}
      placeholder="Input Artist Name"
      variant="outlined"
      error={Boolean(valueArtistName === '')}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        setValueArtistName(e.target.value);
      }}
      onChangeValue={(value) => handleArtistNameChange('name', value)}
    />
  );
}

export default memo(FieldArtistName);
