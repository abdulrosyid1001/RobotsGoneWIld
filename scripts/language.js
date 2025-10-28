const url_params = new URLSearchParams(window.location.search);
export var lang = url_params.get('lang');
export var lang_state = 0;

if(lang == null){
	lang = "en";
}

export var language = {		
	"en": {
		loading: "LOADING",
		play:"PLAY",
		boost_n_blast: "BOOST & BLAST",
		get_your_power_up: "GET YOUR POWER UP!",
		no_thanks: "NO THANKS",
		text_collect_level_up: "Collect To Level Up",
		text_collect_upgrade: "Collect To Upgrade" ,
		text_collect_health: "Collect To Restore Health",
		text_drag_to_move: "Drag To Move",
		select_a_booster: "SELECT A BOOSTER",
		choose_text: "CHOOSE YOUR UPGRADE",
		okay: "OKAY",
		upgrades_skill: "UPGRADES SKILL",
		upgrade: "UPGRADE",
		back: "BACK",
		text_kills: "Kills",
		text_best_kills: "Best Kills",
		text_time: "Time",
		text_best_time: "Best Time",
		text_you_died: "YOU DIED!",
		your_extra_coin: "YOUR EXTRA COIN",
		paused: "PAUSED",
		are_you_sure: "ARE YOU SURE?",
		upgrade_0: "Shoot a bullet toward a random nearby enemy. Launch an extra bullet per level.",
		upgrade_1: "Spawn a revolving ball around the character that damages enemies on contact. Spawn an additional ball per level.",
		upgrade_2: "Shoot an Acid Missile from the sky, damaging the area around it. Shoot an additional missile per level.",
		upgrade_3: "Shoot an arc of Tech-Knives in front of you. Increase the damage of each Tech-Knife per level.",
		upgrade_4: "Spawn a protective shield, damaging any enemy that comes in contact. Increases the shield area per level.",
		upgrade_5: "Increase the damage of all of your abilities.",
		upgrade_6: "Increase your total health and restore missing health.",
		upgrade_7: "Increase your speed.",
		upgrade_8: "Increase your armor by 5%, reducing any incoming damage.",
		upgrade_9: "Attract pickups from a greater distance.",
		upgrade_10: "Increase armor by +10% permanently.",
		upgrade_11: "Increase damage of all abilities permanently",
		upgrade_12: "Increase speed permanently.",
		upgrade_13: "Increase total health permanently.",
		next: "NEXT",
		prev: "PREV",
		back: "BACK",
		skip: "SKIP",
	},
	"fr": {
		loading: "CHARGEMENT",
		play:"JOUER",
		boost_n_blast: "BOOST & EXPLOSION",
		get_your_power_up: "PRENDS TON POWER-UP!",
		no_thanks: "NON MERCI",
		text_collect_level_up: "Collecte pour progresser",
		text_collect_upgrade: "Collecte pour améliorer" ,
		text_collect_health: "Collecte pour restaurer la santé",
		text_drag_to_move: "Faites glisser pour déplacer",
		select_a_booster: "SÉLECTIONNEZ UN BOOSTER",
		choose_text: "CHOISISSEZ VOTRE AMÉLIORATION",
		okay: "D'accord",
		upgrades_skill: "Améliore la compétence",
		upgrade: "Amélioration",
		back: "Retour",
		text_kills: "Éliminations",
		text_best_kills: "Meilleur score d’éliminations",
		text_time: "Temps",
		text_best_time: "Meilleur Temps",
		text_you_died: "Tu es mort!",
		your_extra_coin: "Plus de pièces pour toi",
		paused: "En pause",
		are_you_sure: "ÊTES-VOUS SÛR ?",
		upgrade_0: "Tire une balle vers un ennemi proche au hasard. Tire une balle supplémentaire par niveau.",
		upgrade_1: "Fait apparaître une sphère tournante autour du personnage qui inflige des dégâts aux ennemis au contact. Fait apparaître une sphère supplémentaire par niveau.",
		upgrade_2: "Tire un missile acide depuis le ciel, infligeant des dégâts dans la zone autour de l'impact. Tire un missile supplémentaire par niveau.",
		upgrade_3: "Tire un arc de Tech-Couteaux devant toi. Augmente les dégâts de chaque Tech-Couteau par niveau.",
		upgrade_4: "Génère un bouclier protecteur qui inflige des dégâts à tout ennemi au contact. Augmente la zone du bouclier à chaque niveau.",
		upgrade_5: "Augmente les dégâts de toutes tes capacités.",
		upgrade_6: "Augmente la santé totale et restaure les points de vie manquants.",
		upgrade_7: "Augmente la vitesse.",
		upgrade_8: "Augmente l'armure de 5 %, réduisant ainsi les dégâts reçus.",
		upgrade_9: "Attire les objets ramassables à une plus grande distance.",
		upgrade_10: "Augmente l'armure de +10 % de façon permanente.",
		upgrade_11: "Augmente les dégâts de toutes les capacités de façon permanente.",
		upgrade_12: "Augmente la vitesse de façon permanente.",
		upgrade_13: "Augmente la santé totale de façon permanente.",
		next: "Suivant",
		prev: "Précédent",
		back: "Retour",
		skip: "Passer",
	},	
}

switch(lang){
	case "en":
		lang_state = 0;
	break;
	case "fr":
		lang_state = 1;
	break;
}

// export var curr_language = language.ina;
export var curr_language = language[lang];