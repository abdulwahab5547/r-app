function TaskCard(){
    return(
        <div>
            <h3 className='part-heading py-2 px-1 m-0'>📝 Task Management</h3>
            <div className='part-content pt-1 px-1'>
                <p className='part-inner-heading'>
                    Under 2 minutes
                </p>
                <ul className='part-list'>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
                <p className='part-inner-heading'>
                    Highlights of the day
                </p>
                <ul className='part-list'>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                    <li>Task 4</li>
                    <li>Task 5</li>
                </ul>
                <p className='part-inner-heading'>
                    Next up
                </p>
                <ul className='part-list'>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
            </div>
            
        </div>
    )
}

export default TaskCard;