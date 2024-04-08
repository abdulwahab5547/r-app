function JournalCard({children}){
    return(
        <div className="px-1">
            <h3 className='part-heading py-2  m-0'>📝 Journal Entries</h3>
            <div>{children}</div>
            <div>{children}</div>
            <div>{children}</div>
            
        </div>
        
    )
}

export default JournalCard;