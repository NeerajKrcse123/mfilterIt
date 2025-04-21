import { Card } from "@/components/ui/card";

export default function InteractionStatus({ className }) {
  const statusItems = [
    {
      title: "Mouse Movement: False",
      description: "User has NOT interacted with the website.",
    },
    {
      title: "Touch Support: False",
      description: "User has NOT interacted with the website.",
    },
    {
      title: "HasFocus = False",
      description: "Page is not opening in the Active tab.",
    },
  ];

  return (
    <Card className={`shadow-sm ${className}`}>
      <div className="max-w-md mx-auto p-4 space-y-4">
        {statusItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 font-semibold text-gray-800">
                {item.title}
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
