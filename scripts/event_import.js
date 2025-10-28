import{
	main_runtime
} from './main.js'


import{
	set_cookie,
	set_cookie_ex_ms,
	get_cookie,
	delete_cookie,
	is_cookie_exist
} from './cookie.js'

import{
	language,
	lang,
	lang_state
} from './language.js'

let SDK_TRANSSION = 0;
let SDK_XIAOMI = 1;
let SDK_GAMELOFT = 2;
let SDK_GAMELOFTADS = 3;
let SDK_ARENAMAIN = 4;
// var sdk_state = SDK_XIAOMI;
var sdk_state = SDK_ARENAMAIN;


var is_ad_free = false;

if(sdk_state == SDK_GAMELOFT || sdk_state == SDK_ARENAMAIN){
	is_ad_free = true;
}

var gami_arrow_speed = 0.017; // to avoid rebuild over and over again... duh...

// hero data
var health_addition = 40;
var speed_addition = 20;
var armor_addition = 5;
var start_coin_value = 0;

// enemies data

// enemy_2
// walking1
var humanoid1 = {
	life_point: 40,
	damage: 25,
	speed: 150,
	accel: 600,
	deaccel: 600,
	extra_drop: 1
}

// boss_3
// walking2
var humanoid2 = {
	life_point: 2500,
	damage: 190,
	speed: 250,
	accel: 600,
	deaccel: 600,
	extra_drop: 2
}

// enemy_1
// flying1
var bird1 = {
	life_point: 7,
	damage: 15,
	speed: 200,
	accel: 600,
	deaccel: 600,
	extra_drop: 0
}

// boss_1
// flying2
var bird2 = {
	life_point: 350,
	damage: 25,
	speed: 250,
	accel: 600,
	deaccel: 600,
	extra_drop: 2
}

// enemy_5
var spider1 = {
	life_point: 100,
	damage: 45,
	speed: 350,
	accel: 600,
	deaccel: 600,
	extra_drop: 0
}

// boss_4
var spider2 = {
	life_point: 3500,
	damage: 250,
	speed: 300,
	accel: 600,
	deaccel: 600,
	extra_drop: 2
}

// enemy_3
// flying3
var skull1 = {
	life_point: 30,
	damage: 30,
	speed: 250,
	accel: 600,
	deaccel: 600,
	extra_drop: 0
}


// boss_2
var skull2 = {
	life_point: 1200,
	damage: 130,
	speed: 250,
	accel: 600,
	deaccel: 600,
	extra_drop: 2
}

// enemy_4
var wiz = {
	life_point: 170,
	damage: 45,
	speed: 200,
	accel: 600,
	deaccel: 600,
	extra_drop: 1
}

function rewardEvent(){ // glance
	window._triggerReason = 'reward'
	if (!window.is_rewarded_noFill){
		window.GlanceGamingAdInterface.showRewarededAd(window.rewardInstance);
	} 
	else{
		window.runOnAdClosed();
	}
}


// window.rewardObj?.adInstance?.registerCallback('onAdClosed', (data) => {
// 	//  console.log("kevin ad closed...");
// });

// window.rewardObj?.adInstance?.registerCallback('onRewardsUnlocked', (data) => {
// 	// console.log("kevin ad granted...");
// });


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var is_show_interstitial = true;
var last_show_interstitial;
var interstitial_limit = 30000; // 30  seconds
var ad_format;
var ad_reward_state = 0; //-1: interstitial, 0: multiply point reward, 1: energy reward
var is_done_init_ad = false;
var is_grant_reward = false;

function load_ad(_ad_format, _ad_reward_state = -1){
	ad_format = _ad_format;
	ad_reward_state = _ad_reward_state;
	
	window.GSInstant.advertisement2.loadAd({adFormat: ad_format});
}

function show_ad(_ad_format, _ad_reward_state = -1){
	
	is_grant_reward = false;
	
	ad_format = _ad_format;
	ad_reward_state = _ad_reward_state;
	window.GSInstant.advertisement2.showAd({adFormat:ad_format});
}

function init_game_analytics(game_key, secret_key){

	var ga_script = document.getElementById("ga_script");

	if(ga_script == null || ga_script == undefined){
		var script_ga = document.createElement("script");
		script_ga.src = "./GameAnalytics.js"
		body.appendChild(script_ga);

		setTimeout(()=>{
			window.gameanalytics.GameAnalytics.initialize(game_key, secret_key);
			window.gameanalytics.GameAnalytics.setEnabledInfoLog(true);
			window.gameanalytics.GameAnalytics.setEnabledVerboseLog(true);

			window.gameanalytics.GameAnalytics.addProgressionEvent(window.gameanalytics.EGAProgressionStatus.Complete, "loading_start");
		}, 777);
	}
	else{
		window.gameanalytics.GameAnalytics.initialize(game_key, secret_key);
		window.gameanalytics.GameAnalytics.setEnabledInfoLog(true);
		window.gameanalytics.GameAnalytics.setEnabledVerboseLog(true);

		window.gameanalytics.GameAnalytics.addProgressionEvent(window.gameanalytics.EGAProgressionStatus.Complete, "loading_start");
	}
	


	
}

//banner ad installation
var html = document.getElementsByTagName("html")[0];
var head = document.getElementsByTagName("head")[0];
var body = document.getElementsByTagName("body")[0];
body.style.display = "flex";
body.style.position = "relative";

//banner ad anchor

switch(sdk_state){
	case SDK_TRANSSION:
		
		var banner_anchor = document.createElement("div");
		banner_anchor.style.position = "absolute";
		banner_anchor.style.bottom = "0";
		banner_anchor.style.display = "flex";
		banner_anchor.style.justifyContent = "center";
		banner_anchor.style.alignItems = "center";
		banner_anchor.style.backgroundColor = "#7D7D7D";
		banner_anchor.style.width = "100%";
		banner_anchor.style.height = "70px";


		var ins = document.createElement("ins");
		ins.className += "adsbygoogle";
		ins.style.position = "absolute";
		ins.style.zIndex = "22";
		ins.style.width = "320px";
		ins.style.height = "50px";
		ins.style.backgroundColor = "none";
		ins.setAttribute("data-ad-client", "ca-pub-2270136017335510");
		ins.setAttribute("data-ad-slot", "9886871299");

		banner_anchor.appendChild(ins);
		body.appendChild(banner_anchor);

		var script = document.createElement("script");
		script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
		body.appendChild(script);
	break;
	
	case SDK_XIAOMI:
		var banner_anchor = document.createElement("div");
		banner_anchor.id = "banner_anchor";
		banner_anchor.style.position = "absolute";
		banner_anchor.style.bottom = "0";
		banner_anchor.style.display = "flex";
		banner_anchor.style.justifyContent = "center";
		banner_anchor.style.alignItems = "center";
		banner_anchor.style.backgroundColor = "#7D7D7D";
		banner_anchor.style.width = "100%";
		banner_anchor.style.height = "70px";


		var ins = document.createElement("ins");
		ins.className += "adsbygoogle";
		ins.style.display = "block";
		ins.style.position = "absolute";
		ins.style.zIndex = "22";
		ins.style.width = "320px";
		ins.style.height = "50px";
		ins.style.backgroundColor = "none";
		ins.setAttribute("data-ad-client", "ca-pub-3423367744172781");
		ins.setAttribute("data-ad-slot", "7237889123");
		// ins.setAttribute("data-ad-format", "auto");
		ins.setAttribute("data-full-width-responsive", "true");


		banner_anchor.appendChild(ins);
		body.appendChild(banner_anchor);

		var script = document.createElement("script");
		script.innerHTML = "(adsbygoogle = window.adsbygoogle || []).push({});";
		body.appendChild(script);

		init_game_analytics("8723a8122531575dccea1b27231725da", "ca61c4538488446aa85e7b18bff34c4b2c3b2d4d");

	break;
}

function h5sdk_interstitial(cb_before_ad, cb_done){
        window.h5sdk.adBreak({
                type: "start",
                name: "my_interstitial",
                beforeAd: function(){
                        console.log("beforeAd");
						cb_before_ad();
                },
                afterAd: function(){
                        console.log("afterAd");
                },
                adBreakDone: function(placementInfo){
                     cb_done();
                     window.h5sdk.hide();
                },
          });
}

function h5sdk_reward(cb_before_ad, cb_done, cb_grant, cb_dismiss){
        window.h5sdk.adBreak({
                type: "reward",
                name: "my_reward",
                beforeAd: function(){
                        console.log("beforeAd");
						cb_before_ad();
                },
                afterAd: function(){
                        console.log("afterAd");
                },
                adDismissed: function(){
                        console.log("adDismissed");
                },
                adViewed: function(){
                        console.log("adViewed");
                },
                beforeReward: function(showAdFn){
                        console.log("beforeReward");
                        showAdFn();
                },
                adBreakDone: function(placementInfo){
                        if (placementInfo.breakStatus == "dismissed") {
                                console.log("dismiss:" + placementInfo.breakStatus);

                                if(cb_dismiss != null){
                                        cb_dismiss();
                                }
                        }
                        else if (placementInfo.breakStatus != "viewed") {
                                console.log("viewed:" + placementInfo.breakStatus);
                        }
                        else if(placementInfo.breakStatus == "viewed"){
                                //NOTE: grant reward here

                                console.log("ads get viewed???");

                                if(cb_grant != null){
                                        cb_grant();
                                }
																
                        }
                        window.h5sdk.hide();
						cb_done();
                },
        });
}


function athena_send(event, param1, param2){
	if(window.h5sdk != undefined){
			window.h5sdk.athenaSend(event, param1, param2);	
	}
}


function h5_reward(cb_before_ad, cb_done, cb_grant, cb_dismiss, state){
	window.adBreak({
		type: "reward",
		name: "my_reward",
		beforeAd: function(){
			console.log("beforeAd");
			window.is_request_ad = true;
			cb_before_ad();
		},
		afterAd: function(){
			console.log("afterAd");
		},
		adDismissed: function(){
			console.log("adDismissed");
		},
		adViewed: function(){
			console.log("adViewed");
		},
		beforeReward: function(showAdFn){
			console.log("beforeReward");
			showAdFn();
		},
		adBreakDone: function(placementInfo){
			if(placementInfo.breakStatus == "viewed"){
				//NOTE: grant reward here

				console.log("ads get viewed???");

				window.gameanalytics.GameAnalytics.addAdEvent(
					2, // GA.EGAAdAction.Show => javascript enum
					2, // GA.EGAAdType.RewardedVideo => javascript enum
					"google h5 adplacement",
					"[ad placement id]"
				);

				if(cb_grant != null){
					window.is_request_ad = false;
					cb_grant();
				}
			}
			else if(placementInfo.breakStatus == "dismissed"){
				console.log("status:" + placementInfo.breakStatus);


				window.gameanalytics.GameAnalytics.addAdEvent(
                	3, // GA.EGAAdAction.FailedShow => javascript enum
                	2, // GA.EGAAdType.RewardedVideo, => javascript enum
                	"google h5 adplacement:[" + placementInfo.breakStatus  + "]",
                	"[ad placement id]"
                );

				// do cb dismiss!!!
				if(cb_dismiss != null){
					window.is_request_ad = false;
					cb_dismiss();
				}
			}
			else{

				window.gameanalytics.GameAnalytics.addAdEvent(
                	3, // GA.EGAAdAction.FailedShow => javascript enum
                	2, // GA.EGAAdType.RewardedVideo, => javascript enum
                	"google h5 adplacement:[" + placementInfo.breakStatus  + "]",
                	"[ad placement id]"
                );

				// NOTE: just give reward when something bad happend with the ad
				// 'notReady'		The Ad Placement API had not initialised
				// 'timeout'		A placement timed out because the Ad Placement API took too long to respond
				// 'invalid'		The placement was invalid and was ignored–for instance there should only be one preroll placement per page load, subsequent prerolls are failed with this status
				// 'error'		There was a JavaScript error in a callback
				// 'noAdPreloaded'	An ad had not been preloaded yet so this placement was skipped
				// 'frequencyCapped'	An ad wasn't shown because the frequency cap was applied to this placement
				// 'ignored'		The user didn't click on a reward prompt before they reached the next placement, that is showAdFn() wasn't called before the next adBreak().
				// 'other'		The ad was not shown for another reason. (e.g., The ad was still being fetched, or a previously cached ad was disposed because the screen was resized/rotated.)

			 	if(cb_grant != null){
					window.is_request_ad = false;
			 		cb_grant();
			 	}
				
				cb_done();

				window.is_ad_ready = false;

			}
		},
	});
}

function h5_interstitial(cb_before_ad, cb_done){
	window.adBreak({
		type: "start",
		name: "my_intersitital",
		beforeAd: function(){
			console.log("beforeAd");
			cb_before_ad();
		},
		afterAd: function(){
			console.log("afterAd");
		},
		adBreakDone: function(placementInfo){
			cb_done();
			window.is_ad_ready = false;
		},
	});
}


addEventListener("resize", (event) => {
	main_runtime.callFunction("on_resize");
});

addEventListener("fullscreenchange", (event) => { // not affect when f11 pressed???
	main_runtime.callFunction("on_resize");
	
	
	if (document.fullscreenElement) {
   		console.log("enter fullscreen");
  	} else {
   		console.log("Leaving fullscreen mode.");
 	}
	
// 	if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement)
//  	{
//   		// Run code on exit
// 		console.log("exit fullscreen...");
//  	}
	
});

