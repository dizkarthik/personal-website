"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type UTMData = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  landingPath?: string;
  landingUrl?: string;
  capturedAt?: string;
};

type ClarityFunction = (action: "set", key: string, value: string) => void;

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

const FIRST_TOUCH_STORAGE_KEY = "utm:first-touch";
const LATEST_TOUCH_STORAGE_KEY = "utm:latest-touch";

// Current tracking plan:
// utm_source: linkedin | resume | wall_of_portfolio | google_business | other
// utm_medium: social | direct | referral | local
// utm_campaign: portfolio

function readUTMParams(searchParams: URLSearchParams, pathname: string): UTMData | null {
  const source = searchParams.get("utm_source")?.trim();
  const medium = searchParams.get("utm_medium")?.trim();
  const campaign = searchParams.get("utm_campaign")?.trim();
  const content = searchParams.get("utm_content")?.trim();
  const term = searchParams.get("utm_term")?.trim();

  if (!source && !medium && !campaign && !content && !term) {
    return null;
  }

  return {
    source: source || undefined,
    medium: medium || undefined,
    campaign: campaign || undefined,
    content: content || undefined,
    term: term || undefined,
    landingPath: pathname,
    landingUrl: window.location.href,
    capturedAt: new Date().toISOString(),
  };
}

function readStoredUTM(key: string): UTMData | null {
  const value = window.localStorage.getItem(key);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as UTMData;
  } catch {
    return null;
  }
}

function writeStoredUTM(key: string, value: UTMData) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function setClarityTag(key: string, value?: string) {
  if (!value || typeof window.clarity !== "function") {
    return;
  }

  window.clarity("set", key, value);
}

function syncClarityTags(prefix: "first" | "latest", data: UTMData | null) {
  if (!data) {
    return;
  }

  setClarityTag(`${prefix}_source`, data.source);
  setClarityTag(`${prefix}_medium`, data.medium);
  setClarityTag(`${prefix}_campaign`, data.campaign);
  setClarityTag(`${prefix}_content`, data.content);
  setClarityTag(`${prefix}_term`, data.term);
  setClarityTag(`${prefix}_landing_path`, data.landingPath);
}

export function UTMTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const currentTouch = readUTMParams(
      new URLSearchParams(window.location.search),
      pathname,
    );
    const firstTouch = readStoredUTM(FIRST_TOUCH_STORAGE_KEY);
    const latestTouch = readStoredUTM(LATEST_TOUCH_STORAGE_KEY);

    if (currentTouch) {
      if (!firstTouch) {
        writeStoredUTM(FIRST_TOUCH_STORAGE_KEY, currentTouch);
      }

      writeStoredUTM(LATEST_TOUCH_STORAGE_KEY, currentTouch);
    }

    syncClarityTags("first", currentTouch && !firstTouch ? currentTouch : firstTouch);
    syncClarityTags("latest", currentTouch ?? latestTouch);
    setClarityTag("current_path", pathname);
  }, [pathname]);

  return null;
}
