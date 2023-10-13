export const Header = () => {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <img height="32" src="/images/logo.svg" alt="logo Zvířátkovská škola JavaScriptu"/>
                <span className="fs-4">Pohádková škola JavaScriptu</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link">Domů</a></li>
                <li className="nav-item"><a href="/ucastnici/" className="nav-link">Účastníci</a></li>
                <li className="nav-item"><a href="/lektori/" className="nav-link">Lektoři</a></li>
                <li className="nav-item"><a href="/lekce/" className="nav-link">Lekce</a></li>
            </ul>
        </header>
    )
}