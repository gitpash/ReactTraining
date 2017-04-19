import React from "react";
import PropTypes from "prop-types";

function SelectLanguage(props) {
  const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
  return (
    <ul className="languages">
      {languages.map(lang => (
        <li
          style={lang === props.selectedLanguage ? { color: "#d0021b" } : null}
          onClick={props.onSelect.bind(null, lang)}
          key={lang}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
}

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All"
    };

    this.updateLanguage = this.updateLanguage.bind(this); // for correct this binding in func invocation
  }
  // create new method to update state of languages
  updateLanguage(lang) {
    this.setState(() => ({ selectedLanguage: lang }));
  }
  render() {
    // console.log('before func invoke', this)
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        ;
      </div>
    );
  }
}
export default Popular;
