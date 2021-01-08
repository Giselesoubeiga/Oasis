import React from 'react'
import RoomsFilter from "./RoomFilter"
import RoomsList from "./RoomsList";
import {RoomConsumer} from "../context";
import Loading from "./Loading"

export default function RoomContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, setRoom, sortedRooms,rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} setRoom={setRoom} />
          </>
        );
      }}
    </RoomConsumer>
  );
}