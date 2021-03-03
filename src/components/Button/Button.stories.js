import React from "react";
import Button from "./Button";

export default {
    title: "Button",
    component: Button
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>


const Template = (args) => <Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: "primary",
    children: "PrimA Button"
}

export const LargePrimaryA = Template.bind({})
LargePrimaryA.args = {
    ...PrimaryA.args,
    children: "Large PrimA Button"
}

export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: "secondary",
    children: "SecondA Button"
}