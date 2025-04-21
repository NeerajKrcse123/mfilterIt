"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, BarChart3 } from "lucide-react";

import BarChart from "@/components/Dashboard/BarChart";
import DataTable from "@/components/Dashboard/DataTable";
import DevicePerformance from "@/components/Dashboard/DevicePerformance";
import IframeDistribution from "@/components/Dashboard/IframeDistribution";
import PieChartComponent from "@/components/Dashboard/PieChart";

import {
  deviceContributionData,
  devicePerformanceData,
  deviceSignatureData,
  hardwareConcurrencyData,
  osVersionData,
  repeatIpsData,
  userIntentData,
  vpnProxiesData,
} from "@/components/data/dashboardData";

import InteractionStatus from "@/components/Dashboard/InteractionStatus";
import {
  botBehaviorData,
  iframeSizesData,
} from "@/components/data/enhancedDashboardData";

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive analysis of traffic and user behavior
        </p>
      </header>

      <Tabs defaultValue="analysis" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-4">
          <TabsTrigger value="analysis" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Analysis Insights
          </TabsTrigger>
          <TabsTrigger value="traffic" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Traffic Insights
          </TabsTrigger>
        </TabsList>

        {/* Analysis Insights Tab */}
        <TabsContent value="analysis" className="space-y-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {invalidTrafficData.map((item, index) => (
              <StatCard
                key={index}
                title={item.name}
                value={item.value}
                icon={<AlertTriangle className="h-4 w-4" />}
              />
            ))}
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              {/* <StatCard title="Repeat User" value="8%" /> */}
              <h1 className="text-xl font-bold mb-2">Repeat User:8%</h1>
              <DataTable
                title="Device Signature"
                data={deviceSignatureData}
                columns={[
                  {
                    header: "Device Signature",
                    accessorKey: "device_signature",
                  },
                  { header: "Publisher Name", accessorKey: "publisher_name" },
                  { header: "Sub Publisher", accessorKey: "sub_publisher" },
                  { header: "Visit", accessorKey: "visit" },
                ]}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold mb-2">
                Suspicious Behaviour:4%
              </h1>
              <div className="grid grid-cols-2 gap-6">
                <InteractionStatus />

                <PieChartComponent
                  title="Bot Behavior"
                  data={botBehaviorData}
                  dataKey="percentage"
                  nameKey="device"
                  colors={["#FF5733", "#33FF57", "#3357FF", "#FF33A1"]}
                  height={200}
                />
              </div>
            </div>
          </div>
          <PieChartComponent
            title="VPN Proxies"
            data={vpnProxiesData}
            dataKey="value"
            nameKey="name"
            colors={["#0088FE", "#00C49F", "#FFBB28"]}
            height={200}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h1 className="text-xl font-bold mb-2">Ip Repeat:7%</h1>
              <BarChart
                title="Repeat IPs"
                data={repeatIpsData}
                dataKey="total_event"
                xAxisDataKey="ip"
                bars={[
                  {
                    dataKey: "total_event",
                    fill: "#8884d8",
                    name: "Total Event",
                  },
                  {
                    dataKey: "total_visit",
                    fill: "#82ca9d",
                    name: "Total Visit",
                  },
                ]}
                height={400}
              />
            </div>
            <div>
              <h1 className="text-xl font-bold mb-2">Server Farm:3%</h1>
              <BarChart
                title="Hardware Concurrency"
                data={hardwareConcurrencyData}
                dataKey="desktop"
                xAxisDataKey="name"
                bars={[
                  { dataKey: "desktop", fill: "#8884d8", name: "Desktop" },
                  { dataKey: "mobile", fill: "#82ca9d", name: "Mobile" },
                ]}
                stacked={true}
                height={200}
              />
            </div>
          </div>
          <IframeDistribution sizes={iframeSizesData} />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ComplianceIssues issues={complianceIssuesData} />
            <UserBehavior behaviors={userBehaviorData} />
          </div>

          <StackedProgressBar
            title="Region Wise Concentration"
            data={regionConcentrationData}
          /> */}
        </TabsContent>

        {/* Traffic Insights Tab */}
        <TabsContent value="traffic" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userIntentData.map((intent, index) => (
              <Card
                key={index}
                className={`shadow-sm ${intent.className || ""}`}
              >
                <CardHeader>
                  <CardTitle>{intent.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Visits:
                      </span>
                      <span className="font-medium">{intent.visits}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        Orders:
                      </span>
                      <span className="font-medium">{intent.orders}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BarChart
              title="Top Contributing OS Versions"
              data={osVersionData}
              dataKey="visits"
              xAxisDataKey="name"
              bars={[
                { dataKey: "visits", fill: "#8884d8", name: "% of Visits" },
                { dataKey: "events", fill: "#82ca9d", name: "% of Events" },
              ]}
              height={400}
            />

            <BarChart
              title="Traffic Contribution by Device Type"
              data={deviceContributionData}
              dataKey="visits"
              xAxisDataKey="name"
              bars={[
                { dataKey: "visits", fill: "#8884d8", name: "% Visits" },
                { dataKey: "otp", fill: "#82ca9d", name: "% OTP Verify Leads" },
                {
                  dataKey: "conversion",
                  fill: "#FFBB28",
                  name: "% Conversion Leads",
                },
              ]}
              height={400}
            />
          </div>

          <div className="grid grid-cols-1 gap-6">
            <DevicePerformance devices={devicePerformanceData} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
