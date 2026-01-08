import { useEffect, useRef } from "react";
import EventCard from "./components/EventCard";
import { calendarData } from "./data";
import "./App.css";

function App() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find the event that matches today or is the closest future date
    const targetEvent = calendarData.find((event) => {
      const eventDate = new Date(event.datum);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });

    // Scroll to the target event if found
    if (targetEvent && cardRefs.current[targetEvent.datum]) {
      cardRefs.current[targetEvent.datum]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="mainContainer">
      {calendarData.map((event) => (
        <div
          key={event.datum}
          ref={(el) => {
            cardRefs.current[event.datum] = el;
          }}
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}

export default App;
