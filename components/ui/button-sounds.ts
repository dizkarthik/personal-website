"use client";

type SoundKind = "hover" | "click";

let audioContext: AudioContext | null = null;
let lastHoverAt = 0;

function getAudioContext() {
  if (typeof window === "undefined") {
    return null;
  }

  const AudioContextConstructor =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextConstructor) {
    return null;
  }

  audioContext ??= new AudioContextConstructor();
  return audioContext;
}

export function playButtonSound(kind: SoundKind) {
  const now = Date.now();

  if (kind === "hover" && now - lastHoverAt < 120) {
    return;
  }

  if (kind === "hover") {
    lastHoverAt = now;
  }

  const context = getAudioContext();

  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const startTime = context.currentTime;
  const duration = kind === "hover" ? 0.045 : 0.075;
  const frequency = kind === "hover" ? 880 : 520;

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(
    kind === "hover" ? 980 : 390,
    startTime + duration,
  );

  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(kind === "hover" ? 0.012 : 0.018, startTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration);
}
