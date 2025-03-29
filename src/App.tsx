
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Classroom from "./pages/Classroom";
import Courses from "./pages/Courses";
import Approvals from "./pages/Approvals";
import StudentManagement from "./pages/StudentManagement";
import ProgressTracking from "./pages/ProgressTracking";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperadminDashboard from "./pages/SuperadminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Authentication routes */}
          <Route path="/login" element={<Login />} />
          
          {/* Role-specific dashboard routes */}
          <Route path="/student-dashboard" element={
            <MainLayout>
              <StudentDashboard />
            </MainLayout>
          } />
          <Route path="/teacher-dashboard" element={
            <MainLayout>
              <TeacherDashboard />
            </MainLayout>
          } />
          <Route path="/admin-dashboard" element={
            <MainLayout>
              <AdminDashboard />
            </MainLayout>
          } />
          <Route path="/superadmin-dashboard" element={
            <MainLayout>
              <SuperadminDashboard />
            </MainLayout>
          } />
          
          {/* Admin layout routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserManagement />} />
            <Route path="/classroom" element={<Classroom />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/approvals" element={<Approvals />} />
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/progress" element={<ProgressTracking />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
