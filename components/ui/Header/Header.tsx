import Link from "next/link";
import { ToggleRight, ToggleLeft } from "lucide-react"; //Icons for the toggle

interface HeaderProps {
  isInfinite: boolean;
}

export default function Header({ isInfinite }: HeaderProps) {
  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Placeholder / Logo */}

        <div className="w-3xs">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            HN Scout
          </h1>
        </div>

        {/* Infinite Scroll Toggle */}
        <div className="flex  justify-end w-3xs">
          <Link
            href={`?isInfinite=${!isInfinite}`}
            className={`
              transition-colors duration-200 flex items-center gap-2.5
              py-2 px-4 rounded-lg font-medium text-sm border border-blue-200
              shadow-md hover:shadow-lg
              
              ${
                isInfinite
                  ? "bg-blue-700 text-white  hover:bg-amber-600" // Infinite ON (Active)
                  : "bg-white text-blue-700  hover:bg-blue-50" // Pagination OFF (Inactive)
              }
            `}
          >
            {/* Conditional Icon Rendering */}
            {isInfinite ? (
              <ToggleRight size={20} /> // Show "ON" state icon
            ) : (
              <ToggleLeft size={20} /> // Show "OFF" state icon
            )}

            {/* Conditional Text Label */}
            {isInfinite ? "Continuous" : "Paged View"}
          </Link>
        </div>
      </div>
    </div>
  );
}
