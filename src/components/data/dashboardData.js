export const repeatIpsData = [
    { ip: '2401:4900:6401:8fa4:f7e0:bb45:4361:6821', total_event: 93, total_visit: 1 },
    { ip: '2409:40f0:dc:8e93:8000::', total_event: 98, total_visit: 1 },
    { ip: '2409:40e4:6b:e198:9fe6:4d8a:410:f970', total_event: 105, total_visit: 3 },
    { ip: '2409:40e4:6d:692:6020:fcff:fec0:4737', total_event: 128, total_visit: 4 },
    { ip: '2401:4900:3de9:aca5:8c36:18ff:fe7f:fb8b', total_event: 142, total_visit: 2 },
    { ip: '2409:4065:9c:b10:b71c:a6aa:397d:d892', total_event: 184, total_visit: 1 },
    { ip: '2401:4900:6401:8fa4:f7e0:bb45:4361:6821', total_event: 196, total_visit: 2 },
    { ip: '2409:40f0:dc:8e93:8000::', total_event: 212, total_visit: 3 },
];

export const invalidTrafficData = [
    { name: 'IP Repeat', value: '7%' },
    { name: 'Repeat User', value: '8%' },
    { name: 'Suspicious Behaviour', value: '4%' },
];

export const complianceIssuesData = [
    { name: 'VPN Proxy (DCH)', value: '3%' },
    { name: 'Invalid Geo', value: '2%' },
    { name: 'Pop Under', value: '5%' },
    { name: 'Imperceptible Window', value: '4%' },
    { name: 'Has Iframe: 0X0', value: 'Yes', description: 'Height & Width of the browser window is small' },
    { name: 'Server Farm', value: '3%' },
];

export const userBehaviorData = [
    { name: 'Mouse Movement', value: false },
    { name: 'HasFocus', value: false, description: 'Page is not opening in the Active tab' },
    { name: 'Touch Support', value: false },
    { name: 'Time Spent On Page', value: '0 sec' },
    { name: 'Slide/Scroll/Touch', value: false },
];

export const deviceSignatureData = [
    {
        device_signature: 'd512f0db04d3593dd16fb7920ea5357b',
        publisher_name: 'Google Discovery',
        sub_publisher: 'PG',
        visit: 50
    },
    {
        device_signature: '0cfc3c1aeb751122589f8babc8b90836',
        publisher_name: 'Google Search',
        sub_publisher: 'CPC',
        visit: 14
    },
    {
        device_signature: 'bcc8a04783fa4519244440689dc34b1b',
        publisher_name: 'Google Search',
        sub_publisher: 'CPC',
        visit: 12
    },
    {
        device_signature: '6bc5cd42b028995a3fc234aa27b6f54d',
        publisher_name: 'Google Discovery',
        sub_publisher: 'PG',
        visit: 12
    },
    {
        device_signature: '8bf12abbd3eac659580817f9fe10cd94',
        publisher_name: 'Google Search',
        sub_publisher: 'CPC',
        visit: 10
    },
    {
        device_signature: '279c8929b8b59fc78fcc964cbf57039a',
        publisher_name: 'Google Search',
        sub_publisher: 'CPC',
        visit: 10
    },
];

export const vpnProxiesData = [
    { name: 'DCH', value: 93 },
    { name: 'SES', value: 4 },
    { name: 'VPN', value: 3 },
];

export const invalidGeoData = [
    { country: 'US', percentage: 60 },
    { country: 'IN', percentage: 20 },
    { country: 'AR', percentage: 10 },
    { country: 'FR', percentage: 5 },
    { country: 'Others', percentage: 5 },
];

export const hardwareConcurrencyData = [
    { name: 'HC 1', desktop: 4, mobile: 96 },
    { name: 'HC 3', desktop: 2, mobile: 98 },
    { name: 'HC 9', desktop: 6, mobile: 94 },
    { name: 'HC 72', desktop: 80, mobile: 20 },
    { name: 'HC 128', desktop: 1, mobile: 99 },
    { name: 'HC 192', desktop: 18, mobile: 82 },
];

export const devicePerformanceData = [
    { label: 'High End Devices', visits: '53%', orders: '70%', className: 'bg-blue-100' },
    { label: 'Medium End Devices', visits: '43%', orders: '30%', className: 'bg-green-100' },
    { label: 'Low End Devices', visits: '4%', orders: '0%', className: 'bg-amber-100' },
];

export const userIntentData = [
    { label: 'High Intent User', visits: '53%', orders: '70%', className: 'bg-blue-100' },
    { label: 'Medium Intent', visits: '43%', orders: '30%', className: 'bg-green-100' },
    { label: 'Low Intent', visits: '4%', orders: '0%', className: 'bg-amber-100' },
];

export const osVersionData = [
    { name: 'Android~10', visits: 38, events: 46 },
    { name: 'iOS~18.1', visits: 19, events: 16 },
    { name: 'Android~14', visits: 15, events: 3 },
    { name: 'iOS~18.0', visits: 6, events: 4 },
    { name: 'Android~13', visits: 5, events: 1 },
];

export const deviceContributionData = [
    { name: 'Android', visits: 59, otp: 75, conversion: 73 },
    { name: 'iOS', visits: 28, otp: 12, conversion: 13 },
    { name: 'Desktop', visits: 13, otp: 13, conversion: 14 },
];