import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle } from "lucide-react";

const UserBehavior = ({ behaviors, className = "" }) => {
  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle>User Behavior</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {behaviors.map((behavior, index) => (
            <div
              key={index}
              className="bg-slate-100 p-3 rounded-md flex justify-between items-center"
            >
              <span className="text-sm">{behavior.name}</span>
              <div className="flex items-center">
                {typeof behavior.value === "boolean" ? (
                  behavior.value === false ? (
                    <XCircle className="h-4 w-4 text-red-500 mr-1" />
                  ) : (
                    <div className="h-4 w-4 bg-green-500 rounded-full mr-1" />
                  )
                ) : (
                  <span className="text-sm font-medium">{behavior.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserBehavior;
