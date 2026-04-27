import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { Clock, Gavel, ShieldCheck } from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import {
  Flame,
  Home,
  AlertCircle,
  CornerDownRight,
  CheckCircle2,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import ButtonReflexo from "../interactives/ButtonReflexo";

const servicos = [
  {
    id: 1,
    icon: Flame,
    title: "VOCÊ PODE TER DIREITO A ADICIONAL DE INSALUBRIDADE",
    intro:
      "Se você trabalhou exposto a situações prejudiciais à saúde, pode ter valores a receber que a empresa nunca te pagou.",
    checkItems: [
      "Trabalhou com limpeza de banheiros, lixo ou esgoto",
      "Atuou em hospital, clínica ou com contato com pacientes",
      "Teve contato com produtos químicos fortes",
      "Trabalhou com muito barulho ou máquinas",
      "Atuou em ambientes muito quentes ou muito frios",
    ],
    receiveItems: [
      "Adicional de insalubridade (até 40%)",
      "Valores retroativos",
      "Reflexos em outros direitos trabalhistas",
    ],
    important:
      "Mesmo que a empresa tenha fornecido uniforme ou equipamento, isso não significa que o direito não exista.",
  },
  {
    id: 2,
    icon: Home,
    title: "DIREITOS COMO EMPREGADA DOMÉSTICA OU CUIDADORA",
    intro:
      "Se você trabalhou sem registro ou com direitos incompletos, pode ter valores a receber que nunca foram pagos corretamente.",
    checkItems: [
      "Trabalhou sem carteira assinada",
      "Seus horários não seguiam um padrão",
      "Fazia horas extras sem receber",
      "Não recebeu férias ou 13º salário",
      "Dormia no trabalho sem compensação adequada",
      "Acumulava funções além do combinado",
    ],
    receiveItems: [
      "Registro em carteira (reconhecimento)",
      "Verbas trabalhistas atrasadas",
      "Horas extras e adicionais",
      "FGTS e outros direitos",
    ],
    important:
      "Mesmo sendo trabalho 'de confiança', isso não elimina seus direitos garantidos por lei.",
  },
  {
    id: 3,
    icon: AlertCircle,
    title: "VOCÊ PODE SER INDENIZADO POR ASSÉDIO MORAL",
    intro:
      "Se você passou por situações humilhantes no trabalho, pode ter direito a uma indenização.",
    checkItems: [
      "Foi humilhado ou constrangido na frente de outros",
      "Sofreu cobranças excessivas ou abusivas",
      "Foi ameaçado de demissão constantemente",
      "Recebia tratamento diferente dos colegas",
      "Teve sua dignidade desrespeitada no ambiente",
    ],
    receiveItems: [
      "Indenização por danos morais",
      "Reconhecimento judicial da situação",
      "Rescisão indireta do contrato",
      "Outros direitos trabalhistas",
    ],
    important:
      "Mesmo sem provas formais, ainda é possível comprovar o assédio com testemunhas e outros meios.",
  },
];

function Speed({ colorMode }) {
  let backgroundMode, text, textOpacity, textDestaque, cardBg, iconBg;
  switch (colorMode) {
    case "light":
      backgroundMode = "bg-terciary/60";
      text = "text-corTitulosPreto";
      textOpacity = "text-corOutrosTextosPreto";
      iconBg = "bg-white text-primaryDark";

      break;
    case "dark":
      backgroundMode = "bg-darkOpacity";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-darkOpacity text-primaryLight";

      break;
    default:
      backgroundMode = "bg-secondary/60";
      text = "text-corTitulosBranca";
      textOpacity = "text-corOutrosTextosBranca";
      iconBg = "bg-white text-primaryDark";
  }
  return (
    <SectionArea className={`${backgroundMode}`}>
      <SectionWrapper>
        <section className="">
          <SectionHeaderNovo
            miniTitle="ATENÇÃO MÁXIMA"
            title="Veja se você se encaixa nessas situações"
            colorMode={colorMode}
          />

          <div className="relative w-full p-8 mx-auto overflow-hidden bg-white border rounded-xl md:p-12">
            <section className="">
              <div className="mx-auto max-w-7xl">
                {/* Grid: 1 coluna no mobile, 3 colunas no desktop */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {servicos.map((servico) => (
                    <div
                      key={servico.id}
                      className="flex flex-col h-full p-8 transition-shadow duration-300 bg-white border border-gray-200 shadow-sm hover:shadow-md"
                    >
                      {/* Ícone topo */}
                      <div className="flex justify-center mb-6">
                        <servico.icon
                          className="w-12 h-12 text-[#1e4b7a]"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Título */}
                      <h3 className="mb-4 text-lg font-bold leading-tight text-center text-gray-900">
                        {servico.title}
                      </h3>

                      {/* Container flex-grow para empurrar o botão pro final */}
                      <div className="flex flex-col flex-grow space-y-6 text-sm text-gray-600">
                        <p className="font-medium text-center">
                          {servico.intro}
                        </p>

                        {/* Seção: Veja se você se encaixa */}
                        <div>
                          <p className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                            👉 Veja se você se encaixa:
                          </p>
                          <ul className="space-y-2">
                            {servico.checkItems.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Seção: O que você pode receber */}
                        <div className="pt-4 border-t border-gray-100">
                          <p className="flex items-center gap-2 mb-2 font-bold text-gray-800">
                            💰 O QUE VOCÊ PODE RECEBER:
                          </p>
                          <ul className="space-y-2">
                            {servico.receiveItems.map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <DollarSign className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Seção: Importante */}
                        <div className="p-3 mt-4 border border-red-100 rounded-md bg-red-50">
                          <p className="flex items-center gap-2 mb-1 text-xs font-bold text-red-800 uppercase">
                            <AlertTriangle className="w-4 h-4" /> Importante
                          </p>
                          <p className="text-xs leading-relaxed text-red-700">
                            {servico.important}
                          </p>
                        </div>
                      </div>

                      {/* Botão alinhado na base */}
                      <ButtonReflexo
                        onClick={() => gtag_report_conversion()}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                          </svg>
                        }
                        link={content.texts.links.ctaWhatsapp}
                        label="Solicitar ajuda agora"
                        colorMode={colorMode}
                        className="my-0 mt-6"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </SectionWrapper>
    </SectionArea>
  );
}

export default Speed;
