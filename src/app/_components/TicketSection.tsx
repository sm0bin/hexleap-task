import TicketSlider from "./TicketSlider";

const TicketSection = () => {
  return (
    <section className="bg-[#F9F8FF] bg-transparent md:dark:bg-[#18282A] pt-16 pb-12 mb-20">
      <h2 className="text-5xl font-bold text-center mb-6">
        Collection Spotlight
      </h2>
      <p className="text-sm text-center mb-12 max-w-screen-md mx-auto">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>

      <TicketSlider />
    </section>
  );
};

export default TicketSection;
