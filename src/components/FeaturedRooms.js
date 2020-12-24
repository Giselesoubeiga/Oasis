import React, { Component } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
    //class based component's consumer... since context.consumer is proved to be buggy
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
    
        rooms = rooms.map(room => {
          return <Room key={room.id} room={room} />;
        });
        return (
            <React.Fragment>
            <section className="featured-rooms">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {/* if loading = true, set loading component (has loading
                    screen) : or render the rooms */}
                    {loading ? <Loading /> : rooms}
                </div>
            </section>
            </React.Fragment>
        );
    }
}