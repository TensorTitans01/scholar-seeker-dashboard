
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

const SuperadminDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated as superadmin
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user.role || user.role !== 'superadmin') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Superadmin Control Panel</h2>
          <p className="text-muted-foreground">
            System administration and configuration
          </p>
        </div>
        <Badge variant="outline" className="bg-purple-100 text-purple-800 px-4 py-1.5">
          Superadmin Access
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Students</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center gap-2">
              <svg className="h-10 w-10 text-green-100 bg-green-500 p-2 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-4xl font-bold">250</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Teachers</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center gap-2">
              <svg className="h-10 w-10 text-blue-100 bg-blue-500 p-2 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-4xl font-bold">45</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Total Admins</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center gap-2">
              <svg className="h-10 w-10 text-purple-100 bg-purple-500 p-2 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12.5h.01M17 10.2a5 5 0 0 1 0 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="text-4xl font-bold">10</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Role Changes</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center gap-2">
              <svg className="h-10 w-10 text-red-100 bg-red-500 p-2 rounded-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11V6a5 5 0 0 1 10 0v5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <div className="text-4xl font-bold">47</div>
                <div className="text-sm text-green-600">+12% this week</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
            <CardDescription>Breakdown of users by role</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex justify-center items-center">
              <div className="relative w-64 h-64">
                {/* This is a placeholder for the pie chart */}
                <div className="absolute w-full h-full rounded-full border-8 border-green-500"></div>
                <div className="absolute w-full h-full rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%)' }}></div>
                <div className="absolute w-full h-full rounded-full border-8 border-purple-500" style={{ clipPath: 'polygon(50% 0%, 65% 0%, 65% 20%, 50% 20%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center w-32 h-32 m-auto rounded-full bg-white border"></div>
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Students 82%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Teachers 15%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Admins 3%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feature Access Distribution</CardTitle>
            <CardDescription>User access by feature</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-end justify-between gap-2">
              {['Dashboard', 'Courses', 'Tests', 'AI Learning'].map((feature, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="flex flex-col space-y-1 items-center">
                    <div className="bg-green-500 w-16 h-32 rounded-t-md"></div>
                    <div className="bg-blue-500 w-16 h-10 rounded-none"></div>
                    <div className="bg-purple-500 w-16 h-2 rounded-b-md"></div>
                  </div>
                  <div className="mt-2 text-xs">{feature}</div>
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Admins</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>System Administration</CardTitle>
            <CardDescription>Manage your ScholarWay system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'User Management', description: 'Add, edit, or remove users and set access permissions', icon: 'users' },
                { title: 'System Settings', description: 'Configure global system settings and preferences', icon: 'settings' },
                { title: 'Data Management', description: 'Backup, restore, or export system data', icon: 'database' },
                { title: 'Role Management', description: 'Define user roles and their associated permissions', icon: 'lock' },
                { title: 'Activity Logs', description: 'View system logs and user activity history', icon: 'list' },
                { title: 'API Integration', description: 'Set up and manage external API connections', icon: 'code' },
              ].map((item, index) => (
                <Card key={index} className="border">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-medium">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-0">
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    <Button className="w-full">Manage</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuperadminDashboard;
