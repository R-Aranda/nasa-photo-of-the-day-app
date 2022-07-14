import React, { useState, useEffect } from "react";

const App = (props) => {
  const [nasa, setNasa] = useState({});
  const fetchNasaData = async () => {
    const response = await fetch("/api/nasa");
    const nasaData = await response.json();
    setNasa(nasaData);
  };

  useEffect(() => {
    fetchNasaData();
  }, []);

  let copyright;

  if (!nasa.copyright) {
    copyright = <a href="https://www.nasa.gov/">NASA</a>;
  } else {
    copyright = nasa.copyright;
  }

  return (
    <div>
      <h1>Nasa's Astronomy Picture of the Day</h1>
      <a href={nasa.hdurl}>
        <img
          src={nasa.hdurl}
          alt="Clicking on the picture will download the highest resolution version available."
        />
      </a>
      <h3>{nasa.title}</h3>
      <strong>Copyright & Credit:</strong> {copyright}
      <p>"{nasa.explanation}"</p>
      <p>{nasa.date}</p>
    </div>
  );
};

export default App;
