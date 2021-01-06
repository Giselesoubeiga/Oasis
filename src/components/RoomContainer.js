import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomsList"

export default function RoomContainer() {
    return (
        <div>
            Hello from Container
            <RoomsFilter/>
            <RoomsList/>
        </div>
    )
}
