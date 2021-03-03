import React from "react";
import ListItem from "./ListItem";

export default {
    title: "ListItem",
    component: ListItem
}

export const Ordered = () => <ListItem variant="iconOrdered">This is the list</ListItem>
export const Primary = () => <ListItem variant="iconPrimary">This is the Primary List</ListItem>