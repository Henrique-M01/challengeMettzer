import { useEffect, useState } from 'react';
import initialContent from '../API/initialContent';
import Pagination from '../components/Pagination/pagination';
import CardArticle from '../components/CardArticles/cardArticles';
import Header from '../components/header';


function Home() {

  const [wordSearch, setWordSearch] = useState('all');
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    initialContent(wordSearch, currentPage, 10)
      .then((data) => {
        setContent(data.data);
        setTotalHits(data.totalHits / 100);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <main>
      <Header />
      <label htmlFor="searchScientific">
        <input
          id="searchScientific"
          type="text"
          onChange={(e) => setWordSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              initialContent(wordSearch, 1, 10)
                .then((data) => setContent(data.data));
            }
          }}
        />
      </label>
      <button
        onClick={() => 
          initialContent(wordSearch, 1, 10)
            .then((data) => setContent(data.data))}
      >
        Pesquisar
      </button>
      {content.map((item) => (
        <CardArticle
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

export default Home;