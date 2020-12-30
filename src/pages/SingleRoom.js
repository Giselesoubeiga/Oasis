import React, { Component } from 'react'
import defaultBackground from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import {RoomContext} from "../context"

export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        this.stage={
            slug:this.props.match.params.slug,
            defaultBackground
        }
    }

static contextType= RoomContext;
    // componentDidMount(){

    // }
    render() {
        return (
            <div>
                Hello from SingleRoom page
            </div>
        )
    }
}
