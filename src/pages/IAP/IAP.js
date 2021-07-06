import {
  Col,
} from "reactstrap";
import s from "./IAP.module.scss";
import React, { Component, useState } from 'react'
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
import graph from '../IAP/graph.png'

class IAP extends Component {

  render() {

    return (
      <div className={s.root}>
        <h2 className="page-title">
          Daily Severity Measure <span className="fw-semi-bold">Report</span>
        </h2>
        <CardContent style={{ marginBottom: "2rem" }}>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <InputLabel style={{ color: "white" }}>Plantation *</InputLabel>
              <TextField select
                fullWidth
                name="plantation"
                variant="outlined"
                style={{ backgroundColor: "white" }}
              >
                <MenuItem value="0">--Select Plantation--</MenuItem>
                <MenuItem value="1">Horana Plantation</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={3} xs={12}>
              <InputLabel style={{ color: "white" }}>Date *</InputLabel>
              <TextField select
                fullWidth
                id="date"
                type="date"
                name="date"
                variant="outlined"
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <input
              className="btn btn-primary"
              type="submit"
              value="search"
              style={{ height: "50px", marginTop: "35px", marginLeft: "5px" }}
            />
          </Grid>
        </CardContent>
        <Box width={1200}>
          <Grid container spacing={3}>

            <Grid item md={8} xs={12}>
              <MaterialTable
                title="Multiple Actions Preview"
                columns={[
                  { title: 'Plantation', field: 'plantation' },
                  { title: 'Disease', field: 'disease' },
                  { title: 'Image', field: 'image' },
                  { title: 'Accuracy', field: 'accuracy' },
                ]}
                data={[
                  { plantation: 'Mehmet', disease: 'Baran', image: 1987, accuracy: 63 },
                  { plantation: 'Mehmet', disease: 'Baran', image: 1987, accuracy: 63 }
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
                    tooltip: 'Edit Factory',
                  },
                ]}
              />
            </Grid>
            <Grid item md={3} xs={12}>
              <img src={graph} height={350} width={350} />
            </Grid>
          </Grid>
        </Box>
      </div>

    );
  }
}

export default IAP;
