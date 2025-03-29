
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { School, User, Users, Shield } from 'lucide-react';
import { mockUsers } from '@/utils/auth';

const Login = () => {
  const navigate = useNavigate();
  
  // Define the login portal types
  type PortalType = 'student' | 'teacher' | 'admin' | 'superadmin';
  const [selectedPortal, setSelectedPortal] = useState<PortalType | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSelectPortal = (portal: PortalType) => {
    setSelectedPortal(portal);
    setEmail('');
    setPassword('');
    
    // Pre-fill the email field with the example email
    switch (portal) {
      case 'student':
        setEmail('student@example.com');
        break;
      case 'teacher':
        setEmail('teacher@example.com');
        break;
      case 'admin':
        setEmail('admin@example.com');
        break;
      case 'superadmin':
        setEmail('superadmin@example.com');
        break;
    }
  };
  
  const handleBackToPortals = () => {
    setSelectedPortal(null);
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPortal) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password && u.role === selectedPortal
      );

      if (user) {
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify({ 
          email: user.email, 
          role: user.role, 
          name: user.name 
        }));
        
        toast({
          title: 'Login successful',
          description: `Welcome back, ${user.name}`,
        });

        // Redirect based on role
        switch (user.role) {
          case 'student':
            navigate('/student-dashboard');
            break;
          case 'teacher':
            navigate('/teacher-dashboard');
            break;
          case 'admin':
            navigate('/admin-dashboard');
            break;
          case 'superadmin':
            navigate('/superadmin-dashboard');
            break;
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
  
  // If no portal is selected, show the portal selection screen
  if (!selectedPortal) {
    return (
      <div className="flex min-h-screen bg-gray-100 justify-center items-center p-4">
        <div className="w-full max-w-6xl grid gap-8">
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
            {/* Student Portal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  variant="default" 
                  className="w-full bg-blue-500 hover:bg-blue-600"
                  onClick={() => handleSelectPortal('student')}
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>

            {/* Teacher Portal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  variant="default" 
                  className="w-full bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => handleSelectPortal('teacher')}
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>

            {/* Admin Portal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  variant="default" 
                  className="w-full bg-amber-500 hover:bg-amber-600"
                  onClick={() => handleSelectPortal('admin')}
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>

            {/* Superadmin Portal */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
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
                  variant="default" 
                  className="w-full bg-purple-500 hover:bg-purple-600"
                  onClick={() => handleSelectPortal('superadmin')}
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="text-center text-sm text-gray-500 mt-8">
            © 2024 ScholarWay. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
  
  // Get portal-specific styling
  const getPortalColor = () => {
    switch (selectedPortal) {
      case 'student': return { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', light: 'bg-blue-50' };
      case 'teacher': return { bg: 'bg-cyan-500', hover: 'hover:bg-cyan-600', light: 'bg-cyan-50' };
      case 'admin': return { bg: 'bg-amber-500', hover: 'hover:bg-amber-600', light: 'bg-amber-50' };
      case 'superadmin': return { bg: 'bg-purple-500', hover: 'hover:bg-purple-600', light: 'bg-purple-50' };
    }
  };
  
  const getPortalIcon = () => {
    switch (selectedPortal) {
      case 'student': return <User className="h-8 w-8 text-white" />;
      case 'teacher': return <Users className="h-8 w-8 text-white" />;
      case 'admin': return <Shield className="h-8 w-8 text-white" />;
      case 'superadmin': return <Shield className="h-8 w-8 text-white" />;
    }
  };
  
  const portalColor = getPortalColor();
  const portalTitle = selectedPortal.charAt(0).toUpperCase() + selectedPortal.slice(1);
  
  // Role-specific login form
  return (
    <div className="flex min-h-screen bg-gray-100 justify-center items-center p-4">
      <div className="w-full max-w-md">
        <Button 
          variant="outline" 
          onClick={handleBackToPortals} 
          className="mb-6"
        >
          ← Back to portals
        </Button>
        
        <Card className={portalColor.light}>
          <div className={`${portalColor.bg} p-6 flex flex-col items-center justify-center`}>
            <div className="rounded-full bg-white/20 p-3 mb-4">
              {getPortalIcon()}
            </div>
            <h2 className="text-2xl font-bold text-white">{portalTitle} Portal</h2>
          </div>
          
          <CardContent className="pt-6">
            <form onSubmit={handleLogin}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className={`${portalColor.bg} ${portalColor.hover} mt-2`}
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between border-t px-6 py-4">
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
