import Link from "next/link";

export default function ArticleCard({ article }:any) {
  return (
    <div className="grid pb-5">
      {/* Each card links to its own article page */}
      <Link
        href={`/article/${article.objectID}`}
        className="group block bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
      >
        <h2 className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-200">
          {article.title}
        </h2>

        <div className="flex flex-wrap items-center justify-between text-sm text-slate-500 mt-3 pt-3 border-t border-slate-100">
          {/* Basic date formatting for readability */}
          <span>
            Created: {new Date(article.created_at).toLocaleDateString()}
          </span>

          <span className="font-medium text-slate-600">
            Score: {article.score}
          </span>
        </div>
      </Link>
    </div>
  );
}
