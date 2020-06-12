import React, {Component} from 'react';


class Dashboard extends Component{
	render(){
        const favouriteMovies = this.props.movies;
      	
    	return(
        <div>
          <h2></h2>
          <p>Liked By:</p>
          
        </div>
        )
    }
}

export default Dashboard;