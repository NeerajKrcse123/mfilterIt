import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

const ComplianceIssues = ({ issues, className = "" }) => {
  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
          Compliance Issues
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {issues.map((issue, index) => (
            <div key={index} className="bg-slate-100 p-3 rounded-md">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{issue.name}</span>
                <span className="text-sm font-bold">{issue.value}</span>
              </div>
              {issue.description && (
                <p className="text-xs text-muted-foreground mt-1">
                  {issue.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ComplianceIssues;
