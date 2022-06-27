import Logo from "./Logo";

export function Header() {
  return (
    <header className="w-full py-6 flex justify-center items-center bg-gray-700 border-b border-gray-500">
      <Logo />
    </header>
  );
}
