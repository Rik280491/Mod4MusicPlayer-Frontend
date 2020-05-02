import React from 'react'
import API from './API'

export default class Signup extends React.Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault()
        API.SignUp(this.state).then(json => console.log(json))
      }




    render() {
        return(
          <form onSubmit={this.handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" onChange={this.handleChange}/><br/>
    
            <label>Password:</label>
            <input type="password" name="password" onChange={this.handleChange}/><br/>
    
            <input type="submit" value="Sign Up"/>
          </form>
        )
      }



}



