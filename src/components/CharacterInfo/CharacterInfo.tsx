import './character-info.scss';
import { Character } from '../../interfaces.ts';
import { ReactElement } from 'react';

interface Props {
  character: Character;
}

function CharacterInfo(props: Props): ReactElement {
  const { character } = props;
  const localizedDate = new Date(character.created).toLocaleDateString();

  return (
    <div className={'character item'}>
      <h3 className={'character-title item-title'}>
        {character.name} - {character.species}
      </h3>
      <div className={'character-description'}>
        <ul className="character-info">
          <li className={'character-info_item'}>
            Type: <span>{character.type || 'unknown'}</span>
          </li>
          <li className={'character-info_item'}>
            Gender: <span>{character.gender}</span>
          </li>
          <li className={'character-info_item'}>
            Origin: <span>{character.origin.name}</span>
          </li>
          <li className={'character-info_item'}>
            Location: <span>{character.location.name}</span>
          </li>
          <li className={'character-info_item'}>
            Episodes: <span>{character.episode.length}</span>
          </li>
        </ul>
        <img className={'character-image'} src={character.image} alt={character.name} />
      </div>
      <div className={'character-footer item-footer'}>
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

export default CharacterInfo;
