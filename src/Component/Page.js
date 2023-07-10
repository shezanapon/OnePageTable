import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button, TextField, makeStyles } from "@material-ui/core";
// import Autocomplete from "@material-ui/lab/Autocomplete";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Autocomplete } from "@material-ui/lab";
import { Controller, useForm } from "react-hook-form";

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  { code: "AE", label: "United Arab Emirates", phone: "971" },
  { code: "AF", label: "Afghanistan", phone: "93" },
  { code: "AG", label: "Antigua and Barbuda", phone: "1-268" },
  { code: "AI", label: "Anguilla", phone: "1-264" },
];
const options = ["Yes", "No"];
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.3),
    },
  },
}));
export default function Page() {
  const { handleSubmit, reset, setValu, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "white",
            width: "800px",
            height: "275vh",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <Box style={{ padding: "25px 25px 25px 25px " }}>
            <h2>Invoice Form v2</h2>
            <Box>
              <center>
                <h3 style={{ color: "#ff4081" }}>TAX INVOICE</h3>
              </center>
              <p style={{ fontSize: "13px", color: "#1976d2" }}>
                <b>Invoice To:</b>
              </p>

              <p style={{ fontSize: "12px", lineHeight: 1.28 }}>
                Furlong Painting Pty Ltd
                <br /> ABN:86 154 136 245
                <br /> 27/111 Lewis Road
                <br /> Knoxfield <br />
                Vic 3180
                <br />
                <h3>Invoice Form</h3>
              </p>
              <hr style={{ color: "gray" }} />
              <form
                onSubmit={handleSubmit((data) => handleFinalSubmit(data))}
                noValidate
                autoComplete="off"
              >
                <p style={{ paddingTop: "25px" }}>
                  First Name <span style={{ color: "red" }}>*</span>
                </p>
                <Controller
                  control={control}
                  name="First Name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="First name"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p>Last Name</p>

                <Controller
                  control={control}
                  name="Last Name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Last name"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>
                  Email <span style={{ color: "red" }}>*</span>
                </p>
                <Controller
                  control={control}
                  name="Email"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Trading Name</p>
                <Controller
                  control={control}
                  name="Trading Name"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Trading name"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>ABN</p>
                <Controller
                  control={control}
                  name="ABN"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="ABN"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Street</p>
                <Controller
                  control={control}
                  name="Street"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Street"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>City</p>
                <Controller
                  control={control}
                  name="City"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>State</p>
                <Controller
                  control={control}
                  name="State"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="State"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Postcode</p>
                <Controller
                  control={control}
                  name="Postcode"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Postcode"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Invoice Date</p>
                <Controller
                  control={control}
                  name="Invoice Date"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      type="date"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Invoice No</p>
                <Controller
                  control={control}
                  name="Invoice No"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Invoice No"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>
                  Registered for GST? <span style={{ color: "red" }}>*</span>
                </p>
                <Controller
                  control={control}
                  name="Registered for GST"
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      size="small"
                      style={{ padding: 0, margin: 0 }}
                      value={value}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      id="controllable-states-demo"
                      options={options}
                      renderInput={(params) => (
                        <TextField
                          {...field}
                          size="small"
                          inputProps={{
                            style: {
                              height: 15,
                              width: 340,
                              padding: "0",
                              margin: 0,
                            },
                          }}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                  )}
                />

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>
                        Job No <span style={{ color: "red" }}>*</span>
                      </TableCell>
                      <TableCell>
                        Contract Description{" "}
                        <span style={{ color: "red" }}>*</span>
                      </TableCell>
                      <TableCell>
                        Site Name/Other <span style={{ color: "red" }}>*</span>
                      </TableCell>
                      <TableCell>
                        Price <span style={{ color: "red" }}>*</span>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left">
                        <MoreVertIcon />
                        <AddCircleOutlineIcon />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          control={control}
                          name="Job No"
                          render={({ field }) => (
                            <TextField
                              {...field}
                              inputProps={{
                                style: {
                                  height: 38,
                                  width: 100,
                                  padding: "0 14px",
                                },
                              }}
                              variant="outlined"
                              size="small"
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          control={control}
                          name="Contract Description"
                          render={({ field }) => (
                            <Autocomplete
                              {...field}
                              size="small"
                              id="country-select-demo"
                              style={{ width: 130 }}
                              options={countries}
                              classes={{
                                option: classes.option,
                              }}
                              autoHighlight
                              getOptionLabel={(option) => option.label}
                              renderOption={(option) => (
                                <React.Fragment>
                                  {option.label} ({option.code}) +{option.phone}
                                </React.Fragment>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...field}
                                  {...params}
                                  label="Select"
                                  variant="outlined"
                                  inputProps={{
                                    ...params.inputProps,
                                    autoComplete: "new-password", // disable autocomplete and autofill
                                  }}
                                />
                              )}
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          control={control}
                          name="Site Name/Other"
                          render={({ field }) => (
                            <TextField
                              {...field}
                              inputProps={{
                                style: {
                                  height: 38,
                                  width: 100,
                                  padding: "0 14px",
                                },
                              }}
                              variant="outlined"
                              size="small"
                            />
                          )}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <Controller
                          control={control}
                          name="Price"
                          render={({ field }) => (
                            <TextField
                              {...field}
                              inputProps={{
                                style: {
                                  height: 38,
                                  width: 100,
                                  padding: "0 14px",
                                },
                              }}
                              variant="outlined"
                              size="small"
                            />
                          )}
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <p style={{ paddingTop: "25px" }}>Total G.S.T</p>
                <Controller
                  control={control}
                  name="Total G.S.T"
                  render={({ field }) => (
                    <TextField
                      {...field}
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Total G.S.T"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Total Inclusive of G.S.T</p>
                <Controller
                  control={control}
                  name="Total Inclusive of G.S.T"
                  render={({ field }) => (
                    <TextField
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Total Inclusive of G.S.T"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Account Name</p>
                <Controller
                  control={control}
                  name="Account Name"
                  render={({ field }) => (
                    <TextField
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Account name"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Bank</p>
                <Controller
                  control={control}
                  name="Bank"
                  render={({ field }) => (
                    <TextField
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Bank"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>Account No.</p>
                <Controller
                  control={control}
                  name="Account No."
                  render={({ field }) => (
                    <TextField
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="Account No."
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p>BSB</p>
                <Controller
                  control={control}
                  name="BSB"
                  render={({ field }) => (
                    <TextField
                      style={{ paddingBottom: "25px" }}
                      inputProps={{
                        style: {
                          height: 35,
                          width: 340,
                          padding: "0 14px",
                        },
                      }}
                      id="outlined-basic"
                      label="BSB"
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <center>
                  <Button
                    style={{
                      width: "130px",
                      color: "white",
                      backgroundColor: "#009688",
                    }}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </center>
              </form>
            </Box>
          </Box>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
