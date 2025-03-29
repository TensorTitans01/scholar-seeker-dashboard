
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ClassGradeSelectProps {
  value: string;
  onChange: (value: string) => void;
  grades?: string[];
  placeholder?: string;
}

const ClassGradeSelect: React.FC<ClassGradeSelectProps> = ({ 
  value, 
  onChange, 
  grades = Array.from({ length: 12 }, (_, i) => String(i + 1)),
  placeholder = "Select Grade" 
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Grades</SelectItem>
        {grades.map((grade) => (
          <SelectItem key={grade} value={grade}>
            Grade {grade}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ClassGradeSelect;
