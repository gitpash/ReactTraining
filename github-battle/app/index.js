

// // создадим компонент реакта, главное что делает компонент это UI!
// let HelloWorld = React.createClass({
//   render: function () {
//     return (
//       <div> Hello World!</div>
//     )
//   }
// });
// // теперь укажем где этот компонент будет рендериться
//
// ReactDom.render(                                                  // метод рендер принимает два аргумента:
//   <HelloWorld />,                      // 1 - компонент, который рендерится
//   document.getElementById('app')                                // 2 - в каком элементе происходит рендер
// );


// // идея чистой функции f(d)=V то есть функция от данных есть вид(View)
// let HelloUser = React.createClass({
//   render: function(){
//     return (
//       <div> Hello, {this.props.name}</div>
//     )
//   }
// });
// ReactDom.render(
//   <HelloUser name="Pavel"/>,
//    document.getElementById('app')
//  );


// // вложенные модули
// let FriendsContainer = React.createClass({
//   render: function(){
//     let name = 'Tyler McGinnis'
//     let friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
//     return (
//       <div>
//         <h3> Name: {name} </h3>
//         <ShowList names={friends} />
//       </div>
//     )
//   }
// });
// let ShowList = React.createClass({
//   render: function(){
//     let listItems = this.props.names.map(function(friend){
//       return <li> {friend} </li>;
//     });
//     return (
//       <div>
//         <h3> Friends </h3>
//         <ul>
//           {listItems}
//         </ul>
//       </div>
//     )
//   }
// });
// ReactDom.render(
//   <FriendsContainer />,
//   document.getElementById('app')
// );

//
// let USER_DATA = {
//   name: 'Luzanov Pavel',
//   username: 'gitpash',
//   image: 'https://avatars0.githubusercontent.com/u/22022930?v=3&u=4770f7e04a4eadf985b9d9445ca348b4769458fb&s=400'
// }



let React = require('react');
let ReactDOM = require('react-dom');
let routes = require('./config/routes')

// let ProfilePic = React.createClass({
//   render: function () {
//     return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
//   }
// });


// let Link = React.createClass({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//   },
//   render: function () {
//     return (
//       <span style = {{ color: 'red', cursor: 'pointer'}}
//         onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })

// let ProfileLink = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Link href = {'https://www.github.com/' + this.props.username}>
//           {this.props.username}
//         </Link>
//       </div>
//     );
//   }
// });

// let ProfileName = React.createClass({
//   render: function (){
//     return<div>{this.props.name}</div>
//   }
// });

// создаём контейнер для всех трёх объектов
// let Avatar = React.createClass({
//   render: function () {
//     return(  // обязательно при рендере оборачивать в Один! корневой контейнер (тут див)
//       <div>
//           <ProfilePic imageUrl={this.props.user.image} />
//           <ProfileName name={this.props.user.name} />
//           <ProfileLink username={this.props.user.username} />
//       </div>
//     );
//   }
// });

ReactDOM.render(routes,document.getElementById('app'));
// var ProfilePic = function (props) {
//   return <img src={'https://photo.fb.com/' + props.username} />
// }
// var ProfileLink = function (props) {
//   console.log(this.props);
//   return (
//     <a href={'https://www.fb.com/' + props.username}>
//       {props.username}
//     </a>
//   )
// }
// var Avatar = function (props) {
//
//   return (
//     <div>
//       <ProfilePic username={props.username} />
//       <ProfileLink username={props.username} />
//     </div>
//   )
// }
//
// ReactDom.render(
//   <Avatar username="myName" anyData={33}/>,
//   document.getElementById('app')
// );
//
//
//
