import React from "react";
import { Icon, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item
          name="bell"
        >
          <Icon name="bell" />
          Job Position
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Jobseeker
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          Employer
        </Menu.Item>
      </Menu>
    </div>
  );
}