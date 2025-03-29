import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Plus, 
  Edit, 
  Trash, 
  Lock, 
  Unlock 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { students, teachers } from '@/data/mockData';
import { Badge } from '@/components/ui/badge';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('teachers');
  const [createUserOpen, setCreateUserOpen] = useState(false);
  const [userType, setUserType] = useState<'teacher' | 'student'>('teacher');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Management</h2>
        <Button 
          onClick={() => {
            setUserType(activeTab === 'teachers' ? 'teacher' : 'student');
            setCreateUserOpen(true);
          }}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create {activeTab === 'teachers' ? 'Teacher' : 'Student'}
        </Button>
      </div>

      <Tabs defaultValue="teachers" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>
        
        <TabsContent value="teachers">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Teachers</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subjects</TableHead>
                    <TableHead>Classes</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teachers.map((teacher) => (
                    <TableRow key={teacher.id}>
                      <TableCell className="font-medium">{teacher.name}</TableCell>
                      <TableCell>{teacher.email}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {teacher.subjects.map((subject, index) => (
                            <Badge key={index} variant="outline" className="bg-blue-50">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {teacher.classes.map((cls, index) => (
                            <Badge key={index} variant="outline">
                              {cls}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {teacher.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            {teacher.isActive ? (
                              <Lock className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <Unlock className="h-4 w-4 text-green-500" />
                            )}
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="students">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Students</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Class</TableHead>
                    <TableHead>Performance Level</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.slice(0, 10).map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.class}-{student.section}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={`
                            ${student.performanceLevel === 'Junior Scholar' && 'bg-amber-100 text-amber-800'} 
                            ${student.performanceLevel === 'Rising Intellect' && 'bg-yellow-100 text-yellow-800'} 
                            ${student.performanceLevel === 'Mastermind Elite' && 'bg-green-100 text-green-800'}
                          `}
                        >
                          {student.performanceLevel}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">
                          {student.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="icon" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="ghost">
                            {student.isActive ? (
                              <Lock className="h-4 w-4 text-yellow-500" />
                            ) : (
                              <Unlock className="h-4 w-4 text-green-500" />
                            )}
                          </Button>
                          <Button size="icon" variant="ghost">
                            <Trash className="h-4 w-4 text-red-500" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Create User Dialog */}
      <Dialog open={createUserOpen} onOpenChange={setCreateUserOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create New {userType === 'teacher' ? 'Teacher' : 'Student'}</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new {userType}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="Full Name" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="Email Address" />
              </div>
            </div>
            
            {userType === 'teacher' ? (
              <>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subjects" className="text-sm font-medium">Subjects</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="geography">Geography</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="computer_science">Computer Science</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="classes" className="text-sm font-medium">Classes</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select classes" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                        <React.Fragment key={grade}>
                          <SelectItem value={`${grade}A`}>Class {grade}A</SelectItem>
                          <SelectItem value={`${grade}B`}>Class {grade}B</SelectItem>
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="class" className="text-sm font-medium">Class</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                          <SelectItem key={grade} value={grade.toString()}>
                            Class {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="section" className="text-sm font-medium">Section</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Section A</SelectItem>
                        <SelectItem value="B">Section B</SelectItem>
                        <SelectItem value="C">Section C</SelectItem>
                        <SelectItem value="D">Section D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="performance" className="text-sm font-medium">Initial Performance Level</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select performance level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Junior Scholar">Junior Scholar</SelectItem>
                      <SelectItem value="Rising Intellect">Rising Intellect</SelectItem>
                      <SelectItem value="Mastermind Elite">Mastermind Elite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            
            <div className="flex flex-col gap-2">
              <label htmlFor="status" className="text-sm font-medium">Status</label>
              <Select defaultValue="active">
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create {userType === 'teacher' ? 'Teacher' : 'Student'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserManagement;
