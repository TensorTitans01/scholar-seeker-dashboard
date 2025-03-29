
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
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  XCircle, 
  Eye, 
  FileText, 
  Download 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { studyMaterials } from '@/data/mockData';

const Approvals = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Approvals</h2>
      </div>

      <Tabs defaultValue="pending">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Submitted By</TableHead>
                    <TableHead>Submitted On</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studyMaterials.map((material) => (
                    <TableRow key={material.id}>
                      <TableCell className="font-medium">{material.title}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{material.type}</Badge>
                      </TableCell>
                      <TableCell>{material.subject}</TableCell>
                      <TableCell>{material.grade}</TableCell>
                      <TableCell>{material.submittedBy}</TableCell>
                      <TableCell>{material.submittedOn}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => {
                              setSelectedMaterial(material);
                              setPreviewOpen(true);
                            }}
                          >
                            <Eye className="h-4 w-4 text-blue-500" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <XCircle className="h-4 w-4 text-red-500" />
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
        
        <TabsContent value="approved">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Approved Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No approved materials yet</h3>
                <p className="text-muted-foreground mb-4">
                  Approved materials will appear here. Review pending materials to approve them.
                </p>
                <Button variant="outline" onClick={() => document.querySelector('[value="pending"]')?.click()}>
                  View Pending Materials
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rejected">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Rejected Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium mb-2">No rejected materials yet</h3>
                <p className="text-muted-foreground mb-4">
                  Rejected materials will appear here. Review pending materials to reject them if needed.
                </p>
                <Button variant="outline" onClick={() => document.querySelector('[value="pending"]')?.click()}>
                  View Pending Materials
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Preview Dialog */}
      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Preview Material</DialogTitle>
          </DialogHeader>
          
          {selectedMaterial && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Title</p>
                  <p>{selectedMaterial.title}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Type</p>
                  <Badge variant="outline">{selectedMaterial.type}</Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Subject</p>
                  <p>{selectedMaterial.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Grade</p>
                  <p>Grade {selectedMaterial.grade}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Submitted By</p>
                  <p>{selectedMaterial.submittedBy}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Submitted On</p>
                  <p>{selectedMaterial.submittedOn}</p>
                </div>
              </div>
              
              <div className="border rounded-md p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Document Preview</h3>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                <div className="h-64 flex items-center justify-center border rounded bg-white">
                  <div className="text-center p-6">
                    <FileText className="h-10 w-10 mx-auto text-gray-300 mb-4" />
                    <p className="text-muted-foreground">
                      Preview not available. Please download the document to view its contents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setPreviewOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive">
              Reject
            </Button>
            <Button>
              Approve
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Approvals;
