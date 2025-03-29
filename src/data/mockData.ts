
import { User, Teacher, Student, Class, Course, StudyMaterial, StudentProgress, ClassificationSummary } from '@/types';
import { 
  User as UserIcon,
  BookOpen, 
  FileText, 
  Clock, 
  CheckSquare
} from 'lucide-react';

// Mock Users Data
export const users: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@scholarway.com', role: 'admin', isActive: true, avatar: '/lovable-uploads/341f90a3-f11d-402e-b752-1c7c6e121746.png' },
  // Teachers
  { id: '2', name: 'Dr. Alan Turing', email: 'turing@scholarway.com', role: 'teacher', isActive: true },
  { id: '3', name: 'Dr. Marie Curie', email: 'curie@scholarway.com', role: 'teacher', isActive: true },
  { id: '4', name: 'Prof. Grace Hopper', email: 'hopper@scholarway.com', role: 'teacher', isActive: true },
  { id: '5', name: 'Dr. Rosalind Franklin', email: 'franklin@scholarway.com', role: 'teacher', isActive: true },
  // Students (Multiple classes with different classification levels)
  { id: '6', name: 'Alice Johnson', email: 'alice@scholarway.com', role: 'student', isActive: true },
  { id: '7', name: 'Bob Smith', email: 'bob@scholarway.com', role: 'student', isActive: true },
  { id: '8', name: 'Charlie Brown', email: 'charlie@scholarway.com', role: 'student', isActive: false },
  // More students
  { id: '9', name: 'Diana Prince', email: 'diana@scholarway.com', role: 'student', isActive: true },
  { id: '10', name: 'Ethan Hunt', email: 'ethan@scholarway.com', role: 'student', isActive: true },
];

export const teachers: Teacher[] = [
  { 
    id: '2', 
    name: 'Dr. Alan Turing', 
    email: 'turing@scholarway.com', 
    role: 'teacher', 
    subjects: ['Mathematics', 'Computer Science'], 
    classes: ['1A', '2B', '12A'], 
    isActive: true,
  },
  { 
    id: '3', 
    name: 'Dr. Marie Curie', 
    email: 'curie@scholarway.com', 
    role: 'teacher', 
    subjects: ['Physics', 'Chemistry'], 
    classes: ['9A', '10B', '12A'], 
    isActive: true,
  },
  { 
    id: '4', 
    name: 'Prof. Grace Hopper', 
    email: 'hopper@scholarway.com', 
    role: 'teacher', 
    subjects: ['Computer Science'], 
    classes: ['11A', '12B'], 
    isActive: true,
  },
  { 
    id: '5', 
    name: 'Dr. Rosalind Franklin', 
    email: 'franklin@scholarway.com', 
    role: 'teacher', 
    subjects: ['Chemistry', 'Biology'], 
    classes: ['9A', '10B'], 
    isActive: true,
  },
];

export const students: Student[] = [
  // Class 1 students
  { 
    id: '101', 
    name: 'Alice Johnson', 
    email: 'alice@scholarway.com', 
    role: 'student', 
    class: '1', 
    section: 'A', 
    performanceLevel: 'Junior Scholar', 
    overallScore: 65, 
    isActive: true,
  },
  { 
    id: '102', 
    name: 'Bob Smith', 
    email: 'bob@scholarway.com', 
    role: 'student', 
    class: '1', 
    section: 'A', 
    performanceLevel: 'Rising Intellect', 
    overallScore: 78, 
    isActive: true,
  },
  { 
    id: '103', 
    name: 'Charlie Davis', 
    email: 'charlie@scholarway.com', 
    role: 'student', 
    class: '1', 
    section: 'B', 
    performanceLevel: 'Mastermind Elite', 
    overallScore: 92, 
    isActive: true,
  },
  // Class 2 students
  { 
    id: '201', 
    name: 'Diana Ross', 
    email: 'diana@scholarway.com', 
    role: 'student', 
    class: '2', 
    section: 'A', 
    performanceLevel: 'Junior Scholar', 
    overallScore: 68, 
    isActive: true,
  },
  { 
    id: '202', 
    name: 'Edward Norton', 
    email: 'edward@scholarway.com', 
    role: 'student', 
    class: '2', 
    section: 'A', 
    performanceLevel: 'Rising Intellect', 
    overallScore: 83, 
    isActive: true,
  },
  // Class 12 students
  { 
    id: '1201', 
    name: 'Zack Morris', 
    email: 'zack@scholarway.com', 
    role: 'student', 
    class: '12', 
    section: 'A', 
    performanceLevel: 'Junior Scholar', 
    overallScore: 71, 
    isActive: true,
  },
  { 
    id: '1202', 
    name: 'Yasmin Khan', 
    email: 'yasmin@scholarway.com', 
    role: 'student', 
    class: '12', 
    section: 'A', 
    performanceLevel: 'Rising Intellect', 
    overallScore: 84, 
    isActive: true,
  },
  { 
    id: '1203', 
    name: 'Xavier James', 
    email: 'xavier@scholarway.com', 
    role: 'student', 
    class: '12', 
    section: 'B', 
    performanceLevel: 'Mastermind Elite', 
    overallScore: 95, 
    isActive: true,
  },
];

export const classes: Class[] = [
  {
    id: '1A',
    name: 'Class 1A',
    grade: '1',
    section: 'A',
    classTeacher: '2', // Dr. Alan Turing
    students: ['101', '102'],
    subjects: [
      { id: 's1', name: 'Mathematics', teacher: '2', grade: '1' },
      { id: 's2', name: 'English', teacher: '3', grade: '1' },
      { id: 's3', name: 'Science', teacher: '4', grade: '1' }
    ]
  },
  {
    id: '1B',
    name: 'Class 1B',
    grade: '1',
    section: 'B',
    classTeacher: '3', // Dr. Marie Curie
    students: ['103'],
    subjects: [
      { id: 's4', name: 'Mathematics', teacher: '2', grade: '1' },
      { id: 's5', name: 'English', teacher: '3', grade: '1' },
      { id: 's6', name: 'Science', teacher: '4', grade: '1' }
    ]
  },
  {
    id: '2A',
    name: 'Class 2A',
    grade: '2',
    section: 'A',
    classTeacher: '4', // Prof. Grace Hopper
    students: ['201', '202'],
    subjects: [
      { id: 's7', name: 'Mathematics', teacher: '2', grade: '2' },
      { id: 's8', name: 'English', teacher: '4', grade: '2' },
      { id: 's9', name: 'Science', teacher: '5', grade: '2' }
    ]
  },
  {
    id: '12A',
    name: 'Class 12A',
    grade: '12',
    section: 'A',
    classTeacher: '5', // Dr. Rosalind Franklin
    students: ['1201', '1202'],
    subjects: [
      { id: 's10', name: 'Mathematics', teacher: '2', grade: '12' },
      { id: 's11', name: 'Physics', teacher: '3', grade: '12' },
      { id: 's12', name: 'Chemistry', teacher: '5', grade: '12' },
      { id: 's13', name: 'Computer Science', teacher: '4', grade: '12' }
    ]
  },
  {
    id: '12B',
    name: 'Class 12B',
    grade: '12',
    section: 'B',
    classTeacher: '4', // Prof. Grace Hopper
    students: ['1203'],
    subjects: [
      { id: 's14', name: 'Mathematics', teacher: '2', grade: '12' },
      { id: 's15', name: 'Physics', teacher: '3', grade: '12' },
      { id: 's16', name: 'Chemistry', teacher: '5', grade: '12' },
      { id: 's17', name: 'Computer Science', teacher: '4', grade: '12' }
    ]
  }
];

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'Advanced Mathematics',
    description: 'Master the concepts of differential equations and calculus',
    grade: '12',
    subject: 'Mathematics',
    teacher: teachers[0], // Dr. Alan Turing
    duration: 8, // 8 weeks
    level: 'Intermediate',
    students: 325,
    progress: 25,
    image: '/lovable-uploads/ed7722e8-abd5-415d-8ea0-705629379f83.png'
  },
  {
    id: 'c2',
    title: 'Quantum Physics',
    description: 'Explore the fascinating world of quantum mechanics',
    grade: '12',
    subject: 'Physics',
    teacher: teachers[1], // Dr. Marie Curie
    duration: 10, // 10 weeks
    level: 'Advanced',
    students: 248,
    progress: 68,
    image: '/lovable-uploads/ed7722e8-abd5-415d-8ea0-705629379f83.png'
  },
  {
    id: 'c3',
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of computer science, algorithms, and coding',
    grade: '11',
    subject: 'Computer Science',
    teacher: teachers[2], // Prof. Grace Hopper
    duration: 6, // 6 weeks
    level: 'Beginner',
    students: 420,
    progress: 92,
    image: '/lovable-uploads/ed7722e8-abd5-415d-8ea0-705629379f83.png'
  },
  {
    id: 'c4',
    title: 'Organic Chemistry',
    description: 'Understand the principles and reactions in organic chemistry',
    grade: '12',
    subject: 'Chemistry',
    teacher: teachers[3], // Dr. Rosalind Franklin
    duration: 8, // 8 weeks
    level: 'Intermediate',
    students: 305,
    progress: 0,
    image: '/lovable-uploads/ed7722e8-abd5-415d-8ea0-705629379f83.png'
  },
];

export const studyMaterials: StudyMaterial[] = [
  {
    id: 'sm1',
    title: 'Quantum Physics: Wave Functions',
    type: 'Study Material',
    subject: 'Physics',
    grade: '12',
    submittedBy: 'Dr. Richard Feynman',
    submittedOn: '10/5/2023',
    status: 'Pending'
  },
  {
    id: 'sm2',
    title: 'Fundamentals of Organic Chemistry',
    type: 'Course',
    subject: 'Chemistry',
    grade: '11',
    submittedBy: 'Prof. Marie Curie',
    submittedOn: '10/5/2023',
    status: 'Pending'
  },
  {
    id: 'sm3',
    title: 'Mid-term Examination: Calculus II',
    type: 'Mathematics',
    subject: 'Mathematics',
    grade: '12',
    submittedBy: 'Dr. Alan Turing',
    submittedOn: '10/5/2023',
    status: 'Pending'
  },
  {
    id: 'sm4',
    title: 'Introduction to Programming using Python',
    type: 'Computer Science',
    subject: 'Computer Science',
    grade: '10',
    submittedBy: 'Dr. Ada Lovelace',
    submittedOn: '10/2/2023',
    status: 'Pending'
  },
  {
    id: 'sm5',
    title: 'Literary Analysis Techniques',
    type: 'Literature',
    subject: 'English',
    grade: '11',
    submittedBy: 'Prof. Jane Austen',
    submittedOn: '10/1/2023',
    status: 'Pending'
  },
];

export const studentProgressData: StudentProgress[] = [
  { 
    studentId: '101', 
    courseId: 'c1', 
    progress: 45, 
    grade: 'B', 
    completedLessons: 9, 
    totalLessons: 20 
  },
  { 
    studentId: '102', 
    courseId: 'c1', 
    progress: 70, 
    grade: 'A', 
    completedLessons: 14, 
    totalLessons: 20 
  },
  { 
    studentId: '103', 
    courseId: 'c1', 
    progress: 95, 
    grade: 'A+', 
    completedLessons: 19, 
    totalLessons: 20 
  },
  { 
    studentId: '1201', 
    courseId: 'c2', 
    progress: 60, 
    grade: 'B-', 
    completedLessons: 15, 
    totalLessons: 25 
  },
  { 
    studentId: '1202', 
    courseId: 'c2', 
    progress: 80, 
    grade: 'A-', 
    completedLessons: 20, 
    totalLessons: 25 
  },
  { 
    studentId: '1203', 
    courseId: 'c2', 
    progress: 98, 
    grade: 'A+', 
    completedLessons: 24, 
    totalLessons: 25 
  },
];

export const classificationSummary: ClassificationSummary = {
  juniorScholars: 279,
  risingIntellects: 196,
  mastermindElite: 145,
  total: 620
};

// Dashboard summary stats
export const dashboardStats = {
  totalUsers: 548,
  totalTeachers: 25,
  totalStudents: 523,
  totalCourses: 48,
  studyMaterials: 324,
  pendingApprovals: 12
};

// Dashboard cards metadata
export const dashboardCards = [
  {
    title: 'Total Users',
    value: 548,
    description: '25 active now',
    icon: UserIcon,
    trend: '+12%'
  },
  {
    title: 'Total Courses',
    value: 48,
    description: 'Across all departments',
    icon: BookOpen,
    trend: '+5%'
  },
  {
    title: 'Study Materials',
    value: 324,
    description: 'Published materials',
    icon: FileText,
    trend: '+8%'
  },
  {
    title: 'Pending Approvals',
    value: 12,
    description: 'Awaiting your review',
    icon: Clock,
    trend: '-3%'
  }
];

// Generate student classification data for all classes
export const generateClassificationByGrade = () => {
  const grades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  return grades.map(grade => {
    // Generate random but sensible data
    const total = Math.floor(Math.random() * 50) + 30; // 30-80 students per grade
    const mastermind = Math.floor(total * (0.15 + Math.random() * 0.1)); // 15-25% mastermind
    const rising = Math.floor(total * (0.3 + Math.random() * 0.15)); // 30-45% rising
    const junior = total - mastermind - rising; // Remaining are junior

    return {
      grade,
      juniorScholars: junior,
      risingIntellects: rising, 
      mastermindElite: mastermind,
      total
    };
  });
};

export const classificationByGrade = generateClassificationByGrade();
