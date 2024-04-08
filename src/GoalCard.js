function GoalCard(){
    return(
        <div>
            <h3 className='part-heading py-2 px-1 m-0'>📝 Goal Tracking</h3>
            <div className='part-content pt-1 px-1'>
                <p className='part-inner-heading'>
                    Yearly goals
                </p>
                <ul className='part-list'>
                    <li>Goal 1</li>
                    <li>Goal 2</li>
                    <li>Goal 3</li>
                </ul>
                <p className='part-inner-heading'>
                    Monthly Goals
                </p>
                <ul className='part-list'>
                    <li>Goal 1</li>
                    <li>Goal 2</li>
                    <li>Goal 3</li>
                </ul>
                <p className='part-inner-heading'>
                    Weekly Goals
                </p>
                <ul className='part-list'>
                    <li>Goal 1</li>
                    <li>Goal 2</li>
                    <li>Goal 3</li>
                </ul>
            </div>
        </div>
    )
}

export default GoalCard;