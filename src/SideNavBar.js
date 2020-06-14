import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import BarNavItem from './NavItem'
// import { slide as Menu } from "react-burger-menu";
import AllFree from './AllFree'

class SideNavBar extends React.Component {
	constructor(props) {
        super(props);
        this.state = {showBackButton: false,
        		currentView:""
        	};
    }
    handleToggle = () => this.setState({showBackButton: !this.state.showBackButton});
    backToMain = () => {
    	console.log("hello")
    	this.setState(
    		{currentView:"main"}
    	)
    }
	render() {
		const navbar = {backgroundColor: '#211f1f'};

		return (

			<SideNav style={navbar}
			    onSelect={(selected) => {
			        // Add your code here
			    }}
			>
			    {this.state.showBackButton ? <button  onClick={this.backToMain}><i class="material-icons">chevron_left</i></button> : <SideNav.Toggle />}
			    <BarNavItem currentView={this.state.currentView} handleToggle={this.handleToggle}/>
			</SideNav>
		)
	}
}

export default SideNavBar