import './JournalEntry.css';

function JournalEntry({bgColor, darkBG}){
    return(
        <div className="journal-entry my-3" style={{backgroundColor: bgColor}}>
            <div className='d-flex align-items-center part-content'>
                <div className='colorful-circle'></div>
                <div>
                    <p className='px-2 m-0 py-2'>Something</p>
                </div>
                
            </div>
            
        </div>
    )
}

export default JournalEntry;