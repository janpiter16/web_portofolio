export function CosmicBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Twinkling Starfield Layer 1 */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        className="cosmic-stars-slow absolute inset-0 h-full w-full object-cover opacity-75"
      >
        <circle cx="110" cy="88" r="1.5" className="fill-foreground" />
        <circle cx="280" cy="160" r="1.2" className="fill-sky" />
        <circle cx="460" cy="72" r="1.8" className="fill-foreground" />
        <circle cx="670" cy="140" r="1.2" className="fill-indigo-accent" />
        <circle cx="890" cy="64" r="1.6" className="fill-foreground" />
        <circle cx="1080" cy="190" r="1.4" className="fill-sky" />
        <circle cx="1310" cy="95" r="1.8" className="fill-foreground" />
        <circle cx="165" cy="340" r="1.3" className="fill-sky" />
        <circle cx="390" cy="290" r="1.5" className="fill-foreground" />
        <circle cx="580" cy="380" r="1.2" className="fill-foreground" />
        <circle cx="830" cy="310" r="1.7" className="fill-sky" />
        <circle cx="1190" cy="350" r="1.3" className="fill-indigo-accent" />
        <circle cx="1380" cy="280" r="1.5" className="fill-foreground" />
        <circle cx="95" cy="590" r="1.6" className="fill-foreground" />
        <circle cx="310" cy="520" r="1.2" className="fill-indigo-accent" />
        <circle cx="540" cy="640" r="1.7" className="fill-sky" />
        <circle cx="760" cy="540" r="1.3" className="fill-foreground" />
        <circle cx="1020" cy="610" r="1.6" className="fill-foreground" />
        <circle cx="1260" cy="530" r="1.4" className="fill-sky" />
        <circle cx="210" cy="780" r="1.5" className="fill-sky" />
        <circle cx="490" cy="820" r="1.3" className="fill-foreground" />
        <circle cx="860" cy="790" r="1.7" className="fill-indigo-accent" />
        <circle cx="1150" cy="810" r="1.4" className="fill-foreground" />
        <circle cx="1350" cy="740" r="1.6" className="fill-sky" />
      </svg>

      {/* Twinkling Starfield Layer 2 (Offset Phase) */}
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        className="cosmic-stars-fast absolute inset-0 h-full w-full object-cover opacity-65"
      >
        <circle cx="70" cy="210" r="1.4" className="fill-sky" />
        <circle cx="230" cy="60" r="1.8" className="fill-foreground" />
        <circle cx="520" cy="195" r="1.3" className="fill-sky" />
        <circle cx="740" cy="85" r="1.9" className="fill-foreground" />
        <circle cx="970" cy="145" r="1.3" className="fill-indigo-accent" />
        <circle cx="1230" cy="70" r="1.6" className="fill-sky" />
        <circle cx="1390" cy="180" r="1.4" className="fill-foreground" />
        <circle cx="130" cy="460" r="1.7" className="fill-indigo-accent" />
        <circle cx="440" cy="430" r="1.3" className="fill-sky" />
        <circle cx="690" cy="460" r="1.6" className="fill-foreground" />
        <circle cx="940" cy="420" r="1.4" className="fill-sky" />
        <circle cx="1110" cy="480" r="1.8" className="fill-foreground" />
        <circle cx="1320" cy="430" r="1.2" className="fill-sky" />
        <circle cx="180" cy="680" r="1.5" className="fill-foreground" />
        <circle cx="410" cy="710" r="1.7" className="fill-sky" />
        <circle cx="640" cy="740" r="1.3" className="fill-indigo-accent" />
        <circle cx="910" cy="680" r="1.8" className="fill-foreground" />
        <circle cx="1090" cy="720" r="1.4" className="fill-sky" />
        <circle cx="1290" cy="660" r="1.6" className="fill-indigo-accent" />
      </svg>

      {/* Shooting Stars / Meteors */}
      <div className="cosmic-meteor-one absolute top-16 left-1/3 h-px w-28 rounded-full bg-gradient-to-r from-transparent via-sky to-white opacity-0" />
      <div className="cosmic-meteor-two absolute top-1/3 right-1/4 h-px w-36 rounded-full bg-gradient-to-r from-transparent via-indigo-accent to-white opacity-0" />
      <div className="cosmic-meteor-three absolute bottom-1/3 left-1/4 h-px w-24 rounded-full bg-gradient-to-r from-transparent via-sky to-white opacity-0" />

      {/* Space Object 1: Floating Ringed Planet (Top Right) */}
      <div className="cosmic-planet-float absolute top-24 right-8 opacity-35 sm:right-16">
        <svg
          viewBox="0 0 180 180"
          className="h-28 w-28 sm:h-40 sm:w-40"
          fill="none"
        >
          {/* Back Orbital Ring */}
          <ellipse
            cx="90"
            cy="90"
            rx="78"
            ry="22"
            transform="rotate(-22 90 90)"
            className="stroke-sky/40"
            strokeWidth="2.5"
            strokeDasharray="6 4"
          />
          {/* Planet Sphere */}
          <circle
            cx="90"
            cy="90"
            r="38"
            className="fill-primary/30 stroke-sky/50"
            strokeWidth="1.5"
          />
          <circle
            cx="82"
            cy="80"
            r="26"
            className="fill-sky/15"
          />
          {/* Front Orbital Ring */}
          <ellipse
            cx="90"
            cy="90"
            rx="66"
            ry="16"
            transform="rotate(-22 90 90)"
            className="stroke-indigo-accent/60"
            strokeWidth="1.8"
          />
          {/* Orbiting Moon */}
          <circle cx="154" cy="64" r="4" className="fill-sky" />
        </svg>
      </div>

      {/* Space Object 2: Drifting Exoplanet & Satellite Orbit (Bottom Left) */}
      <div className="cosmic-planet-reverse absolute bottom-20 left-6 opacity-30 sm:left-14">
        <svg
          viewBox="0 0 160 160"
          className="h-24 w-24 sm:h-32 sm:w-32"
          fill="none"
        >
          <circle
            cx="80"
            cy="80"
            r="58"
            className="stroke-primary/35"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <circle
            cx="80"
            cy="80"
            r="30"
            className="fill-indigo-accent/20 stroke-indigo-accent/50"
            strokeWidth="1.5"
          />
          <circle cx="70" cy="72" r="6" className="fill-sky/25" />
          <circle cx="92" cy="90" r="4" className="fill-sky/20" />
          <circle cx="138" cy="80" r="3.5" className="fill-sky" />
        </svg>
      </div>
    </div>
  );
}
