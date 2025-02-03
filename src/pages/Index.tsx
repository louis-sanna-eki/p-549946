import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="grid gap-6">
        {/* Add your dashboard content here */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-medium">Performance Metrics</h3>
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-medium">Revenue</h3>
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-medium">Growth</h3>
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </div>
          <div className="p-6 bg-card rounded-lg border">
            <h3 className="text-lg font-medium">Analysis</h3>
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;