
import React from 'react';
import { StudyMaterial } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ApprovalCardProps {
  approvals: StudyMaterial[];
}

const ApprovalCard: React.FC<ApprovalCardProps> = ({ approvals }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-medium">Content Awaiting Approval</CardTitle>
          <Button variant="link" className="text-blue-600 p-0 h-auto" size="sm">
            View All
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">Review and approve study materials</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {approvals.slice(0, 5).map((approval) => (
            <div key={approval.id} className="border-b pb-3 last:border-b-0 last:pb-0">
              <h3 className="font-medium text-base">{approval.title}</h3>
              <div className="flex flex-wrap gap-1 my-1">
                <Badge variant="outline" className="text-xs">{approval.type}</Badge>
                <Badge variant="outline" className="text-xs">{approval.subject}</Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Submitted by {approval.submittedBy} on {approval.submittedOn}
              </p>
              <div className="flex gap-2 mt-2">
                <Button size="sm" className="h-8 bg-blue-600 hover:bg-blue-700">Approve</Button>
                <Button size="sm" variant="outline" className="h-8">Review</Button>
                <Button size="sm" variant="outline" className="h-8 text-destructive hover:bg-destructive/10">Reject</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ApprovalCard;
