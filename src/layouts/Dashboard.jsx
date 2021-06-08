import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertsList from "../pages/JobAdverts/JobAdvertsList";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar />
          </Grid.Column>
          <Grid.Column width={13}>
            <JobAdvertsList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}