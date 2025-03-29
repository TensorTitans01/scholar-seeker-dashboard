
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ClassSectionSelectProps {
  value: string;
  onChange: (value: string) => void;
  sections?: string[];
  placeholder?: string;
}

const ClassSectionSelect: React.FC<ClassSectionSelectProps> = ({ 
  value, 
  onChange, 
  sections = ['A', 'B', 'C', 'D'],
  placeholder = "Select Section" 
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Sections</SelectItem>
        {sections.map((section) => (
          <SelectItem key={section} value={section}>
            Section {section}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ClassSectionSelect;
