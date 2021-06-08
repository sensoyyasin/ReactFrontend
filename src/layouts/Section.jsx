import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import JobAdvertsList from "../pages/JobAdverts/JobAdvertsList";
import JobPositionList from "../pages/JobAdverts/JobPosition/JobPositionList";
import EmployerList from "../pages/User/Employer/EmployerList";
import JobseekerList from "../pages/User/Jobseeker/JobseekerList";

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobseekerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobAdvertsList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={12}>
                        <JobPositionList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    );
}