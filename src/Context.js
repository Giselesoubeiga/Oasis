import React, { Component } from "react";
import items from "./data" 

const RoomContext = React.createContext();
//RoomContext.Provider value={"hello"}

class RoomProvider extends Component {
  state = {
      rooms:[],
      sorteredRoom:[],
      loading:true
};
//GetData

componentDidMount(){
    //this.get Data
    let rooms = this.formatData(items);
  
}
    // formatting from data.js
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    }
    







  render() {
    return (
      <RoomContext.Provider value="hello">
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };
