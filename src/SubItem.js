import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class SubItem extends React.Component {
	render () {
		return (
			<>
	            <NavItem eventKey="charts/linechart">
	                <NavText>
	                    Line Chart+
	                </NavText>
	            </NavItem>
	            <NavItem eventKey="charts/barchart">
	                <NavText>
	                    Bar Chart
	                </NavText>
	            </NavItem>
            </>
			)
	}
}

export default SubItem