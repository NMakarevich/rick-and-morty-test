import './search.scss';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Response } from '../../interfaces.ts';
import { BASE_URL, MIN_SEARCH_LENGTH } from '../../constants/consts.ts';

function Search(): ReactElement {
  const [search, setSearch] = useState('');
  const [response, setResponse] = useState<Response>({
    info: {
      count: 0,
      pages: 0,
      prev: null,
      next: null,
    },
    results: [],
    error: '',
  });

  useEffect(() => {
    async function searchCharacter() {
      const res = await fetch(`${BASE_URL}?name=${search}`);
      return await res.json();
    }
    if (search) searchCharacter().then((data: Response) => setResponse(data));
  }, [search]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { target } = event;
    if (target.value.length >= MIN_SEARCH_LENGTH) setSearch(target.value);
  }

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        id="search"
        name="search"
        autoFocus={true}
        placeholder="Search characters..."
        onChange={handleChange}
      />
      {(response.error || response.results.length > 0) && (
        <span className={'search-count'}>Found characters: {response.info?.count || 0}</span>
      )}
    </div>
  );
}

export default Search;
