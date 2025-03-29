
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, 
  BarChart2, 
  LineChart as LineChartIcon, 
  FileText, 
  Users, 
  UserCheck 
} from 'lucide-react';
import ClassGradeSelect from '@/components/shared/ClassGradeSelect';
import ClassSectionSelect from '@/components/shared/ClassSectionSelect';
import ClassificationBadge from '@/components/shared/ClassificationBadge';
import { 
  students, 
  courses, 
  studentProgressData 
} from '@/data/mockData';

// Sample data for charts
const attendanceData = [
  { month: 'Jan', attendance: 95 },
  { month: 'Feb', attendance: 97 },
  { month: 'Mar', attendance: 94 },
  { month: 'Apr', attendance: 98 },
  { month: 'May', attendance: 96 },
  { month: 'Jun', attendance: 92 },
];

const assessmentScores = [
  { subject: 'Math', score: 85 },
  { subject: 'Science', score: 78 },
  { subject: 'English', score: 90 },
  { subject: 'History', score: 75 },
  { subject: 'Art', score: 92 },
  { subject: 'PE', score: 88 },
];

const ProgressTracking = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  
  // Filter students based on selections
  const filteredStudents = students.filter(student => {
    if (selectedGrade !== 'all' && student.class !== selectedGrade) return false;
    if (selectedSection !== 'all' && student.section !== selectedSection) return false;
    return true;
  });
  
  const selectedStudentData = students.find(s => s.id === selectedStudent);
  
  // Find progress data for the selected student
  const studentProgress = studentProgressData.filter(p => p.studentId === selectedStudent);
  
  // Get course details for the progress data
  const studentCourses = studentProgress.map(progress => {
    const course = courses.find(c => c.id === progress.courseId);
    return {
      ...progress,
      course: course ? course.title : 'Unknown Course',
      subject: course ? course.subject : 'Unknown Subject',
    };
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Progress Tracking</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Users className="h-8 w-8 text-blue-500 mb-2" />
            <p className="text-sm text-muted-foreground">Total Students</p>
            <h3 className="text-2xl font-bold">{students.length}</h3>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <UserCheck className="h-8 w-8 text-green-500 mb-2" />
            <p className="text-sm text-muted-foreground">Active Students</p>
            <h3 className="text-2xl font-bold">{students.filter(s => s.isActive).length}</h3>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <FileText className="h-8 w-8 text-amber-500 mb-2" />
            <p className="text-sm text-muted-foreground">Total Courses</p>
            <h3 className="text-2xl font-bold">{courses.length}</h3>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <BarChart2 className="h-8 w-8 text-purple-500 mb-2" />
            <p className="text-sm text-muted-foreground">Avg. Performance</p>
            <h3 className="text-2xl font-bold">84%</h3>
          </CardContent>
        </Card>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="grid grid-cols-2 md:flex gap-3">
          <ClassGradeSelect 
            value={selectedGrade} 
            onChange={setSelectedGrade} 
            placeholder="Select Grade"
          />
          
          <ClassSectionSelect 
            value={selectedSection}
            onChange={setSelectedSection}
            placeholder="Select Section"
          />
        </div>
      </div>

      {/* Student List */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Student List</CardTitle>
        </CardHeader>
        <CardContent>
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
                    <Button 
                      size="sm" 
                      onClick={() => {
                        setSelectedStudent(student.id);
                        setDetailsOpen(true);
                      }}
                    >
                      View Progress
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Student Progress Details Dialog */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Student Progress: {selectedStudentData?.name}</DialogTitle>
            <DialogDescription>
              Class {selectedStudentData?.class}-{selectedStudentData?.section} | 
              <span className="ml-2">
                <ClassificationBadge level={selectedStudentData?.performanceLevel || 'Junior Scholar'} />
              </span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6">
            {/* Overall Progress */}
            <div>
              <h3 className="text-sm font-medium mb-3">Overall Performance</h3>
              <div className="flex items-center mb-2">
                <span className="font-medium mr-2">{selectedStudentData?.overallScore}%</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${
                      selectedStudentData?.performanceLevel === 'Junior Scholar' ? 'bg-amber-500' :
                      selectedStudentData?.performanceLevel === 'Rising Intellect' ? 'bg-yellow-500' :
                      'bg-green-600'
                    }`}
                    style={{ width: `${selectedStudentData?.overallScore}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            {/* Course Progress */}
            <div>
              <h3 className="text-sm font-medium mb-3">Course Progress</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Completed</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studentCourses.map((progress) => (
                    <TableRow key={progress.courseId}>
                      <TableCell className="font-medium">{progress.course}</TableCell>
                      <TableCell>{progress.subject}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={progress.progress} className="w-24 h-2" />
                          <span>{progress.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{progress.grade || 'N/A'}</TableCell>
                      <TableCell>
                        {progress.completedLessons}/{progress.totalLessons} lessons
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attendance Chart */}
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Attendance Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={attendanceData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis domain={[80, 100]} />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="attendance" 
                          stroke="#3b82f6" 
                          strokeWidth={2} 
                          activeDot={{ r: 8 }} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Assessment Scores */}
              <Card>
                <CardHeader className="py-2">
                  <CardTitle className="text-sm">Subject Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={assessmentScores}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Bar dataKey="score" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailsOpen(false)}>
              Close
            </Button>
            <Button>Generate Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProgressTracking;
