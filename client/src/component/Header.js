import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    getNavItem(element) {
        if (element) {
            return (
                <NavItem>
                    <NavLink href={element.href}>
                        {(element.fa) ? (<span className={"fa fa-" + element.fa} />) : null}
                        {element.title}
                        {(element.count) ? (<Badge color="light" pill>{element.count}</Badge>) : null}
                    </NavLink>
                </NavItem>
            );
        } else {
            return null;
        }
    }

    getLeftNavItems() {
        const { session, filterNull } = this.props.stateApp;
        let nis = []
        nis = nis.concat([
            { href: "/#HomeContent", title: "Inicio", fa: "home" },
        ]);
        if (session) {

            if (session.type === "admin") {
                nis = nis.concat([
                    { href: "/#AdminContent", title: "Administración", fa: "users" }
                ]);
            } else if (session.type === "user") {
                nis = nis.concat([
                    { href: "/#CoursesContent", title: "Cursos", fa: "th-list" }
                ]);
            }
            nis = nis.concat([
                { href: "/#Page1Content", title: "Pagina 1" },
                { href: "/#Page2Content", title: "Pagina 2" }
            ]);
        }
        return nis.map(this.getNavItem).filter(filterNull);
    }

    getRightNavItems() {
        const { session, filterNull } = this.props.stateApp;
        let nis = []
        if (session) {
            nis = nis.concat([
                { href: "/#MessagesContent", title: "Mensajes", fa: "envelope", count: 1 },
                { href: "/#NotificationsContent", title: "Notificaciones", fa: "bell", count: 2 }
            ]);
        } else {
            nis = nis.concat([
                { href: "/#LoginContent", title: "Entrar", fa: "sign-in" },
            ]);
        }
        return nis.map(this.getNavItem).filter(filterNull);
    }

    render() {
        return (
            <div className="Header">
                <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/#">RRHH{/* TODO: Hay que hacer el logo */}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {this.getLeftNavItems()}
                        </Nav>
                        <Nav navbar className="ml-auto">
                            {this.getRightNavItems()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;