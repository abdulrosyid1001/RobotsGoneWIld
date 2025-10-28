/*
	Kevin Haryo Kuncoro
	kevin.haryo@gamotions.com
	kevinhyokun91@gmail.com
*/

// https://www.w3schools.com/js/js_cookies.asp

export function set_cookie(key, value){
	document.cookie = key + "=" + value;
}

export function set_cookie_ex_ms(key, value, ex_ms){
	var now = new Date();
	var time = now.getTime();
	var expireTime = time + ex_ms;
	now.setTime(expireTime);
	var expired_str ="; expires=" + now.toGMTString();
	set_cookie(key, value + expired_str);
}

export function get_cookie(key) {
  var name = key + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function delete_cookie(key){
	document.cookie = key + "=" + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
}

export function is_cookie_exist(key){
	if(get_cookie(key) != ""){
		return true;
	}
	return false;
}

// 24 hours = 86400000 ms
// set_cookie_ex_ms("test" , "kikik...", 15000);