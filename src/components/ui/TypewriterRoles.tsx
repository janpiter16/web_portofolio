"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterRolesProps {
  roles: string[];
}

export function TypewriterRoles({ roles }: TypewriterRolesProps) {
  const [text, setText] = useState(roles[0] ?? "");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(roles[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex] ?? "";

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        setText(currentRole.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        setTimeout(() => setIsDeleting(true), 1800);
      }
    } else if (charIndex > 0) {
      setText(currentRole.slice(0, charIndex - 1));
      setCharIndex((c) => c - 1);
    } else {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
  }, [charIndex, isDeleting, roleIndex, roles]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const timer = setTimeout(tick, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className="inline-flex items-center font-mono text-lg font-semibold text-sky sm:text-2xl">
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-sky"
      />
    </span>
  );
}
