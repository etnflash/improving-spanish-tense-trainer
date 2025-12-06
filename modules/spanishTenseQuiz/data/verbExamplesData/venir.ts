import { TenseId } from '../../../../types';

export const verb = 'venir';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo vengo del trabajo ahora mismo.",
      "Tú vienes a mi casa mañana.",
      "Ella viene con nosotros al cine.",
      "Nosotros venimos a estudiar aquí siempre.",
      "Vosotros venís en coche o en tren.",
      "Ellos vienen a la reunión tarde."
    ],
    [TenseId.PRETERITE]: [
      "Yo vine a verte ayer.",
      "Tú viniste muy rápido.",
      "Él vino desde muy lejos.",
      "Nosotros vinimos en taxi.",
      "Vosotros vinisteis a la hora acordada.",
      "Ellos vinieron a la fiesta sorpresa."
    ],
    [TenseId.IMPERFECT]: [
      "Yo venía caminando cuando empezó a llover.",
      "Tú venías a visitarnos a menudo.",
      "Él venía de trabajar cansado.",
      "Nosotros veníamos cantando en el coche.",
      "Vosotros veníais siempre en verano.",
      "Ellos venían a jugar a nuestra casa."
    ],
    [TenseId.FUTURE]: [
      "Yo vendré a buscarte a las cinco.",
      "Tú vendrás a mi boda, ¿verdad?",
      "Él vendrá si tiene tiempo.",
      "Nosotros vendremos el próximo mes.",
      "Vosotros vendréis en tren.",
      "Ellos vendrán a vivir aquí."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo vendría si me invitaran.",
      "Tú vendrías más a menudo si vivieras cerca.",
      "Él vendría corriendo si supiera esto.",
      "Nosotros vendríamos encantados.",
      "Vosotros vendríais si no tuvierais trabajo.",
      "Ellos vendrían a la fiesta sin dudarlo."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo venga a tiempo.",
      "Quiero que tú vengas conmigo.",
      "Es posible que él venga mañana.",
      "Ojalá que nosotros vengamos más seguido.",
      "Dudo que vosotros vengáis hoy.",
      "Es necesario que ellos vengan pronto."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ven aquí ahora mismo!",
      "Venga usted por favor.",
      "Vengamos a un acuerdo.",
      "Venid a ver esto.",
      "Vengan a comer."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo viniera mañana, ¿estarías?",
      "Me gustaría que tú vinieras a mi fiesta.",
      "No creía que él viniera solo.",
      "Si nosotros viniéramos en coche, tardaríamos menos.",
      "Dudaba que vosotros vinierais tan tarde.",
      "Era imposible que ellos vinieran hoy."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he venido a verte.",
      "Tú has venido muy elegante.",
      "Ella ha venido desde lejos.",
      "Nosotros hemos venido a trabajar.",
      "Vosotros habéis venido en tren.",
      "Ellos han venido a quejarse."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había venido antes.",
      "Tú habías venido ayer.",
      "Ella había venido sola.",
      "Nosotros habíamos venido.",
      "Vosotros habíais venido.",
      "Ellos habían venido."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré venido para entonces.",
      "Tú habrás venido ya.",
      "Ella habrá venido a verte.",
      "Nosotros habremos venido.",
      "Vosotros habréis venido.",
      "Ellos habrán venido."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría venido si pudiera.",
      "Tú habrías venido conmigo.",
      "Ella habría venido en coche.",
      "Nosotros habríamos venido.",
      "Vosotros habríais venido.",
      "Ellos habrían venido."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya venido.",
      "Dudo que tú hayas venido.",
      "Es posible que ella haya venido.",
      "Ojalá nosotros hayamos venido.",
      "No creo que vosotros hayáis venido.",
      "Es bueno que ellos hayan venido."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera venido, te vería.",
      "Si tú hubieras venido, te divertirías.",
      "Si ella hubiera venido, estaría aquí.",
      "Si nosotros hubiéramos venido, comeríamos.",
      "Si vosotros hubierais venido, sabríais.",
      "Si ellos hubieran venido, ayudarían."
    ]
  };

export default data;
