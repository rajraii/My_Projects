import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./assests/data";

function App() {

  const card = data.map(item => {
    return (
      <Card
        image={item.images}
        rating={item.stats.rating}
        num={item.stats.count}
        country={item.Location}
        desc={item.desc}
        price={item.price}
        openspots = {item.openspots}
      />
    )
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card--list">
        {card}
      </section>
    </>
  );
}

export default App;
