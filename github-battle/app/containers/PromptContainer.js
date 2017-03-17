const React = require('react');
const Prompt = require('../components/Prompt')

const PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  //* хранит состояние */
  getInitialState: function () {
      return {
        username: '' /* нормальным образом начальное состояние инициализируется пустой строкой или так*/
      }
  },

  handleUpdateUser: function (e) {  {/* берет событие из input и при изменении в поле ввода обновляет состояние username */}
    this.setState({
      username: e.target.value
    })
  },

  handleSubmitUser: function (e) {
    e.preventDefault()
    const username = this.state.username
    this.setState({
      username: ''
    })

    //* хранит роутинг*/
    if (this.props.routeParams.playerOne) {
      // если да, то перенаправляет в  /battle |вся эта логика из блока route.js
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })

    } else {
      // если нет - перенаправляет в /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
})

module.exports = PromptContainer
