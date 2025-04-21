import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IframeDistribution = ({ sizes, className = "" }) => {
  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle>Iframe Size Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sizes.map((size, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{size.size}</span>
              </div>
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: `${size.desktop}%` }}
                  title={`Desktop: ${size.desktop}%`}
                />
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${size.mobile}%` }}
                  title={`Mobile: ${size.mobile}%`}
                />
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-blue-500" />
                  <span>Desktop: {size.desktop}%</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-1 h-2 w-2 rounded-full bg-green-500" />
                  <span>Mobile: {size.mobile}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IframeDistribution;
