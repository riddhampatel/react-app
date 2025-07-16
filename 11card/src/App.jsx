import Card from './Card';

function App() {
  return (
    <div className="card-container">
      <Card
        name="Riyank Raiyani"
        role="Frontend Developer"
        image="https://via.placeholder.com/150"
      />
      <Card
        name="Sanya Mehta"
        role="UI/UX Designer"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
