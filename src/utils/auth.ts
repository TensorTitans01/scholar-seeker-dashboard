
// User roles
export type UserRole = 'student' | 'teacher' | 'admin' | 'superadmin';

// User interface
export interface User {
  email: string;
  role: UserRole;
  name?: string;
}

// Function to get the current user from localStorage
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('user');
  if (!userJson) return null;
  
  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    console.error('Error parsing user data from localStorage', error);
    return null;
  }
};

// Function to check if the user is authenticated
export const isAuthenticated = (): boolean => {
  return !!getCurrentUser();
};

// Function to check if the user has a specific role
export const hasRole = (role: UserRole): boolean => {
  const user = getCurrentUser();
  if (!user) return false;
  return user.role === role;
};

// Function to log out the user
export const logout = (): void => {
  localStorage.removeItem('user');
  window.location.href = '/login';
};

// Mock user data for testing
export const mockUsers = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' as UserRole, name: 'Admin User' },
  { email: 'teacher@example.com', password: 'teacher123', role: 'teacher' as UserRole, name: 'Jane Teacher' },
  { email: 'student@example.com', password: 'student123', role: 'student' as UserRole, name: 'John Student' },
  { email: 'superadmin@example.com', password: 'superadmin123', role: 'superadmin' as UserRole, name: 'Super Admin' },
];
