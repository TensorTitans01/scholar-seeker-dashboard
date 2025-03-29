
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: LucideIcon;
  trend?: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}) => {
  const isTrendPositive = trend && trend.startsWith('+');

  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline space-x-2">
            <span className="stat-value">{value}</span>
            {trend && (
              <span className={`text-xs ${isTrendPositive ? 'text-green-500' : 'text-red-500'}`}>
                {trend}
              </span>
            )}
          </div>
          <p className="stat-label">{description}</p>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
