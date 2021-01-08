import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

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
    
    return 
    <section className="filter-container"></section>
}
