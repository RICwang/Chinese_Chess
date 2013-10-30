var all_chess = $("div");
var all_soldier = $('div[id*="_soldier"]');
var all_td = $('td');
var moving_chess = "";
var round = 0;

/*“将”或“帅”移动的方法*/
function general_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");

	var move_after_up = parseInt(move_before) - 10;
	var move_after_down = parseInt(move_before) + 10;
	var move_after_left = parseInt(move_before) - 1;
	var move_after_right = parseInt(move_before) + 1;

	var moveable_all_array = new Array(4,5,6,14,15,16,24,25,26,74,75,76,84,85,86,94,95,96);
	var moveable = new Array();
	if ($.inArray(move_after_up,moveable_all_array) > 0) {
		// console.log(move_after_up);
		moveable.push(move_after_up);
	}
	if ($.inArray(move_after_down,moveable_all_array) > 0) {
		moveable.push(move_after_down);
	}
	if ($.inArray(move_after_left,moveable_all_array) > 0) {
		moveable.push(move_after_left);
	}
	if ($.inArray(move_after_right,moveable_all_array) > 0) {
		moveable.push(move_after_right);
	}

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
}

/*“士”或“仕”移动的方法*/
function bodyguard_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");

	var move_after_left_up = parseInt(move_before) - 11;
	var move_after_left_down = parseInt(move_before) + 9;
	var move_after_right_up = parseInt(move_before) - 9;
	var move_after_right_down = parseInt(move_before) + 11;

	var moveable_all_array = new Array(4,5,6,14,15,16,24,25,26,74,75,76,84,85,86,94,95,96);
	var moveable = new Array();
	if ($.inArray(move_after_left_up,moveable_all_array) > 0) {
		// console.log(move_after_left_up);
		moveable.push(move_after_left_up);
	}
	if ($.inArray(move_after_left_down,moveable_all_array) > 0) {
		moveable.push(move_after_left_down);
	}
	if ($.inArray(move_after_right_up,moveable_all_array) > 0) {
		moveable.push(move_after_right_up);
	}
	if ($.inArray(move_after_right_down,moveable_all_array) > 0) {
		moveable.push(move_after_right_down);
	}

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
}

/*“象”或“相”移动的方法*/
function prime_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");

	var move_before_left_up = parseInt(move_before) - 11;
	var move_before_left_down = parseInt(move_before) + 9;
	var move_before_right_up = parseInt(move_before) - 9;
	var move_before_right_down = parseInt(move_before) + 11;

	if ($('#'+move_before_left_up).children().attr('name') != undefined) {
		var move_after_left_up = "";
	} else {
		var move_after_left_up = parseInt(move_before_left_up) - 11;
	}
	if ($('#'+move_before_left_down).children().attr('name') != undefined) {
		var move_after_left_down = "";
	} else {
		var move_after_left_down = parseInt(move_before_left_down) + 9;
	}
	if ($('#'+move_before_right_up).children().attr('name') != undefined) {
		var move_after_right_up = "";
	} else {
		var move_after_right_up = parseInt(move_before_right_up) - 9;
	}
	if ($('#'+move_before_right_down).children().attr('name') != undefined) {
		var move_after_right_down = "";
	} else {
		var move_after_right_down = parseInt(move_before_right_down) + 11;
	}

	var moveable_all_array = new Array(3,7,21,25,29,43,47,53,57,71,75,79,93,97);
	var moveable = new Array();
	if (move_after_left_up != "") {
		if ($.inArray(move_after_left_up,moveable_all_array) > 0) {
			// console.log(move_after_left_up);
			moveable.push(move_after_left_up);
		}
	}
	if (move_after_left_down != "") {
		if ($.inArray(move_after_left_down,moveable_all_array) > 0) {
			moveable.push(move_after_left_down);
		}
	}
	if (move_after_right_up != "") {
		if ($.inArray(move_after_right_up,moveable_all_array) > 0) {
			moveable.push(move_after_right_up);
		}
	}
	if (move_after_right_down != "") {
		if ($.inArray(move_after_right_down,moveable_all_array) > 0) {
			moveable.push(move_after_right_down);
		}
	}

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
}

/*“马”移动的方法*/
function horse_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");

	var move_before_up = parseInt(move_before) - 10;
	var move_before_down = parseInt(move_before) + 10;
	var move_before_left = parseInt(move_before) - 1;
	var move_before_right = parseInt(move_before) + 1;

	if (parseInt(move_before_up) < 0 || $('#'+move_before_up).children().attr('name') != undefined) {
		var move_before_up_array = new Array();
	} else {
		var move_before_up_array = new Array(move_before_up - 9, move_before_up - 11);
	}
	if (parseInt(move_before_down) > 99 || $('#'+move_before_down).children().attr('name') != undefined) {
		var move_before_down_array = new Array();
	} else {
		var move_before_down_array = new Array(move_before_down + 9, move_before_down + 11);
	}
	if (parseInt(move_before_left) % 10 == 0 || $('#'+move_before_left).children().attr('name') != undefined) {
		var move_before_left_array = new Array();
	} else {
		var move_before_left_array = new Array(move_before_left - 11, move_before_left + 9);
	}
	if (parseInt(move_before_right) % 10 == 0 || $('#'+move_before_right).children().attr('name') != undefined) {
		var move_before_right_array = new Array();
	} else {
		var move_before_right_array = new Array(move_before_right - 9, move_before_right + 11);
	}
	var moveable = $.merge(move_before_up_array,move_before_down_array);
	var moveable = $.merge(moveable,move_before_left_array);
	var moveable = $.merge(moveable,move_before_right_array);

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
}

/*“车”移动的方法*/
function car_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");
	var move_before_first = Math.floor( move_before / 10 );
	var move_before_last = move_before % 10;

	var moveable_column = new Array();
	var moveable_column_num = 0;
	var moveable_row = new Array();
	var moveable_row_num = 0;

	/*向右*/
	for (var i = parseInt(move_before) + 1; i < (parseInt(move_before_first) + 1) * 10; i++) {
		if ($('#'+i).children().attr('name') == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
		} else {													//直线遇到的第一个棋子所在的TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
			break;
		}
	}
	/*向左*/
	for (var i = parseInt(move_before) - 1; i > parseInt(move_before_first) * 10; i--) {
		if ($('#'+i).children().attr('name') == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
		} else {													//直线遇到的第一个棋子所在的TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
			break;
		}
	};
	/*向上*/
	for (var i = parseInt(move_before_first) - 1; i >= 0; i--) {
		var move_column = i * 10 + parseInt(move_before_last);
		if ($('#'+move_column).children().attr('name') == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
		} else {															//直线遇到的第一个棋子所在的TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
			break;
		}
	}
	/*向下*/
	for (var i = parseInt(move_before_first) + 1; i < 10; i++) {
		var move_column = i * 10 + parseInt(move_before_last);
		if ($('#'+move_column).children().attr('name') == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
		} else {															//直线遇到的第一个棋子所在的TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
			break;
		}
	}
	var moveable = $.merge(moveable_column,moveable_row);		//所有可移动至的TD的ID数组

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
	
}

/*“炮”移动的方法*/
function cannon_move(obj){
	unband_all_chess_function('click');

	var move_before = $(obj).parent().attr("id");
	var move_before_first = Math.floor( move_before / 10 );
	var move_before_last = move_before % 10;

	var moveable_column = new Array();
	var moveable_column_num = 0;
	var moveable_row = new Array();
	var moveable_row_num = 0;

	/*向右*/
	for (var i = parseInt(move_before) + 1; i < (parseInt(move_before_first) + 1) * 10; i++) {
		if ($('#'+i).children().attr('name') == undefined && near_right == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
		} else if ($('#'+i).children().attr('name') != undefined && near_right == undefined) {		//直线遇到的第一个棋子所在的TD的ID
			var near_right = i;
		} else if ($('#'+i).children().attr('name') != undefined && near_right != undefined) {		//直线遇到的第二个棋子所在的TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
			break;
		}
	}
	/*向左*/
	for (var i = parseInt(move_before) - 1; i > parseInt(move_before_first) * 10; i--) {
		if ($('#'+i).children().attr('name') == undefined && near_left == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
		} else if ($('#'+i).children().attr('name') != undefined && near_left == undefined){		//直线遇到的第一个棋子所在的TD的ID
			var near_left = i;
		} else if ($('#'+i).children().attr('name') != undefined && near_left != undefined){		//直线遇到的第二个棋子所在的TD的ID
			moveable_row[moveable_row_num] = i;
			moveable_row_num++;
			break;
		}
	};
	/*向上*/
	for (var i = parseInt(move_before_first) - 1; i >= 0; i--) {
		var move_column = i * 10 + parseInt(move_before_last);
		if ($('#'+move_column).children().attr('name') == undefined && near_up == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
		} else if($('#'+move_column).children().attr('name') != undefined && near_up == undefined) {		//直线遇到的第一个棋子所在的TD的ID
			var near_up = move_column;
		} else if($('#'+move_column).children().attr('name') != undefined && near_up != undefined) {		//直线遇到的第二个棋子所在的TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
			break;
		}
	}
	/*向下*/
	for (var i = parseInt(move_before_first) + 1; i < 10; i++) {
		var move_column = i * 10 + parseInt(move_before_last);
		if ($('#'+move_column).children().attr('name') == undefined && near_down == undefined) {		//直线未遇到棋子的所有TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
		} else if($('#'+move_column).children().attr('name') != undefined && near_down == undefined){		//直线遇到的第一个棋子所在的TD的ID
			var near_down = move_column;
		} else if($('#'+move_column).children().attr('name') != undefined && near_down != undefined){		//直线遇到的第二个棋子所在的TD的ID
			moveable_column[moveable_column_num] = move_column;
			moveable_column_num++;
			break;
		}
	}
	var moveable = $.merge(moveable_column,moveable_row);		//所有可移动至的TD的ID数组

	for (var j = moveable.length - 1; j >= 0; j--) {
		$("#"+moveable[j]).addClass('moveable');
		$("#"+moveable[j]).attr('onclick','move_target('+$(obj).attr("id")+','+moveable[j]+',\''+moveable+'\')')
	}
	band_cancel_moving();
	
}

/*“卒”或“兵”移动的方法*/
function soldier_move(obj){
	unband_all_chess_function('click');

	var color = $(obj).attr("name");

	var move_before = $(obj).parent().attr("id");
	if (color == "black") {		//卒的移动方式
		if (move_before < 50) {
			var moveable = new Array('10');
		} else if(move_before > 90) {
			var moveable = new Array('1','-1');
		} else {
			var moveable = new Array('10','1','-1');
		}
	} else {
		if (move_before > 50) {		//兵的移动方式
			var moveable = new Array('-10');
		} else if(move_before < 10) {
			var moveable = new Array('1','-1');
		} else {
			var moveable = new Array('-10','1','-1');
		}
	}
	var all_moveable_id = new Array();
	for (var j = moveable.length - 1; j >= 0; j--) {
		var all_move_after = parseInt(move_before) + parseInt(moveable[j]);
		
		all_moveable_id[j] = all_move_after;		//所有可移动至的TD的ID数组
	}
	for (var j = moveable.length - 1; j >= 0; j--) {
		var move_after = parseInt(move_before) + parseInt(moveable[j]);

		$("#"+move_after).addClass('moveable');
		$("#"+move_after).attr('onclick','move_target('+$(obj).attr("id")+','+move_after+',\''+all_moveable_id+'\')')
	}
	for (var i = all_td.length - 1; i >= 0; i--) {
		if ($(all_td[i]).attr("class") != "moveable") {
			$(all_td[i]).attr("onclick","cancel_moving();")
		}
	}
}

/*绑上取消移动的方法*/
function band_cancel_moving(){
	for (var i = all_td.length - 1; i >= 0; i--) {
		if ($(all_td[i]).attr("class") != "moveable") {
			$(all_td[i]).attr("onclick","cancel_moving();");
		}
	}
}

/*取消移动*/
function cancel_moving(){
	for (var i = all_td.length - 1; i >= 0; i--) {
		if ($(all_td[i]).attr("class") == "moveable") {
			// $(all_td[i]).removeClass('moveable');
		}
	}
	unband_all_chess_function("click");
	band_all_chess_function();
	// return false;
}

/*移动到目标*/
function move_target(obj,moved_id,all_moveable_id){
	// band_cancel_moving();
	// console.log($(obj).attr('name'));
	moving_target = $(obj).attr('name');
	target_color = $('#'+moved_id).children().attr('name');
	if (moving_target == target_color) {
		alert("自己人");
		return;
	}
	if (target_color != null && moving_target != target_color) {
		alert("我吃！！！！！！！！");
	}
	unband_all_chess_function('click');

	$('#'+moved_id).text("");
	$('#'+moved_id).append(obj);

	var strs= new Array(); //定义一数组
	strs=all_moveable_id.split(","); //字符分割   

	for (var i = strs.length - 1; i >= 0; i--) {
		$('#'+strs[i]).removeClass('moveable');
	};
	round++;
	band_all_chess_function();
}

/*解除所有绑定*/
function unband_all_chess_function(obj){
	for (var i = all_td.length - 1; i >= 0; i--) {		//移除所有TD的onclick
		$(all_td[i]).removeAttr('onclick');
	};
	for (var i = all_chess.length - 1; i >= 0; i--) {		//移除所有棋子的绑定
		$(all_chess[i]).unbind(obj);
	};
}

/*给所有棋子绑上各自的方法*/
function band_all_chess_function(){
	color_array = new Array("black","red");
	for (var i = 0 ; i < color_array.length; i++) {
		var color = color_array[i];
		if (round % 2 == i) {
			/*“卒”或“兵”*/
			var soldier = $('div[id^="'+color+'_soldier"]');
			for (var j =  0 ; j < soldier.length; j++) {
				$(soldier[j]).bind('click',function(){
					soldier_move(this);
				});
			}
			/*“炮”*/
			var cannon = $('div[id^="'+color+'_cannon"]');
			for (var j =  0 ; j < cannon.length; j++) {
				$(cannon[j]).bind('click',function(){
					cannon_move(this);
				});
			}
			/*“车”*/
			var car = $('div[id^="'+color+'_car"]');
			for (var j =  0 ; j < car.length; j++) {
				$(car[j]).bind('click',function(){
					car_move(this);
				});
			}
			/*“马”*/
			var horse = $('div[id^="'+color+'_horse"]');
			for (var j =  0 ; j < horse.length; j++) {
				$(horse[j]).bind('click',function(){
					horse_move(this);
				});
			}
			/*“象”或“相”*/
			var prime = $('div[id^="'+color+'_prime"]');
			for (var j =  0 ; j < prime.length; j++) {
				$(prime[j]).bind('click',function(){
					prime_move(this);
				});
			}
			/*“士”或“仕”*/
			var bodyguard = $('div[id^="'+color+'_bodyguard"]');
			for (var j =  0 ; j < bodyguard.length; j++) {
				$(bodyguard[j]).bind('click',function(){
					bodyguard_move(this);
				});
			}
			/*“将”或“帅”*/
			var general = $('div[id^="'+color+'_general"]');
			for (var j =  0 ; j < general.length; j++) {
				$(general[j]).bind('click',function(){
					general_move(this);
				});
			}
		} else {
			var cant_move_chess = $('div[name='+color+']');
			for (var j =  0 ; j < cant_move_chess.length; j++) {
				// console.log($(soldier[j]));
				$(cant_move_chess[j]).bind('click',function(){
					if (round % 2 == 1) {
						alert("本回合属于红方");
					}
					if (round % 2 == 0) {
						alert("本回合属于黑方");
					}
				})
			}
		}
	}
}


$(document).ready(function(){
	band_all_chess_function();
	alert('黑色先行');
	
});

