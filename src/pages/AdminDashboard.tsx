
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated as admin
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.role || user.role !== 'admin') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Admin Dashboard</h2>
          <p className="text-muted-foreground">
            Welcome back, Admin
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Total Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">548</div>
              <span className="text-sm text-green-600">+12%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              25 active now
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Total Courses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">48</div>
              <span className="text-sm text-green-600">+5%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Across all departments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 9H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Study Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">324</div>
              <span className="text-sm text-green-600">+8%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Published materials
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9v6m0 0v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m4.5 21.5 16-16c.83-.83 2.17-.83 3 0 .83.83.83 2.17 0 3l-16 16L3 22l1.5-.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold">12</div>
              <span className="text-sm text-red-600">-3%</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Awaiting your review
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Student Classification by Grade</CardTitle>
                  <CardDescription>Distribution across performance levels</CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Grades" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Grades</SelectItem>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((grade) => (
                      <SelectItem key={grade} value={grade.toString()}>
                        Grade {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                {/* This is a placeholder for the chart */}
                <div className="w-full h-full flex items-center justify-center bg-gray-50 rounded-md border">
                  <div className="text-center">
                    <p className="text-muted-foreground">Classification Chart by Grade</p>
                    <p className="text-sm text-muted-foreground">
                      Student performance across different grade levels
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Classification</CardTitle>
                <Button variant="link" className="text-blue-600">View All</Button>
              </div>
              <CardDescription>Classify your students across levels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { level: 'Junior Scholars', count: 279, color: 'text-yellow-600' },
                { level: 'Rising Intellects', count: 196, color: 'text-orange-600' },
                { level: 'Mastermind Elite', count: 145, color: 'text-green-600' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className={`h-6 w-6 ${item.color}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d={index === 0 
                          ? "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" 
                          : index === 1 
                            ? "M9.663 17h4.673M12 12v-3" 
                            : "M12 6v6l4 2"
                        } 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      />
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className={`font-medium ${item.color}`}>{item.level}</span>
                  </div>
                  <div className="font-medium">
                    {item.count} <span className="text-muted-foreground">students</span>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4">Manage Classification</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
