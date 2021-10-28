import { Link,BrowserRouter as Router, } from "react-router-dom";
const SideBar = (props) => {
    return (
  <Router>
        <div id="sidebar" className="app-sidebar">

            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">

                <div className="menu">
                    <div className="menu-profile">
                        <Link to = "/" className="menu-profile-link" data-toggle="app-sidebar-profile"
                            data-target="#appSidebarProfileMenu">
                            <div className="menu-profile-cover with-shadow"></div>
                            <div className="menu-profile-image">
                                <img src="../assets/img/user/user-13.jpg" alt="" />
                            </div>
                            <div className="menu-profile-info">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        Sean Ngu
                                    </div>
                                    {/* <div className="menu-caret ms-auto"></div> */}
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="menu-header">Navigation</div>

                    <div className="menu-item">
                        <Link to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-th-large"></i>
                            </div>
                            <div className="menu-text">Dashboard </div>
                        </Link>
                    </div>
                    <div className="menu-item has-sub">
                        <Link to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-hdd"></i>
                            </div>
                            <div className="menu-text">Settings</div>
                            <div className="menu-caret"></div>
                        </Link>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Value chain</div>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Validity Periods</div>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Extra Costs</div>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Validity Period</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <Link to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">Product Config</div>
                        </Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">Locations</div>
                        </Link>
                    </div>
                    <div className="menu-item has-sub">
                        <Link to ="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-gem"></i>
                            </div>
                            <div className="menu-text">Acturial</div>
                            <div className="menu-caret"></div>
                        </Link>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Product Config <i className="fa fa-paper-plane text-theme"></i></div>
                                </Link>
                            </div>
                            <div className="menu-item">
                                <Link to="/" className="menu-link">
                                    <div className="menu-text">Cost Config</div>
                                </Link>
                            </div>
                           
                        </div>
                    </div>


                    <div className="menu-item d-flex">
                        <Link to="/" className="app-sidebar-minify-btn ms-auto"
                            data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left"></i></Link>
                    </div>

                </div>

            </div>

        </div>
        </Router>
    );
}

export default SideBar;