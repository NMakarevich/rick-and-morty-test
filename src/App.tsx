import './App.scss';
import Search from './components/Search/Search.tsx';
import ResultList from './components/ResultList/ResultList.tsx';
import ResultsProvider from './providers/results/results.provider.tsx';

function App() {
  return (
    <ResultsProvider>
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
    </ResultsProvider>
  );
}

export default App;
