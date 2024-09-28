import news_feed from './sample_news_stories.json';

function App() {
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Super Cool News Feed 🔥</h1>
      {stories.map((story, index) => (
        <div key={index} className="news-post">
          <h2><a href={story.link}>{story.title}</a></h2>
          {story.description && <p>{story.description}</p>}
          {story.creator && <p><strong>By: </strong>{story.creator.join(', ')}</p>}
          {story.pubDate && <p><strong>Published on: </strong>{new Date(story.pubDate).toLocaleDateString()}</p>}
          {story.image_url && <img src={story.image_url} alt={story.title} />}
        </div>
      ))}
    </div>
  );
}

export default App;
