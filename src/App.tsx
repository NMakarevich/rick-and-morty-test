import './App.scss';
import Search from './components/Search/Search.tsx';
import ResultList from './components/ResultList/ResultList.tsx';

function App() {
  return (
    <>
      <header className="app-header">
        <div className="container">
          <Search />
        </div>
      </header>
      <main className="app-main">
        <div className="container">
          <ResultList />
        </div>
      </main>
    </>
  );
}

export default App;
