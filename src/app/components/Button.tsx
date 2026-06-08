import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] group";

  const variants = {
    primary: "bg-gradient-to-r from-[#00A344] to-[#00C853] text-white hover:from-[#00C853] hover:to-[#00A344] hover:brightness-110",
    secondary: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const buttonContent = (
    <>
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {buttonContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {buttonContent}
    </button>
  );
}
