import './App.css';

function App() {
  return (
    <div className="App bg-white h-screen">
      <h1>Test</h1>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTbJ6q6nCvC-F8ctwjE8F_gh176HK1p-EcKg&usqp=CAU" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
