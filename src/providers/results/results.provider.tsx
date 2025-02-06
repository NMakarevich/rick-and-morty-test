import { ReactNode, useState } from 'react';
import { Character } from '../../interfaces.ts';
import { ResultsContext } from './results.context.tsx';

function ResultsProvider({ children }: { children: ReactNode }) {
  const [results, setResults] = useState<Character[]>([]);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>{children}</ResultsContext.Provider>
  );
}

export default ResultsProvider;
