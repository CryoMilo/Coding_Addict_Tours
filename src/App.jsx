import "./styles.css";
import Tours from "./components/Tours.jsx";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

export default function App() {
  const url = "https://course-api.com/react-tours-project";
  const [isLoading, setisLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const deleteTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const loadData = async () => {
    setisLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setisLoading(false);
      setTours(data);
      console.log(data);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading === true) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (tours.length === 0) {
    return (
      <div className="noTours">
        <header className="title">No Tours Left</header>
        <button
          className="refreshBtn"
          onClick={() => {
            loadData();
          }}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <main>
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}
