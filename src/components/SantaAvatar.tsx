import { cn } from '@/lib/utils';

interface SantaAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const SantaAvatar = ({ size = 'md', className, animate = false }: SantaAvatarProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32',
  };

  return (
    <div
      className={cn(
        'relative rounded-full bg-gradient-to-br from-primary to-santa-red-dark flex items-center justify-center shadow-medium',
        sizeClasses[size],
        animate && 'animate-float',
        className
      )}
    >
      {/* Santa face */}
      <div className="relative">
        {/* Hat */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-primary" />
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-card" />
        
        {/* Face */}
        <div className="text-2xl">🎅</div>
      </div>
    </div>
  );
};

export default SantaAvatar;
