var points = 10;
var helth = 100;
var tired = 100;
var strength = 4;
var agility = 4;
var speach = 4;
var mind = 4;

var pointsFirst = true;
var GameText = "test";
var turn = 0;
var character = " ";
var PlayerRole = "-";
var choise1 = " ";
var choise2 = " ";
var choise3 = " ";
var choise4 = " ";
var MakeChoise1 = false;
var MakeChoise2 = false;
var MakeChoise3 = false;
var MakeChoise4 = false;

jQuery('document').ready(function() {

//Персонажи:
var PlayerMainGuard = function() {
	GameText = '---';
	return;
};
var PlayerCaptain = function() {
	if (turn === 1) {
		GameText = '<p> В детстве я всегда мечтал о том, как стану космонавтом, буду бороздить просторы вселенной, встречать различных существ и просто утопать во всевозможных приключениях. Как же я тогда ошибался, за исключением приключений, их просто масса, ведь каждый недочёт, неосмотрительность, да и любая ошибка может стать роковой. Особенно на испытательных миссиях, где эти недочёты и предстоит выявить. Конечно, став повзрослее я понимал, что космос – это не курорт, а в первую очередь передовая, где нет места сомнению, сентиментальности и слабости. Но как можно представить себе великое ничто, бездну, всеобъемлющую тьму, осознание изоляции и одиночества? Никак… Пока лично не испытаешь. Из лучших курсантов, былых вояк и даже опытных космонавтов у многих сдали нервы, когда они оказались одни против космоса, без поддержки Земли и возможности вернуться. Видимо осознание пустоты и тщетности всех усилий просто ломало, сводило с ума, каждого по-своему. Но я один из «счастливчиков» и не подвержен таким переменам, наверное, требуется определённый склад ума, жизненный опыт, или что-то в этом роде.</p> <p> Сейчас я направляюсь в сторону Марса на очередное испытание, в этот раз в роли капитана. Конечно, мне не в первый раз руководить экипажем, но сейчас что-то не так. У меня есть какое-то предчувствие, странная тяжесть, не физическая, а ментальная. И это не связано со всей этой атмосферой недосказанности, секретные миссии – это не редкость, однако ранее о испытания предупреждали за неделю до вылета, сейчас же меня уведомили за 12 часов и не разрешили брать с собой вообще ничего, даже нижнего белья или фотографии. Меня просто поставили перед фактом и дали пару часов на прощание с семьей, остальное время заняла дорога до космопорта и подготовка к полёту. Но как и всегда я готов выполнить свой долг ради всего человечества.</p> ' +
		'<button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';
		choise1 = "Далее";
		choise2 = "-";
		choise3 = "-";
		choise4 = "-";
		return;
	}

	if (turn === 2) {

		if (MakeChoise2 === false && MakeChoise3 === false && MakeChoise4 === false) {
			GameText = '<p> Я закончил... </p> [На терминале появилось сообщение]<br/> -Благодарим за прохождение психологического теста. Позже Вы будете уведомлены о рекомендуемом времени проведения следующего сеанса.<br/> Состояние: Удовлетворительное. <p> С небольшим чувством облегчения Вы откинули спинку кресла и начали думать что делать дальше...</p>' +
			'<br/> <button id="FirstChoise"></button> <br/> <button id="SecondChoise"></button> <br/> <button id="ThirdChoise" class="hide"></button> <br/> <button id="FourthChoise"></button>';
		}
		else {
			GameText = GameText + '<br/><button id="FirstChoise"></button>';

			if (MakeChoise2 === true) {
					GameText = GameText + '<br/><button id="SecondChoise" class="hide"></button>';
			}
			else {
				GameText = GameText + '<br/><button id="SecondChoise"></button>';
			}

			if (MakeChoise3 === false && MakeChoise2 === true) {
				GameText = GameText + '<br/><button id="ThirdChoise"></button>';
			}
			else {
				GameText = GameText + '<br/><button id="ThirdChoise" class="hide"></button>';
			}

			if (MakeChoise4 === true) {
				GameText = GameText + '<br/><button id="FourthChoise" class="hide"></button>';
			}
			else {
				GameText = GameText + '<br/><button id="FourthChoise"></button>';
			}
		}


		choise1 = "Отправиться в гибернацию";
		choise2 = "Открыть брифинг к миссии";
		choise3 = "Прогуляться по кораблю";
		choise4 = "Проверить почту";
		return;
	}

	if (turn === 3) {
		GameText = 'Выйдя из комнаты инфо-центра Вы неспеша направились в отсек гибернации всю дорогу раздумывая не станет ли это приключение последним. <br/> <br/> Подойдя к своей капсуле Вы сняли спец-костюм и залезли внутрь, когда крышка закрылась, панель уведомила Вас о том, что до прибытия осталось 73 земных дня.<br/> <br/> Во время погружения в сон Ваше тело смутно ощущало как уровень жидкости поднимается всё выше, и выше, и выше. Вы мысленно напевали себе древнюю песенку, пока сознание окончательно не погрузилось в сон...';
		GameText = GameText + '<br/><br/> <button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>'
		choise1 = "Далее";
		MakeChoise1 = false;
		MakeChoise2 = false;
		MakeChoise3 = false;
		MakeChoise4 = false;
		return;
	}
	if (turn === 4) {
		GameText = 'Вы пришли в себя уже сидя на краю гибернационной капсулы. Ощущения как после длительного послеобеденного сна, только намного хуже. Пока Вы приходите в себя, судовой доктор проводит осмотр всех проснувшихся. Спустя пять минут сознание почти полностью вернулось и недавно терзающие Вас воспоминания о различных сновидениях потерялись в глубинах памяти. Кроме одного, этот сон Вы и сейчас отчётливо помните… <p><i> -Я нахожусь в центре тёмной сферы, но я её не вижу, просто чувствую. Я не ощущаю тела, но ощущаю, что в этой сфере кроме меня есть ещё что-то. Оно огромно и заполняет собой всю сферу, заполняет меня. Оно часть меня, часть всего… </i> </p> [Доктор]<br/><i> -Довольно необычный сон, но не более. Причиной мог послужить стресс, испытанный незадолго до погружения. Вам просто нужен обычный здоровый 8-ми часовой сон. </i> <br/> <br/> Вы поблагодарили доктора и следуя за толпой, с небольшим чувством напряжения, направились к шлюзовому отсеку. <br/> <br/>' +
		'<button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';
		choise1 = "Далее";
		return;
	}
	if (turn === 5) {
		GameText = 'На орбитальной станции Атлант Вас встретили сотрудники МКА и после плотного перекуса Вы вместе направились на магнитно-монорельсовую станцию, где сели в один из вагонов направляющихся на космоверфь. Отдаляясь от станции вы заметили несколько свежих пристроек, которых не было во время Вашего прошлого визита. <br/><br/> [Сопровождающий 1]<br/><i> -Почти как метро или железная дорога. И обеспечивает внушительную скорость. Никогда ранее не был на станции, всё сидел в научном центре на этом проклятом Марсе. </i> <br/> <br/> Он сразу же замолк, увидев два удивлённых взгляда: Ваш и другого сопровождающего. <br/> <br/> [Сопровождающий 1]<br/><i> -Да просто хотел разрядить обстановку, а то едем как на казнь. Нам же можно разговаривать? </i> <br/> <br/> Он уставился на второго, так и не получив ответа попутчик отвернулся и уткнулся в иллюминатор. Видимо учёный, заключили Вы из услышанного. <br/> <br/> Оставшуюся дорогу ваша компания ехала молча… <br/> <br/>' +
        '<button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';
		choise1 = "Далее";
		return;
	}
	if (turn === 6) {
		GameText = 'Наконец Вы прибыли на Прогресс, после небольшой пешей прогулки и длительного брифинга перед Вами наконец предстал он, - виновник сего безобразия, первый межзвёздный корабль класса эсминец. Дизайн судна отличался от всего что кто-либо видел ранее, как будто вырвавшийся из страниц научной фантастики, обтекаемой формы и не имеющий ничего лишнего.<br/> На корпусе красовалась надпись: <i style="font-variant: small-caps; font-size: 24px; "> sl-01 </i>.  <br/> <br/> Неужели этот момент настал? То, ради чего Вы и стали испытателем, теперь стоит перед Вами во всей красе. <br/> <br/> Этим можно любоваться вечно, и несомненно так бы и было… <br/> <br/> [Сопровождающий] <br/><i> -Сэр, нам пора идти.</i> <br/> <br/> [Вы] <br/><i> -Конечно, идём. Не терпится испытать его.</i> <br/><br/>' +
		'<button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';
		choise1 = "Далее";
		return;
	}
	if (turn === 7) {
		GameText = 'Всё величие момента испортила одна деталь. Почему же капитаном сего судна выбрали именно меня? В тех случаях, когда я участвовал в значимых миссиях, лейтенантские посты были потолком доверия со стороны агентства. И такой важный пост на исторической миссии... Впрочем, даже если меня застрелят через минуту, я буду благодарен за это назначение. У трапа стояло ещё несколько человек, основная масса экипажа уже была на борту, а некоторые и вовсе не сходили с него месяцами. Открылась внешняя перегородка и дверь в шлюзовой отсек. Последние члены экипажа взошли на борт... Интерьер корабля сочетал в себе ретро- и нео-футуризм, являясь катарсисом всей научной фантастики... Количество свободного пространства и обстановка воссоздавали ощущение пребывания на станции или вовсе на поверхности планеты. ' +
		'<button id="FirstChoise"></button> <button id="SecondChoise" class="hide"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';
		choise1 = "Далее";
		return;
	}
	if (turn === 8) {
		GameText = '';
		return;
	}

};
var PlayerScientist = function () {
	GameText = '---';
	return;
};
var PlayerEngineer = function () {
	GameText = '---';
	return;
};
var PlayerSecutiry = function () {
	GameText = '---';
	return;
};
var PlayerService = function () {
	GameText = '---';
	return;
};
//Конец персонажей


//Клик по кнопкам:
var clickFirstChoise = function() {

	if (turn === 0 && points > 0) {
		strength++;
		points--;
		GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства (МКА). Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
		'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';
		if (points === 0) {
			pointsFirst = false;
		}
		stat_update();
		return;
	}

	if ( pointsFirst === false && turn >= 1 ) {

		switch (character) {

			case ("MainGuard"):
				PlayerMainGuard();
				turn++;
				stat_update();
				break;
			case ("Captain"):
				PlayerCaptain();
				turn++;
				stat_update();
				break;
			case ("Scientist"):
				PlayerScientist();
				turn++;
				stat_update();
				break;
			case ("Engineer"):
				PlayerEngineer();
				turn++;
				stat_update();
				break;
			case ("Security"):
				PlayerSecutiry();
				turn++;
				stat_update();
				break;
			case ("ServiceMan"):
			    PlayerService();
			    turn++;
				stat_update();
				break;
		}


	}

	stat_update();
};
var clickSecondChoise = function() {

	if (turn === 0 && points > 0) {
		agility++;
		points--;
		GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства (МКА). Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
		'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';
		if (points === 0) {
			pointsFirst = false;
		}
		stat_update();
		return;
	}

	if ( pointsFirst === false && turn === 1) {
		points = 10;
		strength = 4;
		agility = 4;
		speach = 4;
		mind = 4;
		turn = 0;
		pointsFirst = true;
		character = " ";
		PlayerRole = "-";
		GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства (МКА). Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
		'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';
		choise1 = '+';
		choise2 = '+';
		choise3 = '+';
		choise4 = '+';
		stat_update();
		return;
	}

	if ( pointsFirst === false && turn >= 1 ) {

		switch (character) {

			case ("MainGuard"):
				PlayerMainGuard();
				turn++;
				stat_update();
				break;
			case ("Captain"):
				if (turn === 3) {
					GameText = 'Проверив что кабинка закрыта Вы вошли в личный кабинет МКА.<br/><br/>[Предупреждение!]<br/> Разглашение любой информации о предстоящем испытании несёт последствия не только для источника утечки, но и его круга общения!<br/> <br/>[Текущее задание]<br/> Прибыть на орбитальную космоверфь Прогресс. <br/><br/> [Цель испытания] <br/> Совершить сверхсветовой прыжок на расстояние 4-рёх св. лет. Совершить обратный прыжок и вернуться в Солнечную систему. Мониторинг и запись всех данных для дальнейшего анализа. <br/> <br/> [Дополнение] <br/> Поздравляем! В случае успешного проведения испытания Вы навсегда останетесь в истории человечества как капитан первого корабля что обогнал даже свет.<br/>';
					MakeChoise2 = true;
					turn = 2;
				}
				PlayerCaptain();
				turn++;
				stat_update();
				break;
			case ("Scientist"):
				PlayerScientist();
				turn++;
				stat_update();
				break;
			case ("Engineer"):
				PlayerEngineer();
				turn++;
				stat_update();
				break;
			case ("Security"):
				PlayerSecutiry();
				turn++;
				stat_update();
				break;
			case ("ServiceMan"):
			    PlayerService();
			    turn++;
				stat_update();
				break;
			}
		return;
	}

	stat_update();
};
var clickThirdChoise = function() {

	if (turn === 0 && points > 0) {
		speach++;
		points--;
		GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства. Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
		'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';
		if (points === 0) {
			pointsFirst = false;
		}
		stat_update();
		return;
	}

	if ( pointsFirst === false && turn >= 1 ) {

		switch (character) {

			case ("MainGuard"):
				PlayerMainGuard();
				turn++;
				stat_update();
				break;
			case ("Captain"):
				if (turn === 3) {
					GameText = 'Решив немного поразмыслить Вы отправились бродить по кораблю.<p>Преодолеть скорость света, каким же образом? Искривление пространства, изменение массы, или червоточина? Множество вопросов роилось в голове, как в замкнутом бесконечном цикле они повторялись и периодически подменяли друг друга. Благо посреди коридора Вы встретили члена экипажа этого межпланетного шаттла. </p> [Незнакомец]<i> -Извините сэр, Вы случаем не заблудились?</i> <br/> [Вы]<i> -Нет всё в порядке, я просто разминаюсь перед гибернацией. </i> <br/>	[Незнакомец]<i> -Что-ж, если вам будет что-то нужно, просто сообщите. </i> <br/> [Вы] <i> -Мне ничего не нужно, благодарю. </i> <br/> [Незнакомец] <i> -Добрых снов сэр. </i> <p> Видимо это был стюард, не отвлеки он меня, головной боли было бы уже не избежать. Мысленно поблагодарив его, Вы снова вернулись в инфо-центр.</p>';
					MakeChoise3 = true;
					turn = 2;
				}
				PlayerCaptain();
				turn++;
				stat_update();
				break;
			case ("Scientist"):
				PlayerScientist();
				turn++;
				stat_update();
				break;
			case ("Engineer"):
				PlayerEngineer();
				turn++;
				stat_update();
				break;
			case ("Security"):
				PlayerSecutiry();
				turn++;
				stat_update();
				break;
			case ("ServiceMan"):
			    PlayerService();
			    turn++;
				stat_update();
				break;
			}
		return;
	}

	stat_update();
};
var clickFourthChoise = function() {


	if (turn === 0 && points > 0) {
		mind++;
		points--;
		GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства. Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
		'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';
		if (points === 0) {
			pointsFirst = false;
		}
		stat_update();
		return;
	}

	if ( pointsFirst === false && turn >= 1 ) {

		switch (character) {

			case ("MainGuard"):
				PlayerMainGuard();
				turn++;
				stat_update();
				break;
			case ("Captain"):
				if (turn === 3) {
					GameText = 'Вы зашли на свой электронный ящик. <br/><br/> [Новые сообщения] <br/><br/> [От: Макс] <br/> Слышал ты опять отправился на испытания, жаль что на рыбалку так и не сходили. Братиш, как вернёшься сразу же исправим этот момент. Ну спасай там нас, человеков, удачи и береги себя.)<br/><br/> [От: Лиза] <br/> Слушай, ты конечно извини, но я так не могу. Я почти не видела тебя и опять ты улетел. Большую часть времени ты где-то там и боюсь что однажды ты не вернёшься. Надеюсь мы ещё поговорим и поставим точку. Прощай. <p>Это Вы и ожидали прочесть, стало немного обидно, но не более. В конце концов Вы знали, что к этому всё и шло. </p>';
					MakeChoise4 = true;
					turn = 2;
				}
				PlayerCaptain();
				turn++;
				stat_update();
				break;
			case ("Scientist"):
				PlayerScientist();
				turn++;
				stat_update();
				break;
			case ("Engineer"):
				PlayerEngineer();
				turn++;
				stat_update();
				break;
			case ("Security"):
				PlayerSecutiry();
				turn++;
				stat_update();
				break;
			case ("ServiceMan"):
			    PlayerService();
			    turn++;
				stat_update();
				break;
			}
		return;
	}

	stat_update();
};
//Конец кнопок



/* For HTML
<button id="FirstChoise"></button>
<button id="SecondChoise"></button>
<button id="ThirdChoise"></button>
<button id="FourthChoise"></button>
*/




// Старт

if (turn === 0 && pointsFirst === true) {

	GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства. Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points +
	'. <br/><br/> Сила: ' + strength + ' <button id="FirstChoise"></button> <br/> Ловкость: ' + agility + ' <button id="SecondChoise"></button> <br/> Красноречие: ' + speach + ' <button id="ThirdChoise"></button> <br/> Интелект: ' + mind + ' <button id="FourthChoise"></button><br/>';

	choise1 = '+';
	choise2 = '+';
	choise3 = '+';
	choise4 = '+';

	stat_update();
}





//Обновление интерфейса
function stat_update() {


			if (pointsFirst === false && turn === 0) {
				GameText = 'Вас приветствует "Система отбора для испытаний" Международного Космического Агенства. Напоминаем, что в случае ввода своих данных и одобрения Вашей кандидатуры, Вы соглашаетесь с условиями о неразглашении, а так же не сможете уволиться по собственному желанию. Пожалуйста введите свои параметры для сравнения данных: <br/> Очков осталось: ' + points + '. <br/><br/> Сила: ' + strength + ' <br/> Ловкость: ' + agility + ' <br/> Красноречие: ' + speach + ' <br/> Интелект: ' + mind +
				'<br/><br/><br/><p>Нажмите Ввод для продолжения процедуры.</p> <button id="FirstChoise"></button> <button id="SecondChoise"></button> <button id="ThirdChoise" class="hide"></button> <button id="FourthChoise" class="hide"></button>';

				choise1 = 'Ввод';
				choise2 = 'Сброс';
				choise3 = '-';
				choise4 = '-';


				if ((strength >= 7) && (agility >= 7) && (mind >= 6) && (speach >= 5)) {
					GameText = GameText + 'Должность: Помошник капитана';
					character = "MainGuard";
					PlayerRole = "Помошник капитана";
				}
				else if (mind < 6) {
					GameText = GameText + 'Слабый интелект. Должность: Стюард';
					character = "ServiceMan";
					PlayerRole = "Стюард";
				}
				else if ((mind >= 7) && (speach >= 7) && (strength >= 5) && (agility >= 5)) {
					GameText = GameText + 'Должность: Капитан';
					character = "Captain";
					PlayerRole = "Капитан";
				}
				else if (mind >= 11) {
					GameText = GameText + 'Должность: Глава научного отдела';
					character = "Scientist";
					PlayerRole = "Глава научного отдела";
				}
				else if ((mind < 11) && (mind >= 8)) {
					GameText = GameText + 'Должость: Оператор варп-ядра';
					character = "Engineer";
					PlayerRole = "Оператор варп-ядра";
				}
				else {
					GameText = GameText + 'Должность: Специалист по безопасности';
					character = "Security";
					PlayerRole = "Специалист по безопасности";
				}
				turn++;
			}


			document.getElementById("health").innerHTML = helth;
			document.getElementById("DispTired").innerHTML = tired;
			document.getElementById("DispStrength").innerHTML = strength;
			document.getElementById("DispAgility").innerHTML = agility;
			document.getElementById("DispStamina").innerHTML = speach;
			document.getElementById("DispMind").innerHTML = mind;
			document.getElementById("DispGameText").innerHTML = GameText;
			document.getElementById("DispTurn").innerHTML = turn;
			document.getElementById("DispPlayer").innerHTML = PlayerRole;
			document.getElementById("FirstChoise").innerHTML = choise1;
			document.getElementById("SecondChoise").innerHTML = choise2;
			document.getElementById("ThirdChoise").innerHTML = choise3;
			document.getElementById("FourthChoise").innerHTML = choise4;
			document.getElementById("FirstChoise").addEventListener('click', clickFirstChoise);
			document.getElementById("SecondChoise").addEventListener('click', clickSecondChoise);

			document.getElementById("ThirdChoise").addEventListener('click', clickThirdChoise);
			document.getElementById("FourthChoise").addEventListener('click', clickFourthChoise);



		}


		document.getElementById("Bupdate").addEventListener('click', stat_update);

});