
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Check, X, Eye } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Mock data for approvals
const mockApprovals = [
  {
    id: 1,
    title: 'Mathematics - Algebra Fundamentals',
    author: 'Jane Smith',
    subject: 'Mathematics',
    grade: '9th Grade',
    submittedDate: '2023-06-10',
    status: 'pending',
    description: 'Comprehensive guide to algebraic expressions, equations, and functions.',
  },
  {
    id: 2,
    title: 'Biology - Cell Structure and Function',
    author: 'John Doe',
    subject: 'Biology',
    grade: '10th Grade',
    submittedDate: '2023-06-08',
    status: 'pending',
    description: 'Interactive lessons on cell biology, organelles, and cellular processes.',
  },
  {
    id: 3,
    title: 'English Literature - Shakespeare Analysis',
    author: 'Robert Johnson',
    subject: 'English',
    grade: '11th Grade',
    submittedDate: '2023-06-07',
    status: 'pending',
    description: 'Critical analysis of Shakespeare\'s major works with historical context.',
  },
  {
    id: 4,
    title: 'History - World War II Timeline',
    author: 'Maria Garcia',
    subject: 'History',
    grade: '12th Grade',
    submittedDate: '2023-06-05',
    status: 'pending',
    description: 'Comprehensive timeline of World War II events with primary sources.',
  },
];

const Approvals = () => {
  const [approvals, setApprovals] = useState(mockApprovals);
  const [selectedApproval, setSelectedApproval] = useState<number | null>(null);

  const handleApprove = (id: number) => {
    setApprovals((prev) =>
      prev.map((approval) =>
        approval.id === id ? { ...approval, status: 'approved' } : approval
      )
    );
    toast({
      title: "Content Approved",
      description: "The content has been approved and is now available to students.",
      variant: "default",
    });
  };

  const handleReject = (id: number) => {
    setApprovals((prev) =>
      prev.map((approval) =>
        approval.id === id ? { ...approval, status: 'rejected' } : approval
      )
    );
    toast({
      title: "Content Rejected",
      description: "The content has been rejected and the author has been notified.",
      variant: "destructive",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-500">Approved</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Content Approvals</h2>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {approvals.map((approval) => (
          <Card key={approval.id} className="overflow-hidden">
            <CardHeader className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{approval.title}</CardTitle>
                  <CardDescription className="mt-1">
                    Submitted by {approval.author} on {new Date(approval.submittedDate).toLocaleDateString()}
                  </CardDescription>
                </div>
                {getStatusBadge(approval.status)}
              </div>
            </CardHeader>
            <CardContent className="px-6 pb-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Subject</p>
                  <p>{approval.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Grade Level</p>
                  <p>{approval.grade}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <p className="capitalize">{approval.status}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{approval.description}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6 flex justify-between">
              <Button variant="outline" className="gap-2" onClick={() => setSelectedApproval(approval.id)}>
                <Eye className="h-4 w-4" />
                Preview
              </Button>
              {approval.status === 'pending' && (
                <div className="flex gap-2">
                  <Button variant="outline" className="gap-2 text-red-600 border-red-200 hover:bg-red-50" onClick={() => handleReject(approval.id)}>
                    <X className="h-4 w-4" />
                    Reject
                  </Button>
                  <Button className="gap-2 bg-green-500 hover:bg-green-600" onClick={() => handleApprove(approval.id)}>
                    <Check className="h-4 w-4" />
                    Approve
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}

        {approvals.length === 0 && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-12">
              <FileText className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium">No Pending Approvals</h3>
              <p className="text-muted-foreground text-center mt-2">
                All submitted content has been reviewed. Check back later for new submissions.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Approvals;
