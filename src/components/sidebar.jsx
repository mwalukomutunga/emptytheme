import { NavLink} from "react-router-dom";
const SideBar = (props) => {
    return (
  
        <div id="sidebar" className="app-sidebar">

            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">

                <div className="menu">
                    <div className="menu-profile">
                        <NavLink to = "/" className="menu-profile-link" data-toggle="app-sidebar-profile"
                            data-target="#appSidebarProfileMenu">
                            <div className="menu-profile-cover with-shadow"></div>
                            <div className="menu-profile-image">
                                <img src="../assets/img/user/user-13.jpg" alt="" />
                            </div>
                            <div className="menu-profile-info">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                       Admin
                                    </div>
                                    {/* <div className="menu-caret ms-auto"></div> */}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="menu-header">Navigation</div>

                    <div className="menu-item">
                        <NavLink to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-th-large"></i>
                            </div>
                            <div className="menu-text">Dashboard </div>
                        </NavLink>
                    </div>
                    <div className="menu-item has-sub">
                        <NavLink to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-hdd"></i>
                            </div>
                            <div className="menu-text">Digi Farm</div>
                            <div className="menu-caret"></div>
                        </NavLink>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <NavLink to="/valuechain" className="menu-link">
                                    <div className="menu-text">Value chain</div>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to="/periods" className="menu-link">
                                    <div className="menu-text">Validity Periods</div>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to="/costs" className="menu-link">
                                    <div className="menu-text">Extra Costs</div>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to="/items" className="menu-link">
                                    <div className="menu-text">Insurance items</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item has-sub">
                        <NavLink to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-hdd"></i>
                            </div>
                            <div className="menu-text">FTMA</div>
                            <div className="menu-caret"></div>
                        </NavLink>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <NavLink to="/fcs" className="menu-link">
                                    <div className="menu-text">FSCs</div>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to="/fcstreams" className="menu-link">
                                    <div className="menu-text">FCS Streams</div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    {/* <div className="menu-item">
                        <NavLink to="/fcs" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">FCSs</div>
                        </NavLink>
                    </div>
                    <div className="menu-item">
                        <NavLink to="/fcstreams" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">FCS Streams</div>
                        </NavLink>
                    </div> */}
                    <div className="menu-item">
                        <NavLink to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">Locations</div>
                        </NavLink>
                    </div>
                    <div className="menu-item has-sub">
                        <NavLink to ="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-gem"></i>
                            </div>
                            <div className="menu-text">Acturial</div>
                            <div className="menu-caret"></div>
                        </NavLink>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <NavLink to="/" className="menu-link">
                                    <div className="menu-text">Product Config <i className="fa fa-paper-plane text-theme"></i></div>
                                </NavLink>
                            </div>
                            <div className="menu-item">
                                <NavLink to="/" className="menu-link">
                                    <div className="menu-text">Cost Config</div>
                                </NavLink>
                            </div>
                           
                        </div>
                    </div>


                    <div className="menu-item d-flex">
                        <NavLink to="/" className="app-sidebar-minify-btn ms-auto"
                            data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left"></i></NavLink>
                    </div>

                </div>

            </div>

        </div>
       
    );
}

export default SideBar;