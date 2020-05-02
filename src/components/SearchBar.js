import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <h4>
          Made with<i class="heart icon red column large"></i>by Tarun
        </h4>

        <div className="ui segment">
          <form
            className="ui fluid category search big"
            onSubmit={this.onFormSubmit}
          >
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="Search videos..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className="search icon red column"></i>
            </div>
            <div className="results"></div>
          </form>
        </div>
        {/* <div className="ui labeled button right floated" tabIndex="0">
          <div className="ui red button">
            <i className="heart icon"></i> Like
          </div>
          <a className="ui basic red left pointing label" href="/">
            1,048
          </a>
        </div> */}
      </div>
    );
  }
}

export default SearchBar;
