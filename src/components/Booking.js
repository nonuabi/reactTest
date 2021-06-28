import React, { Component } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../css/Booking.css";
class Booking extends Component {
  handleTableData() {
    const { classesData } = this.props;
    return classesData.map((item, index) => {
      const { title, data, time, seats } = item;
      return (
        <tr key={index}>
          <td>{title}</td>
          <td>{data}</td>
          <td>{time}</td>
          <td>{seats} seats available</td>
          {seats === 0 ? (
            <td>
              <button disabled>Book Now</button>
            </td>
          ) : (
            <td>
              <button onClick={() => this.props.handleBookSlot(index)}>
                Book Now
              </button>
            </td>
          )}
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
      <div className="booking">
        <div className="header">
          <div className="heading">
            <p>Time Left : 60 seconds</p>
            <h1>Claim Your free Trial Class </h1>
          </div>
          <div className="cart_btn_container">
            <button onClick={this.props.handleCartButton}>
              <AiOutlineShoppingCart className="icon" />
            </button>
          </div>
        </div>

        <div className="free_sheet_counter_container">
          <div className="sub_heading">
            <h2>Class Schedule</h2>
          </div>
          <div className="sheet_counter">
            <p>Free Seats Left : 7</p>
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

export default Booking;
