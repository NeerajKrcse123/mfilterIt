import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

export default function RegionConcentration() {
  const visitMapRef = useRef(null);
  const eventMapRef = useRef(null);

  // Data for regions
  const mapRegions = [
    {
      name: "Maharashtra",
      visitPct: "23%",
      eventPct: "15%",
      center: [73.8567, 18.5204],
      color: "#4B0082",
    },
    {
      name: "UP",
      visitPct: "11%",
      eventPct: "13%",
      center: [80.9462, 26.8467],
      color: "#000080",
    },
    {
      name: "Delhi",
      visitPct: "9%",
      eventPct: "9%",
      center: [77.1025, 28.7041],
      color: "#87CEFA",
    },
    {
      name: "WB",
      visitPct: "6%",
      eventPct: "6%",
      center: [87.855, 22.9868],
      color: "#A9A9A9",
    },
    {
      name: "Karnataka",
      visitPct: "6%",
      eventPct: "6%",
      center: [75.7139, 15.3173],
      color: "#8B4513",
    },
    {
      name: "Gujarat",
      visitPct: "5%",
      eventPct: "6%",
      center: [72.5714, 23.0225],
      color: "#FFA500",
    },
    {
      name: "Rajasthan",
      visitPct: "5%",
      eventPct: "6%",
      center: [74.2179, 27.0238],
      color: "#87CEFA",
    },
    {
      name: "MP",
      visitPct: "5%",
      eventPct: "6%",
      center: [77.4126, 23.2599],
      color: "#FF00FF",
    },
  ];

  // GeoJSON for India
  const indiaGeoData = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: { name: "India" },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [77.837451, 35.49401],
              [78.912269, 34.321936],
              [78.811086, 33.506198],
              [79.208892, 32.994395],
              [79.176129, 32.48378],
              [78.458446, 32.618164],
              [78.738894, 31.515906],
              [79.721367, 30.882715],
              [81.111256, 30.183481],
              [80.476721, 29.729865],
              [80.088425, 28.79447],
              [81.057203, 28.416095],
              [81.999987, 27.925479],
              [83.304249, 27.364506],
              [84.675018, 27.234901],
              [85.251779, 26.726198],
              [86.024393, 26.630985],
              [87.227472, 26.397898],
              [88.060238, 26.414615],
              [88.174804, 26.810405],
              [88.043133, 27.445819],
              [88.120441, 27.876542],
              [88.730326, 28.086865],
              [88.814248, 27.299316],
              [88.835643, 27.098966],
              [89.744528, 26.719403],
              [90.373275, 26.875724],
              [91.217513, 26.808648],
              [92.033484, 26.83831],
              [92.103712, 27.452614],
              [91.696657, 27.771742],
              [92.503119, 27.896876],
              [93.413348, 28.640629],
              [94.56599, 29.277438],
              [95.404802, 29.031717],
              [96.117679, 29.452802],
              [96.586591, 28.83098],
              [96.248833, 28.411031],
              [97.327114, 28.261583],
              [97.402561, 27.882536],
              [97.051989, 27.699059],
              [97.133999, 27.083774],
              [96.419366, 27.264589],
              [95.124768, 26.573572],
              [95.155153, 26.001307],
              [94.603249, 25.162495],
              [94.552658, 24.675238],
              [94.106742, 23.850741],
              [93.325188, 24.078556],
              [93.286327, 23.043658],
              [93.060294, 22.703111],
              [93.166128, 22.27846],
              [92.672721, 22.041239],
              [92.146035, 23.627499],
              [91.869928, 23.624346],
              [91.706475, 22.985264],
              [91.158963, 23.503527],
              [91.46773, 24.072639],
              [91.915093, 24.130414],
              [92.376202, 24.976693],
              [91.799596, 25.147432],
              [90.872211, 25.132601],
              [89.920693, 25.26975],
              [89.832481, 25.965082],
              [89.355094, 26.014407],
              [88.563049, 26.446526],
              [88.209789, 25.768066],
              [88.931554, 25.238692],
              [88.306373, 24.866079],
              [88.084422, 24.501657],
              [88.69994, 24.233715],
              [88.52977, 23.631142],
              [88.876312, 22.879146],
              [89.031961, 22.055708],
              [88.888766, 21.690588],
              [88.208497, 21.703172],
              [86.975704, 21.495562],
              [87.033169, 20.743308],
              [86.499351, 20.151638],
              [85.060266, 19.478579],
              [83.941006, 18.30201],
              [83.189217, 17.671221],
              [82.192792, 17.016636],
              [82.191242, 16.556664],
              [81.692719, 16.310219],
              [80.791999, 15.951972],
              [80.324896, 15.899185],
              [80.025069, 15.136415],
              [80.233274, 13.835771],
              [80.286294, 13.006261],
              [79.862547, 12.056215],
              [79.857999, 10.357275],
              [79.340512, 10.308854],
              [78.885345, 9.546136],
              [79.18972, 9.216544],
              [78.277941, 8.933047],
              [77.941165, 8.252959],
              [77.539898, 7.965535],
              [76.592979, 8.899276],
              [76.130061, 10.29963],
              [75.746467, 11.308251],
              [75.396101, 11.781245],
              [74.864816, 12.741936],
              [74.616717, 13.992583],
              [74.443859, 14.617222],
              [73.534199, 15.990652],
              [73.119909, 17.92857],
              [72.820909, 19.208234],
              [72.824475, 20.419503],
              [72.630533, 21.356009],
              [71.175273, 20.757441],
              [70.470459, 20.877331],
              [69.16413, 22.089298],
              [69.644928, 22.450775],
              [69.349597, 22.84318],
              [68.176645, 23.691965],
              [68.842599, 24.359134],
              [71.04324, 24.356524],
              [70.844699, 25.215102],
              [70.282873, 25.722229],
              [70.168927, 26.491872],
              [69.514393, 26.940966],
              [70.616496, 27.989196],
              [71.777666, 27.91318],
              [72.823752, 28.961592],
              [73.450638, 29.976413],
              [74.42138, 30.979815],
              [74.405929, 31.692639],
              [75.258642, 32.271105],
              [74.451559, 32.7649],
              [74.104294, 33.441473],
              [73.749948, 34.317699],
              [74.240203, 34.748887],
              [75.757061, 34.504923],
              [76.871722, 34.653544],
              [77.837451, 35.49401],
            ],
          ],
        },
      },
    ],
  };

  useEffect(() => {
    // Function to draw the map
    const drawMap = (mapRef, percentageType) => {
      if (!mapRef.current) return;

      const width = mapRef.current.offsetWidth;
      const height = 500;

      // Clear previous SVG
      d3.select(mapRef.current).select("svg").remove();

      // Create SVG
      const svg = d3
        .select(mapRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

      // Define projection
      const projection = d3
        .geoMercator()
        .center([82, 23])
        .scale(width * 1.3)
        .translate([width / 2, height / 2]);

      // Create path generator
      const path = d3.geoPath().projection(projection);

      // Draw India map
      svg
        .append("g")
        .selectAll("path")
        .data(indiaGeoData.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#f0f0f0")
        .attr("stroke", "#d0d0d0")
        .attr("stroke-width", 1);

      // Add regions
      mapRegions.forEach((region) => {
        const [lon, lat] = region.center;
        const [x, y] = projection([lon, lat]);

        // Calculate radius based on percentage
        const pct =
          percentageType === "visit"
            ? parseInt(region.visitPct.replace("%", ""))
            : parseInt(region.eventPct.replace("%", ""));

        const radius = Math.max(10, pct * 2);

        // Add circle for region
        svg
          .append("circle")
          .attr("cx", x)
          .attr("cy", y)
          .attr("r", radius)
          .attr("fill", region.color)
          .attr("opacity", 0.8);

        // Add label background
        svg
          .append("rect")
          .attr("x", x - 50)
          .attr("y", y - 10)
          .attr("width", 100)
          .attr("height", 20)
          .attr("fill", "#FFFF00")
          .attr("opacity", 0.8)
          .attr("rx", 5);

        // Add label
        svg
          .append("text")
          .attr("x", x)
          .attr("y", y)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-size", "12px")
          .attr("font-weight", "bold")
          .text(
            `${region.name}: ${
              percentageType === "visit" ? region.visitPct : region.eventPct
            }`
          );
      });

      // Add legend
      const legendHeight = 100;
      const legendWidth = 20;
      const legendX = width - 50;
      const legendY = 150;

      // Create gradient
      const gradient = svg
        .append("defs")
        .append("linearGradient")
        .attr("id", `${percentageType}Gradient`)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "0%")
        .attr("y2", "100%");

      gradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#4B0082");

      gradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#E6E6FA");

      // Draw legend rectangle
      svg
        .append("rect")
        .attr("x", legendX)
        .attr("y", legendY)
        .attr("width", legendWidth)
        .attr("height", legendHeight)
        .attr("fill", `url(#${percentageType}Gradient)`);

      // Add legend text
      svg
        .append("text")
        .attr("x", legendX + legendWidth + 5)
        .attr("y", legendY + 5)
        .attr("font-size", "12px")
        .attr("text-anchor", "start")
        .text(percentageType === "visit" ? "23%" : "15%");

      svg
        .append("text")
        .attr("x", legendX + legendWidth + 5)
        .attr("y", legendY + legendHeight)
        .attr("font-size", "12px")
        .attr("text-anchor", "start")
        .text(percentageType === "visit" ? "5%" : "6%");

      svg
        .append("text")
        .attr("x", legendX + legendWidth / 2)
        .attr("y", legendY - 10)
        .attr("font-size", "12px")
        .attr("text-anchor", "middle")
        .text(percentageType === "visit" ? "Visit%" : "Event%");

      // Add attribution
      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height - 20)
        .attr("font-size", "10px")
        .attr("text-anchor", "middle")
        .attr("class", "text-gray-500");

      svg
        .append("text")
        .attr("x", width / 2)
        .attr("y", height - 5)
        .attr("font-size", "10px")
        .attr("text-anchor", "middle")
        .attr("class", "text-gray-500");
    };

    // Draw both maps
    drawMap(visitMapRef, "visit");
    drawMap(eventMapRef, "event");

    // Redraw on window resize
    const handleResize = () => {
      drawMap(visitMapRef, "visit");
      drawMap(eventMapRef, "event");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full  mx-auto p-4">
      <div className="text-center font-bold text-xl mb-4">
        Region Wise Concentration %
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Visit Concentration Map */}
        <Card className="border shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-lg font-medium text-gray-700">
              Visit Concentration%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div ref={visitMapRef} className="w-full h-full" />
          </CardContent>
        </Card>

        {/* Event Concentration Map */}
        <Card className="border shadow">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-lg font-medium text-gray-700">
              Event Concentration%
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div ref={eventMapRef} className="w-full h-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
