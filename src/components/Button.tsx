import { DiscordLogo, Lightning } from "phosphor-react";

interface ButtonProps {
  variant: "primary" | "secondary";
  url?: string | "#";
}

export function Button(props: ButtonProps) {
  return props.variant === "primary" ? (
    <a
      href={props.url}
      className="flex justify-center items-center p-4 gap-2 bg-green-500 font-bold text-sm text-white uppercase border border-transparent rounded cursor-pointer hover:bg-green-700 transition-colors"
    >
      <DiscordLogo size={24} /> Comunidade no discord
    </a>
  ) : (
    <a
      href="#"
      className="flex justify-center items-center p-4 gap-2 font-bold text-sm text-blue-500 uppercase border border-blue-500 rounded cursor-pointer hover:bg-blue-500 hover:text-gray-900 transition-colors"
    >
      <Lightning size={24} /> Acesse o desafio
    </a>
  );
}
