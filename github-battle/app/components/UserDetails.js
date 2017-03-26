const React = require('react')

const PropTypes = React.PropTypes

function UserDetails(user) {
    return (
        <div>
          {!!user.score && <li className="list-group-item"><h3>Score: {user.score}</h3></li>}
          <li className="list-group-item"> <img src={user.avatar_url} className="img-rounded img-responsive"/></li>
          {user.name && <li className="list-group-item">Name: {user.name}</li>}
          <li className="list-group-item">Username: {user.login}</li>
          {user.location && <li className="list-group-item">Location: {user.location}</li>}
          {user.company && <li className="list-group-item">Company: {user.company}</li>}
          <li className="list-group-item">Followers: {user.followers}</li>
          <li className="list-group-item">Following: {user.following}</li>
          <li className="list-group-item">Public Repos: {user.public_repos}</li>
          {user.blog && <li className="list-group-item">Blog: <a href={user.blog}> {user.blog}</a></li>}
    </div>
    )
}

UserDetails.propTypes = {
    score: PropTypes.number,
    info: PropTypes.shape({
        avatar_url: PropTypes.string.isRequired,
        blog: PropTypes.string,
        company: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        location: PropTypes.string,
        login: PropTypes.string.isRequired,
        name: PropTypes.string,
        public_repos: PropTypes.number.isRequired,
    }),
}

module.exports = UserDetails
