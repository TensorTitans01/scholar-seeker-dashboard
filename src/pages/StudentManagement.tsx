
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Award, Lightbulb, Zap, Filter } from 'lucide-react';
import ClassGradeSelect from '@/components/shared/ClassGradeSelect';
import ClassSectionSelect from '@/components/shared/ClassSectionSelect';
import ClassificationBadge from '@/components/shared/ClassificationBadge';
import { 
  classificationByGrade, 
  students 
} from '@/data/mockData';

const StudentManagement = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [activeLevel, setActiveLevel] = useState<string>('all');
  
  // Filter students based on selections
  const filteredStudents = students.filter(student => {
    if (selectedGrade !== 'all' && student.class !== selectedGrade) return false;
    if (selectedSection !== 'all' && student.section !== selectedSection) return false;
    if (activeLevel !== 'all' && student.performanceLevel !== activeLevel) return false;
    return true;
  });
  
  // Get stats for the current filters
  const getFilteredStats = () => {
    if (selectedGrade === 'all') {
      return {
        juniorScholars: students.filter(s => s.performanceLevel === 'Junior Scholar').length,
        risingIntellects: students.filter(s => s.performanceLevel === 'Rising Intellect').length,
        mastermindElite: students.filter(s => s.performanceLevel === 'Mastermind Elite').length,
        total: students.length
      };
    } else {
      const gradeStudents = students.filter(s => s.class === selectedGrade);
      return {
        juniorScholars: gradeStudents.filter(s => s.performanceLevel === 'Junior Scholar').length,
        risingIntellects: gradeStudents.filter(s => s.performanceLevel === 'Rising Intellect').length,
        mastermindElite: gradeStudents.filter(s => s.performanceLevel === 'Mastermind Elite').length,
        total: gradeStudents.length
      };
    }
  };
  
  const stats = getFilteredStats();
  
  // Selected grade data for chart
  const selectedGradeData = selectedGrade === 'all' 
    ? classificationByGrade 
    : classificationByGrade.filter(item => item.grade === selectedGrade);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Student Management</h2>
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="grid grid-cols-2 md:flex gap-3">
          <ClassGradeSelect 
            value={selectedGrade} 
            onChange={setSelectedGrade} 
            placeholder="Filter by Grade"
          />
          
          <ClassSectionSelect 
            value={selectedSection}
            onChange={setSelectedSection}
            placeholder="Filter by Section"
          />
        </div>
        
        <div className="ml-auto">
          <Button>
            <Filter className="mr-2 h-4 w-4" />
            Reclassify Students
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Classification Chart */}
        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Student Classification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={selectedGradeData}
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
                    <Bar dataKey="juniorScholars" name="Junior Scholar" fill="#f59e0b" />
                    <Bar dataKey="risingIntellects" name="Rising Intellect" fill="#fbbf24" />
                    <Bar dataKey="mastermindElite" name="Mastermind Elite" fill="#16a34a" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Classification Stats */}
        <div>
          <Card className="h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Classification Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-amber-500 mr-2" />
                      <span className="font-medium">Junior Scholars</span>
                    </div>
                    <span className="font-semibold">{stats.juniorScholars} students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-amber-500 h-2 rounded-full" 
                      style={{ width: `${(stats.juniorScholars / stats.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Lightbulb className="h-4 w-4 text-yellow-500 mr-2" />
                      <span className="font-medium">Rising Intellects</span>
                    </div>
                    <span className="font-semibold">{stats.risingIntellects} students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${(stats.risingIntellects / stats.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <Zap className="h-4 w-4 text-green-600 mr-2" />
                      <span className="font-medium">Mastermind Elite</span>
                    </div>
                    <span className="font-semibold">{stats.mastermindElite} students</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${(stats.mastermindElite / stats.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Students</span>
                    <span className="font-bold text-lg">{stats.total}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Student List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Student List</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeLevel} onValueChange={setActiveLevel} className="mb-6">
            <TabsList>
              <TabsTrigger value="all">All Students</TabsTrigger>
              <TabsTrigger value="Junior Scholar">Junior Scholars</TabsTrigger>
              <TabsTrigger value="Rising Intellect">Rising Intellects</TabsTrigger>
              <TabsTrigger value="Mastermind Elite">Mastermind Elite</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Performance Level</TableHead>
                <TableHead>Overall Score</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>Grade {student.class}</TableCell>
                  <TableCell>Section {student.section}</TableCell>
                  <TableCell>
                    <ClassificationBadge level={student.performanceLevel} />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">{student.overallScore}%</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            student.performanceLevel === 'Junior Scholar' ? 'bg-amber-500' :
                            student.performanceLevel === 'Rising Intellect' ? 'bg-yellow-500' :
                            'bg-green-600'
                          }`}
                          style={{ width: `${student.overallScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentManagement;
