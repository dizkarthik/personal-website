export function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-canvas shadow-soft">
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 4H9V10H3V4Z" fill="currentColor" />
        <path d="M11 4H17V8H11V4Z" fill="currentColor" />
        <path d="M11 10H17V16H11V10Z" fill="currentColor" />
        <path d="M3 12H9V16H3V12Z" fill="currentColor" />
        <path d="M9 10L11 8V12L9 10Z" fill="#fffaf1" />
      </svg>
      <span className="sr-only">Karthik home</span>
    </div>
  );
}
