import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class MainItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
        	currentItem: 'main',
        	subItemOpen: false
        };
    }
    handleToggle = (currentItem) => {
    	this.props.handleBackButton();
    	this.setState(
    		{
    			subItemOpen: !this.state.subItemOpen,
    			currentItem: currentItem
    		}
    	);
    }

    changeCurrentView = () => {
    	console.log("hello2")
    	this.setState(
    		{
    			subItemOpen: !this.state.subItemOpen,
    			currentItem: this.props.currentView
    		}
    	);
    }

	render () {

		return (
				<>

			       {this.state.currentItem === "main" && (
			       	<>
			       		<NavItem onClick={()=> this.handleToggle('home')} eventKey="home">
			            <NavIcon>
			                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
			            </NavIcon>
			            <NavText>
			               Home
			            </NavText>
			        	</NavItem>
		
				        <NavItem onClick={()=> this.handleToggle('chart')} eventKey="charts">
				            <NavIcon>
				                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
				            </NavIcon>
				            <NavText>
				                CHARTS
				            </NavText>

	                        <NavItem eventKey="charts/linechart">
				            <NavText>
				                Line Chart
				            </NavText>
					        </NavItem>
					        <NavItem eventKey="charts/barchart">
					            <NavText>
					                Bar Chart
					            </NavText>
					        </NavItem>

				        </NavItem>

    		       		<NavItem onClick={()=> this.handleToggle('my_favorite')} eventKey="my_favorite">
			            <NavIcon>
			            	<i className="material-icons" style={{ fontSize: '1.75em' }}>favorite_border</i>
			            </NavIcon>
			            <NavText>
			                MY FAVORITES
			            </NavText>
			        	</NavItem>

    		       		<NavItem onClick={()=> this.handleToggle('channels')} eventKey="channels">
			            <NavIcon>
			                <i className="material-icons" style={{ fontSize: '1.75em' }}>airplay</i>
			            </NavIcon>
			            <NavText>
			               CHANNELS
			            </NavText>
			        	</NavItem>

			        	<NavItem eventKey="setting">
					        <NavIcon>
					            <i className="material-icons" style={{ fontSize: '1.75em' }}>build</i>
					        </NavIcon>
					        <NavText>
					            SETTINGS
					        </NavText>
					        <NavItem eventKey="charts/linechart">
					            <NavText>
					                Aaccount info
					            </NavText>
					        </NavItem>
					        <NavItem eventKey="charts/barchart">
					            <NavText>
					                logout
					            </NavText>
					        </NavItem>
					    </NavItem>
			        </>
			       	)
			       }

   			       {this.state.subItemOpen && this.state.currentItem==="chart" && (
			       	<>
			       	  	<hr/>
			       		<NavItem>
			            <NavText>
			                <center>Chart subitem 1</center>
			            </NavText>
			                
			        	</NavItem>
				        <NavItem>
				            <NavText>
				                <center>Charts subitem 2</center>
				            </NavText>
				                
				        </NavItem>
			        </>
			       	)
			       }
  			       {this.state.subItemOpen && this.state.currentItem==="home" && (
			       	<>
			       	  	<hr/>
			       		<NavItem>
			            <NavText>
			                <center>home subitem 1</center>
			            </NavText>
			                
			        	</NavItem>
				        <NavItem>
				            <NavText>
				                <center>home subitem 2</center>
				            </NavText>
				                
				        </NavItem>
			        </>
			       	)
			       }

			       {this.state.subItemOpen && this.state.currentItem==="my_favorite" && (
			       	<>
			       	  	<hr/>
			       		<NavItem>
			            <NavText>
			                <center>my_favorite subitem 1</center>
			            </NavText>
			                
			        	</NavItem>
				        <NavItem>
				            <NavText>
				                <center>my_favorite subitem 2</center>
				            </NavText>
				                
				        </NavItem>
			        </>
			       	)
			       }

			       {this.state.subItemOpen && this.state.currentItem==="channels" && (
			       	<>
			       	  	<hr/>
			       		<NavItem>
			            <NavText>
			                <center>channels subitem 1</center>
			            </NavText>
			                
			        	</NavItem>
				        <NavItem>
				            <NavText>
				                <center>channels subitem 2</center>
				            </NavText>
				                
				        </NavItem>
			        </>
			       	)
			       }
		       </>
		)
	}
}

export default MainItem