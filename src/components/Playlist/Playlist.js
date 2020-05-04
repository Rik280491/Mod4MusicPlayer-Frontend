import React from 'react'
import CreatePlaylist from './StyleComponent/CreatePlaylist'
import PlaylistsStyle from './StyleComponent/PlaylistsStyle'
import API from '../../../src/API';


export default class Playlist extends React.Component {
    constructor(){
        super()
        this.state = {
            playlist: ""
        }
    }

    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
    API.findUser(this.props.username).then(json => {
        const userID = json[0].id
        console.log(json)
    API.createPlaylist({playlist :{name: this.state.playlist, user_id: userID}} )
    })
  
    }

render(){
    return (
        <div>
        <CreatePlaylist handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <PlaylistsStyle/>
    </div>
   
   
    )
}

}