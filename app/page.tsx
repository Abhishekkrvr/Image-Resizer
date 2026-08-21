import Tool from "@/components/Tool";
import HistoryPanel from "@/components/HistoryPanel";

const EXAMS = [
  {
    name: "SSC",
    subtitle: "CGL · CHSL · GD · MTS · CPO",
    icon: "S",
  },
  {
    name: "NTA",
    subtitle: "NEET · JEE Main · CUET",
    icon: "N",
  },
  {
    name: "UPSC",
    subtitle: "Civil Services · NDA · CDS",
    icon: "U",
  },
  {
    name: "Banking",
    subtitle: "IBPS · SBI · RBI",
    icon: "B",
  },
  {
    name: "Railway",
    subtitle: "RRB · NTPC · Group D",
    icon: "R",
  },
  {
    name: "State Exams",
    subtitle: "PSC · Police · State forms",
    icon: "S",
  },
];

const REQUIREMENTS = [
  {
    exam: "SSC CGL",
    type: "Signature",
    requirement: "10–20 KB · JPG/JPEG",
  },
  {
    exam: "NEET UG",
    type: "Photograph",
    requirement: "10–200 KB · JPG/JPEG",
  },
  {
    exam: "CUET UG",
    type: "Photo + Signature",
    requirement: "10–200 KB · JPG/JPEG",
  },
  {
    exam: "IBPS",
    type: "Application files",
    requirement: "20–50 KB · JPEG",
  },
];

const FAQS = [
  [
    "Will Real Image Resizer tell me if my file is ready?",
    "Yes. Select the exam requirement and Real Image Resizer checks the target KB and pixel dimensions. It also warns when an application needs live photo capture, which an image compressor cannot replace.",
  ],
  [
    "Which Indian forms does it support?",
    "It focuses on high-use student and competitive-exam workflows including SSC, UPSC, NEET, JEE Main, CUET, IBPS and Railway-style applications.",
  ],
  [
    "Is my photo uploaded to a server?",
    "No. Image processing happens directly in your browser. Your photo is not sent to a Real Image Resizer server.",
  ],
  [
    "Can I use an iPhone HEIC photo?",
    "Yes. HEIC and HEIF photos are accepted and converted locally before processing.",
  ],
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-[#111]"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: `
          linear-gradient(
            rgba(40, 60, 90, 0.075) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(40, 60, 90, 0.075) 1px,
            transparent 1px
          )
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      {/* Top glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          -top-[220px]
          left-1/2
          -translate-x-1/2
          w-[650px]
          h-[500px]
          rounded-full
          bg-blue-200/30
          blur-[140px]
        "
      />

      {/* Left glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          top-[25%]
          -left-[280px]
          w-[520px]
          h-[520px]
          rounded-full
          bg-blue-100/30
          blur-[130px]
        "
      />

      {/* Right glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          top-[55%]
          -right-[280px]
          w-[520px]
          h-[520px]
          rounded-full
          bg-indigo-100/30
          blur-[130px]
        "
      />

      {/* Blurred grid patch on right */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          top-[28%]
          right-[-120px]
          w-[500px]
          h-[500px]
          opacity-40
          blur-[1px]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40, 60, 90, 0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40, 60, 90, 0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, transparent 72%)",
        }}
      />

      {/* Blurred grid patch on left */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          top-[65%]
          left-[-180px]
          w-[450px]
          h-[450px]
          opacity-30
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(40, 60, 90, 0.09) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(40, 60, 90, 0.09) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          z-0
          bottom-0
          left-0
          right-0
          h-[420px]
          bg-gradient-to-t
          from-[#fafafa]
          via-[#fafafa]/70
          to-transparent
        "
      />

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="relative z-20 sticky top-0 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl">
        <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">

          <a
            href="/"
            className="flex items-center gap-2.5 shrink-0"
          >
            <img
              src="/logo.jpg"
              alt="Real Image Resizer"
              className="w-8 h-8 rounded-lg object-cover"
            />

            <span className="font-display font-extrabold text-[14px] sm:text-lg tracking-tight whitespace-nowrap">
              Real Image
              <span className="text-accent"> Resizer</span>
            </span>
          </a>

          <div className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm">
            <a
              href="#tools"
              className="font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="sm:hidden">Tools</span>
              <span className="hidden sm:inline">Student Tools</span>
            </a>

            <a
              href="#history"
              className="font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              History
            </a>

            <a
              href="#faq"
              className="font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative z-10 px-4 sm:px-6 pt-12 sm:pt-20 pb-12">

        <div className="max-w-[900px] mx-auto text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-accent/15
              bg-white/70
              backdrop-blur-md
              px-3.5
              py-1.5
              text-[10px]
              sm:text-xs
              font-bold
              text-accent
              shadow-sm
            "
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            INDIA-FIRST · STUDENT FORMS
          </div>

          {/* Heading */}
          <h1
            className="
              font-display
              font-extrabold
              tracking-[-0.045em]
              text-[clamp(38px,7vw,68px)]
              leading-[0.96]
              max-w-[850px]
              mx-auto
              mt-6
            "
          >
            Make every image
            <br />
            <span className="text-accent">
              upload-ready.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              max-w-[650px]
              mx-auto
              mt-5
              text-[15px]
              sm:text-[17px]
              leading-relaxed
              opacity-55
            "
          >
            Photo, signature aur documents ko SSC, NEET, JEE,
            CUET, UPSC, IBPS aur government forms ke required{" "}
            <span className="font-semibold opacity-100">
              KB, pixels & format
            </span>{" "}
            mein ready karo.
          </p>

          {/* Trust */}
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mt-6 text-[10px] sm:text-xs opacity-45">
            <span>✓ No signup</span>
            <span>✓ No watermark</span>
            <span>✓ Browser processing</span>
            <span>✓ HEIC support</span>
          </div>
        </div>

        {/* =====================================================
            TOOL
        ===================================================== */}

        <div
          id="tools"
          className="
            relative
            max-w-[820px]
            mx-auto
            mt-10
            sm:mt-12
          "
        >
          <Tool />
        </div>

        <p className="text-center text-[10px] sm:text-xs opacity-30 mt-5">
          Your files stay on your device · No account required
        </p>
      </section>

      {/* =====================================================
          HISTORY
      ===================================================== */}

      <section
        id="history"
        className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 pt-8"
      >
        <HistoryPanel />
      </section>

      {/* =====================================================
          POPULAR EXAMS
      ===================================================== */}

      <section className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 py-20 sm:py-24">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">

          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] text-accent uppercase">
              Made for Indian students
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mt-1">
              Popular exam forms
            </h2>

            <p className="text-sm opacity-50 mt-2 max-w-[620px]">
              Common exams jinke forms mein students ko photo,
              signature aur documents resize karne padte hain.
            </p>
          </div>

          <span className="text-xs opacity-35">
            More requirements coming
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">

          {EXAMS.map((exam) => (
            <div
              key={exam.name}
              className="
                group
                rounded-[22px]
                border
                border-black/[0.08]
                bg-white/80
                backdrop-blur-md
                p-5
                sm:p-6
                transition-all
                duration-200
                hover:border-black/[0.14]
                hover:bg-white/90
                hover:shadow-[0_14px_40px_rgba(0,0,0,0.045)]
              "
            >
              <div className="flex items-start justify-between">

                <div
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-[#f3f5f8]
                    flex
                    items-center
                    justify-center
                    font-display
                    font-extrabold
                    text-lg
                    transition-colors
                    group-hover:bg-accentSoft
                    group-hover:text-accent
                  "
                >
                  {exam.icon}
                </div>

                <span className="text-[9px] font-bold tracking-[0.12em] opacity-25 uppercase">
                  Supported
                </span>
              </div>

              <div className="mt-7">
                <p className="font-display font-bold text-lg sm:text-xl">
                  {exam.name}
                </p>

                <p className="text-xs sm:text-sm opacity-50 mt-1.5 leading-relaxed">
                  {exam.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[10px] opacity-30 mt-5">
          These cards are informational. Upload your image above to use the tool.
        </p>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-6 pb-20">

        <div className="rounded-[28px] bg-ink text-white overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

          <div className="p-7 sm:p-11">

            <div className="max-w-[650px]">

              <p className="text-accent font-bold text-[10px] sm:text-xs tracking-[0.18em]">
                SIMPLE BY DESIGN
              </p>

              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-2">
                Don't just compress.
                <br />
                <span className="opacity-50">
                  Make it application-ready.
                </span>
              </h2>

              <p className="text-sm opacity-45 mt-4 max-w-[580px] leading-relaxed">
                Correct size, dimensions aur format ko ek hi place par
                handle karo. No confusing tools. No unnecessary settings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-5 mt-10">

              {[
                [
                  "01",
                  "Upload",
                  "Photo, signature ya document upload karo.",
                ],
                [
                  "02",
                  "Choose",
                  "Apna exam ya requirement choose karo.",
                ],
                [
                  "03",
                  "Optimize",
                  "KB, pixels aur format automatically set karo.",
                ],
                [
                  "04",
                  "Download",
                  "Check karo aur ready file download karo.",
                ],
              ].map(([number, title, description]) => (
                <div key={number}>

                  <span className="text-accent font-display font-bold text-sm">
                    {number}
                  </span>

                  <p className="font-semibold mt-2">
                    {title}
                  </p>

                  <p className="text-xs sm:text-sm opacity-45 mt-1.5 leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          REQUIREMENTS
      ===================================================== */}

      <section className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-10 sm:py-16">

        <div className="text-center max-w-[650px] mx-auto">

          <p className="text-[10px] font-bold tracking-[0.18em] text-accent">
            REAL-WORLD REQUIREMENTS
          </p>

          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2">
            Common Indian form requirements
          </h2>

          <p className="text-sm opacity-50 mt-3 leading-relaxed">
            Requirements change ho sakti hain. Final submission se pehle
            current official notification zaroor verify karein.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-black/[0.08] overflow-hidden bg-white/85 backdrop-blur-md">

          {REQUIREMENTS.map((item, index) => (
            <div
              key={item.exam}
              className={`
                p-4
                sm:p-5
                flex
                items-center
                justify-between
                gap-4
                ${index !== REQUIREMENTS.length - 1
                  ? "border-b border-black/[0.06]"
                  : ""
                }
              `}
            >
              <div className="min-w-0">

                <p className="font-bold text-sm">
                  {item.exam}
                </p>

                <p className="text-xs text-accent font-semibold mt-1">
                  {item.type}
                </p>

                <p className="text-xs sm:text-sm opacity-50 mt-1">
                  {item.requirement}
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-accentSoft text-accent px-2.5 py-1 text-[9px] font-bold">
                CHECK
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          PRIVACY
      ===================================================== */}

      <section className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6 py-12">

        <div
          className="
            rounded-3xl
            border
            border-black/[0.08]
            bg-white/85
            backdrop-blur-md
            p-6
            sm:p-9
            flex
            flex-col
            sm:flex-row
            gap-5
            sm:items-center
          "
        >
          <div className="w-12 h-12 rounded-2xl bg-accentSoft flex items-center justify-center text-xl shrink-0">
            🔒
          </div>

          <div>
            <h3 className="font-display font-bold text-lg">
              Your photos stay private.
            </h3>

            <p className="text-sm opacity-50 mt-1 leading-relaxed max-w-[700px]">
              Processing happens directly in your browser. Your personal
              photos and signatures don't need to be uploaded to our server.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        id="faq"
        className="relative z-10 max-w-[760px] mx-auto px-4 sm:px-6 py-16 sm:py-20"
      >

        <div className="text-center mb-8">

          <p className="text-[10px] font-bold tracking-[0.18em] text-accent">
            FAQ
          </p>

          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mt-2">
            Questions, answered.
          </h2>
        </div>

        <div className="divide-y divide-black/[0.1] border-y border-black/[0.1] bg-white/60 backdrop-blur-sm rounded-2xl p-7 w-full ">

          {FAQS.map(([question, answer]) => (
            <details
              key={question}
              className="group py-5"
            >
              <summary
                className="
                  list-none
                  cursor-pointer
                  flex
                  items-center
                  justify-between
                  gap-5
                  font-semibold
                  text-sm
                  sm:text-base
                "
              >
                <span>
                  {question}
                </span>

                <span
                  className="
                    shrink-0
                    w-7
                    h-7
                    rounded-full
                    bg-black/[0.06]
                    flex
                    items-center
                    justify-center
                    text-lg
                    font-normal
                    group-open:rotate-45
                    transition-transform
                  "
                >
                  +
                </span>
              </summary>

              <p className="text-sm opacity-50 leading-relaxed mt-3 pr-8">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="relative z-10 border-t border-black/[0.07] bg-white/65 backdrop-blur-xl">

        <div className="mx-auto max-w-[1080px] px-4 py-12 sm:px-6 sm:py-14">

          {/* Top footer */}
          <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">

            {/* Brand */}
            <div className="max-w-[360px]">

              <a
                href="/"
                className="inline-flex items-center gap-2.5"
              >
                <img
                  src="/logo.jpg"
                  alt="Real Image Resizer"
                  className="h-9 w-9 rounded-xl object-cover shadow-sm"
                />

                <span className="font-display text-base font-extrabold tracking-tight sm:text-lg">
                  Real Image
                  <span className="text-accent"> Resizer</span>
                </span>
              </a>

              <p className="mt-4 text-sm leading-relaxed text-black/50">
                Simple image preparation for Indian students, exams and
                application forms. Resize, compress and prepare your files
                without unnecessary steps.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-black/[0.07] bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-black/45">
                  No signup
                </span>

                <span className="rounded-full border border-black/[0.07] bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-black/45">
                  No watermark
                </span>

                <span className="rounded-full border border-black/[0.07] bg-white/70 px-2.5 py-1 text-[10px] font-semibold text-black/45">
                  Browser processing
                </span>
              </div>

            </div>


            {/* Navigation */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                  Product
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm">

                  <a
                    href="#tools"
                    className="text-black/55 transition-colors hover:text-black"
                  >
                    Image Tools
                  </a>

                  <a
                    href="#history"
                    className="text-black/55 transition-colors hover:text-black"
                  >
                    History
                  </a>

                  <a
                    href="#faq"
                    className="text-black/55 transition-colors hover:text-black"
                  >
                    FAQ
                  </a>

                </div>
              </div>


              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/35">
                  Supported
                </p>

                <div className="mt-4 flex flex-col gap-3 text-sm">

                  <span className="text-black/55">
                    SSC & NTA
                  </span>

                  <span className="text-black/55">
                    UPSC
                  </span>

                  <span className="text-black/55">
                    IBPS & Banking
                  </span>

                  <span className="text-black/55">
                    Railway Exams
                  </span>

                </div>
              </div>

            </div>

          </div>


          {/* Divider */}
          <div className="my-9 h-px bg-black/[0.06]" />


          {/* Bottom footer */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[10px] leading-relaxed text-black/35 sm:text-xs">
              © {new Date().getFullYear()} Real Image Resizer. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-black/35 sm:text-xs">

              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Browser-based processing
              </span>

              <span>
                India-first image preparation tool
              </span>

            </div>

          </div>


          {/* Disclaimer */}
          <div className="mt-6 rounded-xl border border-black/[0.06] bg-black/[0.018] px-4 py-3">

            <p className="text-[9px] leading-relaxed text-black/35 sm:text-[10px]">
              <span className="font-semibold text-black/45">
                Important:
              </span>{" "}
              Application requirements can change. Always verify the latest
              photo, signature, file-size and dimension requirements from the
              official examination or application notification before submission.
            </p>

          </div>

        </div>

      </footer>
    </main>
  );
}
