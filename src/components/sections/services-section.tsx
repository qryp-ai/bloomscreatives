
const services = [
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c35719a6b4fa2ce47ee9_icon-binoc-14.svg",
    title: "Explore",
    description: "We step into your world and want to know everything. About your market, your customer, your brand — but also about obstacles, doubts, and motivations. Only when we truly understand your business can we make smart choices. No standard questionnaire, but sharp conversations that get to the core. This is the starting point.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cb23974af19787cae7a6_icon-compass2-9.svg",
    title: "Strategy",
    description: "Together we determine the route. You bring market knowledge and customer insight, we add direction, communication power, and creative thinking. This creates a clear brand strategy that guides your organization and stands out in a complex market.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3d12b17839048da3d8c4c_icon-merge2-10.svg",
    title: "Concept & Creation",
    description: "Here strategy, brand positioning, and activation merge. We develop concepts that touch people, influence choices, and trigger action. From brand campaigns to content platforms, from social storytelling to direct marketing. No empty creativity, but ideas with purpose. Strong, surprising, and effective — always aligned with your brand story and strategy.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3cf3bf7882ee771324879_icon-draft-11.svg",
    title: "Content & Design",
    description: "We bring the concept to life in content that works, stands out, and sticks. With a visual identity that's perfect down to the last detail, and content that fits the channel and the audience. Web, video, copy, social assets, photography, or motion: everything comes together in one consistent, recognizable brand experience. Creative and thoughtful.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c8aa6af16f02a7d6e6ae_icon-cook-12.svg",
    title: "Production & Realization",
    description: "Where the magic happens. Here we turn ideas into concrete output, from websites to video, from content flows to complete campaigns. Fast, flexible, and with tight project management. We produce in-house or work with trusted specialists from our network. Everything we make fits your strategy and moves people.",
  },
  {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/67e3c43a211df2e37b7f257c_icon-mountains-13.svg",
    title: "Optimization & Growth",
    description: "A brand never stands still. That's why we keep analyzing, learning, and improving. We measure, evaluate, and adjust. What works, we do more of. What can be better, we improve. This way we build sustainable growth together, with the energy and creativity that keep your brand fresh and relevant.",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-background text-foreground py-20 md:py-32 overflow-hidden">
      {/* Map Overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-10"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Grain Overlay */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')`,
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="container relative z-[3]">
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <h2 className="text-4xl md:text-[60px] font-black uppercase font-display leading-none text-foreground/90">
            The route to strong concepts that conquer markets
          </h2>
          <p className="text-body-large mt-6 text-foreground/80 max-w-3xl mx-auto">
            Naturally starts with Blooms Creative. You determine the goal — together we determine the path to it. From strategy to reality. At full speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`flex flex-col items-start gap-5 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <img src={service.icon} alt={`${service.title} icon`} width={70} height={70} />
              <h3 className="text-feature text-foreground/90">{service.title}</h3>
              <p className="text-body-regular text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;