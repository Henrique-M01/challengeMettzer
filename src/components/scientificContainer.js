import { useEffect, useState } from 'react';
import initialContent from '../API/initialContent';
import ScientificCard from './scientificCard';

function ScientificContainer() {

  const [wordSearch, setWordSearch] = useState('');
  const [content, setContent] = useState([]);

  useEffect(() => {
    initialContent()
      .then((data) => setContent(data));
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
      {content.map((item) => (
        <ScientificCard
          key={item._id}
          title={item._source.title}
          type={item._type}
          description={item._source.description}
          url={item._source.urls}
          authors={item._source.authors}
        />
      ))}
    </main>
  )

}

export default ScientificContainer;