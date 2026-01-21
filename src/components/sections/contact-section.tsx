import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#44794C] text-[#3A3A3A] pt-40 pb-24 md:pt-48 md:pb-32 overflow-x-clip"
    >
      <div
        className="absolute top-0 left-0 w-full z-0 flex items-end justify-center -translate-y-1/2 md:-translate-y-[74%]"
      >
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679cb26509e276acb0aec280_border_20mountains-7.svg"
          alt="Mountain border"
          width={1920}
          height={220}
          className="w-full max-w-[1920px] h-auto"
        />
      </div>

      <div className="container relative z-10">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679ca21e660dfa9e9b186312_cloud02-6.svg"
          alt="Cloud decoration"
          width={96}
          height={55}
          className="absolute -top-8 md:top-4 left-1/2 md:left-[38%] transform -translate-x-1/2 md:translate-x-0"
        />

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-[90px] md:text-[120px] leading-[0.9] font-black uppercase mb-12">
            Let's build<br />
            something<br />
            bold together
          </h2>
          <p className="text-body-large mb-12">
            The route to strong concepts that conquer markets starts with Blooms Creative. You determine the goal — together we determine the path to it. From strategy to reality. At full speed.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4">
            <a
              href="mailto:hi@bloomscreative.agency"
              className="inline-flex items-center justify-center gap-3 bg-[#E8E4DC] text-[#3A3A3A] rounded-full py-4 px-6 text-button transition-colors hover:bg-opacity-80"
            >
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67e2c6f511774fc0cd162f8f_icon-envelope-24.svg"
                alt="Email icon"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>hi@bloomscreative.agency</span>
            </a>
            <a
              href="tel:(000) 000-0000"
              className="inline-flex items-center justify-center gap-3 bg-[#E8E4DC] text-[#3A3A3A] rounded-full py-4 px-6 text-button transition-colors hover:bg-opacity-80"
            >
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/67d2daa22318aa4a35fbf56c_icon_phone-23.svg"
                alt="Phone icon"
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>(000) 000-0000</span>
            </a>
          </div>

          <div className="mt-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#3A3A3A] text-[#E8E4DC] rounded-full px-12 py-5 text-button font-semibold uppercase tracking-wider hover:scale-105 transition-transform duration-300"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <span>Start your project</span>
            </a>
          </div>
        </div>
      </div>

      {/* Curved divider into footer (not a straight line) */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] z-0 pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 0 C 25 80 75 80 100 0 L 100 100 L 0 100 Z" fill="#01112B" />
        </svg>
      </div>
    </section>
  );
};

export default ContactSection;