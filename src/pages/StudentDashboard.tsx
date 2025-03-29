
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const StudentDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated as student
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.role || user.role !== 'student') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, John
          </p>
        </div>
        <Badge variant="outline" className="bg-blue-100 text-blue-800 px-3 py-1">
          Junior Scholar
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68%</div>
            <Progress value={68} className="h-2 mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Keep going! You're making great progress.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Upcoming Assignments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Physics Lab Report</div>
                  <div className="text-sm text-muted-foreground">Physics</div>
                </div>
                <div className="text-sm text-muted-foreground">Due: 10/15/2023</div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Mathematics Problem Set</div>
                  <div className="text-sm text-muted-foreground">Mathematics</div>
                </div>
                <div className="text-sm text-muted-foreground">Due: 10/18/2023</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Upcoming Exams</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Mid-term Calculus Exam</div>
                  <div className="text-sm text-muted-foreground">Room 301</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  10/25/2023
                  <div>10:00 AM</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">Physics Quiz</div>
                  <div className="text-sm text-muted-foreground">Lab 102</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  10/20/2023
                  <div>2:30 PM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Tabs defaultValue="recent">
          <TabsList>
            <TabsTrigger value="recent">Recent Courses</TabsTrigger>
            <TabsTrigger value="schedule">Today's Schedule</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="space-y-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Advanced Calculus', instructor: 'Dr. Jane Smith', progress: 65 },
                { title: 'Physics Fundamentals', instructor: 'Prof. Richard Brown', progress: 42 },
                { title: 'English Literature', instructor: 'Ms. Emily Jones', progress: 78 }
              ].map((course, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>Instructor: {course.instructor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-sm text-muted-foreground">
                        Last accessed: {index === 0 ? '2 hours' : index === 1 ? '1 day' : '3 days'} ago
                      </div>
                      <Button>Continue</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="schedule">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  {[
                    { time: '09:00 AM - 10:30 AM', subject: 'Mathematics', room: 'Room 201', teacher: 'Dr. Smith' },
                    { time: '11:00 AM - 12:30 PM', subject: 'Physics Lab', room: 'Lab 102', teacher: 'Prof. Johnson' },
                    { time: '02:00 PM - 03:30 PM', subject: 'English Literature', room: 'Room 305', teacher: 'Ms. Davis' }
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row justify-between pb-4 border-b last:border-0 last:pb-0">
                      <div>
                        <div className="font-medium">{item.subject}</div>
                        <div className="text-sm text-muted-foreground">{item.room} • {item.teacher}</div>
                      </div>
                      <div className="text-sm md:text-right mt-2 md:mt-0">
                        <div>{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentDashboard;
