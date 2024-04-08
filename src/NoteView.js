import NoteCard from './NoteCard';
import './NoteView.css';

const NoteView = ({darkBG, children }) => {
    return (
      <div className="note-view-overlay" >
          <div className="note-view-content" style={{ backgroundColor: darkBG }}>
            {children}
          </div>
      </div>
    );
};

export default NoteView;