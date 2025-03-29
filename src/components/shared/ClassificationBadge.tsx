
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Award, Lightbulb, Zap } from 'lucide-react';
import { ClassificationLevel } from '@/types';
import { cn } from '@/lib/utils';

interface ClassificationBadgeProps {
  level: ClassificationLevel;
  className?: string;
}

const ClassificationBadge: React.FC<ClassificationBadgeProps> = ({ level, className }) => {
  const getClassificationDetails = () => {
    switch (level) {
      case 'Junior Scholar':
        return {
          icon: <Award className="h-3 w-3" />,
          color: 'bg-amber-100 text-amber-800 hover:bg-amber-100'
        };
      case 'Rising Intellect':
        return {
          icon: <Lightbulb className="h-3 w-3" />,
          color: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
        };
      case 'Mastermind Elite':
        return {
          icon: <Zap className="h-3 w-3" />,
          color: 'bg-green-100 text-green-800 hover:bg-green-100'
        };
      default:
        return {
          icon: null,
          color: 'bg-gray-100 text-gray-800 hover:bg-gray-100'
        };
    }
  };

  const { icon, color } = getClassificationDetails();

  return (
    <Badge variant="outline" className={cn('flex items-center gap-1 font-normal', color, className)}>
      {icon}
      {level}
    </Badge>
  );
};

export default ClassificationBadge;
