import SportsSection from "./_components/SportsSection";
import TicketSection from "./_components/TicketSection";

const Home = () => {
  return (
    <main className="bg-gray-50 dark:bg-[#292B32] p-4 md:px-24">
      <SportsSection />
      <TicketSection />
    </main>
  );
};

export default Home;
