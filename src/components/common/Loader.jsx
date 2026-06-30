import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center py-10">
      <Loader2 className="animate-spin text-blue-600" size={40} />
    </div>
  );
};

export default Loader;
