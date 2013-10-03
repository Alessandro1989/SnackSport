// FOODTYPE

function FoodType(name, calories) {
	this.name = name;
	this.caloriesFor100Grams = calories;
}

// FOODLIST

function FoodList() {
	this.list = ["sport", "verdura fresca", "legumi", "frutta fresca", "frutta e ortaggi conservati", "bevande analcoliche", "bevande alcoliche", "grassi e condimenti", "cereali e derivati", "carni fresche", "carni conservate", "frattaglie", "pesci", "pesci conservati", "latticini","uova", "dolci", "piatti pronti e varie"];

	this.sport = parser(sport());
	this.verduraFresca = parser(verduraFresca());
	this.legumi = parser(legumi());
	this.fruttaFresca = parser(fruttaFresca());
	this.fruttaEOrtaggiConservati = parser(fruttaEOrtaggiConservati());
	this.bevandeAnalcoliche = parser(bevandeAnalcoliche());
	this.bevandeAlcoliche = parser(bevandeAlcoliche());
	this.grassiECondimenti = parser(grassiECondimenti());
	this.cerealiEDerivati = parser(cerealiEDerivati());
	this.carniFresche = parser(carniFresche());
	this.carniConservate = parser(carniConservate());
	this.frattaglie = parser(frattaglie());
	this.pesci = parser(pesci());
	this.pesciConservati = parser(pesciConservati());
	this.latticini = parser(latticini());
	this.uova = parser(uova());
	this.dolci = parser(dolci());
	this.piattiProntiEVarie = parser(piattiProntiEVarie());
}

FoodList.prototype.getList = function(type) {
	if (type == "sport")
		return this.sport;
	else if (type == "verdura fresca")
		return this.verduraFresca;
	else if (type == "legumi")
		return this.legumi;
	else if (type == "frutta fresca")
		return this.fruttaFresca;
	else if (type == "frutta e ortaggi conservati")
		return this.fruttaEOrtaggiConservati;
	else if (type == "bevande analcoliche")
		return this.bevandeAnalcoliche;
	else if (type == "bevande alcoliche")
		return this.bevandeAlcoliche;
	else if (type == "grassi e condimenti")
		return this.grassiECondimenti;
	else if (type == "cereali e derivati")
		return this.cerealiEDerivati;
	else if (type == "carni fresche")
		return this.carniFresche;
	else if (type == "carni conservate")
		return this.carniConservate;
	else if (type == "frattaglie")
		return this.frattaglie;
	else if (type == "pesci")
		return this.pesci;
	else if (type == "pesci conservati")
		return this.pesciConservati;
	else if (type == "latticini")
		return this.latticini;
	else if (type == "uova")
		return this.uova;
	else if (type == "dolci")
		return this.dolci;
	else if (type == "piatti pronti e varie")
		return this.piattiProntiEVarie;
}

FoodList.prototype.addFood = function(name, calories, type) {
	this.getList(type).push(new FoodType(name, calories));
}

FoodList.prototype.getFood = function(name) {
	for (var j = 0; j < this.list.length; j++) {
		var list = this.getList(this.list[j]);
		for (var i = 0; i < list.length; i++) {
			if (list[i].name == name)
				return list[i];
		}
	}
}

FoodList.prototype.getCalories = function(name) {
	return this.getFood(name).caloriesFor100Grams;
}

function parser(text) {
	var array = [];
	if((text != "") && (text != null)) {
		var strSplit = text.split(",");
		for (var i = 0; i < strSplit.length; i++) {
			var strSplit2 = strSplit[i].split("-");
			array[i] = new FoodType(strSplit2[0], strSplit2[1]);
		}
	}
	return array;
}

function sport() {
	return "" +
	"aerobica-650,"+
	"alpinismo-960,"+
	"ballare (liscio)-318,"+
	"ballare (moderno)-450,"+
	"ballare (twist lambada)-1020,"+
	"baseball-360,"+
	"boxe-900,"+
	"calcio-840,"+
	"camminare lento-300,"+
	"camminare-400,"+
	"camminare veloce-500,"+
	"canoa (amatoriale)-276,"+
	"canoa (agonistica)-642,"+
	"canottaggio (agonistico)-1140,"+
	"ciclismo-600,"+
	"ciclismo (agonistico)-1062,"+
	"cyclette-450,"+
	"corsa -840,"+
	"corsa (andatura veloce)-1320,"+
	"golf-540,"+
	"judo-1200,"+
	"karate-1200,"+
	"kendo-1200,"+
	"marcia-900,"+
	"nuoto-1000,"+
	"pallanuoto-900,"+
	"pallacanestro-840,"+
	"pallavolo-840,"+
	"pattinare-600,"+
	"ping pong-420,"+
	"salto corda 80 al minuto-960,"+
	"salto corda 125 al minuto-1200,"+
	"scherma-480,"+
	"sci da fondo(pianura)-720,"+
	"sci da fondo(salita)-1680,"+
	"sollevamento pesi-480,"+
	"tennis-700,"+
	"windsurf-480,"+
	"yoga-330"
	;
}


function verduraFresca() {
	return "" +
	"agretti-17," +
	"asparagi di bosco-35," +
	"asparagi di campo-29," +
	"asparagi di serra-24," +
	"barbabietole rosse-19," +
	"basilico-39," +
	"biete o erbette-17," +
	"broccolo a testa-27," +
	"broccolo rapa (cima di rapa)-22," +
	"carciofi-22," +
	"cardi-10," +
	"carote-35," +
	"cavolfiore-25," +
	"cavoli di Bruxelles-37," +
	"cavolo broccolo verde ramoso-24," +
	"cavolo cappuccio rosso-20," +
	"cavolo cappuccio verde-19," +
	"cetrioli-14," +
	"cicoria da taglio-12," +
	"cicoria di campo-10," +
	"cicoria witloof (Bruxelles)-18," +
	"cipolle-26," +
	"cipolline e cipollotti-38," +
	"fagiolini o taccole (freschi)-18," +
	"finocchi-9," +
	"fiori di zucca-12," +
	"foglie di rapa-22," +
	"funghi champignon prataioli-20," +
	"funghi ovuli-11," +
	"funghi pleurotes-28," +
	"funghi porcini-22," +
	"germogli di soia-49," +
	"indivia-16," +
	"lattuga-19," +
	"lattuga a cappucio-19," +
	"lattuga da taglio-14," +
	"melanzane-18," +
	"patate-85," +
	"patate arrosto-148," +
	"patate bollite (senza buccia)-71," +
	"patate fritte-188," +
	"patate novelle-70," +
	"peperoncini piccanti-26," +
	"peperoni gialli e rossi-31," +
	"peperoni verdi-27," +
	"pomodori conserva-96," +
	"pomodori da insalata-17," +
	"pomodori maturi-19," +
	"pomodori passata-11," +
	"pomodori pelati (scatola)-21," +
	"pomodori S.Marzano-17," +
	"pomodori succo-14," +
	"porri-29," +
	"prezzemolo-20," +
	"radicchio rosso-13," +
	"radicchio verde-14," +
	"rafano (cren o ramolaccio)-19," +
	"rape-18," +
	"ravanelli-11," +
	"rucola-28," +
	"scarola-15," +
	"scorzonera-65," +
	"sedano-20," +
	"sedano rapa-23," +
	"spinaci-31," +
	"tarassaco o dente di leone-36," +
	"tartufo nero-31," +
	"topinambur-85," +
	"vegetali misti surgelati-67," +
	"verza-33," +
	"zucca gialla-18," +
	"zucchine-11"
	;
}

function legumi() {
	return "" +
	"ceci cotti-120," +
	"ceci lessati in scatola (scolati)-112," +
	"ceci secchi-316," +
	"cicerchie secche-311," +
	"fagioli borlotti freschi (cotti)-69," +
	"fagioli borlotti freschi (crudi)-133," +
	"fagioli borlotti secchi-315," +
	"fagioli cannellini cotti-91," +
	"fagioli cannellini in scatola (scolati)-76," +
	"fagioli cannellini secchi-279," +
	"fagioli dall'occhio secchi-293," +
	"fagioli lessati in scatola (scolati)-92," +
	"fagiolini freschi crudi-18," +
	"fagiolini lessati in scatola-24," +
	"fagiolini surgelati lessati-25," +
	"fave fresche-42," +
	"fave sgusciate secche-341," +
	"lenticchie cotte-92," +
	"lenticchie in scatola (scolate)-82," +
	"lenticchie secche-291," +
	"lupini deamarizzati ammollati-114," +
	"piselli freschi-52," +
	"piselli lessati in scatola-68," +
	"piselli secchi-306," +
	"piselli surgelati-72," +
	"soia lessata in scatola-106," +
	"soia secca-407"
	;
}

function fruttaFresca() {
	return "" +
	"albicocche-28," +
	"amarene-41," +
	"ananas-40," +
	"anona-68," +
	"arance-34," +
	"arance succo-33," +
	"avocado-231," +
	"babaco-21," +
	"banane-65," +
	"ciliege-38," +
	"clementine-37," +
	"cocomero-15," +
	"feijoa-46," +
	"fichi-47," +
	"fichi d'india-53," +
	"fragole-27," +
	"guava-20," +
	"kaki o loti-65," +
	"kiwi-44," +
	"lamponi-34," +
	"latte di cocco-257," +
	"limette-39," +
	"limoni-11," +
	"limoni succo-6," +
	"litchi-70," +
	"mandaranci-53," +
	"mandarini-72," +
	"mango-53," +
	"melagrane-63," +
	"mele cotogne-34," +
	"mele delicious-43," +
	"mele golden-43," +
	"mele granny smith-38," +
	"melone d'estate-33," +
	"melone d'inverno-22," +
	"mirtilli-25," +
	"more-36," +
	"nespole-28," +
	"noce di cocco-364," +
	"papaia-28," +
	"passiflora-36," +
	"pere-35," +
	"pesche-27," +
	"pompelmo-26," +
	"prugne o susine-42," +
	"ribes-28," +
	"succo di albicocca o pera-56," +
	"succo di pompelmo-41," +
	"uva da tavola-61"
	;
}

function fruttaEOrtaggiConservati() {
	return "" +
	"albicocche sciroppate-63," +
	"albicocche secche-274," +
	"ananas sciroppate-64," +
	"arachidi tostate-598," +
	"carciofini sotto olio-68," +
	"castagne (fresche)-153," +
	"castagne lesse-120," +
	"castagne secche-287," +
	"cetriolini sott'aceto-10," +
	"crauti-24," +
	"crema di marroni-291," +
	"datteri secchi-253," +
	"fichi secchi-256," +
	"funghi sott'olio-48," +
	"giardiniera-7," +
	"mandorle dolci-603," +
	"nocciole-655," +
	"noci pecan-705," +
	"noci secche-689," +
	"olive da tavola conservate-268," +
	"olive nere-235," +
	"olive verdi-142," +
	"peperoni sott'aceto-15," +
	"pere candite-295," +
	"pesche sciroppate-55," +
	"pinoli sgusciati-595," +
	"pistacchi sgusciati-608," +
	"prugne secche-220," +
	"salsa pomodoro casalinga-69," +
	"uva secca-283"
	;
}

function bevandeAnalcoliche() {
	return "" +
	"acqua-0," +
	"aranciata-38," +
	"caffe'-6," +
	"caffelatte-152," +
	"coca cola-39," +
	"gassosa-15," +
	"spremuta di arancia non zuccherata-33," +
	"succo di frutta non zuccherato-35," +
	"succo di frutta zuccherato-45"	
	;
}

function bevandeAlcoliche() {
	return "" +
	"aperitivo alcolico-140," +
	"amaro a bassa gradazione-126," +
	"amaro ad alta gradazione-242," +
	"bacardi-280," +
	"baileys-327," +
	"birra chiara-33," +
	"birra scura-46," +
	"birra doppio malto-53," +
	"grappa-242," +
	"liquore-166," +
	"limoncello-304," +
	"sangria-76 ," +
	"spumante-95," +
	"vino a bassa gradazione alcolica (10 gradi)-55," +
	"vino a media gradazione alcolica (12 gradi)-66," +
	"vino ad alta gradazione alcolica (14 gradi)-77," +
	"whisky-245"
	;
}

function grassiECondimenti() {
	return "" +
	"burro-758," +
	"lardo-891," +
	"margarina (vegetale)-7600," +
	"olio di oliva-8990," +
	"olio di semi-8990," +
	"pancetta di maiale-3370," +
	"strutto-892"
	;
}

function cerealiEDerivati() {
	return "" +
	"amido-378," +
	"biscotti al burro-419," +
	"biscotti frollini-429," +
	"biscotti integrali-425," +
	"biscotti per l'infanzia-416," +
	"biscotti secchi-416," +
	"biscotti wafers-454," +
	"brioches dolce cornetti-413," +
	"colomba-380," +
	"cornflakes-361," +
	"crackers al formaggio-502," +
	"crackers salati-428," +
	"crespelle-66," +
	"croissant-358," +
	"crusca o tritello-206," +
	"farina d'avena-385," +
	"farina di castagne-323," +
	"farina di ceci-298," +
	"farina di frumento integrale-319," +
	"farina di frumento tipo 0-341," +
	"farina di frumento tipo 00-340," +
	"farina di grano saraceno-321," +
	"farina di mais-362," +
	"farina di riso-360," +
	"farina di soia-446," +
	"farina d'orzo-357," +
	"farro-335," +
	"fette biscottate-408," +
	"fette biscottate integrali-365," +
	"fiocchi d'avena-373," +
	"fiocchi di mais-368," +
	"frumento duro-312," +
	"frumento tenero-317," +
	"germe di grano-408," +
	"gnocchi freschi di patate industriali-169," +
	"grano saraceno-314," +
	"grissini-431," +
	"mais-353," +
	"mais dolce in scatola-98," +
	"maizena (amido di mais)-327," +
	"miglio decorticato-360," +
	"mollica di pane-280," +
	"orzo perlato-319," +
	"pane al malto-267," +
	"pane all'uva-271," +
	"pane azzimo-377," +
	"pane di segale-219," +
	"pane integrale-243," +
	"pane tipo 0-275," +
	"pane tipo 00-289," +
	"pane tipo 1-265," +
	"pangrattato-351," +
	"panini al latte-295," +
	"panini all'olio-299," +
	"panino formato rosetta-269," +
	"pasta all'uovo fresca confezionata-272," +
	"pasta all'uovo secca-366," +
	"pasta di pane fresca-206," +
	"pasta di semola-325," +
	"pasta di semola fresca confezionata-263," +
	"pasta glutinata-363," +
	"pasta integrale-229," +
	"pizza bianca-302," +
	"pizza pomodoro e mozzarella-271," +
	"riso brillato-332," +
	"riso integrale-337," +
	"riso parboiled-337," +
	"savoiardi-392," +
	"semola-339," +
	"tapioca-360," +
	"tigelle emiliane-434," +
	"tortellini freschi-300," +
	"tortellini secchi-376"
	;
}

function carniFresche() {
	return "" +
	"abbacchio-112," +
	"agnello (solo carne)-162," +
	"anatra spennata-159," +
	"bovino adulto (copertina sottospalla collo)-133," +
	"bovino adulto (geretto per ossobuco)-112," +
	"bovino adulto (pancia biancostato punta)-171," +
	"bovino adulto costata-140," +
	"bovino adulto fesa-103," +
	"bovino adulto filetto-127," +
	"bovino adulto girello-110," +
	"bovino adulto lombata-134," +
	"bovino adulto noce-106," +
	"bovino adulto scamone-119," +
	"bovino adulto sottofesa-111," +
	"bovino adulto spalla (fesone fusello)-108," +
	"cappone (intero)-296," +
	"capretto-122," +
	"capriolo-110," +
	"castrato semigrasso-226," +
	"cavallo-140," +
	"cervo (carne magra)-91," +
	"cinghiale (polpa)-109," +
	"coniglio coscio-137," +
	"coniglio intero fresco (spellato)-118," +
	"coniglio intero surgelato-116," +
	"fagiano pulito-144," +
	"faraona coscia-114," +
	"faraona petto-107," +
	"gallina pronta da cuocere-194," +
	"lepre (coscia)-115," +
	"lumaca o chiocciola-67," +
	"maiale leggero (bistecca)-157," +
	"maiale leggero (coscio)-110," +
	"maiale leggero (lombo)-146," +
	"maiale leggero (spalla)-133," +
	"maiale pesante (coscio)-128," +
	"maiale pesante (lombo)-172," +
	"maiale pesante (spalla)-156," +
	"oca (pronta da cuocere)-373," +
	"pecora (valori medi)-293," +
	"pernice o starna (coscia)-113," +
	"piccione giovane-138," +
	"pollo ala (cruda con pelle)-196," +
	"pollo coscia-130," +
	"pollo fuso (crudo con pelle)-125," +
	"pollo intero (crudo con pelle)-171," +
	"pollo petto-100," +
	"pollo sovracoscio (crudo con pelle)-196," +
	"quaglia-161," +
	"rana (carne)-64," +
	"struzzo (polpa)-92," +
	"tacchino ala-193," +
	"tacchino coscia-186," +
	"tacchino fuso (crudo con pelle)-126," +
	"tacchino petto (fesa)-107," +
	"tacchino sovracoscio (crudo no pelle)-120," +
	"tordo-143," +
	"vitello-92"
	;
}

function carniConservate() {
	return "" +
	"bresaola-151," +
	"capocollo-450," +
	"carne bovina in gelatina in scatola-67," +
	"ciccioli-523," +
	"coppa Parma-398," +
	"corned beef in scatola-219," +
	"cotechino (confezionato precotto)-450," +
	"cotechino (confezionato precotto) cotto-307," +
	"cotenna-603," +
	"mortadella-317," +
	"mortadella di bovino e suino-388," +
	"pancetta magretta-315," +
	"pancetta tesa-337," +
	"paté di fegato-341," +
	"prosciutto cotto-215," +
	"prosciutto cotto privato del grasso-132," +
	"prosciutto crudo-224," +
	"prosciutto crudo privato del grasso-159," +
	"salame Milano-392," +
	"salame brianza-384," +
	"salame cacciatore-425," +
	"salame nostrano-370," +
	"salciccia di suino fresca cruda-304," +
	"salsiccia di fegato-424," +
	"speck-303," +
	"wurstel crudo-270," +
	"zampone precotto confezionato-361," +
	"zampone precotto confezionato cotto-319"
	;
}

function frattaglie() {
	return "" +
	"animelle di bovino-114," +
	"cervello di bovino-157," +
	"coratella d'agnello-105," +
	"coratella di vitello-97," +
	"cuore di bovino-123," +
	"fegato di bovino-146," +
	"fegato di pollo-123," +
	"fegato di suino-140," +
	"frattaglie di coniglio-147," +
	"lingua di bovino-232," +
	"milza di bovino-107," +
	"orecchie di maiale-400," +
	"piede di maiale-231," +
	"rigaglie di pollo-196," +
	"rene di bovino-118," +
	"trippa di bovino-108"
	;
}

function pesci() {
	return "" +
	"acciughe-96," +
	"aguglia-88," +
	"aluzzo imperiale-91," +
	"anguilla di fiume-261," +
	"anguilla di mare-237," +
	"anguilla d'allevamento filetti-317," +
	"aragosta o astice-86," +
	"aringa-216," +
	"arselle o telline-72," +
	"barbo-84," +
	"boccadoro (pagello boccadoro)-118," +
	"boga-87," +
	"bope-109," +
	"branzino-82," +
	"calamari freschi-68," +
	"calamari surgelati-66," +
	"calcinello-68," +
	"cannolicchio-75," +
	"capitone-247," +
	"carpa-140," +
	"cavedano-79," +
	"cefalo muggine-127," +
	"cernia surgelata-86," +
	"coregone o lavarello-135," +
	"cozze-84," +
	"dentice fresco-101," +
	"dentice surgelato-100," +
	"gallinella o capone-70," +
	"gamberi o mazzancolle fresco-71," +
	"gambero sgusciato surgelato-74," +
	"gattuccio-70," +
	"ghiozzo-74," +
	"ghiozzo d fiume-85," +
	"lasca-124," +
	"latterini e pesciolini piccoli-145," +
	"luccio-80," +
	"menola-69," +
	"merluzzo fresco o nasello-71," +
	"merluzzo surgelato filetti-68," +
	"murena-100," +
	"mormora filetti-97," +
	"occhiata filetti-117," +
	"orata (surgelata)-90," +
	"orata fresca-77," +
	"ostriche-69," +
	"pagello-101," +
	"palamita-96," +
	"palombo-65," +
	"passera-45," +
	"persico sole-76," +
	"pesce persico (filetto)-92," +
	"pesce gatto-92," +
	"pesce spada-109," +
	"pettine o capasanta-80," +
	"polpo-57," +
	"rana pescatrice o coda di rospo-62," +
	"razza-68," +
	"rombo-81," +
	"salmone fresco-182," +
	"salpa-104," +
	"san pietro-77," +
	"sarago-103," +
	"sarda-129," +
	"scampi-86," +
	"scorfano-82," +
	"seppia-72," +
	"sgombro-168," +
	"smeriglio-66," +
	"sogliola fresca-83," +
	"sogliola surgelata-81," +
	"spigola-82," +
	"storione (filetti)-145," +
	"tinca-76," +
	"tonno-158," +
	"torpedine-63," +
	"triglia-123," +
	"trota-86," +
	"trota iridea-118," +
	"vongole-72"
	;
}

function pesciConservati() {
	return "" +
	"alici in salsa-105," +
	"alici sotto sale-128," +
	"alici sott'olio-206," +
	"anguilla marinata-259," +
	"aringhe affumicate-194," +
	"aringhe marinate-199," +
	"aringhe salate-218," +
	"baccala ammollato-95," +
	"baccala secco-122," +
	"bottarga di muggine-373," +
	"caviale-255," +
	"polpa di granchio-81	," +
	"salmone in salamoia-188," +
	"salmone affumicato-142," +
	"sardine salate in scatola-133," +
	"sardine sott'olio (sgocciolate)-198," +
	"sgombro in salamoia-177," +
	"sgombro sott'olio-201," +
	"tonno in salamoia sgocciolato-103," +
	"tonno sott'olio (sgocciolato)-192"
	;
}

function latticini() {
	return "" +
	"asiago-356," +
	"bra-328," +
	"brie-319," +
	"burrini-511," +
	"caciocavallo-431," +
	"caciottina fresca-261," +
	"caciotta romana di pecora-364," +
	"caciotta toscana-365," +
	"camembert-297," +
	"caprino fresco-277," +
	"caprino stagionato-518," +
	"cheddar-381," +
	"crescenza o stracchino-281," +
	"dolce verde-266," +
	"edam stagionato-345," +
	"emmenthal-403," +
	"feta-250," +
	"fiocchi di formaggio magro-115," +
	"fior di latte-265," +
	"fontina-343," +
	"formaggino grasso-309," +
	"formaggino meno grasso o sottiletta-239," +
	"formaggio cremoso spalmabile-313," +
	"formaggio molle da tavola-373," +
	"gorgonzola-320," +
	"grana-406," +
	"groviera-389," +
	"latte condensato zuccherato-328," +
	"latte di capra-72," +
	"latte di pecora-103," +
	"latte di vacca intero-64," +
	"latte di vacca parzialmente scremato-46," +
	"latte di vacca scremato-36," +
	"latte in polvere intero-484," +
	"latte in polvere scremato-351," +
	"latteria-450," +
	"mascarpone-453," +
	"montasio-411," +
	"mozzarella di bufala-288," +
	"mozzarella di vacca-253," +
	"panna da montare-337," +
	"panna da cucina-187," +
	"parmigiano-387," +
	"pastorella-364," +
	"pecorino-392," +
	"pecorino romano-402," +
	"pecorino siciliano stagionato-418," +
	"provola affumicata-261," +
	"provolone-366," +
	"quartirolo stracchino-300," +
	"ricotta di pecora-157," +
	"ricotta di vacca-146," +
	"robiola-338," +
	"scamorza-334," +
	"spressa-411," +
	"taleggio-312," +
	"tofu-69," +
	"yogurt alla frutta-88," +
	"yogurt intero-65," +
	"yogurt parzialmente scremato-43," +
	"yogurt scremato-36," +
	"yogurt greco da latte intero-115"
	;
}

function uova() {
	return "" +
	"albume-43," +
	"polvere di uovo-537," +
	"tuorlo-325," +
	"uovo di anatra-190," +
	"uovo di gallina-128"
	;
}

function dolci() {
	return "" +
	"amaretti-428," +
	"arance candite-313," +
	"baba al rhum-229," +
	"biscotti salati (tipo ritz)-466," +
	"cacao dolce-349," +
	"canditi-283," +
	"cannoli alla crema-368," +
	"caramelle dure-344," +
	"caramelle tipo mou-430," +
	"cassata gelato-243," +
	"ciliege candite-306," +
	"cioccolato al latte-545," +
	"cioccolato fondente-515," +
	"cioccolato al latte con nocciole-543," +
	"colomba-380," +
	"crem caramel-224," +
	"crema di nocciole e cacao-537," +
	"crema pasticcera o vaniglia-212," +
	"crostata con marmellata-339," +
	"gelato al cacao-173," +
	"gelato al limone-132," +
	"gelato fiordilatte-218," +
	"ghiacciolo all'arancio-137," +
	"girelle Motta-352," +
	"gomma da masticare-263," +
	"latte di mandorla-23," +
	"marmellata-222," +
	"merendine con marmellata-358," +
	"merendine farcite-413," +
	"merendine tipo pan di Spagn- 46," +
	"miele-304," +
	"mousse al cioccolato (polvere)-447," +
	"pan di Spagna-314," +
	"panettone-333," +
	"pasta brisee-479," +
	"pasta di mandorle o marzapane-455," +
	"pasta frolla-410," +
	"pasta sfoglia surgelata-509," +
	"plum cake allo yogurt-0," +
	"savoiardi-391," +
	"torrone alla mandorla-479," +
	"torta margherita-367," +
	"uva sultanina secca-256," +
	"voul au vent surgelati-509," +
	"zucchero-392," +
	"marronita (crema di marroni)-222," +
	"Wafer ricoperto di cioccolato-498"
	;
}

function piattiProntiEVarie() {
	return "" +
	"aceto-4," +
	"besciamella-155," +
	"bigne surgelati-335," +
	"brodo animale-7," +
	"brodo vegetale-0," +
	"cacao amaro-355," +
	"cacao dolce-349," +
	"conserva di pomodoro-96," +
	"crema di asparagi in scatola-26," +
	"crema di cipolle in scatola-26," +
	"crema di funghi in scatola-56," +
	"crespelle semplici-166," +
	"crocchette di patate-123," +
	"dadi per brodo-250," +
	"estratto di carne-220," +
	"farina di castagne-343," +
	"fecola di patate-346," +
	"foies gras / fegato grasso-442," +
	"gelatina-338," +
	"giardiniera-7," +
	"insalata russa estiva-315," +
	"ketchup-98," +
	"latte di soia-32," +
	"lievito di birra-56," +
	"maionese-655," +
	"minestrone di verdura surgelato-51," +
	"muesli-364," +
	"panna cotta-110," +
	"pasta d'olive-228," +
	"pesto pronto-603," +
	"pure in busta-73," +
	"ravioli ai carciofi-271," +
	"salsa bernese (vasetto 250 ml)-653," +
	"salsa cocktail (vasetto 250 ml)-682," +
	"salsa di soia-66," +
	"salsa tartara (vasetto 200 ml o 185 g)-626," +
	"salsa tonnata (vasetto 250 ml)-681," +
	"salsa verde (vasettp 250 ml)-675," +
	"senape (vasetto 125 ml)-78," +
	"soffritto verdure misto surgelato-26," +
	"vitello arrosto-147," +
	"yogurt di soia-72," +
	"zuppa del casale surgelata-120," +
	"tacos pronti (conchiglie di pasta)-463"
	;
}