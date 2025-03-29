
import React from 'react';
import { 
  dashboardCards, 
  classificationSummary, 
  studyMaterials 
} from '@/data/mockData';
import StatCard from '@/components/dashboard/StatCard';
import StudentClassificationCard from '@/components/dashboard/StudentClassificationCard';
import ApprovalCard from '@/components/dashboard/ApprovalCard';
import AILearningCard from '@/components/dashboard/AILearningCard';
import ClassificationByGradeChart from '@/components/charts/ClassificationByGradeChart';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardCards.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            trend={card.trend}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2">
          <ClassificationByGradeChart />
        </div>

        {/* Side Cards */}
        <div className="space-y-6">
          <StudentClassificationCard data={classificationSummary} />
          <AILearningCard />
        </div>
      </div>

      {/* Approvals Section */}
      <div>
        <ApprovalCard approvals={studyMaterials} />
      </div>
    </div>
  );
};

export default Dashboard;
