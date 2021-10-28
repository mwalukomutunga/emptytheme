import { Link } from "react-router-dom";
const SideBar = (props) => {

    return (

        <div id="sidebar" className="app-sidebar">

            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">

                <div className="menu">
                    <div className="menu-profile">
                        <a className="menu-profile-link" data-toggle="app-sidebar-profile"
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
                        </a>
                    </div>
                    <div className="menu-header">Navigation</div>

                    <div className="menu-item">
                        <a href="widget.html" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-th-large"></i>
                            </div>
                            <div className="menu-text">Dashboard </div>
                        </a>
                    </div>
                    <div className="menu-item has-sub">
                        <a className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-hdd"></i>
                            </div>
                            <div className="menu-text">Settings</div>
                            <div className="menu-caret"></div>
                        </a>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <a href="email_inbox.html" className="menu-link">
                                    <div className="menu-text">Value chain</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="email_compose.html" className="menu-link">
                                    <div className="menu-text">Validity Periods</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="email_compose.html" className="menu-link">
                                    <div className="menu-text">Extra Costs</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="email_detail.html" className="menu-link">
                                    <div className="menu-text">Validity Period</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-item">
                        <a href="widget.html" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">Product Config</div>
                        </a>
                    </div>
                    <div className="menu-item">
                        <a href="widget.html" className="menu-link">
                            <div className="menu-icon">
                                <i className="fab fa-simplybuilt"></i>
                            </div>
                            <div className="menu-text">Locations</div>
                        </a>
                    </div>
                    <div className="menu-item has-sub">
                        <a className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-gem"></i>
                            </div>
                            <div className="menu-text">Acturial</div>
                            <div className="menu-caret"></div>
                        </a>
                        <div className="menu-submenu">
                            <div className="menu-item">
                                <a href="ui_general.html" className="menu-link">
                                    <div className="menu-text">Product Config <i className="fa fa-paper-plane text-theme"></i></div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="ui_typography.html" className="menu-link">
                                    <div className="menu-text">Cost Config</div>
                                </a>
                            </div>
                            {/* <div className="menu-item">
                                <a href="ui_tour.html" className="menu-link">
                                    <div className="menu-text">Intro JS</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="ui_offcanvas_toasts.html" className="menu-link">
                                    <div className="menu-text">Offcanvas & Toasts <i
                                        className="fa fa-paper-plane text-theme"></i></div>
                                </a>
                            </div> */}
                        </div>
                    </div>


                    <div className="menu-item d-flex">
                        <a className="app-sidebar-minify-btn ms-auto"
                            data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left"></i></a>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SideBar;