
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
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
import { Button } from '@/components/ui/button';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import ClassGradeSelect from '@/components/shared/ClassGradeSelect';
import { courses, students, studentProgressData } from '@/data/mockData';
import { Search, Filter, Plus, CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import { Course } from '@/types';

const Courses = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: '',
    description: '',
    grade: '',
    subject: '',
    duration: '',
    level: 'Beginner' as 'Beginner' | 'Intermediate' | 'Advanced',
  });

  const filteredCourses = selectedGrade === 'all' 
    ? courses 
    : courses.filter(course => course.grade === selectedGrade);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
  };

  const handleBackToList = () => {
    setSelectedCourse(null);
  };

  const handleAddCourse = () => {
    // In a real app, this would add the course to the database
    // Here we're just closing the dialog
    setIsAddCourseOpen(false);
    setNewCourse({
      title: '',
      description: '',
      grade: '',
      subject: '',
      duration: '',
      level: 'Beginner',
    });
    // We would add the course to the courses array in a real application
  };

  // Filter students for the selected course based on their class
  const getStudentsForCourse = (course: Course) => {
    // Get all students in the class matching the course grade
    const classStudents = students.filter(student => student.class === course.grade);
    
    return classStudents.map(student => {
      // Find progress data for this student and course
      const progress = studentProgressData.find(
        p => p.studentId === student.id && p.courseId === course.id
      );
      
      return {
        ...student,
        progress: progress?.progress || 0,
        completed: (progress?.progress || 0) >= 100,
        grade: progress?.grade || null
      };
    });
  };

  if (selectedCourse) {
    const courseStudents = getStudentsForCourse(selectedCourse);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={handleBackToList}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">{selectedCourse.title}</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="md:w-1/3">
            <CardHeader>
              <CardTitle>Course Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium">Description</h4>
                <p className="text-muted-foreground">{selectedCourse.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium">Grade</h4>
                  <p className="text-muted-foreground">{selectedCourse.grade}</p>
                </div>
                <div>
                  <h4 className="font-medium">Subject</h4>
                  <p className="text-muted-foreground">{selectedCourse.subject}</p>
                </div>
                <div>
                  <h4 className="font-medium">Duration</h4>
                  <p className="text-muted-foreground">{selectedCourse.duration} weeks</p>
                </div>
                <div>
                  <h4 className="font-medium">Level</h4>
                  <p className="text-muted-foreground">{selectedCourse.level}</p>
                </div>
              </div>
              <div>
                <h4 className="font-medium">Teacher</h4>
                <div className="flex items-center gap-2 mt-1">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      src="/lovable-uploads/341f90a3-f11d-402e-b752-1c7c6e121746.png"
                      alt={selectedCourse.teacher.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span>{selectedCourse.teacher.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex-1">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Student Progress</CardTitle>
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  {courseStudents.filter(s => s.completed).length} Completed
                </Badge>
                <Badge variant="outline" className="bg-amber-50 text-amber-700">
                  <XCircle className="w-3.5 h-3.5 mr-1" />
                  {courseStudents.filter(s => !s.completed).length} Pending
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Section</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {courseStudents.length > 0 ? (
                    courseStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.name}</TableCell>
                        <TableCell>{student.section}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={student.progress} className="h-2 w-24" />
                            <span className="text-sm">{student.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          {student.completed ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700">Completed</Badge>
                          ) : (
                            <Badge variant="outline" className="bg-amber-50 text-amber-700">Pending</Badge>
                          )}
                        </TableCell>
                        <TableCell>{student.grade || '-'}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                        No students found for this grade level.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
          <p className="text-muted-foreground">
            Discover and enroll in a wide range of educational content
          </p>
        </div>
        <div className="flex gap-2">
          <Button>
            <span>View Curriculum</span>
          </Button>
          <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Add New Course</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new course for students.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Input
                    id="description"
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="grade" className="text-right">
                    Grade
                  </Label>
                  <Select
                    value={newCourse.grade}
                    onValueChange={(value) => setNewCourse({...newCourse, grade: value})}
                  >
                    <SelectTrigger id="grade" className="col-span-3">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => String(i + 1)).map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          Grade {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={newCourse.subject}
                    onChange={(e) => setNewCourse({...newCourse, subject: e.target.value})}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="duration" className="text-right">
                    Duration (weeks)
                  </Label>
                  <Input
                    id="duration"
                    value={newCourse.duration}
                    onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                    type="number"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="level" className="text-right">
                    Level
                  </Label>
                  <Select
                    value={newCourse.level}
                    onValueChange={(value) => setNewCourse({...newCourse, level: value as 'Beginner' | 'Intermediate' | 'Advanced'})}
                  >
                    <SelectTrigger id="level" className="col-span-3">
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Beginner">Beginner</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddCourseOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCourse}>
                  Create Course
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <TabsList className="grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="all">All Courses</TabsTrigger>
            <TabsTrigger value="my">My Courses</TabsTrigger>
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 md:w-80" 
              />
            </div>
            
            <div className="flex gap-2">
              <ClassGradeSelect 
                value={selectedGrade} 
                onChange={setSelectedGrade} 
              />
              
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <Card 
                key={course.id} 
                className="overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleCourseClick(course)}
              >
                <div className="aspect-video relative bg-muted">
                  <Badge
                    className="absolute top-2 right-2 z-10"
                    variant="secondary"
                  >
                    {course.subject}
                  </Badge>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-6 w-6 rounded-full overflow-hidden">
                      <img
                        src="/lovable-uploads/341f90a3-f11d-402e-b752-1c7c6e121746.png"
                        alt={course.teacher.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-sm">{course.teacher.name}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mt-1">
                    <Badge variant="outline">{course.level}</Badge>
                    <span>{course.duration} weeks</span>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    {course.students} students
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button 
                    className="w-full" 
                    variant={course.progress > 0 ? "default" : "outline"}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click from triggering
                    }}
                  >
                    {course.progress > 0 ? "Continue Learning" : "Enroll Now"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="my">
          <div className="rounded-lg border bg-card text-card-foreground p-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No courses assigned yet</h3>
              <p className="text-muted-foreground mb-4">
                You haven't been assigned to any courses yet. Check back later or browse all courses.
              </p>
              <Button onClick={() => setActiveTab('all')}>
                Browse All Courses
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="recommended">
          <div className="rounded-lg border bg-card text-card-foreground p-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Recommendations coming soon</h3>
              <p className="text-muted-foreground mb-4">
                We're working on personalizing course recommendations for you. Check back soon!
              </p>
              <Button onClick={() => setActiveTab('all')}>
                Browse All Courses
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Courses;
