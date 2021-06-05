import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          WeekendWarriorConsulting
        </h1>
        <h3> Name your price! $$$ </h3>
        <div>
         $20 <input type="range" min="20" max="5000" class="slider"/> $5000
        </div>
        <h3> Choose your developer! </h3>
        <button> Choose here! </button>
        <h3> Choose if you provide benefits! </h3>
        <form>
        <label for="Yes">Yes</label>
          <input type="radio" id="Yes" name="benefits" value="Yes"/>
          <label for="No">No</label>
          <input type="radio" id="No" name="benefits" value="No"/>
        </form>
        <h3> React based. Clean, Current and Custom. </h3>
        <h3> All pay goes to developer and developer training.</h3>
        <h3> Help an entry level developer level up while being assured they are overseen and all code is checked by more senior peers. </h3>
      </header>
    </div>
  );
}

export default App;
