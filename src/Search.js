import './Search.css';

function Search({darkBG, bgColor, searchRef, textColor}){
    return(
        <div className="search-view-overlay">
            <div className="search-view-content" style={{ backgroundColor: darkBG }} ref={searchRef}>
                <form className="main-search-bar form-inline">
                    <div className='search-container d-flex align-items-center py-3 px-2 justify-content-center'>
                        <input autoFocus style={{ backgroundColor: bgColor, color: textColor }}  className="main-search-input py-2 px-2" type="search" placeholder="Search" aria-label="Search"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search;