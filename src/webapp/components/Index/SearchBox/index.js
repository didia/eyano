// Vendor
import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import SVG from 'react-inlinesvg';

// Assets
import searchIcon from '../../../static/images/icon-magnifying-glass.svg';
import resetIcon from '../../../static/images/icon-close.svg';

class SearchBox extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: ''
    };

    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(event) {
    this.setState({
      ...this.state,
      searchText: ''
    });

    event.preventDefault();
  }

  handleSearchTextChange(event) {
    this.setState({
      ...this.state,
      searchText: event.target.value
    });
  }

  handleSubmit(event) {
    window.console.log(`Search query is: ${this.state.searchText}`);
    event.preventDefault();
  }

  hasInput() {
    return this.state.searchText.trim() !== '';
  }

  computeFormClassName() {
    const formBaseClass = 'form';
    return this.hasInput() ? `${formBaseClass} form--dirty` : formBaseClass;
  }

  render() {
    const placeHolderText = this.props.intl.formatMessage({
      id: 'components.search-box.placeholder'
    });

    return (
      <form
        className={this.computeFormClassName()}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}
      >
        <div className="input-wrapper">
          <input
            autoFocus={true}
            className="input"
            placeholder={placeHolderText}
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
          />

          <button className="reset-button" type="reset">
            <SVG
              className="button-wrapper reset-icon-wrapper"
              src={resetIcon}
              wrapper={React.createFactory('div')}
            />
          </button>
        </div>

        <button
          className="search-button"
          type="submit"
          disabled={!this.hasInput()}
        >
          <SVG
            className="button-wrapper search-icon-wrapper"
            src={searchIcon}
            wrapper={React.createFactory('div')}
          />
        </button>

        <style jsx>{`
          .form {
            display: flex;
            align-items: center;
            box-shadow: 0 16px 32px rgba(0, 44, 80, 0.2);;
          }

          .form :global(.button-wrapper) {
            display: flex;
            align-items: center;
          }

          .input-wrapper {
            display: flex;
            align-items: center;
            width: 100%;
            background-color: #fff;
            padding: 16px;
          }

          .input {
            width: 100%;
            outline: none;
            border: none;
            font-size: 20px
            color: #595959;
            -webkit-font-smoothing: antialiased
          }

          .reset-button {
            overflow: hidden;
            margin-right: 4px;
            opacity: 0;
            transition: 0.3s opacity ease-in-out;
            cursor: pointer;
          }

          .reset-button :global(svg) {
            width: 15px;
            height: 15px;
            fill: #555c5c;
          }

          .search-button {
            height: 57px;
            width: 57px;
            flex-shrink: 0;
            cursor: pointer;
            background-color: #006b6b;
            transition: 0.3s background-color ease-in-out;
          }

          .search-button :global(svg) {
            width: 20px;
            height: 20px;
            fill: #fff;
          }

          .search-button:hover,
          .search-button:active {
            background-color: #4cc7c7;
          }

          .search-button:disabled {
            cursor: default;
            background-color: #008989;
          }

          .search-button :global(.search-icon-wrapper) {
            justify-content: center;
          }

          .form--dirty .reset-button {
            opacity: 1;
          }
        `}</style>
      </form>
    );
  }
}

SearchBox.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(SearchBox);
