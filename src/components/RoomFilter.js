import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

// get all unique values

export default function RoomFilter() {
    const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  ));