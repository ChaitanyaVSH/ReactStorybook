import React from "react";
import Input from "./Input";

export default {
    title: "Input",
    component: Input
}

export const Small = () => <Input variant="small">Enter small</Input>
export const Large = () => <Input variant="large">Enter email</Input>