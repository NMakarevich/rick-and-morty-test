import './result-item.scss';
import { Character } from '../../interfaces.ts';
import { ReactElement } from 'react';

interface Props {
  character: Character;
}

function ResultItem(props: Props): ReactElement {
  const { character } = props;
  const localizedDate = new Date(character.created).toLocaleDateString();

  return (
    <div className={'item'}>
      <h2 className={'item-title'}>
        {character.name} - {character.species}
      </h2>
      <div className={'item-footer'}>
        <p className={'status'}>
          Status: <span className={character.status}>{character.status}</span>
        </p>
        <p className={'created'}>
          Created: <span>{localizedDate}</span>
        </p>
      </div>
    </div>
  );
}

export default ResultItem;
