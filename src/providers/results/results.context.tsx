import { createContext } from 'react';
import { Character } from '../../interfaces.ts';

export interface IResultsContext {
  results: Character[];
  setResults: (results: Character[]) => void;
}

export const ResultsContext = createContext<IResultsContext>({
  results: [],
  setResults: (results: Character[]) => results,
});
