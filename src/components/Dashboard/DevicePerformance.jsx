import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DevicePerformance = ({ devices, className = "" }) => {
  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle>Device Performance</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {devices.map((device, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${device.className || "bg-slate-100"}`}
          >
            <h3 className="text-lg font-medium mb-2">{device.label}</h3>
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Visits:</span>
                <span className="font-medium">{device.visits}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Orders:</span>
                <span className="font-medium">{device.orders}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DevicePerformance;
