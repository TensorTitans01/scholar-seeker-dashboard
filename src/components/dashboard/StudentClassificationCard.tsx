
import React from 'react';
import { Award, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClassificationSummary } from '@/types';

interface StudentClassificationCardProps {
  data: ClassificationSummary;
}

const StudentClassificationCard: React.FC<StudentClassificationCardProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Student Classification</CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto" size="sm">
            View All
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Classify your students across levels</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="classification-junior">
              <Award className="h-4 w-4" />
              <span>Junior Scholars</span>
            </div>
            <span className="font-semibold text-gray-700">{data.juniorScholars} students</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="classification-rising">
              <Lightbulb className="h-4 w-4" />
              <span>Rising Intellects</span>
            </div>
            <span className="font-semibold text-gray-700">{data.risingIntellects} students</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="classification-mastermind">
              <Zap className="h-4 w-4" />
              <span>Mastermind Elite</span>
            </div>
            <span className="font-semibold text-gray-700">{data.mastermindElite} students</span>
          </div>
        </div>
        
        <Button className="w-full mt-6" variant="outline">
          Manage Classification
        </Button>
      </CardContent>
    </Card>
  );
};

export default StudentClassificationCard;
