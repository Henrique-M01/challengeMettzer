import { useEffect, useState } from 'react';
import initialContent from '../API/initialContent';
import Pagination from './pagination';
import ScientificCard from './scientificCard/scientificCard';


function ScientificContainer() {

  const [wordSearch, setWordSearch] = useState('');
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    initialContent()
      .then((data) => {
        setContent(data.data);
        setTotalHits(data.totalHits);
      });
  }, []);


  return (
    <main>
      <label htmlFor="searchScientific">
        <input
          id="searchScientific"
          type="text"
          onChange={(e) => setWordSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              initialContent(wordSearch)
                .then((data) => setContent(data));
            }
          }}
        />
      </label>
      <button
        onClick={() => 
          initialContent(wordSearch)
            .then((data) => setContent(data))}
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
      <Pagination 
        className="pagination-bar"
        totalCount={totalHits}
        currentPage={currentPage}
        pageSize={10}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </main>
  )

}

export default ScientificContainer;