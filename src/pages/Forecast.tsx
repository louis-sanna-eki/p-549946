import { Layout } from "@/components/layout/Layout";

const Forecast = () => {
  return (
    <Layout>
      <div className="grid gap-4">
        <h1 className="text-2xl font-bold">Forecast</h1>
        <p className="text-muted-foreground">Forecast data and predictions coming soon...</p>
      </div>
    </Layout>
  );
};

export default Forecast;