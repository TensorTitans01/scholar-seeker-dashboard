
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Determine page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Admin Dashboard';
    if (path === '/users') return 'User Management';
    if (path === '/classroom') return 'Classroom Management';
    if (path === '/courses') return 'Courses';
    if (path === '/approvals') return 'Approvals';
    if (path === '/student-management') return 'Student Management';
    if (path === '/progress') return 'Progress Tracking';
    if (path === '/content-review') return 'Content Review';
    if (path === '/settings') return 'Settings';
    
    return 'ScholarWay Admin';
  };

  // Get appropriate subtitle for the page
  const getPageSubtitle = () => {
    const path = location.pathname;
    
    if (path === '/') return 'Welcome back, Admin';
    if (path === '/users') return 'Manage teachers and students';
    if (path === '/classroom') return 'Create and manage classrooms';
    if (path === '/courses') return 'Discover and enroll in a wide range of educational content';
    if (path === '/approvals') return 'Review and approve study materials';
    if (path === '/student-management') return 'Classify and manage students';
    if (path === '/progress') return 'Track student progress and performance';
    if (path === '/content-review') return 'Review educational content';
    if (path === '/settings') return 'Configure system settings';
    
    return '';
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="hidden md:block">
          <Sidebar />
        </div>
      )}
      
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden" onClick={toggleSidebar} />
      )}
      
      {sidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-white z-20 md:hidden">
          <Sidebar />
        </div>
      )}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={toggleSidebar} 
          title={getPageTitle()} 
          subtitle={getPageSubtitle()} 
        />
        
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
