type IconHoverEffectProps = {
  children: React.ReactNode;
  red?: boolean;
};

export function IconHoverEffect({
  children,
  red = false,
}: IconHoverEffectProps) {
  const colorClasses = red
    ? "outline-red-300 hover:bg-red-200 group-hover-bg-red-200 group-focus-visible:bg-red-200"
    : "outline-gray-300 hover:bg-gray-200 group-hover-bg-gray-200 group-focus-visible:bg-gray-200";

  return (
    <div
      className={`duration200 rounded-full p-2 transition-colors ${colorClasses}`}
    >
      {children}
    </div>
  );
}
