
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
import Index from "./pages/Index";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import SuperadminDashboard from "./pages/SuperadminDashboard";
import ContentReview from "./pages/ContentReview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root and Authentication routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* Role-specific dashboard routes */}
          <Route path="/student-dashboard" element={<MainLayout><StudentDashboard /></MainLayout>} />
          <Route path="/teacher-dashboard" element={<MainLayout><TeacherDashboard /></MainLayout>} />
          <Route path="/admin-dashboard" element={<MainLayout><AdminDashboard /></MainLayout>} />
          <Route path="/superadmin-dashboard" element={<MainLayout><SuperadminDashboard /></MainLayout>} />
          
          {/* Admin layout routes */}
          <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
          <Route path="/users" element={<MainLayout><UserManagement /></MainLayout>} />
          <Route path="/classroom" element={<MainLayout><Classroom /></MainLayout>} />
          <Route path="/courses" element={<MainLayout><Courses /></MainLayout>} />
          <Route path="/approvals" element={<MainLayout><Approvals /></MainLayout>} />
          <Route path="/student-management" element={<MainLayout><StudentManagement /></MainLayout>} />
          <Route path="/progress" element={<MainLayout><ProgressTracking /></MainLayout>} />
          <Route path="/content-review" element={<MainLayout><ContentReview /></MainLayout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
