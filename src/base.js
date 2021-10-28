import NavbarHeader from "./components/nav_header";
import Wrapper from "./components/wrapper";
import NavBar from "./components/navbar_nav";
import SidebarBg from "./components/sidebar_bg";
import AppHeader from "./components/appheader";
import SideBar from "./components/sidebar";
const Base = ({children}) => {
  return (
    <>     
      <Wrapper>
        <AppHeader>
         <NavbarHeader />
         <NavBar />
        </AppHeader>
        <SideBar/>
        <SidebarBg />
        {children}
      </Wrapper>

    </>
  );
}
export default Base;