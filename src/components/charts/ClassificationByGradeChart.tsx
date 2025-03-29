
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { classificationByGrade } from '@/data/mockData';

const ClassificationByGradeChart = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  
  const filteredData = selectedGrade === 'all' 
    ? classificationByGrade 
    : classificationByGrade.filter(item => item.grade === selectedGrade);

  return (
    <Card className="h-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-medium">Student Classification by Grade</CardTitle>
          <p className="text-sm text-muted-foreground">Distribution across performance levels</p>
        </div>
        <Select value={selectedGrade} onValueChange={setSelectedGrade}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="All Grades" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Grades</SelectItem>
            {classificationByGrade.map((item) => (
              <SelectItem key={item.grade} value={item.grade}>
                Grade {item.grade}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={filteredData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="grade" name="Grade" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="juniorScholars" name="Junior Scholar" stackId="a" fill="#f59e0b" />
              <Bar dataKey="risingIntellects" name="Rising Intellect" stackId="a" fill="#fbbf24" />
              <Bar dataKey="mastermindElite" name="Mastermind Elite" stackId="a" fill="#16a34a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassificationByGradeChart;
