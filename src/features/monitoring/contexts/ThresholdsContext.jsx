import { createContext, useContext, useEffect, useState } from "react";
import monitoringService from "../services/monitoringService";

const ThresholdsContext = createContext({
  cpu: 95,
  memory: 90,
  disk: 90,
});

export const ThresholdsProvider = ({ children }) => {
  const [thresholds, setThresholds] = useState({ cpu: 95, memory: 90, disk: 90 });

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const fetched = await monitoringService.getThresholds();
        if (mounted && fetched) setThresholds(fetched);
      } catch (e) {
        // keep defaults
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ThresholdsContext.Provider value={thresholds}>
      {children}
    </ThresholdsContext.Provider>
  );
};

export const useThresholds = () => useContext(ThresholdsContext);

export default ThresholdsContext;
