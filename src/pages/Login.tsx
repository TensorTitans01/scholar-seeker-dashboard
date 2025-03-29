
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/hooks/use-toast';
import { School, User, Users, Shield } from 'lucide-react';

// Mock user data - in a real app this would come from a backend
const mockUsers = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { email: 'teacher@example.com', password: 'teacher123', role: 'teacher' },
  { email: 'student@example.com', password: 'student123', role: 'student' },
  { email: 'superadmin@example.com', password: 'superadmin123', role: 'superadmin' },
];

type LoginRole = 'student' | 'teacher' | 'admin' | 'superadmin';

const Login = () => {
  const [activeTab, setActiveTab] = useState<LoginRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password && u.role === activeTab
      );

      if (user) {
        // Store user info in localStorage (in a real app, use a more secure method)
        localStorage.setItem('user', JSON.stringify({ email, role: user.role }));
        
        toast({
          title: 'Login successful',
          description: `Welcome back, ${email}`,
        });

        // Redirect based on role
        if (user.role === 'admin') {
          navigate('/admin-dashboard');
        } else if (user.role === 'teacher') {
          navigate('/teacher-dashboard');
        } else if (user.role === 'student') {
          navigate('/student-dashboard');
        } else if (user.role === 'superadmin') {
          navigate('/superadmin-dashboard');
        }
      } else {
        toast({
          title: 'Login failed',
          description: 'Invalid email or password',
          variant: 'destructive',
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  // Function to get icon based on role
  const getRoleIcon = (role: LoginRole) => {
    switch (role) {
      case 'student':
        return <User className="h-6 w-6" />;
      case 'teacher':
        return <Users className="h-6 w-6" />;
      case 'admin':
        return <Shield className="h-6 w-6" />;
      case 'superadmin':
        return <Shield className="h-6 w-6" />;
      default:
        return <User className="h-6 w-6" />;
    }
  };

  // Function to get card color based on role
  const getCardColor = (role: LoginRole) => {
    switch (role) {
      case 'student':
        return "bg-blue-50";
      case 'teacher':
        return "bg-cyan-50";
      case 'admin':
        return "bg-amber-50";
      case 'superadmin':
        return "bg-purple-50";
      default:
        return "";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center p-4">
      <div className="w-full max-w-5xl grid gap-8">
        <div className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <School className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-blue-600">ScholarWay</h1>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">AI-Driven Education Management System</h2>
          <p className="text-muted-foreground">
            Intelligent support for teachers, students, administrators, and supervisors to enhance
            educational outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card 
            className={`overflow-hidden ${activeTab === 'student' ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setActiveTab('student')}
          >
            <div className="bg-blue-500 p-4 flex justify-center items-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <CardHeader>
              <CardTitle>Student Portal</CardTitle>
              <CardDescription>
                Track your progress, access learning materials, and communicate with teachers.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={activeTab === 'student' ? 'default' : 'outline'} 
                className="w-full"
                onClick={() => setActiveTab('student')}
              >
                Student Login
              </Button>
            </CardFooter>
          </Card>

          <Card 
            className={`overflow-hidden ${activeTab === 'teacher' ? 'ring-2 ring-cyan-500' : ''}`}
            onClick={() => setActiveTab('teacher')}
          >
            <div className="bg-cyan-500 p-4 flex justify-center items-center">
              <Users className="h-8 w-8 text-white" />
            </div>
            <CardHeader>
              <CardTitle>Teacher Portal</CardTitle>
              <CardDescription>
                Manage classes, track student progress, and create learning materials.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={activeTab === 'teacher' ? 'default' : 'outline'} 
                className="w-full"
                onClick={() => setActiveTab('teacher')}
              >
                Teacher Login
              </Button>
            </CardFooter>
          </Card>

          <Card 
            className={`overflow-hidden ${activeTab === 'admin' ? 'ring-2 ring-amber-500' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            <div className="bg-amber-500 p-4 flex justify-center items-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardHeader>
              <CardTitle>Admin Portal</CardTitle>
              <CardDescription>
                Manage users, courses, and system settings for the platform.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={activeTab === 'admin' ? 'default' : 'outline'} 
                className="w-full"
                onClick={() => setActiveTab('admin')}
              >
                Admin Login
              </Button>
            </CardFooter>
          </Card>

          <Card 
            className={`overflow-hidden ${activeTab === 'superadmin' ? 'ring-2 ring-purple-500' : ''}`}
            onClick={() => setActiveTab('superadmin')}
          >
            <div className="bg-purple-500 p-4 flex justify-center items-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardHeader>
              <CardTitle>Superadmin Portal</CardTitle>
              <CardDescription>
                Full platform access with advanced configuration options.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                variant={activeTab === 'superadmin' ? 'default' : 'outline'} 
                className="w-full"
                onClick={() => setActiveTab('superadmin')}
              >
                Superadmin Login
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Card className={getCardColor(activeTab)}>
          <CardHeader>
            <div className="flex items-center gap-2">
              {getRoleIcon(activeTab)}
              <CardTitle>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Login</CardTitle>
            </div>
            <CardDescription>
              Enter your credentials to access the {activeTab} portal.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={`${activeTab}@example.com`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="link" size="sm">
              Forgot Password?
            </Button>
            <Button variant="link" size="sm">
              Need Help?
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
