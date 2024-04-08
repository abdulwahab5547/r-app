
function Col({activeToggle, children}){
    return(
        <div className={`col col-12 col-sm-12 py-1 ${activeToggle === 'toggle-one' ? 'col-lg-3 col-md-3' : 'col-lg-3 col-md-3'} ${activeToggle === 'toggle-two' ? 'col-lg-6 col-md-6' : ''}${activeToggle === 'toggle-three' ? 'col-lg-8 col-md-8' : ''}`}>
            <div className='col-space px-2'>
                {children}
            </div>
        </div>
    )
}

export default Col;