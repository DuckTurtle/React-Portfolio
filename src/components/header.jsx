import React from 'react';
 

function Header(parts) {
    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => { document.title = currentPage.name }, [currentPage]);

    return (
        <nav className="navbar navbar-expand-lg d-flex row">
            <div className='container-fluid'>
                <span className='navbar-brand'
                    onClick={() => { props.setCurrentPage(props.parts[0]) }}>
                    Quinton Schnell
                </span>
                <ul className='navbar-nav'>
                {pages.map((page) => (
                    <li key={page.name} className={`nav-item mx-3`}>
                        <span className={`${currentPage.name === page.name && 'navActive'}`} onClick={() => { setCurrentPage(page) }}>
                            {page.name}
                        </span>
                    </li>
                ))}
            </ul>
            </div>
        </nav>
    )
}

export default Header;