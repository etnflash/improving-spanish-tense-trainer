import { TenseId } from '../../../../types';

export const verb = 'ver';

const data: Partial<Record<TenseId, string[]>> = {
    [TenseId.PRESENT]: [
      "Yo veo la televisión por la noche.",
      "Tú ves el pájaro en el árbol.",
      "Usted ve el problema claramente.",
      "Nosotros vemos a nuestros abuelos los domingos.",
      "Vosotros veis el partido de fútbol.",
      "Ellos ven muchas películas de acción."
    ],
    [TenseId.PRETERITE]: [
      "Yo vi esa película ayer.",
      "Tú viste a Juan en el parque.",
      "Él vio un accidente en la calle.",
      "Nosotros vimos el amanecer juntos.",
      "Vosotros visteis el museo la semana pasada.",
      "Ellos vieron llegar el tren."
    ],
    [TenseId.IMPERFECT]: [
      "Yo veía dibujos animados los sábados.",
      "Tú veías a tus amigos cada tarde.",
      "Él veía mal sin gafas.",
      "Nosotros veíamos la televisión después de cenar.",
      "Vosotros veíais el mar desde vuestra casa.",
      "Ellos veían venir la tormenta."
    ],
    [TenseId.FUTURE]: [
      "Yo veré qué puedo hacer.",
      "Tú verás que tengo razón.",
      "Él verá a su familia en Navidad.",
      "Nosotros veremos el partido en casa.",
      "Vosotros veréis los resultados pronto.",
      "Ellos verán la puesta de sol desde la montaña."
    ],
    [TenseId.CONDITIONAL]: [
      "Yo vería esa serie otra vez si tuviera tiempo.",
      "Tú verías mejor con esas gafas.",
      "Él vería la verdad si escuchara con atención.",
      "Nosotros veríamos el partido si no trabajáramos.",
      "Vosotros veríais resultados si practicaseis más.",
      "Ellos verían el eclipse si el cielo estuviera despejado."
    ],
    [TenseId.PRESENT_SUBJUNCTIVE]: [
      "Espero que yo vea resultados pronto.",
      "Quiero que tú veas lo importante que es esto.",
      "Dudo que él vea el problema todavía.",
      "Es necesario que nosotros veamos ambas opciones.",
      "Ojalá que vosotros veáis la diferencia.",
      "Es posible que ellos vean la señal a tiempo."
    ],
    [TenseId.IMPERATIVE]: [
      "-",
      "¡Ve al médico si sigues sintiéndote mal!",
      "Vea usted la presentación completa antes de opinar.",
      "Veamos esto desde otra perspectiva.",
      "Ved el mapa para no perderos.",
      "Vean la última diapositiva con atención."
    ],
    [TenseId.IMPERFECT_SUBJUNCTIVE]: [
      "Si yo viera una señal, me detendría.",
      "Me gustaría que tú vieras este paisaje.",
      "No creía que él viera tan lejos.",
      "Si nosotros viéramos el error, lo corregiríamos.",
      "Dudaba que vosotros vierais el detalle oculto.",
      "Era importante que ellos vieran la evidencia."
    ],
    [TenseId.PRESENT_PERFECT]: [
      "Yo he visto ese documental varias veces.",
      "Tú has visto crecer a tus hijos.",
      "Ella ha visto cambios en la empresa.",
      "Nosotros hemos visto resultados positivos.",
      "Vosotros habéis visto cómo funciona.",
      "Ellos han visto la nieve por primera vez."
    ],
    [TenseId.PLUPERFECT]: [
      "Yo había visto esa película.",
      "Tú habías visto al ladrón.",
      "Ella había visto el mar.",
      "Nosotros habíamos visto.",
      "Vosotros habíais visto.",
      "Ellos habían visto."
    ],
    [TenseId.FUTURE_PERFECT]: [
      "Yo habré visto el mundo.",
      "Tú habrás visto el final.",
      "Ella habrá visto todo.",
      "Nosotros habremos visto.",
      "Vosotros habréis visto.",
      "Ellos habrán visto."
    ],
    [TenseId.CONDITIONAL_PERFECT]: [
      "Yo habría visto eso.",
      "Tú habrías visto mejor.",
      "Ella habría visto la señal.",
      "Nosotros habríamos visto.",
      "Vosotros habríais visto.",
      "Ellos habrían visto."
    ],
    [TenseId.PRESENT_PERFECT_SUBJUNCTIVE]: [
      "Espero que yo haya visto bien.",
      "Dudo que tú hayas visto.",
      "Es posible que ella haya visto.",
      "Ojalá nosotros hayamos visto.",
      "No creo que vosotros hayáis visto.",
      "Es bueno que ellos hayan visto."
    ],
    [TenseId.PLUPERFECT_SUBJUNCTIVE]: [
      "Si yo hubiera visto, avisaría.",
      "Si tú hubieras visto, gritarías.",
      "Si ella hubiera visto, lloraría.",
      "Si nosotros hubiéramos visto, correríamos.",
      "Si vosotros hubierais visto, sabríais.",
      "Si ellos hubieran visto, vendrían."
    ]
  };

export default data;
