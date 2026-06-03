import { useState, useEffect, useRef } from "react";

const UI = {
  en: { subtitle:"Your Baking Kitchen ✨", setName:"Choose your username", namePh:"Your name…", startBtn:"Let's bake! 🎂", back:"← Back", allRecipes:"← All Recipes", recipesTitle:"📖 Recipes", search:"🔍 Search recipe…", ingr:"🛒 Ingredients", steps:"👨‍🍳 Preparation", quick:"Quick", pro:"Pro", noRecipe:"No recipe found 🍪", noIngr:"No ingredients added", noSteps:"No steps added", emojiLbl:"Emoji", nameLbl:"Recipe name *", catPh:"Category (e.g. Cake, Muffins…)", quickVer:"⚡ Quick Version", proVer:"⭐ Pro Version", timePh:"Time (e.g. 30 min)", ingrPh:"Ingredients – one per line", stepsPh:"Steps – one per line", cancel:"Cancel", saveBtn:"💾 Save Recipe", gameTitle:"🎮 Cake Dash", gameInstr:"Dodge knives, forks & spoons!\n↑↓ Arrow keys · W/S · or tap", play:"▶ Play", gameOver:"Game Over!", again:"🔄 Play Again", score:"Score", tip:"Mobile: tap top = up · bottom = down", great:"🏆 Fantastic!", ok:"🌟 Very good!", hi:"Hi", edit:"✏️", recipes:"Recipes", browse:"Browse all recipes", game:"Mini Game", gameSub:"Cake Dash!", aiMenu:"AI Chef", aiMenuSub:"AI creates your recipe", myMenu:"My Recipes", myMenuSub:"Create your own recipes", aiTitle:"🤖 AI Chef", aiSub:"Type a baked good and AI generates the full recipe", aiPh:"e.g. Croissants, Tiramisu, Bagels…", aiGen:"✨ Generate", aiLoading:"Generating recipe…", aiSave:"Save to My Recipes", aiSaved:"Saved! ✅", aiAgain:"Generate Again", aiErr:"Something went wrong. Please try again.", myTitle:"✍️ My Recipes", createNew:"+ Create New Recipe", formTitle:"New Recipe", yourRecipes:"Your saved recipes", noCustom:"You haven't created any recipes yet.", del:"🗑️" },
  de: { subtitle:"Deine Backküche ✨", setName:"Wähle deinen Nutzernamen", namePh:"Dein Name…", startBtn:"Los backen! 🎂", back:"← Zurück", allRecipes:"← Alle Rezepte", recipesTitle:"📖 Rezepte", search:"🔍 Rezept suchen…", ingr:"🛒 Zutaten", steps:"👨‍🍳 Zubereitung", quick:"Schnell", pro:"Profi", noRecipe:"Kein Rezept gefunden 🍪", noIngr:"Keine Zutaten eingetragen", noSteps:"Keine Schritte eingetragen", emojiLbl:"Emoji", nameLbl:"Rezeptname *", catPh:"Kategorie (z.B. Kuchen, Muffins…)", quickVer:"⚡ Schnelle Version", proVer:"⭐ Profi Version", timePh:"Zeit (z.B. 30 Min)", ingrPh:"Zutaten – eine pro Zeile", stepsPh:"Schritte – einer pro Zeile", cancel:"Abbrechen", saveBtn:"💾 Rezept speichern", gameTitle:"🎮 Cake Dash", gameInstr:"Weiche Messern, Gabeln & Löffeln aus!\n↑↓ Pfeiltasten · W/S · oder Tippen", play:"▶ Spielen", gameOver:"Game Over!", again:"🔄 Nochmal", score:"Score", tip:"Mobil: oben = hoch · unten = runter", great:"🏆 Fantastisch!", ok:"🌟 Sehr gut!", hi:"Hallo", edit:"✏️", recipes:"Rezepte", browse:"Alle Rezepte durchsuchen", game:"Mini-Spiel", gameSub:"Cake Dash!", aiMenu:"KI-Koch", aiMenuSub:"KI erstellt dein Rezept", myMenu:"Meine Rezepte", myMenuSub:"Eigene Rezepte erstellen", aiTitle:"🤖 KI-Rezeptgenerator", aiSub:"Tippe ein Gebäck – die KI erstellt das vollständige Rezept", aiPh:"z.B. Croissants, Tiramisu, Bagels…", aiGen:"✨ Generieren", aiLoading:"Rezept wird generiert…", aiSave:"Zu meinen Rezepten", aiSaved:"Gespeichert! ✅", aiAgain:"Nochmal generieren", aiErr:"Etwas ist schiefgelaufen. Bitte erneut versuchen.", myTitle:"✍️ Meine Rezepte", createNew:"+ Neues Rezept erstellen", formTitle:"Neues Rezept", yourRecipes:"Deine gespeicherten Rezepte", noCustom:"Du hast noch keine eigenen Rezepte erstellt.", del:"🗑️" },
  it: { subtitle:"La tua cucina da forno ✨", setName:"Scegli il tuo nome utente", namePh:"Il tuo nome…", startBtn:"Iniziamo! 🎂", back:"← Indietro", allRecipes:"← Tutte le ricette", recipesTitle:"📖 Ricette", search:"🔍 Cerca ricetta…", ingr:"🛒 Ingredienti", steps:"👨‍🍳 Preparazione", quick:"Veloce", pro:"Pro", noRecipe:"Nessuna ricetta trovata 🍪", noIngr:"Nessun ingrediente aggiunto", noSteps:"Nessun passaggio aggiunto", emojiLbl:"Emoji", nameLbl:"Nome ricetta *", catPh:"Categoria (es. Torta, Muffin…)", quickVer:"⚡ Versione Veloce", proVer:"⭐ Versione Pro", timePh:"Tempo (es. 30 min)", ingrPh:"Ingredienti – uno per riga", stepsPh:"Passaggi – uno per riga", cancel:"Annulla", saveBtn:"💾 Salva Ricetta", gameTitle:"🎮 Cake Dash", gameInstr:"Schiva coltelli, forchette & cucchiai!\n↑↓ Frecce · W/S · o tocca", play:"▶ Gioca", gameOver:"Game Over!", again:"🔄 Riprova", score:"Punteggio", tip:"Mobile: sopra = su · sotto = giù", great:"🏆 Fantastico!", ok:"🌟 Molto bravo!", hi:"Ciao", edit:"✏️", recipes:"Ricette", browse:"Sfoglia tutte le ricette", game:"Mini Gioco", gameSub:"Cake Dash!", aiMenu:"Chef AI", aiMenuSub:"L'AI crea la tua ricetta", myMenu:"Le mie Ricette", myMenuSub:"Crea le tue ricette", aiTitle:"🤖 Chef AI", aiSub:"Scrivi un dolce e l'AI genera la ricetta completa", aiPh:"es. Croissant, Tiramisù, Bagel…", aiGen:"✨ Genera", aiLoading:"Generazione ricetta…", aiSave:"Salva nelle mie ricette", aiSaved:"Salvato! ✅", aiAgain:"Genera di nuovo", aiErr:"Qualcosa è andato storto. Riprova.", myTitle:"✍️ Le mie Ricette", createNew:"+ Crea Nuova Ricetta", formTitle:"Nuova Ricetta", yourRecipes:"Le tue ricette salvate", noCustom:"Non hai ancora creato ricette.", del:"🗑️" },
  fr: { subtitle:"Votre cuisine pâtissière ✨", setName:"Choisissez votre nom d'utilisateur", namePh:"Votre nom…", startBtn:"On pâtisse! 🎂", back:"← Retour", allRecipes:"← Toutes les recettes", recipesTitle:"📖 Recettes", search:"🔍 Chercher une recette…", ingr:"🛒 Ingrédients", steps:"👨‍🍳 Préparation", quick:"Rapide", pro:"Pro", noRecipe:"Aucune recette trouvée 🍪", noIngr:"Aucun ingrédient ajouté", noSteps:"Aucune étape ajoutée", emojiLbl:"Emoji", nameLbl:"Nom de la recette *", catPh:"Catégorie (ex. Gâteau, Muffins…)", quickVer:"⚡ Version Rapide", proVer:"⭐ Version Pro", timePh:"Temps (ex. 30 min)", ingrPh:"Ingrédients – un par ligne", stepsPh:"Étapes – une par ligne", cancel:"Annuler", saveBtn:"💾 Sauvegarder la Recette", gameTitle:"🎮 Cake Dash", gameInstr:"Évite couteaux, fourchettes & cuillères!\n↑↓ Flèches · W/S · ou touche", play:"▶ Jouer", gameOver:"Game Over!", again:"🔄 Rejouer", score:"Score", tip:"Mobile: haut = monter · bas = descendre", great:"🏆 Fantastique!", ok:"🌟 Très bien!", hi:"Bonjour", edit:"✏️", recipes:"Recettes", browse:"Parcourir toutes les recettes", game:"Mini Jeu", gameSub:"Cake Dash!", aiMenu:"Chef IA", aiMenuSub:"L'IA crée votre recette", myMenu:"Mes Recettes", myMenuSub:"Créez vos propres recettes", aiTitle:"🤖 Chef IA", aiSub:"Tapez une pâtisserie et l'IA génère la recette complète", aiPh:"ex. Croissants, Tiramisu, Bagels…", aiGen:"✨ Générer", aiLoading:"Génération de la recette…", aiSave:"Sauvegarder dans mes recettes", aiSaved:"Sauvegardé! ✅", aiAgain:"Générer à nouveau", aiErr:"Une erreur est survenue. Veuillez réessayer.", myTitle:"✍️ Mes Recettes", createNew:"+ Créer une Nouvelle Recette", formTitle:"Nouvelle Recette", yourRecipes:"Vos recettes sauvegardées", noCustom:"Vous n'avez pas encore créé de recettes.", del:"🗑️" },
  zh: { subtitle:"你的烘焙厨房 ✨", setName:"请设置你的用户名", namePh:"你的名字…", startBtn:"开始烘焙！🎂", back:"← 返回", allRecipes:"← 所有食谱", recipesTitle:"📖 食谱", search:"🔍 搜索食谱…", ingr:"🛒 食材", steps:"👨‍🍳 制作步骤", quick:"快速", pro:"专业", noRecipe:"未找到食谱 🍪", noIngr:"暂无食材", noSteps:"暂无步骤", emojiLbl:"图标", nameLbl:"食谱名称 *", catPh:"分类（如：蛋糕、松饼…）", quickVer:"⚡ 快速版本", proVer:"⭐ 专业版本", timePh:"时间（如：30分钟）", ingrPh:"食材 – 每行一个", stepsPh:"步骤 – 每行一个", cancel:"取消", saveBtn:"💾 保存食谱", gameTitle:"🎮 蛋糕冲刺", gameInstr:"躲避刀子、叉子和勺子！\n↑↓ 方向键 · W/S · 或触摸", play:"▶ 开始", gameOver:"游戏结束！", again:"🔄 再玩一次", score:"分数", tip:"手机：触摸上方=上 · 下方=下", great:"🏆 太棒了！", ok:"🌟 很不错！", hi:"你好", edit:"✏️", recipes:"食谱", browse:"浏览所有食谱", game:"小游戏", gameSub:"蛋糕冲刺！", aiMenu:"AI 厨师", aiMenuSub:"AI 为你创建食谱", myMenu:"我的食谱", myMenuSub:"创建你自己的食谱", aiTitle:"🤖 AI 食谱生成器", aiSub:"输入一种烘焙食品，AI 将生成完整食谱", aiPh:"例如：可颂、提拉米苏、贝果…", aiGen:"✨ 生成", aiLoading:"正在生成食谱…", aiSave:"保存到我的食谱", aiSaved:"已保存！✅", aiAgain:"重新生成", aiErr:"出现错误，请重试。", myTitle:"✍️ 我的食谱", createNew:"+ 创建新食谱", formTitle:"新食谱", yourRecipes:"你保存的食谱", noCustom:"你还没有创建任何食谱。", del:"🗑️" },
};

const RECIPES = [
  { id:1, emoji:"🍫", en:{ name:"Chocolate Cake", cat:"Cake", quick:{ time:"30 min", i:["200g flour","150g sugar","100g cocoa powder","3 eggs","150ml oil","1 tsp baking powder","150ml milk"], s:["Preheat oven to 180°C","Mix all ingredients in a bowl","Pour into a greased tin","Bake 25 min – do the skewer test"] }, hard:{ time:"2 hrs", i:["200g dark chocolate 70%","150g butter","200g sugar","4 eggs (separated)","180g flour","50g cocoa powder","1 vanilla pod","Ganache: 200g chocolate + 200ml cream"], s:["Melt chocolate in a double boiler","Beat butter & sugar until fluffy (5 min)","Add egg yolks one at a time","Whip egg whites stiff & fold in gently","Bake 45 min at 170°C","Cook ganache & glaze the cake"] } }, de:{ name:"Schokoladenkuchen", cat:"Kuchen", quick:{ time:"30 Min", i:["200g Mehl","150g Zucker","100g Kakaopulver","3 Eier","150ml Öl","1 TL Backpulver","150ml Milch"], s:["Ofen auf 180°C vorheizen","Alle Zutaten mischen","In gefettete Form gießen","25 Min backen – Stäbchentest"] }, hard:{ time:"2 Std", i:["200g dunkle Schokolade 70%","150g Butter","200g Zucker","4 Eier (getrennt)","180g Mehl","50g Kakao","1 Vanilleschote","Ganache: 200g Schokolade + 200ml Sahne"], s:["Schokolade im Wasserbad schmelzen","Butter & Zucker schaumig schlagen","Eigelb einrühren","Eiweiß steif schlagen & falten","45 Min bei 170°C","Ganache & glasieren"] } }, it:{ name:"Torta al Cioccolato", cat:"Torte", quick:{ time:"30 min", i:["200g farina","150g zucchero","100g cacao","3 uova","150ml olio","1 cucchiaino lievito","150ml latte"], s:["Preriscaldare a 180°C","Mescolare tutto","Versare nello stampo","Cuocere 25 min"] }, hard:{ time:"2 ore", i:["200g cioccolato fondente 70%","150g burro","200g zucchero","4 uova (separate)","180g farina","50g cacao","1 vaniglia","Ganache: 200g cioccolato + 200ml panna"], s:["Sciogliere a bagnomaria","Montare burro e zucchero","Aggiungere i tuorli","Montare gli albumi e incorporare","Cuocere 45 min a 170°C","Ganache e glassare"] } }, fr:{ name:"Gâteau au Chocolat", cat:"Gâteaux", quick:{ time:"30 min", i:["200g farine","150g sucre","100g cacao","3 œufs","150ml huile","1 c. levure","150ml lait"], s:["Préchauffer à 180°C","Mélanger tout","Verser dans le moule","Cuire 25 min"] }, hard:{ time:"2 h", i:["200g chocolat noir 70%","150g beurre","200g sucre","4 œufs séparés","180g farine","50g cacao","1 gousse vanille","Ganache: 200g chocolat + 200ml crème"], s:["Fondre au bain-marie","Battre beurre et sucre","Ajouter les jaunes","Monter les blancs et incorporer","Cuire 45 min à 170°C","Ganache et glacer"] } }, zh:{ name:"巧克力蛋糕", cat:"蛋糕", quick:{ time:"30分钟", i:["面粉200克","糖150克","可可粉100克","鸡蛋3个","食用油150毫升","泡打粉1茶匙","牛奶150毫升"], s:["烤箱预热180°C","混合所有食材","倒入烤盘","烘烤25分钟"] }, hard:{ time:"2小时", i:["70%黑巧克力200克","黄油150克","糖200克","鸡蛋4个（分蛋）","面粉180克","可可粉50克","香草荚","淋面：巧克力200克＋奶油200毫升"], s:["隔水融化巧克力","打发黄油和糖","加入蛋黄","打发蛋白后拌入","170°C烘烤45分钟","淋面装饰"] } } },
  { id:2, emoji:"🧁", en:{ name:"Vanilla Muffins", cat:"Muffins", quick:{ time:"25 min", i:["200g flour","150g sugar","2 eggs","100ml oil","100ml milk","1 tsp baking powder","vanilla extract"], s:["Preheat oven to 180°C","Mix dry and wet ingredients separately","Combine – don't overmix!","Bake 18–20 min"] }, hard:{ time:"1.5 hrs", i:["220g flour","180g sugar","3 eggs","120g soft butter","120ml buttermilk","1 vanilla pod","Frosting: 250g cream cheese, 150g icing sugar, 80g butter"], s:["Beat butter & sugar 5 min","Add eggs one at a time","Add vanilla seeds","Alternate flour & buttermilk","Bake 20 min at 175°C","Cool & pipe frosting"] } }, de:{ name:"Vanille-Muffins", cat:"Muffins", quick:{ time:"25 Min", i:["200g Mehl","150g Zucker","2 Eier","100ml Öl","100ml Milch","1 TL Backpulver","Vanilleextrakt"], s:["Ofen 180°C vorheizen","Trocken & nass trennen","Zusammenrühren","18–20 Min backen"] }, hard:{ time:"1,5 Std", i:["220g Mehl","180g Zucker","3 Eier","120g weiche Butter","120ml Buttermilch","1 Vanilleschote","Frosting: 250g Frischkäse, 150g Puderzucker, 80g Butter"], s:["Butter & Zucker 5 Min","Eier einzeln","Vanillemark","Mehl & Buttermilch abwechselnd","20 Min 175°C","Abkühlen & Frosting"] } }, it:{ name:"Muffin alla Vaniglia", cat:"Muffin", quick:{ time:"25 min", i:["200g farina","150g zucchero","2 uova","100ml olio","100ml latte","1 cucchiaino lievito","vaniglia"], s:["Preriscaldare 180°C","Mescolare secco e liquido separati","Unire senza mescolare troppo","Cuocere 18–20 min"] }, hard:{ time:"1,5 ore", i:["220g farina","180g zucchero","3 uova","120g burro morbido","120ml latticello","1 baccello vaniglia","Frosting: 250g formaggio cremoso, 150g zucchero a velo, 80g burro"], s:["Montare burro e zucchero","Uova una alla volta","Semi di vaniglia","Alternare farina e latticello","20 min 175°C","Raffreddare e decorare"] } }, fr:{ name:"Muffins à la Vanille", cat:"Muffins", quick:{ time:"25 min", i:["200g farine","150g sucre","2 œufs","100ml huile","100ml lait","1 c. levure","vanille"], s:["Préchauffer 180°C","Mélanger sec et liquide séparément","Combiner sans trop mélanger","Cuire 18–20 min"] }, hard:{ time:"1h30", i:["220g farine","180g sucre","3 œufs","120g beurre mou","120ml babeurre","1 gousse vanille","Glaçage: 250g fromage frais, 150g sucre glace, 80g beurre"], s:["Battre beurre et sucre","Œufs un à un","Graines de vanille","Alterner farine et babeurre","20 min 175°C","Refroidir et décorer"] } }, zh:{ name:"香草松饼", cat:"松饼", quick:{ time:"25分钟", i:["面粉200克","糖150克","鸡蛋2个","食用油100毫升","牛奶100毫升","泡打粉1茶匙","香草精"], s:["预热180°C","干湿分别混合","合并搅拌","烘烤18–20分钟"] }, hard:{ time:"1.5小时", i:["面粉220克","糖180克","鸡蛋3个","软化黄油120克","酪乳120毫升","香草荚","糖霜：奶油奶酪250克、糖粉150克、黄油80克"], s:["打发黄油和糖","逐个加鸡蛋","加香草籽","交替加面粉和酪乳","175°C烘烤20分钟","冷却后裱花"] } } },
  { id:3, emoji:"🍎", en:{ name:"Apple Cake", cat:"Cake", quick:{ time:"45 min", i:["3 apples","200g flour","150g sugar","3 eggs","125g butter","1 tsp cinnamon","1 tsp baking powder"], s:["Peel & dice apples","Mix batter","Fold in apples","Bake 40 min at 180°C"] }, hard:{ time:"2.5 hrs", i:["Shortcrust: 300g flour, 150g butter, 80g sugar, 1 egg","5 apples, 100g sugar, cinnamon, lemon","Crumble: 200g flour, 100g butter, 100g sugar","Vanilla sauce"], s:["Make pastry & chill 1 hr","Caramelise apples","Line tin & fill","Add crumble","50 min at 175°C","Serve with vanilla sauce"] } }, de:{ name:"Apfelkuchen", cat:"Kuchen", quick:{ time:"45 Min", i:["3 Äpfel","200g Mehl","150g Zucker","3 Eier","125g Butter","1 TL Zimt","1 TL Backpulver"], s:["Äpfel schälen & würfeln","Teig rühren","Äpfel unterheben","40 Min bei 180°C"] }, hard:{ time:"2,5 Std", i:["Mürbeteig: 300g Mehl, 150g Butter, 80g Zucker, 1 Ei","5 Äpfel, 100g Zucker, Zimt, Zitrone","Streusel: 200g Mehl, 100g Butter, 100g Zucker","Vanillesauce"], s:["Teig kneten & kühlen","Äpfel karamellisieren","Form auslegen & füllen","Streusel drauf","50 Min 175°C","Mit Vanillesauce"] } }, it:{ name:"Torta di Mele", cat:"Torte", quick:{ time:"45 min", i:["3 mele","200g farina","150g zucchero","3 uova","125g burro","cannella","lievito"], s:["Sbucciare le mele","Impasto","Incorporare le mele","40 min 180°C"] }, hard:{ time:"2,5 ore", i:["Frolla: 300g farina, 150g burro, 80g zucchero, 1 uovo","5 mele, zucchero, cannella, limone","Crumble: 200g farina, 100g burro, 100g zucchero","Crema alla vaniglia"], s:["Frolla e raffreddare","Caramellare le mele","Foderare e riempire","Crumble sopra","50 min 175°C","Con crema"] } }, fr:{ name:"Gâteau aux Pommes", cat:"Gâteaux", quick:{ time:"45 min", i:["3 pommes","200g farine","150g sucre","3 œufs","125g beurre","cannelle","levure"], s:["Éplucher les pommes","Pâte","Incorporer","40 min 180°C"] }, hard:{ time:"2h30", i:["Pâte brisée: 300g farine, 150g beurre, 80g sucre, 1 œuf","5 pommes, sucre, cannelle, citron","Crumble: 200g farine, 100g beurre, 100g sucre","Crème anglaise"], s:["Pâte et réfrigérer","Caraméliser","Foncer et remplir","Crumble dessus","50 min 175°C","Avec crème"] } }, zh:{ name:"苹果蛋糕", cat:"蛋糕", quick:{ time:"45分钟", i:["苹果3个","面粉200克","糖150克","鸡蛋3个","黄油125克","肉桂","泡打粉"], s:["苹果去皮切丁","混合面糊","加苹果","180°C烤40分钟"] }, hard:{ time:"2.5小时", i:["酥皮：面粉300克、黄油150克、糖80克、鸡蛋1个","苹果5个、糖、肉桂、柠檬","酥粒：面粉200克、黄油100克、糖100克","香草奶酱"], s:["制作酥皮冷藏","焦糖苹果","铺底加馅","撒酥粒","175°C烤50分钟","配奶酱"] } } },
  { id:4, emoji:"🟫", en:{ name:"Brownies", cat:"Bakes", quick:{ time:"35 min", i:["200g dark chocolate","150g butter","200g sugar","3 eggs","100g flour","pinch of salt"], s:["Melt chocolate & butter","Stir in sugar & eggs","Fold in flour","Bake 25 min at 175°C – keep fudgy!"] }, hard:{ time:"1.5 hrs", i:["300g dark chocolate 80%","200g butter","250g brown sugar","4 eggs","120g flour","30g cocoa","sea salt flakes","100g walnuts"], s:["Melt chocolate in double boiler","Beat butter & brown sugar","Add eggs one by one","Stir in chocolate","Fold in flour & cocoa","Add walnuts","30 min at 160°C (centre must wobble!)","Cool completely before cutting"] } }, de:{ name:"Brownies", cat:"Gebäck", quick:{ time:"35 Min", i:["200g Zartbitterschokolade","150g Butter","200g Zucker","3 Eier","100g Mehl","Prise Salz"], s:["Schokolade & Butter schmelzen","Zucker & Eier einrühren","Mehl unterheben","25 Min 175°C – feucht!"] }, hard:{ time:"1,5 Std", i:["300g Schokolade 80%","200g Butter","250g brauner Zucker","4 Eier","120g Mehl","30g Kakao","Meersalzflocken","100g Walnüsse"], s:["Schokolade Wasserbad","Butter & Zucker aufschlagen","Eier einrühren","Schoko rein","Mehl & Kakao falten","Walnüsse","30 Min 160°C (wackeln!)","Komplett abkühlen"] } }, it:{ name:"Brownies", cat:"Dolci", quick:{ time:"35 min", i:["200g cioccolato fondente","150g burro","200g zucchero","3 uova","100g farina","sale"], s:["Sciogliere cioccolato e burro","Zucchero e uova","Farina","25 min 175°C – morbidi!"] }, hard:{ time:"1,5 ore", i:["300g cioccolato 80%","200g burro","250g zucchero di canna","4 uova","120g farina","30g cacao","sale marino","100g noci"], s:["Bagnomaria","Montare burro e zucchero","Uova","Cioccolato","Farina e cacao","Noci","30 min 160°C (tremare!)","Raffreddare"] } }, fr:{ name:"Brownies", cat:"Pâtisseries", quick:{ time:"35 min", i:["200g chocolat noir","150g beurre","200g sucre","3 œufs","100g farine","sel"], s:["Fondre chocolat et beurre","Sucre et œufs","Farine","25 min 175°C – fondant!"] }, hard:{ time:"1h30", i:["300g chocolat 80%","200g beurre","250g sucre roux","4 œufs","120g farine","30g cacao","fleur de sel","100g noix"], s:["Bain-marie","Battre beurre et sucre","Œufs","Chocolat","Farine et cacao","Noix","30 min 160°C (trembler!)","Refroidir"] } }, zh:{ name:"布朗尼", cat:"烘焙", quick:{ time:"35分钟", i:["黑巧克力200克","黄油150克","糖200克","鸡蛋3个","面粉100克","盐"], s:["融化巧克力和黄油","拌入糖和鸡蛋","加面粉","175°C烤25分钟–湿润！"] }, hard:{ time:"1.5小时", i:["80%黑巧克力300克","黄油200克","红糖250克","鸡蛋4个","面粉120克","可可粉30克","海盐片","核桃100克"], s:["隔水融化","打发黄油和糖","加鸡蛋","拌巧克力","加面粉可可","加核桃","160°C烤30分钟（晃动！）","完全冷却"] } } },
  { id:5, emoji:"🍌", en:{ name:"Banana Bread", cat:"Bread", quick:{ time:"1 hr", i:["3 ripe bananas","200g flour","100g sugar","2 eggs","80g butter","1 tsp baking powder","1 tsp cinnamon"], s:["Mash bananas","Mix all ingredients","Pour into loaf tin","Bake 55 min at 175°C"] }, hard:{ time:"2 hrs", i:["4 very ripe bananas","220g flour","150g brown sugar","3 eggs","100g browned butter","1 tsp baking powder","1 tsp baking soda","vanilla, cinnamon, nutmeg","100g chocolate chips","80g toasted walnuts"], s:["Brown the butter","Roast bananas 15 min","Beat butter & sugar","Mix in eggs & bananas","Sift dry ingredients","Fold in chocolate & walnuts","60 min at 165°C","Rest 10 min before turning out"] } }, de:{ name:"Bananenbrot", cat:"Brot", quick:{ time:"1 Std", i:["3 reife Bananen","200g Mehl","100g Zucker","2 Eier","80g Butter","1 TL Backpulver","1 TL Zimt"], s:["Bananen zerdrücken","Alles mischen","In Kastenform","55 Min 175°C"] }, hard:{ time:"2 Std", i:["4 sehr reife Bananen","220g Mehl","150g brauner Zucker","3 Eier","100g gebräunte Butter","Backpulver, Natron","Vanille, Zimt, Muskat","100g Schokodrops","80g Walnüsse"], s:["Butter bräunen","Bananen rösten 15 Min","Butter & Zucker","Eier & Bananen","Trockene Zutaten","Schoko & Nüsse","60 Min 165°C","10 Min rasten"] } }, it:{ name:"Pane alla Banana", cat:"Pane", quick:{ time:"1 ora", i:["3 banane mature","200g farina","100g zucchero","2 uova","80g burro","lievito","cannella"], s:["Schiacciare le banane","Mescolare tutto","Nello stampo","55 min 175°C"] }, hard:{ time:"2 ore", i:["4 banane molto mature","220g farina","150g zucchero di canna","3 uova","100g burro nocciola","vaniglia, cannella, noce moscata","100g gocce cioccolato","80g noci"], s:["Burro nocciola","Tostare banane 15 min","Montare","Uova e banane","Setacciare","Cioccolato e noci","60 min 165°C","Riposare 10 min"] } }, fr:{ name:"Pain à la Banane", cat:"Pain", quick:{ time:"1 h", i:["3 bananes mûres","200g farine","100g sucre","2 œufs","80g beurre","levure","cannelle"], s:["Écraser les bananes","Mélanger","Dans le moule","55 min 175°C"] }, hard:{ time:"2 h", i:["4 bananes très mûres","220g farine","150g sucre roux","3 œufs","100g beurre noisette","vanille, cannelle, muscade","100g pépites chocolat","80g noix"], s:["Beurre noisette","Rôtir bananes 15 min","Battre","Œufs et bananes","Tamiser","Chocolat et noix","60 min 165°C","Reposer 10 min"] } }, zh:{ name:"香蕉面包", cat:"面包", quick:{ time:"1小时", i:["熟香蕉3根","面粉200克","糖100克","鸡蛋2个","黄油80克","泡打粉","肉桂"], s:["压碎香蕉","混合食材","倒入模具","175°C烤55分钟"] }, hard:{ time:"2小时", i:["非常熟香蕉4根","面粉220克","红糖150克","鸡蛋3个","焦化黄油100克","香草、肉桂、肉豆蔻","巧克力豆100克","核桃80克"], s:["焦化黄油","烤香蕉15分钟","打发黄油和糖","加鸡蛋和香蕉","筛入干料","拌入巧克力核桃","165°C烤60分钟","静置10分钟"] } } },
  { id:6, emoji:"🍰", en:{ name:"Cheesecake", cat:"Cake", quick:{ time:"1 hr", i:["500g cream cheese","3 eggs","150g sugar","1 pack vanilla pudding powder","100ml oil","200g digestive biscuits"], s:["Press biscuit base","Mix & pour filling","Bake 50 min at 170°C","Cool in oven door ajar"] }, hard:{ time:"3 hrs", i:["Base: 250g digestives, 120g butter","800g full-fat cream cheese","200g sugar","4 eggs","200ml heavy cream","1 vanilla pod","Topping: soured cream & strawberry compote"], s:["Form base & chill","Beat cheese & sugar smooth","Add eggs one at a time","Fold in cream & vanilla","Water bath 1 hr at 160°C","Cool in oven 1 hr","Spread topping & refrigerate overnight"] } }, de:{ name:"Käsekuchen", cat:"Kuchen", quick:{ time:"1 Std", i:["500g Quark","3 Eier","150g Zucker","1 Pck. Vanillepudding","100ml Öl","200g Butterkekse"], s:["Keksboden andrücken","Füllung mixen & drauf","50 Min 170°C","Im Ofen abkühlen"] }, hard:{ time:"3 Std", i:["Boden: 250g Kekse, 120g Butter","800g Frischkäse","200g Zucker","4 Eier","200ml Sahne","1 Vanilleschote","Sauerrahm & Erdbeerkompott"], s:["Boden kühlen","Frischkäse glattschlagen","Eier einrühren","Sahne & Vanille falten","Wasserbad 1 Std 160°C","1 Std im Ofen","Topping & über Nacht kühlen"] } }, it:{ name:"Cheesecake", cat:"Torte", quick:{ time:"1 ora", i:["500g formaggio cremoso","3 uova","150g zucchero","budino vaniglia","100ml olio","200g biscotti"], s:["Base biscotti","Ripieno e versare","50 min 170°C","Raffreddare in forno"] }, hard:{ time:"3 ore", i:["Base: 250g digestive, 120g burro","800g formaggio cremoso","200g zucchero","4 uova","200ml panna","1 vaniglia","Topping: panna acida e fragole"], s:["Base e raffreddare","Montare formaggio","Uova","Panna e vaniglia","Bagnomaria 1 ora 160°C","1 ora in forno","Topping e notte in frigo"] } }, fr:{ name:"Cheesecake", cat:"Gâteaux", quick:{ time:"1 h", i:["500g fromage frais","3 œufs","150g sucre","pudding vanille","100ml huile","200g sablés"], s:["Base sablés","Mélanger et verser","50 min 170°C","Refroidir four entrouvert"] }, hard:{ time:"3 h", i:["Base: 250g sablés, 120g beurre","800g fromage à la crème","200g sucre","4 œufs","200ml crème","1 vanille","Crème aigre et fraises"], s:["Base et réfrigérer","Battre fromage","Œufs","Crème et vanille","Bain-marie 1h 160°C","1h au four","Topping et nuit au frigo"] } }, zh:{ name:"芝士蛋糕", cat:"蛋糕", quick:{ time:"1小时", i:["奶油奶酪500克","鸡蛋3个","糖150克","香草布丁粉","食用油100毫升","消化饼干200克"], s:["压饼底","混合馅料倒入","170°C烤50分钟","烤箱内冷却"] }, hard:{ time:"3小时", i:["饼底：饼干250克、黄油120克","全脂奶油奶酪800克","糖200克","鸡蛋4个","淡奶油200毫升","香草荚","酸奶油和草莓酱"], s:["制作饼底冷藏","打发奶酪和糖","加鸡蛋","拌奶油和香草","水浴160°C烤1小时","在烤箱冷却1小时","涂抹表面冷藏一夜"] } } },
];

const FLAGS = { en:"🇬🇧", de:"🇩🇪", it:"🇮🇹", fr:"🇫🇷", zh:"🇨🇳" };
const LANG_NAMES = { en:"English", de:"German", it:"Italian", fr:"French", zh:"Chinese" };

const localize = (r, lang) => {
  const l = r[lang] || r.en;
  return { id:r.id, emoji:r.emoji, name:l.name, category:l.cat, quick:{ time:l.quick.time, ingredients:l.quick.i, steps:l.quick.s }, hard:{ time:l.hard.time, ingredients:l.hard.i, steps:l.hard.s } };
};

const glass = (ex={}) => ({ background:"rgba(255,255,255,0.15)", border:"2.5px solid rgba(255,255,255,0.3)", borderRadius:"22px", backdropFilter:"blur(12px)", boxShadow:"0 4px 24px rgba(0,0,0,0.15),inset 0 1px 0 rgba(255,255,255,0.25)", ...ex });
const fld = (ex={}) => ({ background:"rgba(0,0,0,0.22)", border:"2px solid rgba(255,255,255,0.2)", borderRadius:"12px", padding:"12px 16px", fontSize:"1rem", color:"#FFF3E0", fontFamily:"'Fredoka One','Noto Sans SC',cursive", outline:"none", ...ex });

export default function GoodRecipes() {
  const [lang, setLang]               = useState("en");
  const [username, setUsername]       = useState("");
  const [tempName, setTempName]       = useState("");
  const [showSetup, setShowSetup]     = useState(true);
  const [editingName, setEditingName] = useState(false);
  const [view, setView]               = useState("home");
  const [custom, setCustom]           = useState([]);
  const [selectedId, setSelectedId]   = useState(null);
  const [version, setVersion]         = useState("quick");

  const t  = UI[lang];
  const af = lang==="zh" ? "'Noto Sans SC',sans-serif" : "'Fredoka One','Noto Sans SC',cursive";

  useEffect(() => {
    const l = document.createElement("link");
    l.href = "https://fonts.googleapis.com/css2?family=Fredoka+One&family=Noto+Sans+SC:wght@400;700&display=swap";
    l.rel = "stylesheet"; document.head.appendChild(l);
  }, []);

  const allRecipes = [...RECIPES.map(r=>localize(r,lang)), ...custom];
  const selected   = allRecipes.find(r => r.id === selectedId);
  const doSetup    = () => { if(!tempName.trim()) return; setUsername(tempName.trim()); setShowSetup(false); };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(150deg,#E05500 0%,#FF8930 45%,#CC4400 100%)", fontFamily:af, position:"relative", overflowX:"hidden" }}>
      <style>{`*{box-sizing:border-box} ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.3);border-radius:4px} input::placeholder,textarea::placeholder{color:rgba(255,243,224,0.4)} @keyframes scrollL{from{transform:translateX(110%)}to{transform:translateX(-110%)}} @keyframes scrollR{from{transform:translateX(-110%)}to{transform:translateX(110%)}} @keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}} @keyframes fadeIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}} @keyframes pop{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}} @keyframes slideD{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:translateY(0)}} @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>

      <div style={{ position:"fixed", top:"50%", left:"50%", transform:"translate(-50%,-50%)", fontSize:"clamp(160px,32vw,360px)", fontWeight:900, color:"rgba(255,215,0,0.1)", pointerEvents:"none", zIndex:0, userSelect:"none", letterSpacing:"-8px", lineHeight:1 }}>K.M</div>
      <div style={{ position:"fixed", top:"10%", left:0, right:0, overflow:"hidden", pointerEvents:"none", zIndex:0, height:"55px" }}>
        <div style={{ display:"flex", gap:"55px", animation:"scrollL 20s linear infinite", whiteSpace:"nowrap", opacity:0.07 }}>
          {Array(22).fill(0).map((_,i)=><span key={i} style={{fontSize:"2.4rem"}}>{["🎂","🧁","🍰","🎂","🧁"][i%5]}</span>)}
        </div>
      </div>
      <div style={{ position:"fixed", top:"68%", left:0, right:0, overflow:"hidden", pointerEvents:"none", zIndex:0, height:"50px" }}>
        <div style={{ display:"flex", gap:"48px", animation:"scrollR 26s linear infinite", whiteSpace:"nowrap", opacity:0.06 }}>
          {Array(22).fill(0).map((_,i)=><span key={i} style={{fontSize:"2rem"}}>{["🍰","🎂","🧁","🍰","🎂"][i%5]}</span>)}
        </div>
      </div>

      {/* SETUP */}
      {showSetup && (
        <div style={{ position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:2000, padding:"20px" }}>
          <div style={{ ...glass({ borderRadius:"28px", padding:"40px 36px", maxWidth:"380px", width:"100%", textAlign:"center", animation:"pop 0.4s ease" }), background:"linear-gradient(160deg,#C84000,#E06010)" }}>
            <div style={{ fontSize:"4rem", marginBottom:"10px", animation:"bob 2s ease-in-out infinite" }}>🎂</div>
            <h2 style={{ color:"#FFF3E0", fontSize:"2rem", margin:"0 0 6px", textShadow:"2px 2px 0 #8B2000" }}>Good Recipes</h2>
            <p style={{ color:"#FFD700", margin:"0 0 24px", fontSize:"1rem" }}>{t.setName}</p>
            <input placeholder={t.namePh} value={tempName} onChange={e=>setTempName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&doSetup()} style={fld({width:"100%",marginBottom:"14px",fontSize:"1.1rem",textAlign:"center",fontFamily:af})} autoFocus />
            <button onClick={doSetup} style={{ background:"#FFD700", border:"none", borderRadius:"16px", padding:"16px 32px", fontSize:"1.1rem", color:"#8B2000", cursor:"pointer", fontFamily:af, width:"100%", boxShadow:"0 4px 16px rgba(0,0,0,0.25)", marginBottom:"18px" }}>{t.startBtn}</button>
            <div style={{ display:"flex", justifyContent:"center", gap:"8px" }}>
              {Object.entries(FLAGS).map(([l,f])=>(
                <button key={l} onClick={()=>setLang(l)} style={{ background:lang===l?"rgba(255,215,0,0.3)":"rgba(255,255,255,0.12)", border:lang===l?"2px solid #FFD700":"2px solid rgba(255,255,255,0.2)", borderRadius:"10px", padding:"6px 10px", cursor:"pointer", fontSize:"1.1rem", transition:"all 0.2s" }}>{f}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HEADER */}
      {!showSetup && (
        <div style={{ position:"fixed", top:0, left:0, right:0, zIndex:500, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 16px", paddingTop:"calc(10px + env(safe-area-inset-top, 0px))", background:"rgba(0,0,0,0.2)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.1)", animation:"slideD 0.4s ease" }}>
          {!editingName ? (
            <button onClick={()=>{setTempName(username);setEditingName(true);}} style={{ display:"flex", alignItems:"center", gap:"8px", background:"rgba(255,255,255,0.14)", border:"2px solid rgba(255,255,255,0.25)", borderRadius:"14px", padding:"7px 14px", cursor:"pointer", fontFamily:af }}>
              <span>👤</span>
              <span style={{ color:"#FFD700", fontSize:"0.95rem", maxWidth:"130px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{username}</span>
              <span style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.5)"}}>{t.edit}</span>
            </button>
          ) : (
            <div style={{display:"flex",gap:"6px",alignItems:"center"}}>
              <input value={tempName} onChange={e=>setTempName(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"){setUsername(tempName.trim()||username);setEditingName(false);}if(e.key==="Escape")setEditingName(false);}} style={fld({padding:"6px 12px",fontSize:"0.95rem",width:"140px",fontFamily:af})} autoFocus />
              <button onClick={()=>{setUsername(tempName.trim()||username);setEditingName(false);}} style={{background:"#FFD700",border:"none",borderRadius:"10px",padding:"7px 12px",cursor:"pointer",fontFamily:af,color:"#8B2000"}}>✓</button>
              <button onClick={()=>setEditingName(false)} style={{background:"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:"10px",padding:"7px 10px",cursor:"pointer",color:"#FFF3E0"}}>✕</button>
            </div>
          )}
          <div style={{ display:"flex", gap:"5px" }}>
            {Object.entries(FLAGS).map(([l,f])=>(
              <button key={l} onClick={()=>setLang(l)} style={{ background:lang===l?"rgba(255,215,0,0.3)":"rgba(255,255,255,0.1)", border:lang===l?"2px solid #FFD700":"2px solid rgba(255,255,255,0.18)", borderRadius:"10px", padding:"5px 8px", cursor:"pointer", fontSize:"1rem", transition:"all 0.18s" }}>{f}</button>
            ))}
          </div>
        </div>
      )}

      {/* VIEWS */}
      <div style={{ position:"relative", zIndex:1, paddingTop:showSetup ? 0 : "calc(62px + env(safe-area-inset-top, 0px))", paddingBottom:"env(safe-area-inset-bottom, 0px)" }}>
        {!showSetup && view==="home"    && <HomeView t={t} af={af} username={username} setView={setView} />}
        {!showSetup && view==="recipes" && !selectedId && <RecipesView t={t} af={af} recipes={allRecipes} onSelect={id=>{setSelectedId(id);setVersion("quick");}} onBack={()=>setView("home")} />}
        {!showSetup && view==="recipes" && selectedId && selected && <RecipeDetail t={t} af={af} recipe={selected} version={version} setVersion={setVersion} onBack={()=>setSelectedId(null)} />}
        {!showSetup && view==="myrecipes" && <MyRecipesView t={t} af={af} custom={custom} setCustom={setCustom} setView={setView} lang={lang} />}
        {!showSetup && view==="ai"      && <AIView t={t} af={af} lang={lang} setView={setView} setCustom={setCustom} />}
        {!showSetup && view==="game"    && <GameView t={t} af={af} setView={setView} />}
      </div>
    </div>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomeView({ t, af, username, setView }) {
  const btns = [
    { icon:"📖", label:t.recipes,  sub:t.browse,     action:()=>setView("recipes"),   glow:"rgba(255,215,0,0.35)" },
    { icon:"✍️", label:t.myMenu,   sub:t.myMenuSub,  action:()=>setView("myrecipes"), glow:"rgba(100,220,150,0.35)" },
    { icon:"🤖", label:t.aiMenu,   sub:t.aiMenuSub,  action:()=>setView("ai"),        glow:"rgba(120,180,255,0.35)" },
    { icon:"🎮", label:t.game,     sub:t.gameSub,    action:()=>setView("game"),      glow:"rgba(255,100,100,0.35)" },
  ];
  return (
    <div style={{ textAlign:"center", padding:"50px 24px 40px", animation:"fadeIn 0.5s ease" }}>
      <div style={{ fontSize:"5rem", marginBottom:"6px", animation:"bob 2.8s ease-in-out infinite", filter:"drop-shadow(0 6px 14px rgba(0,0,0,0.35))" }}>🎂</div>
      <h1 style={{ fontSize:"clamp(2.2rem,8vw,3.8rem)", color:"#FFF3E0", margin:"0 0 6px", textShadow:"3px 4px 0 #9E3000,6px 8px 0 rgba(0,0,0,0.15)", fontFamily:af }}>Good Recipes</h1>
      <p style={{ color:"#FFD700", fontSize:"1.1rem", margin:"0 0 6px" }}>{t.subtitle}</p>
      <p style={{ color:"rgba(255,255,255,0.6)", fontSize:"1rem", margin:"0 0 38px" }}>{t.hi}, <span style={{color:"#FFD700"}}>{username}</span>! 👋</p>
      <div style={{ display:"flex", flexDirection:"column", gap:"12px", maxWidth:"320px", margin:"0 auto" }}>
        {btns.map((b,i)=>(
          <button key={i} onClick={b.action} style={{ ...glass({ padding:"16px 24px", display:"flex", alignItems:"center", gap:"14px", textAlign:"left", cursor:"pointer", border:"2.5px solid rgba(255,255,255,0.32)", transition:"transform 0.15s,box-shadow 0.15s" }), fontFamily:af }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow=`0 10px 32px ${b.glow}`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="";}}>
            <span style={{fontSize:"2.1rem"}}>{b.icon}</span>
            <div><div style={{color:"#FFF3E0",fontSize:"1.15rem"}}>{b.label}</div><div style={{color:"#FFD700",fontSize:"0.8rem",marginTop:"1px"}}>{b.sub}</div></div>
          </button>
        ))}
      </div>
      <div style={{ marginTop:"44px", display:"flex", justifyContent:"center", gap:"22px", fontSize:"1.8rem", opacity:0.18 }}>🔪 🍴 🥄</div>
    </div>
  );
}

// ─── BROWSE RECIPES ───────────────────────────────────────────────────────────
function RecipesView({ t, af, recipes, onSelect, onBack }) {
  const [q, setQ] = useState("");
  const list = recipes.filter(r => r.name.toLowerCase().includes(q.toLowerCase()) || (r.category||"").toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ padding:"20px", maxWidth:"720px", margin:"0 auto", animation:"fadeIn 0.4s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"22px" }}>
        <Btn onClick={onBack} af={af}>{t.back}</Btn>
        <h2 style={{ color:"#FFF3E0", margin:0, fontSize:"1.9rem", textShadow:"2px 2px 0 #9E3000" }}>{t.recipesTitle}</h2>
      </div>
      <input placeholder={t.search} value={q} onChange={e=>setQ(e.target.value)} style={fld({width:"100%",marginBottom:"20px",fontFamily:af})} />
      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(185px,1fr))", gap:"16px" }}>
        {list.map(r=><RCard key={r.id} recipe={r} onClick={()=>onSelect(r.id)} />)}
        {list.length===0 && <div style={{ gridColumn:"1/-1", textAlign:"center", color:"rgba(255,243,224,0.45)", padding:"48px 0" }}>{t.noRecipe}</div>}
      </div>
    </div>
  );
}

function RCard({ recipe, onClick }) {
  const [h,setH]=useState(false);
  return (
    <div onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{ ...glass({ padding:"26px 16px 20px", textAlign:"center", cursor:"pointer", transform:h?"translateY(-6px) scale(1.04)":"translateY(0)", boxShadow:h?"0 16px 40px rgba(0,0,0,0.3)":"0 4px 18px rgba(0,0,0,0.12)", transition:"all 0.2s ease" }) }}>
      <div style={{fontSize:"3.2rem",marginBottom:"10px"}}>{recipe.emoji}</div>
      <div style={{color:"#FFF3E0",fontSize:"1.05rem",marginBottom:"8px"}}>{recipe.name}</div>
      <div style={{ display:"inline-block", background:"rgba(255,215,0,0.18)", border:"1px solid rgba(255,215,0,0.4)", borderRadius:"8px", padding:"3px 10px", fontSize:"0.78rem", color:"#FFD700", marginBottom:"14px" }}>{recipe.category}</div>
      <div style={{ display:"flex", justifyContent:"center", gap:"8px", flexWrap:"wrap" }}>
        <span style={{ background:"rgba(255,215,0,0.15)", borderRadius:"8px", padding:"4px 10px", fontSize:"0.78rem", color:"#FFD700" }}>⚡ {recipe.quick?.time}</span>
        <span style={{ background:"rgba(255,100,0,0.15)", borderRadius:"8px", padding:"4px 10px", fontSize:"0.78rem", color:"#FFA07A" }}>⭐ {recipe.hard?.time}</span>
      </div>
    </div>
  );
}

// ─── RECIPE DETAIL ────────────────────────────────────────────────────────────
function RecipeDetail({ t, af, recipe, version, setVersion, onBack }) {
  const d = recipe[version] || {};
  return (
    <div style={{ padding:"20px", maxWidth:"600px", margin:"0 auto", animation:"fadeIn 0.35s ease" }}>
      <Btn onClick={onBack} af={af}>{t.allRecipes}</Btn>
      <div style={{ ...glass({ padding:"28px", marginBottom:"18px" }) }}>
        <div style={{fontSize:"4rem",textAlign:"center",marginBottom:"8px"}}>{recipe.emoji}</div>
        <h2 style={{ color:"#FFF3E0", textAlign:"center", margin:"0 0 18px", fontSize:"1.9rem", textShadow:"2px 3px 0 #9E3000" }}>{recipe.name}</h2>
        <VerToggle t={t} af={af} recipe={recipe} version={version} setVersion={setVersion} />
      </div>
      <Block title={t.ingr}>
        {(d.ingredients||[]).length===0 ? <Muted>{t.noIngr}</Muted>
          : (d.ingredients||[]).map((x,i)=><Row key={i} last={i===d.ingredients.length-1}><Dot/><span>{x}</span></Row>)}
      </Block>
      <Block title={t.steps}>
        {(d.steps||[]).length===0 ? <Muted>{t.noSteps}</Muted>
          : (d.steps||[]).map((s,i)=><Row key={i} last={i===d.steps.length-1} align="flex-start"><Num>{i+1}</Num><span style={{paddingTop:"2px"}}>{s}</span></Row>)}
      </Block>
    </div>
  );
}

// ─── MY RECIPES (separate create page) ───────────────────────────────────────
function MyRecipesView({ t, af, custom, setCustom, setView }) {
  const empty = { name:"", emoji:"🎂", cat:"", qTime:"", qIngr:"", qSteps:"", hTime:"", hIngr:"", hSteps:"" };
  const [form, setForm] = useState(empty);
  const [showForm, setShowForm] = useState(false);
  const [ver, setVer]   = useState("quick");
  const [preview, setPreview] = useState(null);

  const s = (k,v) => setForm(p=>({...p,[k]:v}));

  const saveRecipe = () => {
    if (!form.name.trim()) return;
    const nr = { id:Date.now(), emoji:form.emoji||"🎂", name:form.name, category:form.cat||"Custom",
      quick:{ time:form.qTime||"?", ingredients:form.qIngr.split("\n").filter(Boolean), steps:form.qSteps.split("\n").filter(Boolean) },
      hard:{ time:form.hTime||"?",  ingredients:form.hIngr.split("\n").filter(Boolean), steps:form.hSteps.split("\n").filter(Boolean) } };
    setCustom(p=>[...p,nr]);
    setForm(empty);
    setShowForm(false);
  };

  const deleteRecipe = (id) => setCustom(p=>p.filter(r=>r.id!==id));

  if (preview) {
    const d = preview[ver] || {};
    return (
      <div style={{ padding:"20px", maxWidth:"600px", margin:"0 auto", animation:"fadeIn 0.35s ease" }}>
        <Btn onClick={()=>setPreview(null)} af={af}>{t.back}</Btn>
        <div style={{ ...glass({ padding:"28px", marginBottom:"18px" }) }}>
          <div style={{fontSize:"4rem",textAlign:"center",marginBottom:"8px"}}>{preview.emoji}</div>
          <h2 style={{ color:"#FFF3E0", textAlign:"center", margin:"0 0 18px", fontSize:"1.9rem", textShadow:"2px 3px 0 #9E3000" }}>{preview.name}</h2>
          <VerToggle t={t} af={af} recipe={preview} version={ver} setVersion={setVer} />
        </div>
        <Block title={t.ingr}>
          {(d.ingredients||[]).length===0 ? <Muted>{t.noIngr}</Muted>
            : (d.ingredients||[]).map((x,i)=><Row key={i} last={i===d.ingredients.length-1}><Dot/><span>{x}</span></Row>)}
        </Block>
        <Block title={t.steps}>
          {(d.steps||[]).length===0 ? <Muted>{t.noSteps}</Muted>
            : (d.steps||[]).map((s,i)=><Row key={i} last={i===d.steps.length-1} align="flex-start"><Num>{i+1}</Num><span style={{paddingTop:"2px"}}>{s}</span></Row>)}
        </Block>
      </div>
    );
  }

  return (
    <div style={{ padding:"20px", maxWidth:"680px", margin:"0 auto", animation:"fadeIn 0.4s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"22px" }}>
        <Btn onClick={()=>setView("home")} af={af}>{t.back}</Btn>
        <h2 style={{ color:"#FFF3E0", margin:0, fontSize:"1.9rem", textShadow:"2px 2px 0 #9E3000" }}>{t.myTitle}</h2>
      </div>

      {/* CREATE FORM */}
      {!showForm ? (
        <button onClick={()=>setShowForm(true)} style={{ width:"100%", background:"rgba(100,220,150,0.2)", border:"2.5px dashed rgba(100,220,150,0.5)", borderRadius:"20px", padding:"20px", fontSize:"1.1rem", color:"#AAFFC8", cursor:"pointer", fontFamily:af, marginBottom:"28px", transition:"all 0.2s" }}
          onMouseEnter={e=>e.currentTarget.style.background="rgba(100,220,150,0.3)"}
          onMouseLeave={e=>e.currentTarget.style.background="rgba(100,220,150,0.2)"}>
          {t.createNew}
        </button>
      ) : (
        <div style={{ ...glass({ padding:"28px", marginBottom:"28px" }), background:"rgba(0,0,0,0.15)" }}>
          <h3 style={{ color:"#FFD700", margin:"0 0 20px", fontSize:"1.3rem" }}>✍️ {t.formTitle}</h3>

          {/* Basic info */}
          <div style={{ display:"flex", gap:"10px", marginBottom:"14px" }}>
            <input placeholder={t.emojiLbl} value={form.emoji} onChange={e=>s("emoji",e.target.value)} style={fld({width:"70px",textAlign:"center",fontSize:"1.4rem",fontFamily:af})} />
            <input placeholder={t.nameLbl} value={form.name} onChange={e=>s("name",e.target.value)} style={fld({flex:1,fontFamily:af})} />
          </div>
          <input placeholder={t.catPh} value={form.cat} onChange={e=>s("cat",e.target.value)} style={fld({width:"100%",marginBottom:"20px",fontFamily:af})} />

          {/* Quick version */}
          <div style={{ background:"rgba(255,215,0,0.08)", border:"2px solid rgba(255,215,0,0.25)", borderRadius:"16px", padding:"18px", marginBottom:"14px" }}>
            <h4 style={{ color:"#FFD700", margin:"0 0 12px" }}>{t.quickVer}</h4>
            <input placeholder={t.timePh} value={form.qTime} onChange={e=>s("qTime",e.target.value)} style={fld({width:"100%",marginBottom:"10px",fontFamily:af})} />
            <textarea placeholder={t.ingrPh} value={form.qIngr} onChange={e=>s("qIngr",e.target.value)} rows={4} style={fld({width:"100%",marginBottom:"10px",resize:"vertical",fontFamily:af})} />
            <textarea placeholder={t.stepsPh} value={form.qSteps} onChange={e=>s("qSteps",e.target.value)} rows={4} style={fld({width:"100%",resize:"vertical",fontFamily:af})} />
          </div>

          {/* Pro version */}
          <div style={{ background:"rgba(255,120,0,0.08)", border:"2px solid rgba(255,120,0,0.25)", borderRadius:"16px", padding:"18px", marginBottom:"20px" }}>
            <h4 style={{ color:"#FFA07A", margin:"0 0 12px" }}>{t.proVer}</h4>
            <input placeholder={t.timePh} value={form.hTime} onChange={e=>s("hTime",e.target.value)} style={fld({width:"100%",marginBottom:"10px",fontFamily:af})} />
            <textarea placeholder={t.ingrPh} value={form.hIngr} onChange={e=>s("hIngr",e.target.value)} rows={4} style={fld({width:"100%",marginBottom:"10px",resize:"vertical",fontFamily:af})} />
            <textarea placeholder={t.stepsPh} value={form.hSteps} onChange={e=>s("hSteps",e.target.value)} rows={4} style={fld({width:"100%",resize:"vertical",fontFamily:af})} />
          </div>

          <div style={{ display:"flex", gap:"12px" }}>
            <button onClick={()=>{setShowForm(false);setForm(empty);}} style={fld({flex:1,cursor:"pointer",fontFamily:af,textAlign:"center",border:"2px solid rgba(255,255,255,0.3)"})}>{t.cancel}</button>
            <button onClick={saveRecipe} style={{ flex:2, background:"#FFD700", border:"none", borderRadius:"12px", padding:"14px", fontSize:"1rem", color:"#8B3000", cursor:"pointer", fontFamily:af, boxShadow:"0 4px 14px rgba(0,0,0,0.25)" }}>{t.saveBtn}</button>
          </div>
        </div>
      )}

      {/* SAVED CUSTOM RECIPES */}
      <h3 style={{ color:"rgba(255,255,255,0.7)", fontSize:"1rem", margin:"0 0 14px", fontWeight:"normal" }}>{t.yourRecipes}</h3>
      {custom.length === 0 ? (
        <div style={{ textAlign:"center", color:"rgba(255,243,224,0.35)", padding:"36px 0", fontSize:"1rem", background:"rgba(255,255,255,0.06)", borderRadius:"18px", border:"2px dashed rgba(255,255,255,0.12)" }}>
          {t.noCustom}
        </div>
      ) : (
        <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {custom.map(r => (
            <div key={r.id} style={{ ...glass({ padding:"16px 20px", display:"flex", alignItems:"center", gap:"14px" }) }}>
              <span style={{fontSize:"2.2rem"}}>{r.emoji}</span>
              <div style={{flex:1}}>
                <div style={{color:"#FFF3E0",fontSize:"1.1rem"}}>{r.name}</div>
                <div style={{ display:"flex", gap:"8px", marginTop:"4px" }}>
                  <span style={{ background:"rgba(255,215,0,0.15)", borderRadius:"6px", padding:"2px 8px", fontSize:"0.75rem", color:"#FFD700" }}>{r.category}</span>
                  <span style={{ background:"rgba(255,215,0,0.1)", borderRadius:"6px", padding:"2px 8px", fontSize:"0.75rem", color:"rgba(255,215,0,0.7)" }}>⚡ {r.quick?.time}</span>
                  <span style={{ background:"rgba(255,100,0,0.1)", borderRadius:"6px", padding:"2px 8px", fontSize:"0.75rem", color:"#FFA07A" }}>⭐ {r.hard?.time}</span>
                </div>
              </div>
              <button onClick={()=>{setPreview(r);setVer("quick");}} style={{ background:"rgba(255,215,0,0.2)", border:"1px solid rgba(255,215,0,0.3)", borderRadius:"10px", padding:"8px 14px", cursor:"pointer", color:"#FFD700", fontFamily:af, fontSize:"0.85rem" }}>👁</button>
              <button onClick={()=>deleteRecipe(r.id)} style={{ background:"rgba(255,80,80,0.18)", border:"1px solid rgba(255,80,80,0.3)", borderRadius:"10px", padding:"8px 12px", cursor:"pointer", color:"#FF9090", fontSize:"1rem" }}>{t.del}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── AI VIEW ──────────────────────────────────────────────────────────────────
function AIView({ t, af, lang, setView, setCustom }) {
  const [input, setInput]   = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult]   = useState(null);
  const [error, setError]     = useState("");
  const [saved, setSaved]     = useState(false);
  const [ver, setVer]         = useState("quick");

  const generate = async () => {
    if (!input.trim() || loading) return;
    setLoading(true); setResult(null); setError(""); setSaved(false); setVer("quick");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3001";
      const res = await fetch(`${apiUrl}/api/generate-recipe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: `You are a baker. Create a recipe for "${input}" in ${LANG_NAMES[lang]}.
Return ONLY raw JSON, no markdown:
{"name":"...","category":"...","quick":{"time":"...","ingredients":["max 6 items"],"steps":["max 4 steps"]},"hard":{"time":"...","ingredients":["max 8 items"],"steps":["max 6 steps"]}}
Keep each ingredient and step SHORT (max 10 words each). All text in ${LANG_NAMES[lang]}.`
        })
      });
const data = await res.json();
console.log("RAW DATA:", data);
if (data.error) throw new Error(data.error);
try {
  const clean = data.text.replace(/```json|```/g, "").trim();
  console.log("CLEAN:", clean);
  const parsed = JSON.parse(clean);
  console.log("PARSED:", parsed);
  setResult(parsed);
} catch(parseErr) {
  console.log("PARSE ERROR:", parseErr.message);
  throw parseErr;
}

  const saveIt = () => {
    if(!result||saved) return;
    setCustom(p=>[...p,{ id:Date.now(), emoji:"🤖", name:result.name, category:result.category, quick:{ time:result.quick.time, ingredients:result.quick.ingredients, steps:result.quick.steps }, hard:{ time:result.hard.time, ingredients:result.hard.ingredients, steps:result.hard.steps } }]);
    setSaved(true);
  };

  const d = result?.[ver] || {};

  return (
    <div style={{ padding:"20px", maxWidth:"640px", margin:"0 auto", animation:"fadeIn 0.4s ease" }}>
      <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"22px" }}>
        <Btn onClick={()=>setView("home")} af={af}>{t.back}</Btn>
        <h2 style={{ color:"#FFF3E0", margin:0, fontSize:"1.8rem", textShadow:"2px 2px 0 #9E3000" }}>{t.aiTitle}</h2>
      </div>

      <div style={{ ...glass({ padding:"22px 24px 20px", marginBottom:"20px" }) }}>
        <p style={{ color:"#FFD700", margin:"0 0 14px", fontSize:"0.95rem" }}>{t.aiSub}</p>
        <input placeholder={t.aiPh} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==="Enter"&&generate()} style={fld({width:"100%",marginBottom:"12px",fontFamily:af,fontSize:"1.05rem"})} />
        <button onClick={generate} disabled={loading||!input.trim()} style={{ width:"100%", background:"#FFD700", border:"none", borderRadius:"14px", padding:"14px", fontSize:"1.05rem", color:"#8B3000", cursor:(loading||!input.trim())?"not-allowed":"pointer", fontFamily:af, opacity:(loading||!input.trim())?0.55:1, transition:"opacity 0.2s", boxShadow:"0 4px 14px rgba(0,0,0,0.2)" }}>
          {loading?"⏳":"✨"} {t.aiGen}
        </button>
      </div>

      {loading && (
        <div style={{ textAlign:"center", padding:"48px 20px" }}>
          <div style={{ fontSize:"3.5rem", marginBottom:"14px", display:"inline-block", animation:"spin 1.2s linear infinite" }}>🤖</div>
          <p style={{ color:"#FFD700", fontSize:"1.1rem", margin:0 }}>{t.aiLoading}</p>
        </div>
      )}
      {error && !loading && (
        <div style={{ background:"rgba(255,60,60,0.2)", border:"2px solid rgba(255,100,100,0.35)", borderRadius:"16px", padding:"16px 20px", color:"#FFB0B0", textAlign:"center", marginBottom:"16px" }}>⚠️ {error}</div>
      )}

      {result && !loading && (
        <>
          <div style={{ ...glass({ padding:"24px", marginBottom:"16px" }) }}>
            <div style={{fontSize:"3.5rem",textAlign:"center",marginBottom:"8px"}}>🤖</div>
            <h2 style={{ color:"#FFF3E0", textAlign:"center", margin:"0 0 6px", fontSize:"1.8rem", textShadow:"2px 2px 0 #9E3000" }}>{result.name}</h2>
            <div style={{textAlign:"center",marginBottom:"16px"}}>
              <span style={{ background:"rgba(255,215,0,0.2)", border:"1px solid rgba(255,215,0,0.4)", borderRadius:"8px", padding:"3px 12px", fontSize:"0.82rem", color:"#FFD700" }}>{result.category}</span>
            </div>
            <VerToggle t={t} af={af} recipe={result} version={ver} setVersion={setVer} />
          </div>
          <Block title={t.ingr}>
            {(d.ingredients||[]).map((x,i)=><Row key={i} last={i===d.ingredients.length-1}><Dot/><span>{x}</span></Row>)}
          </Block>
          <Block title={t.steps}>
            {(d.steps||[]).map((s,i)=><Row key={i} last={i===d.steps.length-1} align="flex-start"><Num>{i+1}</Num><span style={{paddingTop:"2px"}}>{s}</span></Row>)}
          </Block>
          <div style={{ display:"flex", gap:"12px", marginBottom:"24px" }}>
            <button onClick={generate} style={{ flex:1, background:"rgba(255,255,255,0.15)", border:"2px solid rgba(255,255,255,0.3)", borderRadius:"14px", padding:"14px", fontSize:"0.95rem", color:"#FFF3E0", cursor:"pointer", fontFamily:af }}>🔄 {t.aiAgain}</button>
            <button onClick={saveIt} disabled={saved} style={{ flex:2, background:saved?"rgba(80,200,120,0.4)":"#FFD700", border:"none", borderRadius:"14px", padding:"14px", fontSize:"0.95rem", color:saved?"#FFF":"#8B3000", cursor:saved?"default":"pointer", fontFamily:af, boxShadow:saved?"none":"0 4px 14px rgba(0,0,0,0.2)", transition:"all 0.3s" }}>
              {saved ? t.aiSaved : "💾 "+t.aiSave}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ─── GAME ─────────────────────────────────────────────────────────────────────
const GW=640,GH=360,PX=90,PS=50,OS=42;
const SYMS=["🔪","🍴","🥄"],LANES=[55,115,185,255,305];
function GameView({ t, af, setView }) {
  const canvasRef=useRef(null),gsRef=useRef(null),animRef=useRef(null),keysRef=useRef({}),tRef=useRef(t);
  const [phase,setPhase]=useState("start"),[score,setScore]=useState(0);
  useEffect(()=>{tRef.current=t;},[t]);
  useEffect(()=>{ const dn=e=>{keysRef.current[e.key]=true;if(["ArrowUp","ArrowDown"].includes(e.key))e.preventDefault();}; const up=e=>{keysRef.current[e.key]=false;}; window.addEventListener("keydown",dn);window.addEventListener("keyup",up); return()=>{window.removeEventListener("keydown",dn);window.removeEventListener("keyup",up);}; },[]);
  const start=()=>{gsRef.current={py:GH/2,pvy:0,obs:[],frame:0,speed:3.2};setScore(0);setPhase("playing");};
  useEffect(()=>{
    if(phase!=="playing")return;
    const cv=canvasRef.current;if(!cv)return;
    const ctx=cv.getContext("2d");
    const loop=()=>{
      const g=gsRef.current;if(!g)return;
      g.frame++;
      const up=keysRef.current["ArrowUp"]||keysRef.current["w"]||keysRef.current["W"];
      const dn=keysRef.current["ArrowDown"]||keysRef.current["s"]||keysRef.current["S"];
      if(up)g.pvy=Math.max(g.pvy-1.1,-8);else if(dn)g.pvy=Math.min(g.pvy+1.1,8);else g.pvy*=0.82;
      g.py=Math.max(PS/2+4,Math.min(GH-PS/2-4,g.py+g.pvy));
      g.speed=3.2+g.frame/280;const sc=Math.floor(g.frame/6);
      const intv=Math.max(32,88-g.frame/18);
      if(g.frame%Math.round(intv)===0)g.obs.push({x:GW+OS,y:LANES[Math.floor(Math.random()*LANES.length)],sym:SYMS[Math.floor(Math.random()*3)],rot:Math.random()*360});
      g.obs=g.obs.filter(o=>o.x>-OS);g.obs.forEach(o=>{o.x-=g.speed;o.rot+=3;});
      for(const o of g.obs){const dx=o.x-PX,dy=o.y-g.py;if(Math.sqrt(dx*dx+dy*dy)<PS*0.52){cancelAnimationFrame(animRef.current);setScore(sc);setPhase("over");return;}}
      const bg=ctx.createLinearGradient(0,0,GW,GH);bg.addColorStop(0,"#A83000");bg.addColorStop(1,"#7A2000");
      ctx.fillStyle=bg;ctx.fillRect(0,0,GW,GH);
      ctx.save();ctx.globalAlpha=0.07;ctx.fillStyle="#FFD700";ctx.font="bold 130px serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("K.M",GW/2,GH/2);ctx.restore();
      ctx.strokeStyle="rgba(255,150,0,0.1)";ctx.lineWidth=1;LANES.forEach(y=>{ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(GW,y);ctx.stroke();});
      ctx.strokeStyle="rgba(255,200,100,0.06)";for(let x=-(g.frame*g.speed)%80;x<GW;x+=80){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,GH);ctx.stroke();}
      ctx.save();ctx.globalAlpha=0.3;ctx.fillStyle="#000";ctx.beginPath();ctx.ellipse(PX+6,g.py+PS*0.45,PS*0.4,8,0,0,Math.PI*2);ctx.fill();ctx.restore();
      ctx.save();ctx.shadowColor="rgba(255,215,0,0.7)";ctx.shadowBlur=22;ctx.font=`${PS}px serif`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("🎂",PX,g.py);ctx.restore();
      ctx.font=`${OS}px serif`;g.obs.forEach(o=>{ctx.save();ctx.translate(o.x,o.y);ctx.rotate(o.rot*Math.PI/180);ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(o.sym,0,0);ctx.restore();});
      ctx.save();ctx.shadowColor="rgba(0,0,0,0.6)";ctx.shadowBlur=5;ctx.fillStyle="#FFD700";ctx.font="bold 22px 'Fredoka One',serif";ctx.textAlign="left";ctx.textBaseline="top";ctx.fillText(`${tRef.current.score}: ${sc}`,14,12);ctx.fillStyle="rgba(255,255,255,0.45)";ctx.font="15px serif";ctx.textAlign="right";ctx.fillText(`⚡ ${g.speed.toFixed(1)}x`,GW-14,14);ctx.restore();
      animRef.current=requestAnimationFrame(loop);
    };
    animRef.current=requestAnimationFrame(loop);return()=>cancelAnimationFrame(animRef.current);
  },[phase]);
  useEffect(()=>{ if(phase!=="start")return; const ctx=canvasRef.current?.getContext("2d");if(!ctx)return; const bg=ctx.createLinearGradient(0,0,GW,GH);bg.addColorStop(0,"#A83000");bg.addColorStop(1,"#7A2000");ctx.fillStyle=bg;ctx.fillRect(0,0,GW,GH);ctx.save();ctx.globalAlpha=0.07;ctx.fillStyle="#FFD700";ctx.font="bold 130px serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("K.M",GW/2,GH/2);ctx.restore();ctx.font=`${PS}px serif`;ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText("🎂",PX,GH/2); },[phase]);
  const touch=e=>{if(phase!=="playing")return;e.preventDefault();const r=canvasRef.current.getBoundingClientRect();const ty=e.touches[0].clientY-r.top;keysRef.current["ArrowUp"]=ty/r.height<0.5;keysRef.current["ArrowDown"]=ty/r.height>=0.5;};
  const touchEnd=()=>{keysRef.current["ArrowUp"]=false;keysRef.current["ArrowDown"]=false;};
  return (
    <div style={{padding:"20px",textAlign:"center",animation:"fadeIn 0.4s ease"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",marginBottom:"18px"}}>
        <Btn af={af} onClick={()=>{cancelAnimationFrame(animRef.current);setView("home");}}>{t.back}</Btn>
        <h2 style={{color:"#FFF3E0",margin:0,fontSize:"1.8rem",textShadow:"2px 2px 0 #9E3000"}}>{t.gameTitle}</h2>
      </div>
      <div style={{position:"relative",display:"inline-block",maxWidth:"100%"}}>
        <canvas ref={canvasRef} width={GW} height={GH} style={{borderRadius:"22px",border:"3px solid rgba(255,255,255,0.28)",boxShadow:"0 14px 48px rgba(0,0,0,0.45)",maxWidth:"100%",touchAction:"none",display:"block"}} onTouchStart={touch} onTouchMove={touch} onTouchEnd={touchEnd} />
        {phase==="start"&&<Overlay><div style={{fontSize:"4rem",marginBottom:"8px"}}>🎂</div><h2 style={{color:"#FFF3E0",fontSize:"2.2rem",margin:"0 0 6px"}}>Cake Dash!</h2><p style={{color:"rgba(255,243,224,0.75)",margin:"0 0 18px",fontSize:"0.95rem",lineHeight:1.7,whiteSpace:"pre-line"}}>{t.gameInstr}</p><div style={{fontSize:"2rem",marginBottom:"22px",display:"flex",gap:"18px",justifyContent:"center"}}>🔪 🍴 🥄</div><PBtn af={af} onClick={start}>{t.play}</PBtn></Overlay>}
        {phase==="over"&&<Overlay><div style={{fontSize:"3.5rem",marginBottom:"10px"}}>💥</div><h2 style={{color:"#FF5533",fontSize:"2.4rem",margin:"0 0 4px"}}>{t.gameOver}</h2><div style={{color:"#FFD700",fontSize:"1.8rem",margin:"0 0 8px"}}>{t.score}: {score}</div>{score>=200&&<div style={{color:"#FFD700",marginBottom:"14px"}}>{t.great}</div>}{score>=80&&score<200&&<div style={{color:"rgba(255,243,224,0.8)",marginBottom:"14px"}}>{t.ok}</div>}<PBtn af={af} onClick={start}>{t.again}</PBtn></Overlay>}
      </div>
      <p style={{color:"rgba(255,255,255,0.4)",marginTop:"14px",fontSize:"0.82rem"}}>{t.tip}</p>
    </div>
  );
}

function VerToggle({t,af,recipe,version,setVersion}){return(<div style={{display:"flex",background:"rgba(0,0,0,0.25)",borderRadius:"16px",padding:"5px",gap:"5px"}}>{[{key:"quick",icon:"⚡",label:t.quick,time:recipe.quick?.time,ac:"#FFD700",tc:"#8B3000"},{key:"hard",icon:"⭐",label:t.pro,time:recipe.hard?.time,ac:"#FF4500",tc:"#FFF"}].map(v=>(<button key={v.key} onClick={()=>setVersion(v.key)} style={{flex:1,background:version===v.key?v.ac:"transparent",border:"none",borderRadius:"11px",padding:"12px 8px",color:version===v.key?v.tc:"rgba(255,255,255,0.55)",cursor:"pointer",fontFamily:af,fontSize:"1rem",transition:"all 0.2s"}}>{v.icon} {v.label}<br/><span style={{fontSize:"0.78rem",opacity:0.8}}>{v.time}</span></button>))}</div>);}
function Btn({onClick,children,af}){return(<button onClick={onClick} style={{background:"rgba(255,255,255,0.18)",border:"2px solid rgba(255,255,255,0.32)",borderRadius:"12px",padding:"10px 18px",color:"#FFF3E0",cursor:"pointer",fontFamily:af||"'Fredoka One',cursive",fontSize:"1rem",marginBottom:"18px"}}>{children}</button>);}
function Overlay({children}){return(<div style={{position:"absolute",inset:0,background:"rgba(0,0,0,0.74)",borderRadius:"19px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backdropFilter:"blur(6px)",animation:"fadeIn 0.3s ease"}}>{children}</div>);}
function PBtn({onClick,children,af}){return(<button onClick={onClick} style={{background:"#FFD700",border:"none",borderRadius:"18px",padding:"16px 44px",fontSize:"1.2rem",color:"#8B3000",cursor:"pointer",fontFamily:af||"'Fredoka One',cursive",boxShadow:"0 6px 20px rgba(0,0,0,0.35)"}} onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06)"} onMouseLeave={e=>e.currentTarget.style.transform=""}>{children}</button>);}
function Block({title,children}){return(<div style={{background:"rgba(255,255,255,0.12)",borderRadius:"20px",padding:"22px 24px",marginBottom:"16px",border:"2px solid rgba(255,255,255,0.2)",backdropFilter:"blur(8px)"}}><h3 style={{color:"#FFD700",margin:"0 0 14px",fontSize:"1.15rem"}}>{title}</h3>{children}</div>);}
function Row({children,last,align="center"}){return(<div style={{display:"flex",alignItems:align,gap:"12px",padding:"9px 0",borderBottom:last?"none":"1px solid rgba(255,255,255,0.1)",color:"#FFF3E0",fontSize:"0.96rem"}}>{children}</div>);}
function Dot(){return(<span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#FFD700",flexShrink:0}}/>);}
function Num({children}){return(<span style={{background:"#FFD700",color:"#8B3000",borderRadius:"50%",width:"28px",height:"28px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.88rem",flexShrink:0}}>{children}</span>);}
function Muted({children}){return(<div style={{color:"rgba(255,243,224,0.4)",fontSize:"0.9rem",textAlign:"center",padding:"12px 0"}}>{children}</div>);}
