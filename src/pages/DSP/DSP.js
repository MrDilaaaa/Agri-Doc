import React from "react";
import { Row, Col } from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid/v4";
import Widget from "../../components/Widget/Widget";
import s from "./DSP.module.scss";
import MaterialTable from 'material-table'
import {
  Box,
  Grid,
  InputLabel,
  TextField,
  MenuItem,
  CardContent,
  Button
} from '@material-ui/core';

class DSP extends React.Component {
  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
        Session 
        </h1>
        <CardContent style={{ marginBottom: "2rem" }}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <InputLabel style={{ color: "white" }}>Month *</InputLabel>
              <TextField 
                fullWidth
                name="month"
                variant="outlined"
                style={{ backgroundColor: "white" }}
              >
              </TextField>
            </Grid>
            <Grid item md={3} xs={12}>
              <InputLabel style={{ color: "white" }}>Day *</InputLabel>
              <TextField 
                fullWidth
                name="day"
                variant="outlined"
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <input
              className="btn btn-primary"
              type="submit"
              value="Create Session"
              style={{ height: "50px", marginTop: "35px", marginLeft: "5px" }}
            />
          </Grid>
        </CardContent>
        <Box width={900}>
          <MaterialTable
            title="Multiple Actions Preview"
            columns={[
              { title: 'Month', field: 'month' },
              { title: 'Day', field: 'daye' }
            ]}
            data={[
              { month: 'June', daye: '12' },
              { month: 'Octomber', daye: '21' }
            ]}
            options={{
              exportButton: false,
              showTitle: false,
              headerStyle: { textAlign: "left", height: '1%' },
              cellStyle: { textAlign: "left" },
              columnResizable: false,
              actionsColumnIndex: -1,
            }}
            actions={[
              {
                icon: 'mode',
                tooltip: 'edite',
              },
            ]}
          />
        </Box>
      </div>
    );
  }
}

export default DSP;
