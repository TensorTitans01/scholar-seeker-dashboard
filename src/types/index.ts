
export type UserRole = 'admin' | 'teacher' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  isActive: boolean;
}

export interface Teacher extends User {
  role: 'teacher';
  subjects: string[];
  classes: string[];
}

export interface Student extends User {
  role: 'student';
  class: string;
  section: string;
  performanceLevel: 'Junior Scholar' | 'Rising Intellect' | 'Mastermind Elite';
  overallScore: number;
}

export interface Class {
  id: string;
  name: string;
  grade: string;
  section: string;
  classTeacher: string;
  students: string[];
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  teacher: string;
  grade: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  grade: string;
  subject: string;
  teacher: Teacher;
  duration: number; // in weeks
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  students: number;
  progress: number;
  image?: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: 'Study Material' | 'Course' | 'Mathematics' | 'Chemistry' | 'Computer Science' | 'Physics' | 'Literature';
  subject: string;
  grade: string;
  submittedBy: string;
  submittedOn: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

export interface StudentProgress {
  studentId: string;
  courseId: string;
  progress: number;
  grade: string | null;
  completedLessons: number;
  totalLessons: number;
}

export type ClassificationLevel = 'Junior Scholar' | 'Rising Intellect' | 'Mastermind Elite';

export interface ClassificationSummary {
  juniorScholars: number;
  risingIntellects: number;
  mastermindElite: number;
  total: number;
}
