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
import DeleteIcon from "@material-ui/icons/Delete";

const countries = [
  { label: "Progress Payment for painting at" },
  { label: "Balance of Contract for painting at" },
  { label: "Other" },
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
  const [val, setVal] = useState([0]);
  const handleAdd = () => {
    const d = [...val, []];
    setVal(d);
  };
  const handleDelete = (i) => {
    const dVal = [...val];
    dVal.splice(i, 1);
    setVal(dVal);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "white",
            width: "800px",
            height: "240vh",
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
                <p style={{ paddingTop: "25px", margin: "2px" }}>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />
                <p style={{ margin: "2px" }}>Last Name</p>

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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Trading Name</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>ABN</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Street</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>City</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>State</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Postcode</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Invoice Date</p>
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

                <p style={{ margin: "2px" }}>Invoice No</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>
                  Registered for GST? <span style={{ color: "red" }}>*</span>
                </p>
                <Controller
                  control={control}
                  name="Registered for GST"
                  render={({ field }) => (
                    <Autocomplete
                      {...field}
                      size="small"
                      inputProps={{
                        style: {
                          height: 35,

                          padding: "0 14px",
                        },
                      }}
                      style={{
                        paddingBottom: "40px",
                        margin: 0,
                        width: 370,
                      }}
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
                  <TableHead style={{ borderTop: "1px solid #ddd" }}>
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
                    {val.map((data, i) => {
                      return (
                        <TableRow>
                          <TableCell align="left">
                            <DeleteIcon
                              style={{ marginRight: "5px" }}
                              onClick={(i) => handleDelete()}
                            />
                            <AddCircleOutlineIcon onClick={() => handleAdd()} />
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
                                      {option.label}
                                    </React.Fragment>
                                  )}
                                  renderInput={(params) => (
                                    <TextField
                                      label="-Select-"
                                      {...field}
                                      {...params}
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
                      );
                    })}
                  </TableBody>
                </Table>

                <p style={{ paddingTop: "25px", margin: "2px" }}>Total G.S.T</p>
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Total Inclusive of G.S.T</p>
                <Controller
                  control={control}
                  name="Total Inclusive of G.S.T"
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Account Name</p>
                <Controller
                  control={control}
                  name="Account Name"
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Bank</p>
                <Controller
                  control={control}
                  name="Bank"
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>Account No.</p>
                <Controller
                  control={control}
                  name="Account No."
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
                      variant="outlined"
                      size="small"
                    />
                  )}
                />

                <p style={{ margin: "2px" }}>BSB</p>
                <Controller
                  control={control}
                  name="BSB"
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
                    type="submit"
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
