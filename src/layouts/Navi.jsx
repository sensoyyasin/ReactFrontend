import React from "react";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top" size="large">
                <Container>
                    <Menu.Item name="chart bar">
                        <Icon name="chart bar" size="large" />
            HRMS
          </Menu.Item>
                    <Menu.Item name="Home" />
                    <Menu.Item name="Job Adverts" />
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Button.Group>
                                <Button>Sign up</Button>
                                <Button.Or />
                                <Button>Sign in</Button>
                                <Button.Or />
                                <Button>Forgot my password</Button>
                            </Button.Group>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}