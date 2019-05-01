import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.handlerLinkClick = this.handlerLinkClick.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handlerLinkClick(event) {
        const { showContent } = this.props.stateApp;
        event.preventDefault()
        showContent(event.currentTarget.href.split('#')[1]);
        this.setState({
            isOpen: false
        });
    }

    getNavItem(element, index) {
        if (element) {
            return (
                <NavItem key={index}>
                    <NavLink href={element.href} onClick={this.handlerLinkClick}>
                        {(element.fa) ? (<span className={"fa fa-" + element.fa} />) : null} {element.title} {(element.count) ? (<Badge color="light" pill>{element.count}</Badge>) : null}
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
        return nis.map(this.getNavItem.bind(this)).filter(filterNull);
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
        return nis.map(this.getNavItem.bind(this)).filter(filterNull);
    }

    render() {
        return (
            <div className="Header">
                <Navbar color="primary" dark expand="md" fixed="top">
                    <NavbarBrand href="/#HomeContent" onClick={this.handlerLinkClick}>RRHH{/* TODO: Hay que hacer el logo */}</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            {this.getLeftNavItems()}
                        </Nav>
                        <Nav navbar className="ml-auto">
                            {this.getRightNavItems()}
                            {
                                this.props.stateApp.session ?
                                    (
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                <span className="fa fa-user"></span> {this.props.stateApp.session.name} <span className="caret"></span>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem onClick={this.handlerLinkClick} href="/#ProfileContent"><span className="fa fa-user" /> Mi perfil</DropdownItem>
                                                <DropdownItem onClick={this.handlerLinkClick} href="/#DatasContent"><span className="fa fa-cog" /> Mis datos</DropdownItem>
                                                <DropdownItem onClick={this.handlerLinkClick} href="/#PasswordContent"><span className="fa fa-lock" /> Cambiar clave</DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem onClick={this.handlerLinkClick} href="/#LoginContent"><span className="fa fa-sign-out" /> Salir</DropdownItem>
                                                <DropdownItem onClick={this.handlerLinkClick} href="/#HelpContent"><span className="fa fa-question-circle" /> Ayuda</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    )
                                    :
                                    (null)
                            }
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
