import React, { Component } from 'react';
import {RoomContext} from "../Context";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {
       
        return <div> from Futured rooms</div>
        
    }
}
