import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box, Button, TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.3),

      width: "50ch",
    },
  },
}));
export default function Page() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography
          component="div"
          style={{
            backgroundColor: "white",
            width: "850px",
            height: "250vh",
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
              <form className={classes.root} noValidate autoComplete="off">
                <p style={{ paddingTop: "25px" }}>First Name</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="First name"
                  variant="outlined"
                  size="small"
                />
                <p>Last Name</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                  size="small"
                />

                <p>Email</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                />
                <p>Trading Name</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Trading name"
                  variant="outlined"
                  size="small"
                />
                <p>ABN</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="ABN"
                  variant="outlined"
                  size="small"
                />
                <p>Street</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Street"
                  variant="outlined"
                  size="small"
                />
                <p>City</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  size="small"
                />
                <p>State</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="State"
                  variant="outlined"
                  size="small"
                />
                <p>Postcode</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Postcode"
                  variant="outlined"
                  size="small"
                />
                <p>Invoice Date</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Invoice Date"
                  variant="outlined"
                  size="small"
                />
                <p>Invoice No</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Invoice No"
                  variant="outlined"
                  size="small"
                />
                <p>Total G.S.T</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Total G.S.T"
                  variant="outlined"
                  size="small"
                />
                <p>Total Inclusive of G.S.T</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Total Inclusive of G.S.T"
                  variant="outlined"
                  size="small"
                />
                <p>Account Name</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Account name"
                  variant="outlined"
                  size="small"
                />
                <p>Bank</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Bank"
                  variant="outlined"
                  size="small"
                />
                <p>Account No.</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
                  id="outlined-basic"
                  label="Account No."
                  variant="outlined"
                  size="small"
                />
                <p>BSB</p>
                <TextField
                  style={{ paddingBottom: "25px" }}
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
