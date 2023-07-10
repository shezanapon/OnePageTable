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
import { useForm } from "react-hook-form";

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

      width: "45ch",
    },
  },
}));
export default function Page() {
  const { handleSubmit, reset, setValu, control } = useForm();
  const [data, setData] = useState(null);
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
            height: "260vh",
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
                onSubmit={handleSubmit((data) => setData(data))}
                className="form"
                noValidate
                autoComplete="off"
              >
                <p style={{ paddingTop: "25px" }}>
                  First Name <span style={{ color: "red" }}>*</span>
                </p>
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
                  label="First name"
                  variant="outlined"
                  size="small"
                />
                <p>Last Name</p>
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
                  label="Last name"
                  variant="outlined"
                  size="small"
                />

                <p>
                  Email <span style={{ color: "red" }}>*</span>
                </p>
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
                  label="Email"
                  variant="outlined"
                  size="small"
                />
                <p>Trading Name</p>
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
                  label="Trading name"
                  variant="outlined"
                  size="small"
                />
                <p>ABN</p>
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
                  label="ABN"
                  variant="outlined"
                  size="small"
                />
                <p>Street</p>
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
                  label="Street"
                  variant="outlined"
                  size="small"
                />
                <p>City</p>
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
                  label="City"
                  variant="outlined"
                  size="small"
                />
                <p>State</p>
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
                  label="State"
                  variant="outlined"
                  size="small"
                />
                <p>Postcode</p>
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
                  label="Postcode"
                  variant="outlined"
                  size="small"
                />
                <p>Invoice Date</p>
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
                  type="date"
                  variant="outlined"
                  size="small"
                />

                <p>Invoice No</p>
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
                  label="Invoice No"
                  variant="outlined"
                  size="small"
                />
                <p>
                  Registered for GST? <span style={{ color: "red" }}>*</span>
                </p>

                <Autocomplete
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
                        <TextField
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
                      </TableCell>
                      <TableCell align="left">
                        <Autocomplete
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
                      </TableCell>
                      <TableCell align="left">
                        <TextField
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
                      </TableCell>
                      <TableCell align="left">
                        <TextField
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
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>

                <p style={{ paddingTop: "25px" }}>Total G.S.T</p>
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
                  label="Total G.S.T"
                  variant="outlined"
                  size="small"
                />
                <p>Total Inclusive of G.S.T</p>
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
                <p>Account Name</p>
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
                <p>Bank</p>
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
                <p>Account No.</p>
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
                <p>BSB</p>
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
              </form>
            </Box>
          </Box>
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
        </Typography>
      </Container>
    </React.Fragment>
  );
}
