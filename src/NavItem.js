import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AllFree from './AllFree'
import MainItem from './MainItem'
import SubItem from './SubItem'

class BarNavItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {parentOpen: true};
    }


	render () {
		return (
			<>
				<SideNav.Nav defaultSelected="home">
			        {this.state.parentOpen ? <MainItem currentView={this.props.currentView} handleBackButton={this.props.handleToggle}/> : <SubItem />}
			    </SideNav.Nav>
		    </>

			)
	}
}

export default BarNavItem