import LogoRocket from "./LogoRocketseat";

export function Footer() {
  return (
    <footer className="mx-auto p-8 max-w-full border-t border-gray-500 flex justify-between items-center">
      <div className="flex items-center gap-2 text-gray-300">
        <LogoRocket />
        Rocketseat - todos os direitos reservados
      </div>

      <a className="block text-gray-300">Políticas de privacidade</a>
    </footer>
  );
}
