import { Element } from "react-scroll";
import { faq } from "../constants";
import FaqItem from "../components/FaqItem";

const Faq = () => {
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <Element name="faq" className="relative">
        <div className="relative z-2 container py-28">
          <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
              Curiosity didn&rsquo;t kill the cat, it gave it answers.
            </h3>
            <p>You&rsquo;ve got questions, we&rsquo;ve got answers.</p>
          </div>

          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className="faq-glow_before z-2 border-2 border-s2 bg-s1 relative">
          <div className="container flex gap-10 max-lg:block">
            <div
              className="absolute rounded-half -top-10 left-[calc(50%-40px)]
                z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1"
            >
              <img src="/images/faq-logo.svg" className="size-1/2" alt="logo" />
            </div>

            {/* First Half */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index + 1} />
              ))}
            </div>

            {/* Second Half */}
            <div className="relative flex-1 lg:pt-24">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index + 1} />
              ))}
            </div>
          </div>

          <div
            className="faq-line_after absolute left-[calc(50%-1px)] top-0 
            -z-1 h-full w-0.5 bg-s2 max-lg:hidden"
          />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
