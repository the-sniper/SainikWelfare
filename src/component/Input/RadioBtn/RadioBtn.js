import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition(props) {

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{props.radTitle}</FormLabel>
      <RadioGroup aria-label="position" name="position"  row>
        <FormControlLabel
          value="end"
          control={<Radio color="primary" />}
          label={props.radLabel}
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
