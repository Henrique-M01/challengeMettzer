import { useEffect, useState } from 'react';
import initialContent from '../API/initialContent';

function ScientificContainer() {

  const [wordSearch, setWordSearch] = useState('');

  useEffect(() => {
    initialContent();
  }, []);


  return (
    <main>
      <label htmlFor="searchScientific">
        <input
          id="searchScientific"
          type="text"
          onChange={(e) => setWordSearch(e.target.value)}
        />
      </label>
      <button
        onClick={() => console.log(wordSearch)}
      >
        Pesquisar
      </button>
    </main>
  )

}

export default ScientificContainer;