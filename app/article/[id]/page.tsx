import lastComments from "@/components/hooks/lastComments";
import ArticleDetails from "@/components/ui/ArticleDetails/ArticleDetails";
import CommentCard from "@/components/ui/CommentCard/CommentCard";
import Error from "@/components/ui/error/Error";

export default async function Article( params : any) {
  // Grab the article ID from the route.
  const id = params.id;

  // Convert ID to a number for the API call
  const articleIdNumber = parseInt(id, 10);
  if (isNaN(articleIdNumber)) {
    return <Error message="Invalid Article ID format" />;
  }

  let article: any;
  try {
    // Fetch the article details + last 5 comments
    article = await lastComments(articleIdNumber);
  } catch (err) {
    return <Error message={"Network error"} />;
  }

  // No title if invalid data or wrong ID
  if (!article?.title) {
    return <Error message="Invalid article data" />;
  }

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top section: main article info */}
        <ArticleDetails article={article} id={id} />

        {/* Comments section */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 pb-3 border-b border-slate-200">
            Comments ({article.children?.length || 0})
          </h2>

          {/* Show list of comments if available */}
          {article.children?.length > 0 ? (
            <div className="space-y-5">
              {/* The comment mapping now correctly uses the typed array */}
              {article.children.map((comment:any) => (
                <CommentCard key={comment.created_at_i} comment={comment} />
              ))}
            </div>
          ) : (
            // If no comments exist, show a placeholder
            <div className="text-slate-500 text-center py-10 bg-white rounded-lg border border-slate-200">
              No comments yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
