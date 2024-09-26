// Importing the articles data and NewsArticle component
import { articles } from "../../../assets/data";
import NewsArticle from "./NewsArticle";

const NewsArticles = () => {
  return (
    // Container div with flex layout, margin-top, and gap between items
    <div className="flex justify-between mt-7 gap-7">
      {/* Mapping through the articles array and rendering each NewsArticle component */}
      {articles.map((article, index) => (
        // Using index as key for simplicity; it's better to use a unique identifier like article.id in a production environment
        <NewsArticle key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsArticles;
