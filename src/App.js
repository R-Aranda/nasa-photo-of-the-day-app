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
    copyright = null;
  } else {
    copyright = (
      <div>
        <strong>Copyright & Credit:</strong> {nasa.copyright}
      </div>
    );
  }

  return (
    <div>
      <h1>Nasa's Astronomy Picture of the Day</h1>
      <img src={nasa.hdurl} />
      <h3>{nasa.title}</h3>
      {copyright}
      <p>"{nasa.explanation}"</p>
      <p>{nasa.date}</p>
    </div>
  );
};

export default App;
