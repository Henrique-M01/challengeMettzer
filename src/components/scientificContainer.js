import { useState } from 'react';

function ScientificContainer() {

  const [wordSearch, setWordSearch] = useState('');


  return (
    <main>
      <label htmlFor="searchScientific">
        <input
          id="searchScientific"
          type="text"
          onChange={(e) => setWordSearch(e.target.value)}
        />
      </label>
    </main>
  )

}

export default ScientificContainer;