import React, { Component } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
import Room from "./Room";


export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    // loop through each featured rooms and return <Room> component with the list of featured rooms
    rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
           <Title title="Featured Rooms" />
           <div className="featured-rooms-center">
                    {/* if loading = true, set loading component (has loading
                    screen) : or render the rooms */}
                    {loading ? <Loading /> : rooms}
                </div>


        <Loading />
      </section>
    );
  }
}
