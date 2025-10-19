import { User } from "lucide-react";

export default function CommentCard({ comment }) {
  return (
        <div className="bg-white rounded-lg border border-slate-200 p-5 flex items-start space-x-4">
          {/* Avatar placeholder*/}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
            <User className="w-5 h-5 text-slate-500" />
          </div>

          <div className="flex-1">
            {/* Top row: author + date */}
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-800">{comment.author}</p>
              <p className="text-xs text-slate-500">
                {new Date(comment.created_at_i * 1000).toLocaleString()}
              </p>
            </div>
            {/* Comment text (rendered as HTML) */}
            <div
              className="prose prose-slate max-w-none mt-2 text-slate-700 prose-a:text-blue-600 prose-code:before:content-none prose-code:after:content-none"
              dangerouslySetInnerHTML={{ __html: comment.text }}
            />
          </div>
        </div>
  );
}
