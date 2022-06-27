import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "Live" | "Class";
}

function AvailableLesson() {
  return (
    <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
      <CheckCircle size={20} />
      Conteúdo liberado
    </span>
  );
}

function UnavailableLesson() {
  return (
    <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
      <Lock size={20} />
      Em breve
    </span>
  );
}

export function CardLesson(props: LessonProps) {
  //função da lib date-fns que verifica se a data parâmetro já 'venceu' e retorna um boolean
  const isLessonAvailable = isPast(props.availableAt);
  const availableAtDateFormat = format(props.availableAt, "EEEE' • 'dd' de 'MMMM' • 'HH'h'mm", { locale: ptBR });

  return (
    <a href={props.slug} className="flex flex-col ">
      <span className="text-gray-300 mb-2">{availableAtDateFormat}</span>

      <div className="p-4 border border-gray-500 rounded">
        <header className="flex justify-between items-center mb-4">
          {isLessonAvailable ? AvailableLesson() : UnavailableLesson()}

          <span className="inline-block px-2 py-[0.125rem] border border-green-300 rounded font-bold text-xs uppercase">{props.type === "Live" ? "Ao vivo" : "Aula prática"}</span>
        </header>

        <strong className="font-bold text-gray-200">{props.title}</strong>
      </div>
    </a>
  );
}
