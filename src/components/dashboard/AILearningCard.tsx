
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Bot, TrendingUp } from 'lucide-react';

const AILearningCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">AI Learning Assistance</CardTitle>
        <p className="text-sm text-muted-foreground">AI-powered learning tools for students</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-600 font-medium gap-1">
              <Brain className="h-4 w-4" />
              <span>AI Tutoring Sessions</span>
            </div>
            <span className="font-semibold text-gray-700">248 completed</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-600 font-medium gap-1">
              <Bot className="h-4 w-4" />
              <span>Study Assistant Active</span>
            </div>
            <span className="font-semibold text-gray-700">37 students</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-blue-600 font-medium gap-1">
              <TrendingUp className="h-4 w-4" />
              <span>Improvement Rate</span>
            </div>
            <span className="font-semibold text-gray-700">+18.5% avg</span>
          </div>
        </div>
        
        <Button className="w-full mt-6" variant="outline">
          Manage AI Learning
        </Button>
      </CardContent>
    </Card>
  );
};

export default AILearningCard;
