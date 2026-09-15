import { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Generative Visual Production": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
      <circle cx="9" cy="9" r="2"/>
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  ),
  "Video & Podcast Repurposing": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <path d="m22 8-6 4 6 4V8Z"/>
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
    </svg>
  ),
  "Workflow Automation & Pipelines": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <path d="M12 2v4"/>
      <path d="m4.93 4.93 2.83 2.83"/>
      <path d="M2 12h4"/>
      <path d="m4.93 19.07 2.83-2.83"/>
      <path d="M12 22v-4"/>
      <path d="m19.07 19.07-2.83-2.83"/>
      <path d="M22 12h-4"/>
      <path d="m19.07 4.93-2.83 2.83"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  "Digital Avatars & Synthetic Media": (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--sec)] flex-shrink-0">
      <path d="M18 20a6 6 0 0 0-12 0"/>
      <circle cx="12" cy="10" r="4"/>
      <circle cx="12" cy="12" r="10"/>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>("Generative Visual Production");

  const skills: Record<string, string[]> = {
    "Generative Visual Production": [
      "High-fidelity commercial key visuals & launch plates",
      "Multi-modal prompt architectures & aesthetic tokens",
      "Product fidelity preservation & boundary masking",
      "Directional lighting & color grading control",
    ],
    "Video & Podcast Repurposing": [
      "Studio editorial pacing & motivated punch-ins (1.04x–1.28x)",
      "Verbatim color-sampled kinetic typography (zero templates)",
      "Acoustic mastering: -15dB dynamic music ducking & 85Hz HPF",
      "Multi-ratio exports: 16:9 YouTube masters & 9:16 vertical shorts",
    ],
    "Workflow Automation & Pipelines": [
      "Structured prompt-to-production pipeline architecture",
      "Automated verification gates & CLI batch processing",
      "Direct-response variant testing matrices (24–48h turnaround)",
      "Modular creative checklists & standard operating procedures",
    ],
    "Digital Avatars & Synthetic Media": [
      "Brand-aligned photorealistic synthetic video presenters",
      "Neural voiceover alignment & lip-sync integration",
      "Virtual broadcast studio concepts & digital environments",
      "High-velocity corporate explainers & video announcements",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9 w-full max-w-md">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[var(--sec)]"></span>
        <span className="text-xs font-mono uppercase tracking-wider text-[var(--sec)] shiny-sec">
          Core Pillars
        </span>
      </div>
      <h3 className="text-[var(--white)] text-2xl md:text-3xl font-semibold mb-4">
        What I Deliver
      </h3>
      <ul className="space-y-3 text-base">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="w-full bg-[#1414149c] rounded-xl text-left hover:bg-[#1a1a1a] transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-3.5">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between min-w-0">
                  <span className="block truncate text-[var(--white)] text-sm md:text-base font-medium">
                    {category}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`size-5 text-[var(--white-icon)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180 text-white" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[300px] pb-3.5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1.5 text-[var(--white-icon)] text-xs md:text-sm pt-1 border-t border-white/5">
                  {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--sec)] text-xs mt-0.5">•</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
