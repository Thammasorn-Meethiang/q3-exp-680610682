import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
export function DashboardTabs() {
  return (
    <div className="w-full">
      <Tabs defaultValue="Overview" className="w-[500px]">
  <TabsList>
    <TabsTrigger value="Overview">Overview</TabsTrigger>
    <TabsTrigger value="By Category">By Category</TabsTrigger>
  </TabsList>
  <TabsContent value="Overview"></TabsContent>
  <TabsContent value="By Category"></TabsContent>
  </Tabs>
    </div>
  );
}
