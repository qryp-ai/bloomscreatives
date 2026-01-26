import { Instagram, Linkedin } from 'lucide-react';
import BloomsLogo from '@/assets/BLOOMS CREATIVES LOGO PNG HIGH.png';

const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#01112B] text-foreground px-6 md:px-20 pt-20 md:pt-40 pb-0"
      style={{
        backgroundImage: `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/images/6799fa7534106d08fd817120_grain2-22.png')`,
        backgroundPosition: '0px 0px',
        backgroundSize: 'auto',
      }}
    >
      {/* Low-opacity topo lines overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          opacity: 0.06,
          backgroundImage:
            `url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/00dc00fc-ebbf-4980-a987-9ac623d74852-basecamp-agency/assets/svgs/679a4b5fc8a7414f3b4ae38c_LINES-3.svg')`,
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-16 border-b border-white/10">
          {/* Left Column: Brand Info */}
          <div className="flex flex-col items-start gap-6 max-w-sm">
            <img
              src={BloomsLogo}
              alt="Blooms Creative Logo"
              className="w-48 h-auto object-contain"
            />
            <div className="space-y-4">
              <p className="text-foreground text-lg font-body leading-relaxed">
                Where creativity meets performance.
              </p>
              <p className="text-sm font-body text-foreground/70">
                Calicut, Kerala, India
              </p>
            </div>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <h3 className="text-foreground font-display font-bold text-xl mb-2">Get in touch</h3>
            <div className="flex flex-col items-start md:items-end gap-4 text-base font-body">
              <a href="mailto:bloomscreativesads@gmail.com" className="flex items-center gap-3 hover:text-[#8BED02] transition-colors group">
                <span className="text-xl group-hover:scale-110 transition-transform">📧</span>
                <span>bloomscreativesads@gmail.com</span>
              </a>
              <a href="tel:8086523566" className="flex items-center gap-3 hover:text-[#8BED02] transition-colors group">
                <span className="text-xl group-hover:scale-110 transition-transform">📞</span>
                <span>+91 8086523566</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 py-8">
          <div className="text-sm font-body text-[#727272]">
            © 2025 Blooms Creative. All rights reserved.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <a href="#" className="text-sm font-body text-foreground/80 hover:text-[#8BED02] transition-colors">
              General Terms and Conditions
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-[#8BED02] hover:border-[#8BED02] hover:text-[#01112B] group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/blooms.creatives?igsh=MWdqZ3lxZHB5bDNoYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:bg-[#8BED02] hover:border-[#8BED02] hover:text-[#01112B] group"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;