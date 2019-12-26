import React from "react";

const cryptoNamesArray = [];
fetch("https://api.coincap.io/v2/assets")
  .then(res => res.json())
  .then(data => {
    const array = data.data;
    array.map(elem => cryptoNamesArray.push(elem.id));
  })
  .catch(error => console.log(error));

const topCryptos = [
  "bitcoin",
  "ethereum",
  "ripple",
  "tether",
  "bitcoin-cash",
  "litecoin",
  "eos"
];

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: "",
      results: topCryptos
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchResult(this.state.inputField);
    this.setState({
      inputField: "",
      results: []
    });
  }

  handleFocus() {
    document.getElementById("dropdown-menu").style.display = "block";
    this.setState({
      inputField: "",
      results: topCryptos
    });
  }

  handleBlur() {
    setTimeout(() => {
      this.setState({
        results: []
      });
    }, 200);
  }

  handleChange(event) {
    event.preventDefault();
    const input = event.target.value.toLowerCase();
    const result = cryptoNamesArray.filter(str => str.includes(input));
    this.setState({
      inputField: event.target.value.toLowerCase(),
      results: result
    });
    if (result.length < 1) {
      document.getElementById("dropdown-menu").style.display = "none";
    }
  }

  handleClick(event) {
    event.preventDefault();
    document.getElementById("dropdown-menu").style.display = "none";
    this.setState({
      inputField: event.target.innerHTML.toLowerCase(),
      results: topCryptos
    });
  }

  render() {
    const dropdownList = [];
    for (let i = 0; i < Math.min(7, this.state.results.length); i++) {
      dropdownList.push(
        <li className="dropdown-item click" onClick={this.handleClick} key={i}>
          {this.state.results[i]}
        </li>
      );
    }
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search  dropdown"
        >
          <div className="input-group">
            <input
              type="text"
              id="search-field"
              value={this.state.inputField}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              autoComplete="off"
            />
            <ul className="dropdown-menu" id="dropdown-menu">
              {dropdownList}
            </ul>
            <div className="input-group-append">
              <button className="btn btn-primary" type="submit">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
