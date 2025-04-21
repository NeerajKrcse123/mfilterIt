import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StackedProgressBar = ({ title, data, className = "" }) => {
  return (
    <Card className={`shadow-sm ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{item.name}</span>
              </div>
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-slate-100">
                {item.values.map((segment, segmentIndex) => (
                  <div
                    key={segmentIndex}
                    className={`h-full`}
                    style={{
                      width: `${segment.value}%`,
                      backgroundColor: segment.color,
                    }}
                    title={`${segment.name}: ${segment.value}%`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                {item.values.map((segment, segmentIndex) => (
                  <div key={segmentIndex} className="flex items-center">
                    <div
                      className="mr-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: segment.color }}
                    />
                    <span>
                      {segment.name}: {segment.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StackedProgressBar;
