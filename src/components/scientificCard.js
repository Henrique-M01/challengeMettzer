export default function ScientificCard(title, type, description, url, authors) {
  return (
    <div>
      <h1>{ title }</h1>
      <h3>{ type }</h3>
      <h4>{ authors[0] }</h4>
      <p>{ description }</p>
      {
        url.map((link) => (
          <a href={link} target="_blank" rel="noreferrer">Link</a>))
      }
    </div>
  );
}
