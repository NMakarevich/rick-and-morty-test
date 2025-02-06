import './character-page.scss';
import { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { Character } from '../../interfaces.ts';
import { BASE_URL } from '../../constants/consts.ts';
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo.tsx';

function CharacterPage(): ReactElement {
  const [character, setCharacter] = useState<Character | null>(null);
  const params = useParams();

  useEffect(() => {
    async function loadCharacter() {
      const { id } = params;
      if (!id) return null;
      const res = await fetch(`${BASE_URL}/${id}`);
      if (!res.ok) return null;
      return await res.json();
    }
    loadCharacter().then((data) => setCharacter(data));
  }, [params]);

  return (
    <>
      <header className="character-header">
        <div className="container">
          <Link className={'back'} to={'/'}>
            <span className="material-symbols-outlined">chevron_left</span> Back
          </Link>
          <h2 className="title">Character information</h2>
        </div>
      </header>
      <main className="character-main">
        <div className="container">
          {character ? (
            <CharacterInfo character={character} />
          ) : (
            <div className="not-found">Character with #id {params.id} is not found</div>
          )}
        </div>
      </main>
    </>
  );
}

export default CharacterPage;
