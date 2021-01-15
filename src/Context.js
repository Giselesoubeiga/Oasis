import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";


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

  getData = async () => {
    try {
        let response = await Client.getEntries({
            content_type: "beachResortRooms",
            order: "fields.price"
        });
        let rooms = this.formatData(response.items);
        // filter out all rooms that have featured = true
        let featuredRooms = rooms.filter(room => room.featured === true);
        // we wanna calc the max price from our data
        let maxPrice = Math.max(...rooms.map(room => room.price));
        let maxSize = Math.max(...rooms.map(room => room.size));
        // to schedule updates to the component local state
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
        });
    } catch (error) {
        console.log(error);
    }
  };

  componentDidMount() {
    //this.getData
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
  };

  //
  handleChange = event =>{
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
    
  }


  filterRooms=()=>{
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

     //filter by pets
     if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
    
  };

 render() {
    return (
      <RoomContext.Provider value={{
        ...this.state, 
      getRoom: this.getRoom,
      handleChange: this.handleChange}}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
