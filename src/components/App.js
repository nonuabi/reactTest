import React, { Component } from "react";
import Booking from "./Booking";
import firebase from "firebase/app";
import firebaseConfig from "../server/firebase";
import Cart from "./Cart";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isCart: false,
      classesData: [],
      cartItems: [],
      header: ["Name", "Data", "Time", "Available", "Book Slot"],
    };
    this.db = firebase.firestore();
  }

  componentDidMount() {
    this.db
      .collection("slots")
      .orderBy("time", "asc")
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          return "";
        });
        const classesData = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          data["data"] = doc.data().time.toDate().toString().substr(0, 15);
          data["time"] = doc.data().time.toDate().toString().substr(15, 18);
          return data;
        });
        this.setState({
          classesData,
        });
      });
  }

  handleBookSlot = (event) => {
    let items = this.state.classesData;
    let item = this.state.classesData[event];
    item.seats -= 1;
    items[event] = item;
    this.setState({
      cartItems: [
        ...this.state.cartItems,
        {
          title: this.state.classesData[event].title,
          data: this.state.classesData[event].data,
          time: this.state.classesData[event].time,
          seats: this.state.classesData[event].seats,
        },
      ],
    });
  };

  handleCartButton = () => {
    {
      switch (this.state.isCart) {
        case true:
          this.setState({
            isCart: false,
          });
          break;
        case false:
          this.setState({
            isCart: true,
          });
          break;
        default:
          break;
      }
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.isCart ? (
          <Cart
            header={this.state.header}
            cartItems={this.state.cartItems}
            handleCartButton={this.handleCartButton}
          />
        ) : (
          <Booking
            seconds={this.state.seconds}
            handleCartButton={this.handleCartButton}
            classesData={this.state.classesData}
            header={this.state.header}
            handleBookSlot={this.handleBookSlot}
          />
        )}
      </div>
    );
  }
}

export default App;
