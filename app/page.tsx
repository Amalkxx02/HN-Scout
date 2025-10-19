import sortedArticleList from "@/components/hooks/sortedArticleList";
import ArticleCard from "@/components/ui/ArticleCard/ArticleCard";
import PaginationBar from "@/components/ui/PaginationBar/PaginationBar";
import Error from "@/components/ui/error/Error";
import Header from "@/components/ui/Header/Header";

import Link from "next/link";

export default async function ArticlesList({searchParams}:any) {
  // Grab the current page number from the query params (default 0)
  const pageParam = await searchParams.page;
  const rawIsInfinite = await searchParams.isInfinite;
  const isInfinite = rawIsInfinite === 'true' || rawIsInfinite === '';

  const page = parseInt(pageParam || '0');

  // Quick sanity check — no negative or NaN pages allowed
  if (isNaN(page) || page < 0) {
    return <Error message="Page number out of range" />;
  }

  // Use the specific type for articles
  let articles: any;
  try {
    // Fetch the articles for the current page
    articles = await sortedArticleList(page,isInfinite);
  } catch (err) {
    return <Error message={"Network Error"} />;
  }

  // Grab the list of articles and total page count
  const articleList = articles?.hits || [];
  const maxPage = articles?.nbPages || 0;

  // If page is beyond available range, show error screen
  if (page >= maxPage) {
    return <Error message="Page number out of range" />;
  }

  return (
    <div className="min-h-screen min-w-screen bg-slate-50">
      <div className="h-24" />
        {/* Main article list */}
        <Header isInfinite={isInfinite}/>
      <div className="max-w-4xl mx-auto px-4 ">

        {articleList.map((article:any) => (
          <ArticleCard key={article.objectID} article={article} />
        ))}
      </div>

      <div className="h-24" />

      {/* Pagination controls */}
      {!isInfinite &&
      <PaginationBar page={page} maxPage={maxPage} />
      }
    </div>
  );
}