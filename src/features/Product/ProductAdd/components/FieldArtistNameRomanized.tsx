import React from 'react';

// atomic
import { TextFieldShrink } from 'components/molecules/TextField';

type IProps = {
  keyReset: string | number;
  data: string;
  handleArtistNameChange: (name: string, value: string) => void;
};

function FieldArtistNameRomanized({ keyReset, data, handleArtistNameChange }: IProps) {
  return (
    <TextFieldShrink
      key={keyReset}
      showTooltip
      id="romanized-name"
      title="Romanized Name"
      value={data}
      placeholder="Input Romanized Version"
      variant="outlined"
      titleTooltip="If the Artist Name has non-roman characters like Chinese, enter the romanized version here"
      onChangeValue={(value) => handleArtistNameChange('romanizedName', value)}
    />
  );
}

export default FieldArtistNameRomanized;
