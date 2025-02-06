import './result-list.scss';
import { ReactElement, useContext } from 'react';
import { ResultsContext } from '../../providers/results/results.context.tsx';
import ResultItem from '../ResultItem/ResultItem.tsx';

function ResultList(): ReactElement {
  const { results } = useContext(ResultsContext);

  return (
    <>
      {results && results.length > 0 && (
        <ul className={'result-list'}>
          {results.map((item, index) => (
            <li
              className={`result-item ${index < 2 ? 'result-item_big' : 'result-item_small'}`}
              key={item.id}
            >
              <a className={'result-item_link'} href={item.url} target="_blank">
                <ResultItem character={item} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ResultList;
