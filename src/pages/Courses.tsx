
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, A
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
import ClassGradeSelect from '@/components/shared/ClassGradeSelect';
import { courses } from '@/data/mockData';
import { Search, Filter } from 'lucide-react';

const Courses = () => {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('all');

  const filteredCourses = selectedGrade === 'all' 
    ? courses 
    : courses.filter(course => course.grade === selectedGrade);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Courses</h2>
          <p className="text-muted-foreground">
            Discover and enroll in a wide range of educational content
          </p>
        </div>
        <Button>
          <span>View Curriculum</span>
        </Button>
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
              <Card key={course.id} className="overflow-hidden flex flex-col">
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
