import Button from "./components/common/Button";
import Card from "./components/common/Card";
import StatusBadge from "./components/common/StatusBadge";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Card className="max-w-md">
        <h2 className="text-2xl font-bold mb-4">IT Monitoring Dashboard</h2>

        <StatusBadge status="online" />

        <div className="mt-6">
          <Button fullWidth>Login</Button>
        </div>
      </Card>
    </div>
  );
}

export default App;
