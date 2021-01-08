import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
//RoomContext.Provider value={"hello"}

class RoomProvider extends Component {
  state = {
    rooms: [],
    sorteredRoom: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };



  //GetData

  componentDidMount() {
    //this.get Data
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //

    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));


    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,

      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  // formatting from data.js
  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }


  getRoom = slug => {
    // destructuring rooms
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  }

  render() {
    return (
      <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
