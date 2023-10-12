import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";
import { HeaderNavigationArea, Navbar, Navitem } from "./style";

const MainMenu = ({ allmenuData }) => {
    const menuarr = allmenuData;
    return (
        <HeaderNavigationArea>
            <Navbar className="main-menu">
                {menuarr.map((menu) => {
                    return (
                        <Navitem key={`menu-${menu.node.id}`}>
                            <Link activeClassName="active" to={menu.node.link}>
                                {menu.node.text}
                            </Link>
                        </Navitem>
                    );
                })}
            </Navbar>
        </HeaderNavigationArea>
    );
};

MainMenu.propTypes = {
    allmenuData: PropTypes.array,
};

export default MainMenu;
