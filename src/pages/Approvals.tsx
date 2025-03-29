import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StudyMaterial } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, FileText, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import { toast } from "@/hooks/use-toast"

const Approvals = () => {
  const [approvals, setApprovals] = useState<StudyMaterial[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Mock data for study materials
    const mockStudyMaterials: StudyMaterial[] = [
      {
        id: '1',
        title: 'Introduction to Algebra',
        type: 'Mathematics',
        subject: 'Algebra',
        grade: '9',
        submittedBy: 'John Doe',
        submittedOn: '2023-10-01',
        status: 'Pending',
      },
      {
        id: '2',
        title: 'Organic Chemistry Basics',
        type: 'Chemistry',
        subject: 'Chemistry',
        grade: '10',
        submittedBy: 'Jane Smith',
        submittedOn: '2023-09-25',
        status: 'Pending',
      },
      {
        id: '3',
        title: 'Advanced Algorithms',
        type: 'Computer Science',
        subject: 'Algorithms',
        grade: '11',
        submittedBy: 'Alice Johnson',
        submittedOn: '2023-09-20',
        status: 'Pending',
      },
      {
        id: '4',
        title: 'The Great Gatsby Analysis',
        type: 'Literature',
        subject: 'English',
        grade: '12',
        submittedBy: 'Bob Williams',
        submittedOn: '2023-09-15',
        status: 'Pending',
      },
      {
        id: '5',
        title: 'Quantum Physics',
        type: 'Physics',
        subject: 'Physics',
        grade: '12',
        submittedBy: 'Charlie Brown',
        submittedOn: '2023-09-10',
        status: 'Pending',
      },
    ];

    setApprovals(mockStudyMaterials);
  }, []);

  const handleApprove = (id: string) => {
    setApprovals(approvals.map(item =>
      item.id === id ? { ...item, status: 'Approved' } : item
    ));
    toast({
      title: "Study Material Approved",
      description: "The study material has been approved successfully.",
    })
  };

  const handleReject = (id: string) => {
    setApprovals(approvals.map(item =>
      item.id === id ? { ...item, status: 'Rejected' } : item
    ));
    toast({
      title: "Study Material Rejected",
      description: "The study material has been rejected.",
    })
  };

  const filteredApprovals = approvals.filter(approval =>
    approval.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Study Material Approvals</h1>
        <Input
          type="search"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Submitted By</TableHead>
              <TableHead>Submitted On</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredApprovals.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.subject}</TableCell>
                <TableCell>{item.grade}</TableCell>
                <TableCell>{item.submittedBy}</TableCell>
                <TableCell>{item.submittedOn}</TableCell>
                <TableCell>
                  {item.status === 'Pending' && (
                    <Badge variant="secondary">Pending</Badge>
                  )}
                  {item.status === 'Approved' && (
                    <Badge variant="success">Approved</Badge>
                  )}
                  {item.status === 'Rejected' && (
                    <Badge variant="destructive">Rejected</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => handleApprove(item.id)}
                      >
                        <CheckCircle className="mr-2 h-4 w-4" /> Approve
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleReject(item.id)}
                      >
                        <XCircle className="mr-2 h-4 w-4" /> Reject
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <FileText className="mr-2 h-4 w-4" /> View Details
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Approvals;
