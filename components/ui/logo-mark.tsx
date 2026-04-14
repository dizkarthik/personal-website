export function LogoMark() {
  return (
    <div className="flex h-[30px] w-[30px] items-center justify-center">
      <img
        src="/assets/logo.svg"
        alt=""
        className="h-[30px] w-[30px] object-contain"
      />
      <span className="sr-only">Karthik home</span>
    </div>
  );
}
