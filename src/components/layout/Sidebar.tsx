
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  CheckSquare, 
  Settings,
  UserCheck,
  School,
  BarChart3,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <LayoutDashboard size={20} />
    },
    {
      title: 'User Management',
      path: '/users',
      icon: <Users size={20} />
    },
    {
      title: 'Classroom',
      path: '/classroom',
      icon: <School size={20} />
    },
    {
      title: 'Courses',
      path: '/courses',
      icon: <BookOpen size={20} />
    },
    {
      title: 'Approvals',
      path: '/approvals',
      icon: <CheckSquare size={20} />
    },
    {
      title: 'Student Management',
      path: '/student-management',
      icon: <UserCheck size={20} />
    },
    {
      title: 'Progress Tracking',
      path: '/progress',
      icon: <BarChart3 size={20} />
    },
    {
      title: 'Content Review',
      path: '/content-review',
      icon: <FileText size={20} />
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <Settings size={20} />
    }
  ];

  return (
    <div className="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center gap-2">
        <div className="flex items-center">
          <School className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">ScholarWay</span>
        </div>
      </div>
      
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/341f90a3-f11d-402e-b752-1c7c6e121746.png" 
              alt="Admin User" 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">Admin User</h3>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-blue-50 text-blue-600" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.icon}
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <Link
          to="/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
            />
          </svg>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
