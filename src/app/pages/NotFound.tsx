import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-8xl font-black text-accent mb-4">404</p>
        <h1 className="text-3xl font-black text-primary mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-7 py-3 bg-gradient-to-r from-[#1B6B3A] to-[#00A344] text-white font-semibold rounded-lg transition-all duration-300 group hover:brightness-90 hover:shadow-lg"
        >
          Back to Home
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}
