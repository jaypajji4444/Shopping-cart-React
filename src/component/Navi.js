import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
  
} from 'reactstrap';

import { Link } from 'react-router-dom'

class Navi extends Component {
    state = {
        isOpen: false
    };




    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {



        return (
            <div>
                <Navbar style={{ backgroundColor: "#f2f2f2" }} light expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'><strong>TeamBantai</strong></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Link to="/" className="text-dark  p-3" >Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/cart" className=" text-dark p-3">Cart</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navi