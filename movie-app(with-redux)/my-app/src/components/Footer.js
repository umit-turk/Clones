
const Footer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                    Devoloped By :
                    <span className="text-warning font-weight-normal">
                        Umit Yasar Turk
                    </span>
                    , Using <i className="fab fa-react text-warning" /> React Js &amp; Redux js 
                    integred with external movies data API
                    <a
                        href="http://omdbapi.com/"
                        target="_blank"
                        className="text-warning"
                    >
                        OMDB
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;