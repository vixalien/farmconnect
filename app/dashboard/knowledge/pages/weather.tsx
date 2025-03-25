import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Weather() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather Information</CardTitle>
        <CardDescription>
          Current and forecasted weather for agricultural planning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Select defaultValue="southern">
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="southern">Southern Province</SelectItem>
              <SelectItem value="eastern">Eastern Province</SelectItem>
              <SelectItem value="northern">Northern Province</SelectItem>
              <SelectItem value="western">Western Province</SelectItem>
              <SelectItem value="kigali">Kigali</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-medium mb-4">Current Weather</h3>
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-2xl font-bold">24°C</div>
                  <div className="text-sm text-muted-foreground">
                    Partly Cloudy
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm">Humidity: 65%</div>
                  <div className="text-sm">Wind: 8 km/h</div>
                </div>
              </div>
              <div className="text-sm">
                <p className="mb-2">
                  <span className="font-medium">Last Updated:</span> Today,
                  10:30 AM
                </p>
                <p>
                  <span className="font-medium">Agricultural Impact:</span> Good
                  conditions for field work. Consider irrigation for newly
                  planted crops.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">5-Day Forecast</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">Tomorrow</div>
                <div>Sunny</div>
                <div>26°C / 18°C</div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">Wednesday</div>
                <div>Partly Cloudy</div>
                <div>25°C / 17°C</div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">Thursday</div>
                <div>Rain Showers</div>
                <div>22°C / 16°C</div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">Friday</div>
                <div>Heavy Rain</div>
                <div>20°C / 15°C</div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="font-medium">Saturday</div>
                <div>Cloudy</div>
                <div>21°C / 16°C</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Weather Alerts</h3>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <div className="font-medium text-yellow-800 mb-2">
              Heavy Rainfall Warning
            </div>
            <p className="text-sm text-yellow-800">
              Heavy rainfall expected on Thursday and Friday. Farmers are
              advised to prepare drainage systems and protect sensitive crops.
              Risk of flooding in low-lying areas.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-medium mb-4">Seasonal Outlook</h3>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm mb-3">
              <span className="font-medium">Next 30 Days:</span> Slightly above
              average rainfall expected for Southern Province. Temperatures will
              remain near seasonal averages.
            </p>
            <p className="text-sm">
              <span className="font-medium">Agricultural Recommendations:</span>{" "}
              Good planting conditions for most crops. Consider delayed planting
              for drought-sensitive varieties. Monitor soil moisture levels
              regularly.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
