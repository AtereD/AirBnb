import React from "react"
import './App.css';
import BodyText from "./components/BodyText";
import NavBar from "./components/NavBar.js"
import Card from "./components/Card"
import data from "./components/data"

function App() {
  const dataCard = data.map(item => {
    return <Card 
        key={item.id}
        item={item}
    />
  })
  return (
    <div>
      <NavBar />
      <BodyText />
      <section className="card--list">
          {dataCard}
      </section>
    </div>
  );
}

export default App;


{/* <Card 
          img={zack}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
      />
      <Card 
          img={wedding}
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price="215"
      />
      <Card 
          img={bike}
          rating="4.8"
          reviewCount={2}
          country="NIGERIA"
          title="Group Mountain Bike"
          price="50"
      /> */}