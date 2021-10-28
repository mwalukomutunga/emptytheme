function Wrapper({ children }) {
    return (
        <div id="app" className="app app-header-fixed app-sidebar-fixed">
            {children}

            <a href=";" className="btn btn-icon btn-circle btn-success btn-scroll-to-top"
                data-toggle="scroll-to-top"><i className="fa fa-angle-up"></i></a>


        </div>
    );
}

export default Wrapper;