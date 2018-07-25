import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {Footer,Collapse, Navbar,NavbarNav, NavbarBrand, NavItem, NavbarToggler, NavLink} from './component'
import Routes from './Routes'
import './index.css';
import { FooterPage } from './goodtime/goodtime'

    class App extends Component {

    	 constructor(props) {
		    super(props);
		    this.state ={
		      collapsed: false,
		    };
		    this.handleTogglerClick = this.handleTogglerClick.bind(this);
		    this.handleNavbarClick = this.handleNavbarClick.bind(this);
		  }

		  handleTogglerClick(){
		    this.setState({
		      collapsed: !this.state.collapsed
		    });
		  }

		  handleNavbarClick(){
		    this.setState({
		      collapsed: false
		    });
		  }

      render () {
      	 const collapsed = this.state.collapsed;
    	 const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>

        return (
          <BrowserRouter>
             <div className="flyout">
		          <Navbar color="indigo" dark expand="md" fixed="top" scrolling>
		            <NavbarBrand href="/">
		              <img src="../img/logo.png" alt="Good Time" height="50" />
		            </NavbarBrand>
		            <NavbarToggler onClick={this.handleTogglerClick}/>
		            <Collapse isOpen={this.state.collapsed} navbar>
		              <NavbarNav right>
		                <NavItem>
		                  <NavLink to="/" onClick={this.handleNavbarClick}>Home</NavLink>
		                </NavItem>
		                <NavItem>
		                  <NavLink onClick={this.handleNavbarClick} to="/css">CSS</NavLink>
		                </NavItem>
		                <NavItem>
		                  <NavLink onClick={this.handleNavbarClick} to="/components">Components</NavLink>
		                </NavItem>
		                <NavItem>
		                  <NavLink onClick={this.handleNavbarClick} to="/advanced">Advanced</NavLink>
		                </NavItem>
		              </NavbarNav>
		            </Collapse>
		          </Navbar>
		            { collapsed && overlay}
		          <main style={{marginTop: '4rem'}}>
		            <Routes />
		          </main>
	             <FooterPage />         
             </div>
          </BrowserRouter>
        )
      }
    }
ReactDOM.render(<App />, document.getElementById('app'))