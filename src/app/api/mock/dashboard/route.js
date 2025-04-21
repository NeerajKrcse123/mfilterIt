import {
    complianceIssuesData,
    deviceContributionData,
    devicePerformanceData,
    deviceSignatureData,
    hardwareConcurrencyData,
    invalidGeoData,
    invalidTrafficData,
    osVersionData,
    repeatIpsData,
    userBehaviorData,
    userIntentData,
    vpnProxiesData,
} from '@/components/data/dashboardData';
import { NextResponse } from 'next/server';

import {
    botBehaviorData,
    iframeSizesData,
    regionConcentrationData,
} from '@/components/data/enhancedDashboardData';

export async function GET() {
    // Simulate delay to show loading state in the UI
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
        analysisInsights: {
            repeatIps: repeatIpsData,
            invalidTraffic: invalidTrafficData,
            complianceIssues: complianceIssuesData,
            userBehavior: userBehaviorData,
            deviceSignature: deviceSignatureData,
            vpnProxies: vpnProxiesData,
            invalidGeo: invalidGeoData,
            hardwareConcurrency: hardwareConcurrencyData,
            iframeSizes: iframeSizesData,
            botBehavior: botBehaviorData,
            regionConcentration: regionConcentrationData,
        },
        trafficInsights: {
            devicePerformance: devicePerformanceData,
            userIntent: userIntentData,
            osVersions: osVersionData,
            deviceContribution: deviceContributionData,
        }
    });
}
