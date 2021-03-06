import React from "react";
import PropTypes from "prop-types";
import api from "../utils/api";
import Loading from './Loading'


const RepoGrid = props => (
  <ul className="popular-list">
    {props.repos.map((repo, index) => (
      <li key={repo.name} className="popular-items">
        <div className="popular-rank">#{index + 1}</div>
        <ul className="space-list-items">
          <li>
            <img
              className="avatar"
              src={repo.owner.avatar_url}
              alt={"avatar for " + repo.owner.login}
            />
          </li>
          <li>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
          </li>
          <li>
            @{repo.owner.login}
          </li>
          <li>
            {repo.stargazers_count} stars
          </li>
        </ul>
      </li>
    ))}
  </ul>
);
RepoGrid.PropTypes = {
  repos: PropTypes.array.isRequired
};
const SelectLanguage = props => {
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
};

SelectLanguage.PropTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};


class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };

    this.updateLanguage = this.updateLanguage.bind(this); // for correct this binding in func invocation
  }

  // LifeCycle methods
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  // create new method to update state of languages

  updateLanguage(lang) {
    this.setState(() => ({ selectedLanguage: lang, repos: null }));
    // make AJAX req and resolve promise
    api.fetchPopularRepos(lang).then(
      function(repos) {
        this.setState(function() {
          return {
            repos: repos
          };
        });
      }.bind(this)
    );
  }

  render() {
    // console.log('before func invoke', this)
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos
          ?  <Loading />
          : <RepoGrid repos={this.state.repos} />}
      </div>
    );
  }
}
export default Popular;
export {RepoGrid, SelectLanguage}
