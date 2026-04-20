import React from "react";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";
import { Clock, Gavel, ShieldCheck } from "lucide-react";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import {
  Flame,
  Home,
  AlertCircle,
  CornerDownRight,
  CheckCircle2,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

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
            miniTitle="A_Definir"
            title="A_Definir"
            colorMode={colorMode}
          />

          <div className="w-full mx-auto bg-white rounded-xl p-8 md:p-12 border relative overflow-hidden">
            <section className="">
              <div className="max-w-7xl mx-auto">
                {/* Grid: 1 coluna no mobile, 3 colunas no desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {servicos.map((servico) => (
                    <div
                      key={servico.id}
                      className="bg-white border border-gray-200 p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {/* Ícone topo */}
                      <div className="flex justify-center mb-6">
                        <servico.icon
                          className="w-12 h-12 text-[#1e4b7a]"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Título */}
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-4 leading-tight">
                        {servico.title}
                      </h3>

                      {/* Container flex-grow para empurrar o botão pro final */}
                      <div className="flex-grow flex flex-col space-y-6 text-sm text-gray-600">
                        <p className="text-center font-medium">
                          {servico.intro}
                        </p>

                        {/* Seção: Veja se você se encaixa */}
                        <div>
                          <p className="font-bold text-gray-800 mb-2 flex items-center gap-2">
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
                        <div className="border-t border-gray-100 pt-4">
                          <p className="font-bold text-gray-800 mb-2 flex items-center gap-2">
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
                        <div className="bg-red-50 p-3 rounded-md border border-red-100 mt-4">
                          <p className="font-bold text-red-800 mb-1 flex items-center gap-2 text-xs uppercase">
                            <AlertTriangle className="w-4 h-4" /> Importante
                          </p>
                          <p className="text-red-700 text-xs leading-relaxed">
                            {servico.important}
                          </p>
                        </div>
                      </div>

                      {/* Botão alinhado na base */}
                      <button className="mt-8 w-full bg-[#aeddf5] hover:bg-[#99d1ee] text-[#0f3659] font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
                        <CornerDownRight className="w-5 h-5" />
                        Saber Mais
                      </button>
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
