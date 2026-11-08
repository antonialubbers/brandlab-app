(function(){
"use strict";
/* BRANDLAB Vertiefung: ausschließlich kurze Erläuterungen zu den Vorlesungsinhalten.
   Wird unabhängig vom Lernfortschritt geladen. Keine Internetanfragen. */
const decks={
"01":"Bauordnungsrecht und Bauplanungsrecht beantworten unterschiedliche Fragen: Wie darf gebaut werden, und was ist planerisch am Standort erlaubt? Die Landesbauordnungen sind die rechtlich maßgebliche Umsetzung.",
"02":"Zuerst wird das Schutzziel benannt, dann die konkrete Anforderung oder Gefährdung geprüft. Die MBO unterscheidet Regelbau, Sonderbautatbestand und begründete Abweichungen.",
"03":"Die MBO gliedert Anforderungen nach der Funktion des Bauteils: Baustoffverhalten, Raumabschluss, Standsicherheit, Rettungswege und technische Gebäudeausrüstung erfüllen verschiedene Aufgaben.",
"04":"Entscheidend ist nicht nur ein Rettungsweg auf dem Papier. Seine Führung, Breite, Länge, bauliche Ausbildung und die tatsächliche Nutzbarkeit müssen zum Gebäude passen.",
"05":"Bei der Bewertung des abwehrenden Brandschutzes sind Feuerwehrorganisation, verfügbare Rettungsmittel, Einsatzgrenzen und Löschwasserversorgung getrennt zu betrachten.",
"06":"Zugang, Zufahrt, Bewegungsfläche und Aufstellfläche haben unterschiedliche Funktionen. Maßgeblich ist stets, auf welche Fläche und welchen Bezugspunkt sich ein Maß bezieht.",
"07":"Im Brandschutznachweis werden Anforderungen, geplante Ausführung und deren Bewertung nachvollziehbar miteinander verglichen. Abweichungen sind zu benennen und zu begründen.",
"08":"Brandklassen beschreiben die Art des brennenden Stoffes. Die Auswahl eines geeigneten Löschmittels muss auf den Brennstoff und die Brandbedingungen abgestimmt sein.",
"11":"Bei Hochhäusern ergeben sich wegen Gebäudehöhe, Rettung und Brandbekämpfung erhöhte Anforderungen. Die Richtlinie unterscheidet dabei verschiedene Höhenbereiche.",
"12":"Bei Beherbergungsstätten beeinflussen insbesondere Ortsunkundigkeit, Schlafsituation, Bettenzahl und die Eignung der Rettungswege das Brandschutzkonzept.",
"12-02":"Die Leistungsphasen beschreiben unterschiedliche Tätigkeiten der Brandschutzplanung. Ein Nachweis, eine Ausführungsplanung und die Objektüberwachung sind nicht dieselbe Leistung.",
"14":"Anlagentechnische Maßnahmen sollen konkrete Funktionen erfüllen: Brände erkennen und melden, die Ausbreitung begrenzen oder die Feuerwehr unterstützen. Anlagen allein ersetzen nicht jedes andere Schutzziel.",
"15":"Baulicher, anlagentechnischer, organisatorischer und abwehrender Brandschutz ergänzen einander. Organisatorische Maßnahmen wirken nur, wenn Zuständigkeiten und Verhalten tatsächlich umgesetzt werden.",
"16":"Die Industriebaurichtlinie berücksichtigt spezielle Randbedingungen wie größere Flächen, wechselnde Brandlasten und Brandbekämpfungsabschnitte. Die gewählte Nachweismethode und Sicherheitskategorie sind entscheidend.",
"18b":"Bestandsschutz setzt einen rechtlich geschützten Bestand voraus. Eine neue Rechtslage macht ein ursprünglich rechtmäßiges Gebäude nicht automatisch unzulässig.",
"03-01":"Ingenieurmethoden können Brand- und Rauchausbreitung oder Bauteilverhalten modellieren. Ihr Ergebnis ist nur so belastbar wie Modellannahmen, Randbedingungen und Auswertung."
};
const details={
q0099:"Eine Brandwand dient primär als wirksame Trennung von Brandabschnitten. Ihre Funktion ist nicht allein Tragfähigkeit oder Wärmedämmung: Sie soll den Brandübertritt zwischen getrennten Bereichen begrenzen.",
q0100:"R = Tragfähigkeit, E = Raumabschluss, I = Wärmedämmung. Diese drei Kürzel betreffen den Feuerwiderstand eines Bauteils. RWA bezeichnet dagegen Rauch- und Wärmeabzug; A2-s1,d0 ist eine Baustoffklassifizierung.",
q0101:"Die MLAR behandelt Leitungsanlagen, nicht Lüftungsanlagen. Die ähnliche Abkürzung für Lüftungsanlagen ist M-LüAR; die Abgrenzung entscheidet darüber, welche Durchführungen und Installationen behandelt werden.",
q0121:"Die Vorlesung nennt für den Regelbau die Luftlinie, aber ausdrücklich nicht durch Bauteile hindurch. Bei Sonderbauten kann eine Messung in Lauflinie gefordert sein; deshalb ist die Nutzung entscheidend.",
q0122:"Die Acht-Meter-Grenze bezieht sich auf die Oberkante der Brüstung über der Geländeoberfläche und nicht auf die Fußbodenoberkante. Außerdem muss das tatsächlich geeignete Rettungsgerät verfügbar und die Anleiterstelle erreichbar sein.",
q0123:"SOLL = rechtliche Anforderung; IST = tatsächliche geplante Ausführung; Bewertung = begründeter Abgleich. Diese Reihenfolge ist die Grundlage eines prüffähigen Brandschutznachweises.",
q0138:"Eine Staffel besteht aus sechs Funktionen/Personen. Sie ist von der Gruppe mit neun Personen zu unterscheiden; eine taktische Einheit wird nicht allein nach ihrem Fahrzeug benannt.",
q0139:"Die FwDV 7 behandelt Atemschutz im Feuerwehrdienst und umfasst die Atemschutzüberwachung. DIN 18065 behandelt Gebäudetreppen, MHHR Hochhäuser und MBeVO Beherbergungsstätten.",
q0157:"Die Bewegungsfläche ist keine bloße Fahrzeugstellfläche. Für ein Feuerwehrfahrzeug nennt die Folie 7 × 12 m; sie muss die sichere Entwicklung und Arbeit der Einsatzkräfte ermöglichen.",
q0158:"Die maximale Neigung ist eine Anforderung an die praktische sichere Aufstellung des Hubrettungsfahrzeugs. Die Angabe in Prozent beschreibt die Höhenänderung relativ zur horizontalen Strecke.",
q0159:"Nicht Gesamtgewicht und Achslast verwechseln: Die Folie fordert 10 t Achslast und nennt ein zulässiges Gesamtgewicht von 16 t für befahrbare Feuerwehrflächen.",
q0168:"Der Brandschutznachweis wird fachkundig erstellt; die Prüfung bzw. Bescheinigung erfolgt nach den jeweils geltenden Anforderungen durch Bauaufsicht oder Prüfingenieur. Feuerwehr und Bauherr ersetzen diese formelle Prüfung nicht.",
q0176:"Speiseöl- und Speisefettbrände gehören zur Brandklasse F. Die Einordnung richtet sich nach dem Brennstoff und ist wichtig, weil ungeeignete Löschmittel gefährliche Reaktionen auslösen können.",
q0191:"Die Vorlesung unterscheidet Hochhaus über 22 m und hohes Hochhaus über 60 m. Entscheidend ist die bauordnungsrechtlich definierte Gebäudehöhe, nicht allein die Geschossanzahl.",
q0204:"Die Vorlesungsfolie setzt zwei Grenzen gleichzeitig: höchstens 60 Gastbetten im gesamten Gebäude und höchstens 30 Betten je Geschoss. Eine einzelne erfüllte Grenze reicht nicht aus.",
q0219:"Objektüberwachung gehört zur Leistungsphase 8. Vorangehende Phasen umfassen unter anderem Planung, Nachweise und Mitwirkung bei der Vergabe; sie sind nicht identisch mit der Ausführungskontrolle.",
q0240:"Das FAT dient dazu, ausgelöste Melder bzw. Meldungen anzuzeigen. Das FBF ist das Bedienfeld für die Feuerwehr, das FSD verwahrt Zugangsschlüssel und das FSE dient zum Auslösen der Brandmeldeanlage.",
q0241:"Bei DIN 14675 ordnet die Vorlesung den Vollschutz der Kategorie 1 zu. Die Kategorie beschreibt einen Überwachungsumfang, nicht den Feuerwiderstand von Bauteilen.",
q0250:"Eine Brandschutzordnung enthält Verhaltensregeln und Zuständigkeiten. Brandwände gehören zum baulichen, Sprinkleranlagen zum anlagentechnischen und die Drehleiter zum abwehrenden Brandschutz.",
q0264:"Die Industriebaurichtlinie nennt in der Vorlesung bei einer Gesamtgrundfläche von mehr als 5.000 m² eine Feuerwehrumfahrt. Eine bloße Zufahrt ist nicht dasselbe wie eine Umfahrt um das Gebäude.",
q0265:"Abschnitt 6 enthält das vereinfachte tabellarische Nachweisverfahren. Ein Verfahren kann nicht durch die Anforderungen eines anderen Abschnitts ersetzt werden, ohne die Voraussetzungen zu prüfen.",
q0276:"Bestandsschutz kann eine rechtmäßig errichtete und rechtmäßig genutzte Anlage schützen, selbst wenn sich Vorschriften ändern. Eine Anpassung setzt gesonderte Voraussetzungen voraus; pauschale Nachrüstungspflichten folgen nicht allein aus dem Alter.",
q0288:"Die Einheitstemperaturzeitkurve ist die nominelle Standard-Brandbeanspruchung zur Bauteilbemessung. Andere Kurven bilden andere Brandbeanspruchungen bzw. Szenarien ab.",
q0295:"Für Gebäudeklasse 4 gilt eine Gebäudehöhe bis 13 m und die Begrenzung jeder einzelnen Nutzungseinheit auf höchstens 400 m². Die Nutzungseinheit mit 420 m² schließt GK 4 aus.",
q0296:"Die Summe aller Nutzungseinheiten muss bei GK 4 nicht unter 400 m² liegen. Hier ist jede einzelne Nutzungseinheit höchstens 400 m² und die Gebäudehöhe unter 13 m.",
q0297:"Verkaufsstätten mit mehr als 800 m² maßgeblicher Brutto-Grundfläche sind nach dem Sonderbautatbestand der Vorlesung Sonderbauten. Sonderbautatbestand und Anwendungsbereich einer speziellen Verordnung sind nicht zwangsläufig identisch.",
q0298:"Beim Rettungsfenster müssen die Anforderungen gleichzeitig erfüllt sein: lichte Breite mindestens 0,90 m, lichte Höhe mindestens 1,20 m und die zulässige innere Brüstungshöhe. 1,15 m Höhe reicht nicht.",
q0299:"Die Folie verlangt für die Bewegungsfläche 7 m × 12 m. Wenn die Breite 7 m stimmt, aber nur 10 m Länge vorhanden sind, fehlen exakt 2 m in Längsrichtung.",
q0300:"Die MBeVO-Folie enthält eine UND-Bedingung: maximal 60 Betten gesamt und maximal 30 je Geschoss. Auch 24 Betten je Geschoss helfen nicht, wenn das Hotel insgesamt 64 Betten hat.",
q0301:"Die MBO bestimmt die Hochhausgrenze durch die maßgebliche Fußbodenoberkante über mittlerem Gelände. 23 m überschreiten 22 m: Das Gebäude ist Hochhaus und damit Sonderbau.",
q0302:"Die Industriebau-Folie nennt eine Feuerwehrumfahrt ab mehr als 5.000 m² Gesamtgrundfläche. 5.200 m² überschreiten diesen Wert; die Fläche ist daher nicht irrelevant.",
q0311:"Bei gekrümmten Feuerwehrzufahrten beeinflusst der Außenradius die erforderliche Fahrbahnbreite. Für 11 m Außenradius zeigt die Tabelle 5,0 m; maßgebend ist die konkrete Tabellenzeile.",
q0312:"Bei senkrechter Aufstellung werden zu 3,50 m Aufstellfläche auf jeder Seite 1,25 m hindernisfreier Streifen addiert. 3,50 + 1,25 + 1,25 = 6,00 m.",
q0313:"Die Vorlesung unterscheidet die eigentliche Aufstellfläche von zusätzlichen hindernisfreien Streifen. Bei paralleler Aufstellung liegt die gebäudeabgewandte Mindestbreite laut Folie bei 2,0 m.",
q0314:"Die Schutzziele nach § 14 MBO umfassen unter anderem die Rettung von Menschen und Tieren. Wirtschaftlicher Sachschutz und Versicherungsschutz sind keine dort ausdrücklich genannten eigenständigen Ziele.",
q0315:"Wirksame Löscharbeiten können auch eine kontrollierte defensive Taktik bedeuten. Ein kontrolliertes Abbrennen kann zulässig sein, wenn die übrigen Schutzziele wie Personenrettung und Begrenzung der Brandausbreitung gewährleistet bleiben.",
q0316:"Mehr als 800 m² ist der hier geprüfte Sonderbautatbestand für Verkaufsräume und Ladenstraßen. Die Grenze darf nicht mit anderen Flächenschwellen für Büros oder speziellen Verkaufsstättenverordnungen verwechselt werden.",
q0317:"Bei Gaststätten wird laut Vorlesung die Grenze von mehr als 40 Gastplätzen im Gebäude geprüft. Bettenzahlen von Beherbergungsstätten sind ein anderer Sonderbautatbestand.",
q0318:"GK 1 umfasst unter anderem freistehende Gebäude bis 7 m Höhe mit höchstens zwei Nutzungseinheiten und insgesamt höchstens 400 m². Hier erfüllen alle drei Angaben diese Bedingungen.",
q0319:"GK 4 verlangt höchstens 400 m² pro Nutzungseinheit, nicht insgesamt. Die Gebäudeklasse wird deshalb anhand der einzelnen Nutzungseinheiten und der Gebäudehöhe geprüft.",
q0320:"Die Bauaufsichtsbehörde kann nach § 67 MBO eine Abweichung zulassen, wenn die gesetzlichen Voraussetzungen erfüllt sind. Weder der Bauherr noch Brandschutzdienststelle oder Anlagenerrichter dürfen sie eigenständig genehmigen.",
q0321:"§ 85a MBO ermöglicht abweichende Lösungen von Technischen Baubestimmungen bei gleichwertiger Anforderungserfüllung, soweit sie nicht ausgeschlossen sind. Kostenersparnis ist dafür allein keine ausreichende Begründung.",
q0322:"Die drei häufig abgefragten Begriffe sind feuerhemmend = 30 Minuten, hochfeuerhemmend = 60 Minuten, feuerbeständig = 90 Minuten. Feuerwiderstand ist nicht dasselbe wie Nichtbrennbarkeit.",
q0323:"Grundsätzlich sind zwei unabhängige Rettungswege erforderlich. Die MBO kennt Ausnahmen, etwa bei einem geeigneten Sicherheitstreppenraum, und lässt für den zweiten Rettungsweg unter Voraussetzungen Rettungsgeräte zu."
};
const terms=[
["Schutzziel",/\bSchutzziel\w*/i,"Beschreibt, welcher Sicherheitszustand erreicht werden soll. Eine einzelne Bauvorschrift ist ein Mittel, dieses Ziel umzusetzen."],
["§ 3 MBO",/§\s*3\b/i,"Allgemeine Anforderung zum Schutz der öffentlichen Sicherheit und Ordnung, insbesondere Leben, Gesundheit und natürlichen Lebensgrundlagen."],
["§ 14 MBO",/§\s*14\b/i,"Brandschutzziele: Brandentstehung vorbeugen, Feuer- und Rauchausbreitung begrenzen, Rettung ermöglichen und wirksame Löscharbeiten ermöglichen."],
["Sonderbau",/\bSonderbau\w*/i,"Gebäude oder Anlagen mit Tatbeständen nach § 2 Abs. 4 MBO, für die wegen ihrer Art oder Nutzung besondere Anforderungen oder Erleichterungen möglich sind."],
["Gebäudeklasse",/\b(Gebäudeklasse|GK\s*[1-5])\b/i,"Baurechtliche Einteilung anhand der Gebäudehöhe und je nach Klasse Anzahl und Fläche der Nutzungseinheiten. Davon getrennt ist die Sonderbauprüfung."],
["Nutzungseinheit",/\b(Nutzungseinheit|NE\s*[1-5])\b/i,"Abgegrenzter selbstständiger Nutzungsbereich, etwa eine Wohnung oder ein Betrieb. Bei GK 4 ist die Fläche jeder einzelnen Einheit entscheidend."],
["Abweichung",/\bAbweichung\w*/i,"Zulassung einer anderen Lösung trotz einer materiellen Anforderung. Nach § 67 MBO sind unter anderem der Zweck der Vorschrift und die geschützten Belange maßgeblich."],
["Erleichterung",/\bErleichterung\w*/i,"Bei einem Sonderbau kann eine konkrete Anforderung nach § 51 MBO entbehrlich sein, wenn ihre Einhaltung wegen der besonderen Art oder Nutzung nicht erforderlich ist."],
["Brandabschnitt",/\bBrandabschnitt\w*/i,"Baulich abgegrenzter Gebäudebereich, dessen Trennung eine Brandausbreitung in andere Abschnitte begrenzen soll."],
["Brandwand",/\bBrandwand\w*/i,"Besonders widerstandsfähiges raumabschließendes Bauteil zur Trennung von Brandabschnitten oder gegen Brandübertragung zu Nachbargebäuden."],
["Feuerwiderstand",/\b(Feuerwiderstand\w*|feuerhemmend|hochfeuerhemmend|feuerbeständig)\b/i,"Beschreibt die Zeit, über die ein Bauteil bestimmte Prüfanforderungen erfüllt. Feuerhemmend 30, hochfeuerhemmend 60 und feuerbeständig 90 Minuten."],
["Baustoff",/\bBaustoff\w*/i,"Material mit bestimmtem Brandverhalten. Die Baustoffklasse ist nicht gleichbedeutend mit dem Feuerwiderstand des fertigen Bauteils."],
["Bauteil",/\bBauteil\w*/i,"Konstruktives Element wie Wand, Decke oder Stütze. Tragfähigkeit, Raumabschluss und Wärmedämmung können getrennt klassifiziert werden."],
["REI",/\bREI\b|\b(Raumabschluss|Tragfähigkeit|Wärmedämmung)\b/i,"R = Tragfähigkeit, E = Raumabschluss, I = Wärmedämmung. Die Kriterien können in einer Feuerwiderstandsklassifizierung kombiniert vorkommen."],
["Rettungsweg",/\bRettungsweg\w*/i,"Weg aus einer Nutzungseinheit ins Freie; kann der Selbstrettung oder Fremdrettung dienen und zugleich Angriffsweg für die Feuerwehr sein."],
["Sicherheitstreppenraum",/\bSicherheitstreppenraum\w*/i,"Besonders geschützter notwendiger Treppenraum, in den Feuer und Rauch nicht eindringen können sollen. Nach § 33 Abs. 2 MBO kann er einen zweiten Rettungsweg entbehrlich machen."],
["Notwendiger Flur",/\bnotwendige[rn]?\s+Flur\w*/i,"Geschützter horizontaler Rettungsweg zu einem notwendigen Treppenraum oder ins Freie. Er ist vom notwendigen Treppenraum zu unterscheiden."],
["Rettungsfenster",/\bRettungsfenster\w*/i,"Anleiterbare Öffnung für einen möglichen zweiten Rettungsweg über Feuerwehrgeräte. Die Folie nennt 0,90 m lichte Breite, 1,20 m lichte Höhe und höchstens 1,20 m innere Brüstungshöhe."],
["Brüstungshöhe",/\bBrüstung\w*/i,"Bei Anleiterstellen zählt die Außenhöhe über Gelände; bei Rettungsfenstern ist auch die innere Höhe über Fußboden zu prüfen. Das sind verschiedene Bezugspunkte."],
["Aufstellfläche",/\bAufstellfläche\w*/i,"Besonders ausgeführte Fläche für ein Hubrettungsfahrzeug. Zusätzlich können hindernisfreie Streifen und zulässige Neigungen erforderlich sein."],
["Bewegungsfläche",/\bBewegungsfläche\w*/i,"Fläche für Einsatzfahrzeuge und die Entwicklung von Einsatzkräften und Gerät. Laut Vorlesung je Fahrzeug 7 × 12 m; eine Zufahrt ersetzt sie nicht."],
["Feuerwehrzufahrt",/\b(Zufahrt|Durchfahrt|Fahrbahnbreite)\w*/i,"Befahrbare Verbindung von der öffentlichen Verkehrsfläche zu erforderlichen Feuerwehrflächen. Breite, Höhe, Kurven und Tragfähigkeit sind funktionsabhängig."],
["Achslast",/\bAchslast\b/i,"Belastung durch eine Fahrzeugachse. Die Folie nennt 10 t Achslast und 16 t zulässiges Gesamtgewicht: verschiedene Größen."],
["Brandschutznachweis",/\b(Brandschutznachweis|Brandschutzkonzept)\b/i,"Bautechnischer Nachweis, der SOLL-Anforderungen, geplante IST-Ausführung und eine Bewertung samt möglicher Abweichungen nachvollziehbar dokumentiert."],
["MLAR",/\bMLAR\b/i,"Muster-Leitungsanlagen-Richtlinie: behandelt unter anderem die brandschutztechnische Führung von Leitungsanlagen sowie Durchführungen."],
["M-LüAR",/\bM.?LüAR\b/i,"Muster-Lüftungsanlagen-Richtlinie: behandelt die brandschutztechnische Ausführung von Lüftungsanlagen, unter anderem bei raumabschließenden Bauteilen."],
["FAT",/\bFAT\b/i,"Feuerwehr-Anzeigetableau: zeigt unter anderem ausgelöste Melder bzw. Meldungen einer Brandmeldeanlage an."],
["FBF",/\bFBF\b/i,"Feuerwehr-Bedienfeld: Bedien- und Steuereinrichtung der Brandmeldeanlage für die Feuerwehr."],
["Brandmeldeanlage",/\b(Brandmeldeanlage|BMA)\b/i,"Technische Anlage zur Branddetektion und Meldung. Ihre Detektion ersetzt nicht automatisch bauliche Rettungswege oder die Brandausbreitungsbegrenzung."],
["Brandschutzordnung",/\bBrandschutzordnung\b/i,"Organisatorische Regeln zum Verhüten von Bränden sowie zum Verhalten im Brandfall; keine bauliche Brandwand oder Löschanlage."],
["Werkfeuerwehr",/\bWerkfeuerwehr\b/i,"Betriebliche Feuerwehr mit besonderem Bezug zu den Risiken des Werkes. Sie kann in speziellen Brandschutzkonzepten eine Rolle spielen."],
["Hochhaus",/\bHochhaus\w*/i,"Nach der Vorlesung bei mehr als 22 m maßgeblicher Gebäudehöhe; mehr als 60 m gilt als hohes Hochhaus."],
["Beherbergungsstätte",/\b(Beherbergungsstätte|Gastbetten|Hotel)\b/i,"Nutzung zur Beherbergung von Gästen. Der Foliensatz stellt besondere Anforderungen aufgrund von Ortsunkundigkeit und der Schlafsituation dar."],
["Industriebau",/\b(Industriebau|MIndBauRL)\b/i,"Industrielle Nutzung mit eigenen Anforderungen, etwa zu Abschnittsgrößen und Rettungswegen, unter Berücksichtigung typischer Brandlasten."],
["Bestandsschutz",/\bBestandsschutz\b/i,"Rechtlicher Schutz für eine unter den Voraussetzungen des Bestandsrechts zulässige Anlage. Eine neue Vorschrift beseitigt den Schutz nicht schon für sich genommen."],
["Formelle Legalität",/\bformelle\s+Legalität\b/i,"Eine Anlage ist nach den wirksamen behördlichen Zulassungen errichtet worden. Daneben unterscheidet die Vorlesung materielle Legalität."],
["ETK",/\b(ETK|Einheitstemperaturzeitkurve)\b/i,"Nominelle Temperatur-Zeit-Kurve für die Standard-Brandbeanspruchung bei der Feuerwiderstandsprüfung und Bemessung."],
["Brandklasse",/\bBrandklasse\b/i,"Klassifizierung nach Art des brennenden Stoffes; nicht mit Baustoffklassen und Feuerwiderstandsklassen verwechseln."],
["Leistungsphase",/\bLeistungsphase\b/i,"Abgrenzung unterschiedlicher Planungsleistungen. Objektüberwachung ist laut Angebotserstellungs-Vorlesung Leistungsphase 8."]
];
function explain(card, selectedIndex){
 const s=[card.q,card.a,card.why||""].join(" ");
 let found=terms.filter(t=>t[1].test(s)).slice(0,4).map(t=>({term:t[0],meaning:t[2]}));
 let law=(s.match(/§\s*\d+[a-z]?(?:\s*Abs\.?\s*\d+)?\s*(?:MBO|LBO)?/gi)||[]);
 law=[...new Set(law.map(x=>x.trim()))].slice(0,4);
 let chosen=(typeof selectedIndex==="number"&&card.options)?card.options[selectedIndex]:null;
 let correct=(card.options&&typeof card.correct==="number")?card.options[card.correct]:null;
 let contrast=chosen&&selectedIndex!==card.correct?
   "Deine Auswahl: „"+chosen+"“. Die Folie nennt stattdessen: „"+correct+"“. Die beiden Angaben dürfen nicht gleichgesetzt werden; prüfe die Bedingung bzw. die genannte Einheit.":
   (correct?"Die richtige Auswahl lautet: „"+correct+"“; alle anderen Möglichkeiten erfüllen die auf der Quellenfolie abgefragte Bedingung nicht.":"");
 return {
  principle:details[card.id]||decks[card.deck]||"Erst die gesuchte fachliche Anforderung bestimmen, dann prüfen, ob die Antwort diese Bedingung tatsächlich erfüllt.",
  terms:found,law:law,contrast:contrast,
  source:"Vorlesung "+card.deck+", Folie "+card.slide,
  note:"Der Gesetzes- und Folienhinweis bezieht sich auf die hochgeladenen Lehrunterlagen. Wo die Karte keinen Paragraphen nennt, wird keiner ergänzt."
 };
}
window.BRANDLAB_EXPLAIN=explain;
})();
