import NavbarHeader from "./components/nav_header";
import Wrapper from "./components/wrapper";
import NavBar from "./components/navbar_nav";
import SidebarBg from "./components/sidebar_bg";
import Content from "./components/content";
import AppHeader from "./components/appheader";
import SideBar from "./components/sidebar";
const App = () => {
  return (
    <>
     
      <Wrapper>
        <AppHeader>
         <NavbarHeader />
         <NavBar />
        </AppHeader>
        <SideBar/>
        <SidebarBg />
        <Content />
      </Wrapper>

    </>
  );
}

export default App;
