
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const ContentReview = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Content Review</h2>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Study Materials Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium mb-2">No materials pending review</h3>
            <p className="text-muted-foreground mb-4">
              All study materials have been reviewed. Check the Approvals section for pending approvals.
            </p>
            <Button href="/approvals">Go to Approvals</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentReview;
