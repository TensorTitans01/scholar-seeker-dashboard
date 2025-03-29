
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated as teacher
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.role || user.role !== 'teacher') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, Jane
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">85</div>
            <p className="text-sm text-muted-foreground">
              Across all your courses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">4</div>
            <p className="text-sm text-muted-foreground">
              Active courses this semester
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Materials</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">18</div>
            <p className="text-sm text-muted-foreground">
              Published study materials
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Pending Approvals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2</div>
            <p className="text-sm text-muted-foreground">
              Materials awaiting admin approval
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Your scheduled classes for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {[
              { time: '10:00 AM - 11:30 AM', subject: 'Advanced Calculus', room: 'Room 301', students: 28 },
              { time: '01:00 PM - 02:30 PM', subject: 'Linear Algebra', room: 'Room 204', students: 32 }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between border-b pb-4 last:border-0 last:pb-0">
                <div>
                  <div className="font-medium">{item.subject}</div>
                  <div className="text-sm text-muted-foreground mt-1">{item.time}</div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0">
                  <div className="text-sm text-right text-muted-foreground">
                    <span>{item.room}</span>
                    <Badge variant="outline" className="ml-2">{item.students}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="justify-between flex-col items-start sm:flex-row sm:items-center gap-2">
            <Button>View Materials</Button>
            <Button variant="default">Start Class</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Assignments</CardTitle>
            <CardDescription>Review and grade student submissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {[
              { title: 'Calculus Mid-term Paper', due: '10/18/2023', submitted: 18, total: 28 },
              { title: 'Linear Algebra Problem Set', due: '10/22/2023', submitted: 22, total: 32 }
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between">
                  <div className="font-medium">{item.title}</div>
                  <Badge variant="outline">{item.submitted}/{item.total}</Badge>
                </div>
                <div className="text-sm text-muted-foreground">Due: {item.due}</div>
                <Progress value={(item.submitted / item.total) * 100} className="h-2" />
                <div className="pt-2">
                  <Button className="w-full">Review Submissions</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
