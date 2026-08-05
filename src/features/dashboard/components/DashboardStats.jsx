import { useNavigate } from "react-router-dom";

import StatsCard from "./StatsCard";
import { getDashboardCards } from "../config/dashboardCards";

const DashboardStats = ({ summary }) => {
  const navigate = useNavigate();

  const cards = getDashboardCards(summary, navigate);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {cards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default DashboardStats;
