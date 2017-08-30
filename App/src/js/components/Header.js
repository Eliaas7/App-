import React from "react";
import Title from "./Header/Title";

export default class Header extends React.Component{
  render(){
    return(

      <div>
        <form action="success.html">
          <Title title={this.props.title}/>
          <p>Nombre de Usuario<input className="user" type="text" name="username"/></p>
          <p>Contraseña<input className="password" type="password" name="psw"/></p>
          <input type="submit" value="Submit"/>
        </form>
      </div>

    );
  }
}
