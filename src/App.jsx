import React, { useState } from 'react';
import Calendar from './components/Calendar';

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    alert(`You selected:\nTitle: ${event.title}\nStart: ${event.start}\nEnd: ${event.end}`);
  };

  return (
    <div>
      <h1>Reunion Scheduler</h1>
      <Calendar onSelectEvent={handleSelectEvent} />
      {selectedEvent && (
        <div>
          <h2>Selected Event</h2>
          <p>Title: {selectedEvent.title}</p>
          <p>Start: {selectedEvent.start.toString()}</p>
          <p>End: {selectedEvent.end.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default App;