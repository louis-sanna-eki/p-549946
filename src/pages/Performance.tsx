import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Performance = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Forecast</h1>
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <ArrowRightLeft className="h-4 w-4" />
              Compare scenarios
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create scenario
            </Button>
          </div>
        </div>

        <Tabs defaultValue="scenarios" className="w-full">
          <TabsList>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="gap-analysis">Gap analysis</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </Layout>
  );
}

export default Performance;