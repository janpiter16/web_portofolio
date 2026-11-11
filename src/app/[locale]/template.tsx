import { ReactNode } from "react";

// Remounts on every navigation, so the CSS entrance animation replays on reload and page change.
export default function LocaleTemplate({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="page-progress-bar" aria-hidden="true" />
      <div className="page-transition">{children}</div>
    </>
  );
}
