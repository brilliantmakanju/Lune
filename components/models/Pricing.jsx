import Card from "./PricingCard";

export default function Pricing() {
  return (
    <section className="flex flex-col justify-center items-center py-20 ">
      <h3 className="text-[25px] px-[5px] font-bold font-serif text-[#A30000] tracking-wide h-[2em] md:h-[3em] leading-tight text-center w-[80%] md:text-[40px] md:w-[60%] lg:text-[55px] lg:w-[50%] md:gap-10 ">
        Choose the Plan {"That's"} Right for You
      </h3>
      <Card />
    </section>
  );
}
