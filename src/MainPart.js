import './MainPart.css';
import Col from './Col';
import ColTwo from './ColTwo';
import React, { useState, useEffect } from 'react';
import NoteCard from './NoteCard';
import TaskCard from './TaskCard';
import GoalCard from './GoalCard';
import JournalCard from './JournalCard';
import JournalEntry from './JournalEntry';
import KnowledgeCard from './KnowledgeCard';
import NoteRow from './NoteRow';
function MainPart({iconColor, darkBG, expanded, bgColor}){

    const [isSidebarVisible, setSidebarVisibility] = useState(false);

    const handleMouseEnter = () => {
        if (!expanded) { 
        setSidebarVisibility(true);
        }
    };

    const handleMouseLeave = () => {
        if (!expanded) {
        setSidebarVisibility(false);
        }
    };

    useEffect(() => {
        setSidebarVisibility(expanded);
    }, [expanded]);

    // View Toggle Settings

    const [activeToggle, setActiveToggle] = useState(null);

    const handleClick = (toggle) => {
        setActiveToggle(toggle);
    };

    const [activeToggleTwo, setActiveToggleTwo] = useState(null);

    const handleClickTwo = (toggle) => {
        setActiveToggleTwo(toggle);
    };
    

    return(
        <div className={`main-part ${expanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>

            {isSidebarVisible && (
                <div class='sidebar-bg show' style={{backgroundColor: darkBG}}>
                </div>
            )}
            
            <div className="fixed-width py-4">
                
                <div className={`col sidebar ${expanded ? 'col-3' : 'col-1'}`}>
                    <div className='sidebar-icons hoverable-element' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div>
                            <div className='d-flex'>
                                <button><i className="fa-solid fa-list-check shadow-effect" style={{color: iconColor}}></i></button> 
                                {isSidebarVisible && (<div className='sidebar-text'> Task Management</div>)}
                            </div>
                            
                        </div>
                        
                        <div className='d-flex'>
                            <button><i class="fa-solid fa-bullseye shadow-effect" style={{color: iconColor}}></i></button>
                            {isSidebarVisible && (<div className='sidebar-text'> Goal Tracking</div>)}
                        </div>

                        <div className='d-flex'>
                            <button><i class="fa-solid fa-pen-nib shadow-effect" style={{color: iconColor}}></i></button>
                            {isSidebarVisible && (<div className='sidebar-text'> Journal Entries</div>)}
                        </div>

                        <div className='d-flex'>
                            <button><i class="fa-solid fa-pen shadow-effect" style={{color: iconColor}}></i></button>
                            {isSidebarVisible && (<div className='sidebar-text'> Knowledge Bank</div>)}
                        </div>
                        
                    </div>
                    
                </div>
                <div className={`col content ${expanded ? 'col-9' : 'col-11'}`}>
                    <div className='row justify-content-center py-4'>
                        
                        <div className='row-div d-flex justify-content-between'>
                            <h2 className='main-content-heading py-1'>Fixed cards</h2>
                            <div className='d-flex'>
                                <p className='px-2 select-text'>Select view:</p>
                                <div className='row-div-icons pt-1'>
                                    <i onClick={() => handleClick('toggle-one')} class="fa-brands fa-windows px-2 toggle-one"></i>
                                    <i onClick={() => handleClick('toggle-two')} class="fa-solid fa-bars px-2 toggle-two"></i>
                                    <i onClick={() => handleClick('toggle-three')} class="fa-solid fa-list px-2 toggle-three"></i>
                                </div>
                            </div>
                        </div>

                        <Col activeToggle={activeToggle}>
                            <NoteRow darkBG={darkBG}>
                                <TaskCard darkBG={darkBG}/>
                            </NoteRow>
                        </Col>

                        <Col activeToggle={activeToggle}>
                            <NoteRow darkBG={darkBG}>
                                <GoalCard darkBG={darkBG}/>
                            </NoteRow>
                        </Col>

                        <Col activeToggle={activeToggle}>
                            <NoteRow darkBG={darkBG}>
                                <JournalCard darkBG={darkBG}>
                                    <JournalEntry darkBG={darkBG} bgColor={bgColor}/>
                                </JournalCard>
                            </NoteRow>
                        </Col>

                        <Col activeToggle={activeToggle}>
                            <NoteRow darkBG={darkBG}>
                                <KnowledgeCard darkBG={darkBG}/>
                            </NoteRow>
                        </Col>

                    </div>

                    {/* Row 2 */}

                    <div className='row justify-content-center py-4'>
                        <div className='row-div d-flex justify-content-between'>
                            <h2 className='main-content-heading py-1'>Custom cards</h2>
                            <div className='d-flex'>
                                <p className='px-2 select-text'>Select view:</p>
                                <div className='row-div-icons pt-1'>
                                    <i onClick={() => handleClickTwo('toggle-one')} class="fa-brands fa-windows px-2 toggle-one"></i>
                                    <i onClick={() => handleClickTwo('toggle-two')} class="fa-solid fa-bars px-2 toggle-two"></i>
                                    <i onClick={() => handleClickTwo('toggle-three')} class="fa-solid fa-list px-2 toggle-three"></i>
                                </div>
                            </div>
                        </div>
                        
                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                    </div>


                    <div className='row justify-content-center py-4'>
                        <div className='row-div d-flex justify-content-between'>
                            <h2 className='main-content-heading py-1'>Custom cards</h2>
                            <div className='d-flex'>
                                <p className='px-2 select-text'>Select view:</p>
                                <div className='row-div-icons pt-1'>
                                    <i onClick={() => handleClickTwo('toggle-one')} class="fa-brands fa-windows px-2 toggle-one"></i>
                                    <i onClick={() => handleClickTwo('toggle-two')} class="fa-solid fa-bars px-2 toggle-two"></i>
                                    <i onClick={() => handleClickTwo('toggle-three')} class="fa-solid fa-list px-2 toggle-three"></i>
                                </div>
                            </div>
                        </div>
                        
                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                    </div>

                    
                    <div className='row justify-content-center py-4'>
                        <div className='row-div d-flex justify-content-between'>
                            <h2 className='main-content-heading py-1'>Custom cards</h2>
                            <div className='d-flex'>
                                <p className='px-2 select-text'>Select view:</p>
                                <div className='row-div-icons pt-1'>
                                    <i onClick={() => handleClickTwo('toggle-one')} class="fa-brands fa-windows px-2 toggle-one"></i>
                                    <i onClick={() => handleClickTwo('toggle-two')} class="fa-solid fa-bars px-2 toggle-two"></i>
                                    <i onClick={() => handleClickTwo('toggle-three')} class="fa-solid fa-list px-2 toggle-three"></i>
                                </div>
                            </div>
                        </div>
                        
                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                        <ColTwo activeToggleTwo={activeToggleTwo}>
                            <NoteRow darkBG={darkBG}>
                                <NoteCard darkBG={darkBG}/>
                            </NoteRow>
                        </ColTwo>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainPart;