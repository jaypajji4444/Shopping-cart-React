import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
} from 'reactstrap';


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
                <Navbar color='primary' dark expand='sm' className='mb-5'>
                    <Container>
                        <NavbarBrand href='/'>ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href="/" className="text-white" >Home</NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="/cart" className=" text-white">Cart</NavLink>
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