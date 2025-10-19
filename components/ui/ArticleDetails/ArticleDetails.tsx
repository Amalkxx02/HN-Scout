import Link from "next/link";
import { User, Star, Link as LinkIcon, Calendar } from "lucide-react";

type ArticleDetailsProps = {
  article: any;
  id: number; // depends on how you pass it
};

export default function ArticleDetails( {article,id}:ArticleDetailsProps ) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
      {/* Main article title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
        {article.title}
      </h1>

      {/* Info bar — author, date, points, and links */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-500 text-sm border-t border-b border-slate-100 py-4">

        <div className="flex items-center gap-2">
          <User size={16} />
          <span className="font-medium text-slate-700">{article.author}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>{new Date(article.created_at).toLocaleDateString()}</span>
        </div>


        <div className="flex items-center gap-2">
          <Star size={16} className="text-amber-500" />
          <span className="font-medium text-slate-700">
            {article.points} points
          </span>
        </div>

        {/* External source link (if any) */}
        {article.url && (
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline"
          >
            <LinkIcon size={16} />
            <span>Source</span>
          </Link>
        )}

        {/* Link to original HN discussion */}
        <Link
          href={`https://news.ycombinator.com/item?id=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 hover:underline"
        >
          <LinkIcon size={16} />
          <span>HN Source</span>
        </Link>
      </div>
    </div>
  );
}
