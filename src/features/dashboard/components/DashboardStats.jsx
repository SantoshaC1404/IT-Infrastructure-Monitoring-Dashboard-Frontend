import { getDashboardCards } from "../config/dashboardCards";
import StatsCard from "./StatsCard";

const DashboardStats = ({ summary }) => {
  const cards = getDashboardCards(summary);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {cards.map((card) => (
        <StatsCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default DashboardStats;
