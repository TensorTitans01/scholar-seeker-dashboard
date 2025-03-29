
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
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
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Edit, 
  Trash, 
  Users, 
  FileText 
} from 'lucide-react';
import { classes, teachers } from '@/data/mockData';

const Classroom = () => {
  const [createClassOpen, setCreateClassOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);

  const selectedClassData = classes.find(c => c.id === selectedClass);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Classroom Management</h2>
        <Button onClick={() => setCreateClassOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Create Classroom
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>All Classrooms</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Section</TableHead>
                <TableHead>Class Teacher</TableHead>
                <TableHead>Students</TableHead>
                <TableHead>Subjects</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((classroom) => {
                const classTeacher = teachers.find(t => t.id === classroom.classTeacher);
                return (
                  <TableRow key={classroom.id}>
                    <TableCell className="font-medium">{classroom.name}</TableCell>
                    <TableCell>{classroom.grade}</TableCell>
                    <TableCell>{classroom.section}</TableCell>
                    <TableCell>{classTeacher ? classTeacher.name : 'Unassigned'}</TableCell>
                    <TableCell>{classroom.students.length} students</TableCell>
                    <TableCell>{classroom.subjects.length} subjects</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button 
                          size="icon" 
                          variant="ghost"
                          onClick={() => {
                            setSelectedClass(classroom.id);
                            setViewDetailsOpen(true);
                          }}
                        >
                          <Users className="h-4 w-4 text-blue-500" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Create Classroom Dialog */}
      <Dialog open={createClassOpen} onOpenChange={setCreateClassOpen}>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Create New Classroom</DialogTitle>
            <DialogDescription>
              Set up a new classroom and assign teachers and subjects.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="grade" className="text-sm font-medium">Grade</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((grade) => (
                      <SelectItem key={grade} value={grade.toString()}>
                        Grade {grade}
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
              <label htmlFor="classTeacher" className="text-sm font-medium">Class Teacher</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Assign class teacher" />
                </SelectTrigger>
                <SelectContent>
                  {teachers.map((teacher) => (
                    <SelectItem key={teacher.id} value={teacher.id}>
                      {teacher.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Subjects</label>
              <div className="border p-3 rounded-md space-y-3">
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <label htmlFor="subject" className="text-xs">Subject</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="science">Science</SelectItem>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                        <SelectItem value="computer_science">Computer Science</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <label htmlFor="subjectTeacher" className="text-xs">Teacher</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Assign teacher" />
                      </SelectTrigger>
                      <SelectContent>
                        {teachers.map((teacher) => (
                          <SelectItem key={teacher.id} value={teacher.id}>
                            {teacher.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge className="flex items-center gap-1 px-3 py-1">
                    Mathematics - Dr. Alan Turing
                    <Button size="sm" variant="ghost" className="h-4 w-4 p-0 ml-1">
                      <Trash className="h-3 w-3" />
                    </Button>
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Classroom</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Classroom Details Dialog */}
      <Dialog open={viewDetailsOpen} onOpenChange={setViewDetailsOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Classroom Details: {selectedClassData?.name}</DialogTitle>
            <DialogDescription>
              View and manage students and subjects for this class.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <Users className="mr-2 h-4 w-4" />
                Students
                <Badge className="ml-2">
                  {selectedClassData?.students.length} students
                </Badge>
              </h3>
              <div className="border rounded-md p-3">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Performance Level</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedClassData?.students.map((studentId) => (
                      <TableRow key={studentId}>
                        <TableCell>{studentId}</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800">
                            Mastermind Elite
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2 flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Subjects
                <Badge className="ml-2">
                  {selectedClassData?.subjects.length} subjects
                </Badge>
              </h3>
              <div className="border rounded-md p-3">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead>Teacher</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedClassData?.subjects.map((subject) => {
                      const subjectTeacher = teachers.find(t => t.id === subject.teacher);
                      return (
                        <TableRow key={subject.id}>
                          <TableCell>{subject.name}</TableCell>
                          <TableCell>{subjectTeacher ? subjectTeacher.name : 'Unassigned'}</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setViewDetailsOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Classroom;
