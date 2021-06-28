import React, { Component } from "react";
import { AiFillHome } from "react-icons/ai";
import "../css/Cart.css";

class Cart extends Component {
  handleTableData() {
    const { cartItems } = this.props;
    return cartItems.map((item, index) => {
      const { title, data, time, seats } = item;
      return (
        <tr key={index}>
          <td>{title}</td>
          <td>{data}</td>
          <td>{time}</td>
          <td>{seats} seats available</td>
          <td>
            <button>Book Slot</button>
          </td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    const { header } = this.props;
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  render() {
    return (
      <div className="cart">
        <div className="header">
          <div className="heading">
            <h1>Cart</h1>
          </div>

          <div className="cart_btn_container button">
            <button onClick={this.props.handleCartButton}>
              <AiFillHome className="icon" />
            </button>
          </div>
        </div>
        <div>
          <table className="schedule_table">
            <tr>{this.renderTableHeader()}</tr>
            <tbody>{this.handleTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Cart;
