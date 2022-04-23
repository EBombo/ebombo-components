import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";


export default {
  title: "ReactComponentLibrary/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;


const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const ToggleSwitch = Template.bind({});

ToggleSwitch.args = {
  label1: "En",
  label2: "Es",
  onChange: (event) => {
    event.preventDefault();
  },
  variant: "switcher",
  checked: false,
};

export const ToggleSwitch2 = Template.bind({});

ToggleSwitch2.args = {
  label1: "ON",
  label2: "OFF",
  onChange: (event) => {
    event.preventDefault();
  },
  variant: "switcher",
  checked: true,
};

export const ToggleSwitch3 = Template.bind({});

ToggleSwitch3.args = {
  label1: "ON",
  label2: "OFF",
  onChange: (event) => {
    event.preventDefault();
  },
  variant: "toggle",
  checked: true,
};