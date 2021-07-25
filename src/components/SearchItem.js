import React, { Component } from "react";
import axios from "axios";
export class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: "",
      items: {
        iid: 0,
        title: "",
        description: "",
        qty: 0,
        price: 0,
      },
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/Stock_CRUD/search", this.state)
      .then((res) => this.setState({ items: res.data }));
    if (this.state.item_name == "") {
      this.setState({ items: [] });
    }
    console.log(this.state.items);
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      item_name: event.target.value,
    });
  };

  render() {
    const item = this.state.items;
    return (
      <div className="justify-content-md-center">
        <br></br>
        <form class="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
          <input
            class="input-search"
            type="search"
            placeholder="Search"
            name="item_name"
            aria-label="Search"
            onChange={this.handleInputChange}
          ></input>
          <button class="button-search" type="submit">
            Search
          </button>
        </form>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Desc</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{item.iid}</th>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchItem;
