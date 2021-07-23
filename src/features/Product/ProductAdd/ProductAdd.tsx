import React from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

function ProductAdd() {
  return (
    <>
      <Grid container alignItems="center">
        <Grid item sm={12}>
          <h2>Add Product</h2>
        </Grid>
      </Grid>
      <Grid>
        <h3>Information</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField fullWidth variant="outlined" label="Alias Name" />
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid>
        <h3>Advance</h3>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField fullWidth variant="outlined" label="Address" />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">District</InputLabel>
            <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="District" fullWidth>
              <MenuItem value="phunhuan">Phu Nhuan</MenuItem>
              <MenuItem value="binhthanh">Binh Thanh</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
            <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" label="City" fullWidth>
              <MenuItem value="hcm">TP.HCM</MenuItem>
              <MenuItem value="hn">HN</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container justify="flex-end" className="my-20">
          <Button color="primary">Add More</Button>
        </Grid>
        <br />
        <Grid container item sm={12} md={12} justify="flex-end">
          <Button variant="outlined" color="primary" className="mr-20">
            Cancel
          </Button>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductAdd;
