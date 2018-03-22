/*
Copyright © 2003, 2017 Nehemia Gordon

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 
/* ---THREE settings need to be updated every year--- */

/*Define Date of Beginning of Biblical Year (NOT DAY OF NEW MOON SIGHTING!)
For the purpose of this script, New Years Day is defined as the First Day of the First Biblical Month (1 Nissan). For example, if the new moon of the First Biblical month (Nissan) was sighted on Friday May 2, 2003, then New Years is defined as Saturday May 3, 2003. */
 
//var dateOfNewYearsDay = 30; //On which day of the Gregorian month did the Biblical Year Begin (SEE ABOVE)?
//var monthOfNewYearsDay = 3; //In which Gregorian month did the Biblical Year Begin?
//var yearOfNewYearsDay = 2017; //The Gregorian Year e.g. 2017. If you want to do historical dates, this might not work correctly before 1970, since JavaScript uses 1970 as the starting date for it's date format. 

/* ---Dont change anything beyond this point--- */
function countOmer(generateHTML,dateOfNewYearsDay,monthOfNewYearsDay,yearOfNewYearsDay) {
//calculate the weekday
var JSMonth = monthOfNewYearsDay - 1; //Javascript uses 0-11 for months
var JSdate = new Date(yearOfNewYearsDay, JSMonth, dateOfNewYearsDay); 
var JSWeekday = JSdate.getDay(); //JavaScript uses 0-6 for weekday
var weekdayOfNewYearsDay = JSWeekday + 1; //Add 1 to make weekdays 1-7

var the_day = new Array("1st", "2nd", "3rd", "4th", "5th", "6th", "7th");
var the_week = new Array("1st", "2nd", "3rd", "4th", "5th", "6th", "7th");
var the_overall_number = new Array("1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st", "32nd", "33rd", "34th", "35th", "36th", "37th", "38th", "39th", "40th", "41st", "42nd", "43rd", "44th", "45th", "46th", "47th", "48th", "49th", "50th");
var pagan_month = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")

var numbers_masc = new Array("רִאשׁוֹן‏", "שֵׁנִי", "שְׁלִישִׁי", "רְבִיעִי", "חֲמִישִׁי‏", "שִׁשִּׁי", "שְׁבִיעִי");
var numbers_fem = new Array("רִאשׁוֹנָה‏", "שֵׁנִית", "שְׁלִישִׁית", "רְבִיעִית‏", "חֲמִישִׁית‏", "שִׁשִּׁית‏", "שְׁבִיעִית");
var hebrew_overall_number = new Array("אֶחָד‏", "שְׁנַיִם", "שְׁלֹשָׁה‏", "אַרְבָּעָה", "חֲמִשָּׁה", "שִׁשָּׁה‏", "שִׁבְעָה", "שְׁמוֹנָה", "תִּשְׁעָה", "עֲשָׂרָה", "אַחַד עָשָׂר‏", "שְׁנֵים עָשָׂר‏", "שְׁלֹשָׁה עָשָׂר‏", "אַרְבָּעָה עָשָׂר‏", "חֲמִשָּׁה עָשָׂר‏", "שִׁשָּׁה עָשָׂר‏", "שִׁבְעָה עָשָׂר", "שְׁמוֹנָה עָשָׂר‏", "תִּשְׁעָה עָשָׂר", "עֶשְׂרִים", "עֶשְׂרִים וְאֶחָד‏", "עֶשְׂרִים וּשְׁנַיִם", "עֶשְׂרִים וּשְׁלֹשָׁה", "עֶשְׂרִים וְאַרְבָּעָה", "עֶשְׂרִים וַחֲמִשָּׁה‏", "עֶשְׂרִים וְשִׁשָּׁה", "עֶשְׂרִים וְשִׁבְעָה‏", "עֶשְׂרִים וּשְׁמוֹנָה", "עֶשְׂרִים וְתִשְׁעָה", "שְׁלוֹשִׁים", "שְׁלוֹשִׁים וְאֶחָד‏", "שְׁלוֹשִׁים וּשְׁנַיִם‏", "שְׁלוֹשִׁים וּשְׁלֹשָׁה‏", "שְׁלוֹשִׁים וְאַרְבָּעָה‏", "שְׁלוֹשִׁים וַחֲמִשָּׁה‏", "שְׁלוֹשִׁים וְשִׁשָּׁה‏", "שְׁלוֹשִׁים וְשִׁבְעָה‏", "שְׁלוֹשִׁים וּשְׁמוֹנָה‏", "שְׁלֹשִׁים וְתִשְׁעָה", "אַרְבָּעִים", "אַרְבָּעִים וְאֶחָד‏", "אַרְבָּעִים וּשְׁנַיִם‏", "אַרְבָּעִים וּשְׁלֹשָׁה‏", "אַרְבָּעִים וְאַרְבָּעָה‏", "אַרְבָּעִים וַחֲמִשָּׁה‏", "אַרְבָּעִים וְשִׁשָּׁה‏", "אַרְבָּעִים וְשִׁבְעָה‏", "אַרְבָּעִים וּשְׁמוֹנָה‏", "אַרְבָּעִים וְתִשְׁעָה", "חֲמִשִּׁים");
var hebrew_pagan_month = new Array("ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר")

var days_in_month = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)

function isTheDateValid(test_day, test_month, test_year) {
if ((test_month == 2) && (test_day == 29)) 
	{alert("There is no February 29 in the year " + test_year + "\. Please enter a valid date.");}
}

//		isTheDateValid(test_day, test_month, test_year)
function determineLeapYear(test_year) { 
	if (test_year % 4 == 0) {
		is_the_year_a_leap_year = true;
		return is_the_year_a_leap_year;
	} else {
		is_the_year_a_leap_year = false;
		return is_the_year_a_leap_year;
	}
}

function dateToDayNumber(the_day, the_month, the_year) {
	var leap_year = determineLeapYear(the_year)
	var theDayNumber = 0
	if (leap_year == true) {days_in_month[1]=29} else {days_in_month[1]=28}
	for (calculateDays = 0; calculateDays < (the_month-1); calculateDays++) 
		{theDayNumber = theDayNumber + days_in_month[calculateDays];}
	theDayNumber = theDayNumber + the_day;
	return theDayNumber;
}

function dayNumberToDate(theDayNumber, the_year) { //add support for leap years
	newDate = 0; newMonth = 0;
	var leap_year = determineLeapYear(the_year)
	if (leap_year == true) {days_in_month[1]=29} else {days_in_month[1]=28}
	var monthsSoFar = 0;
	var daysSoFar = days_in_month[monthsSoFar];
	theDate = theDayNumber;
	while (theDayNumber > daysSoFar) {
		theDate = theDate - days_in_month[monthsSoFar];
		daysSoFar = daysSoFar + days_in_month[monthsSoFar+1];
		monthsSoFar++;
	}
	newDate = theDate;
	newMonth = monthsSoFar;
}

var newYearsDayNumber = dateToDayNumber(dateOfNewYearsDay, monthOfNewYearsDay, yearOfNewYearsDay);
var firstOfULBDayNumber = newYearsDayNumber + 14; //ULB = Feast of UnLeavened Bread i.e. Chag HaMatzot

if (weekdayOfNewYearsDay == 1) {waveSheafDayNumber = firstOfULBDayNumber}
else {waveSheafDayNumber = firstOfULBDayNumber + (8-weekdayOfNewYearsDay)} 

dayNumberToDate(waveSheafDayNumber,yearOfNewYearsDay);

function get_hebrew_day(dayOfTheOmer) {
if (dayOfTheOmer ==1) {hebrew_day_phrase = "יוֹם " + hebrew_overall_number[dayOfTheOmer-1]}
if ((dayOfTheOmer >=2) && (dayOfTheOmer <=10)) {hebrew_day_phrase = hebrew_overall_number[dayOfTheOmer-1] + " יָמִים‏"}
if (dayOfTheOmer >=11) {hebrew_day_phrase = hebrew_overall_number[dayOfTheOmer-1] + " יוֹם"}
return hebrew_day_phrase;
}

var theOmer = "";

function createCSS() {
	var myCSS = "";
	if (generateHTML == 0) {
	myCSS += leftAngleBracket + "style type=\"text/css\"><br>";

	myCSS += ".introParagraph {<br>";
	myCSS += "	direction: ltr\;<br>";
	myCSS += "	text-align: justify\;<br>";	
	myCSS += "	font-family: Arial\;<br>";
	myCSS += "	font-size: 1.2\;<br>";
	myCSS += "	display: block\;<br>";
	myCSS += "}<br>"; 

	myCSS += ".HebrewFont {<br>";
	myCSS += "	font-family: David, \"Times New Roman\", Arial\;<br>";
	myCSS += "	display: inline\;<br>";
	myCSS += "}<br>"; 

	myCSS += ".rTable {<br>";
	myCSS += "  	display: table\;<br>";
	myCSS += "    margin-left: auto\;<br>";
	myCSS += "    margin-right: auto\;<br>";
	myCSS += "}<br>"; 

	myCSS += ".rTableRow {<br>";
	myCSS += "  	display: table-row\;<br>";
	myCSS += "}<br>"; 

	myCSS += ".OmerHebrew {<br>";
	myCSS += "	direction: rtl\;<br>";
	myCSS += "	text-align: justify\;<br>";
	myCSS += "	vertical-align: top\;<br>";
	myCSS += "	width: 50%\;<br>";
	myCSS += "	font-family: David, \"Times New Roman\", Arial\;<br>"; 
	myCSS += "	font-size: 1.6em\;<br>"; 
	myCSS += "	display: table-cell\;<br>";
	myCSS += "  	padding: 10px 10px\;<br>";
	myCSS += "\/\/	border: 1px solid #999999\;<br>";
//	myCSS += "	border: 1px solid #999999\;<br>";
	myCSS += "}<br>"; 

	myCSS += ".OmerEnglish {<br>";
	myCSS += "	direction: ltr\;<br>";
	myCSS += "	text-align: justify\;<br>";
	myCSS += "	vertical-align: top\;<br>";
	myCSS += "	width: 50%\;<br>";
	myCSS += "	font-family: Arial\;<br>"; 
	myCSS += "	font-size: 1.2em\;<br>";
	myCSS += "	display: table-cell\;<br>";
	myCSS += "  	padding: 10px 10px\;<br>";
	myCSS += "\/\/	border: 1px solid #999999\;<br>";
//	myCSS += "	border: 1px solid #999999\;<br>";
	myCSS += "}<br>"; 
	myCSS += ".OmerSpace {<br>";
	myCSS += "	line-height: 50%;<br>";
	myCSS += "	direction: ltr;<br>";
	myCSS += "	text-align: justify;<br>";
	myCSS += "	vertical-align: top;<br>";
	myCSS += "	width: 50%;<br>";
	myCSS += "	font-family: Arial;<br>"; 
	myCSS += "	font-size: 1em;<br>";
	myCSS += "	display: table-cell;<br>";
 	myCSS += " 	padding: 0px 0px;<br>";
	myCSS += "\/\/	border: 1px solid #999999;<br>";
//	myCSS += "	border: 1px solid #999999;<br>";
	myCSS += "}<br>";
	myCSS += leftAngleBracket + "/style><br>";
	} 
	return myCSS;
}

var theYear=yearOfNewYearsDay;
var dayNumberOfCurrendivay = waveSheafDayNumber;
var dayOfTheOmer=1; 

if (generateHTML == 1) {  
leftAngleBracket = "<";
brTag = "";
brTag2 = "";
moreTag = "";
} 
		else {  
leftAngleBracket = "\&lt\;";
brTag = "\&lt\;br>";
brTag2 = "<br>";
moreTag = "\&lt\;\!\-\-more\-\-\>";
		}
//theOmer += leftAngleBracket + "!-- <br>Copyright © 2003, 2017 Nehemia Gordon<br><br>Licensed under the Apache License, Version 2.0 (the \"License\")\;<br>you may not use this file except in compliance with the License.<br>You may obtain a copy of the License at<br><br> http://www.apache.org/licenses/LICENSE-2.0<br><br>Unless required by applicable law or agreed to in writing, software<br> distributed under the License is distributed on an \"AS IS\" BASIS\,<br>WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.<br>See the License for the specific language governing permissions and<br>limitations under the License.<br> --><br>";

var theCSS = createCSS();
theOmer += theCSS;

//Intro 
theOmer += leftAngleBracket + "div class\=\"introParagraph\">";
theOmer += "Sunday " + pagan_month[newMonth] + " " + newDate + "\, " + yearOfNewYearsDay + " is " + leftAngleBracket + "span class\=\"HebrewFont\">יוֹם הֲנָפַת הָעֹמֶר" + leftAngleBracket + "\/span> " + leftAngleBracket + "i>Yom Hanafat Ha'omer" + leftAngleBracket + "/i> (Day of the Waving of the Sheaf). When the Temple stood, this day marked the official commencement of the grain harvest (Deuteronomy 16:7) and sheaves of barley were cut and brought to the Temple as a wave-offering (Leviticus 23:9-14). This day also marks the beginning of the 50-day count to " + leftAngleBracket + "span class\=\"HebrewFont\">חַג הַשָּׁבֻעוֹת" + leftAngleBracket + "\/span> " + leftAngleBracket + "i>Shavuot"+ leftAngleBracket + "/i> (Pentecost; Feast of Weeks). " + leftAngleBracket + "i>Yom Hanafat Ha'omer" + leftAngleBracket + "/i> is counted as Day 1 and Shavuot as Day 50." + leftAngleBracket + "/div>" + moreTag;
theOmer += leftAngleBracket + "br>\r\n" + leftAngleBracket + "div class\=\"introParagraph\">There are different methods of counting the 50 days. According to some the commandment 'and you shall count for yourselves fifty days' means to simply observe the 50th day as " + leftAngleBracket + "i>Shavuot" + leftAngleBracket + "/i> while others actually declare out loud the number on each of the fifty days. A medieval Karaite Jewish practice combines two different methods of declaring the daily count. The first method is the counting of seven weeks. Each day, the number of the week and the number of the day in the week are declared. So for example, the first day is 'first day of the first week'. The second counting method used is an overall number for each day. In this method Day one is 'the first day' and Day 25 is 'the twenty-fifth day'. These two methods are used to satisfy the commandment to count seven weeks (Deuteronomy 16:9) as well as the commandment to count fifty days (Leviticus 23:16). Below is a list of the counting for each day." + leftAngleBracket + "/div>"  + leftAngleBracket + "br>" + leftAngleBracket + "br>";

theOmer += "<br>" + leftAngleBracket + "div class\=\"rTable\">"; 

//title row
theOmer += "<br>" + leftAngleBracket + "div class\=\"rTableRow\"><br>" + leftAngleBracket + "div class\=\"OmerEnglish\">"; 
theOmer += "" + leftAngleBracket + "strong>Counting of the Omer" + leftAngleBracket + "/strong>";
theOmer += "<br>" + leftAngleBracket + "/div>"; 
theOmer += "<br>" + leftAngleBracket + "div class\=\"OmerHebrew\">" + leftAngleBracket + "strong>סְפִירַת הָעֹמֶר" + leftAngleBracket + "/strong>";
theOmer += "<br>" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>"; 

dayOfTheOmer=1;
for (weekOfTheOmer = 1; weekOfTheOmer <= 7; weekOfTheOmer++) {
	for (dayOfTheWeek = 1; dayOfTheWeek <= 7; dayOfTheWeek++) {
		theOmer += leftAngleBracket + "div class\=\"rTableRow\"><br>"; 
//		theOmer += leftAngleBracket + "div class\=\"OmerEnglish\">"; 
		dayNumberToDate(dayNumberOfCurrendivay,theYear); 
		if (dayOfTheWeek ==1) {
			theOmer += leftAngleBracket + "div class\=\"OmerSpace\">";
			theOmer += "<br>\&nbsp\;" + leftAngleBracket + "/div><br>" + leftAngleBracket + "div class\=\"OmerSpace\"><br>\&nbsp\;" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>";
			theOmer += leftAngleBracket + "div class\=\"rTableRow\"><br>" + leftAngleBracket + "div class\=\"OmerEnglish\">" + leftAngleBracket + "strong>" + leftAngleBracket + "u>" + "Week " + weekOfTheOmer + leftAngleBracket + "/u>" + leftAngleBracket + "/strong>" + leftAngleBracket + "/div><br>";
			theOmer += leftAngleBracket + "div class\=\"OmerHebrew\">" + leftAngleBracket + "strong>" + leftAngleBracket + "u>" + "שבוע " + weekOfTheOmer + leftAngleBracket + "/u>" + leftAngleBracket + "/strong>" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>";
			theOmer += leftAngleBracket + "div class\=\"rTableRow\"><br>";
			
			}
		theOmer += leftAngleBracket + "div class\=\"OmerEnglish\">";
		theOmer += leftAngleBracket + "strong>" + pagan_month[newMonth] + " " + newDate + ", " + theYear + leftAngleBracket + "/strong>"; 
		if ((dayOfTheWeek>=1) && (dayOfTheWeek<=6)) {
			theOmer += leftAngleBracket + "br>" + brTag2 + "Today is the " + the_day[dayOfTheWeek-1] + " day of the " + the_week[weekOfTheOmer-1] + " week of seven weeks. Today is the " + the_overall_number[dayOfTheOmer-1] + " day of the counting of fifty days from the day of the waving of the Omer on the morrow after the Sabbath."; 
		} if (dayOfTheWeek==7) {
			theOmer += leftAngleBracket + "br>Today is the " + the_day[dayOfTheWeek-1] + " day of the " + the_week[weekOfTheOmer-1] + " week of seven weeks. Today is the " + the_overall_number[dayOfTheOmer-1] + " day of the counting of fifty days from the day of the waving of the Omer on the morrow after the Sabbath. Today is Sabbath, the " + the_week[weekOfTheOmer-1] + " Sabbath of seven Sabbaths. Today completes the " + the_week[weekOfTheOmer-1] + " week of seven weeks."; 
		}
		theOmer += leftAngleBracket + "/div><br>" + leftAngleBracket + "div class\=\"OmerHebrew\">"; 
		//HEBREW
		dayNumberToDate(dayNumberOfCurrendivay,theYear);
		hebrew_day=get_hebrew_day(dayOfTheOmer);
		theOmer += leftAngleBracket + "strong>" + newDate + " " + hebrew_pagan_month[newMonth] + " " + theYear + leftAngleBracket + "/strong>" + leftAngleBracket + "br>"; 
		if ((dayOfTheWeek>=1) && (dayOfTheWeek<=6)) {
			theOmer += "הַיּוֹם יוֹם " + numbers_masc[dayOfTheWeek-1] + " לַשָּׁבוּעַ " + numbers_masc[weekOfTheOmer-1] + " מִשִׁבְעָה שָׁבֻעוֹת. הַיּוֹם " + hebrew_day + " מִסְפִירַת חֲמִשִּׁים יוֹם מֵהֲנָפַת הָעֹמֶר מִמָּחֳרַת הַשַּׁבָּת." + ""; 
		} if (dayOfTheWeek==7) {
			theOmer += "הַיּוֹם יוֹם " + numbers_masc[dayOfTheWeek-1] + " לַשָּׁבוּעַ " + numbers_masc[weekOfTheOmer-1] + " מִשִׁבְעָה שָׁבֻעוֹת. הַיּוֹם " + hebrew_day + " מִסְפִירַת חֲמִשִּׁים יוֹם מֵהֲנָפַת הָעֹמֶר מִמָּחֳרַת הַשַּׁבָּת. ‏הַיּוֹם שַׁבָּת, שַׁבָּת " + numbers_fem[weekOfTheOmer-1] + " מִשֶׁבַע שַׁבָּתוֹת. הַיּוֹם נִשְׁלַם שָׁבוּעַ " + numbers_masc[weekOfTheOmer-1] + " מִשִׁבְעָה שָׁבֻעוֹת." + ""; 
		}
		theOmer += "<br>" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>"; 
		dayOfTheOmer++; dayNumberOfCurrendivay++;
	}
}

//extra space
		theOmer += leftAngleBracket + "div class\=\"rTableRow\"><br>"; 
		theOmer += leftAngleBracket + "div class\=\"OmerSpace\">";
		theOmer += "<br>\&nbsp\;" + leftAngleBracket + "/div><br>" + leftAngleBracket + "div class\=\"OmerSpace\"><br>\&nbsp\;" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>";

theOmer += "" + leftAngleBracket + "div class\=\"rTableRow\"><br>" + leftAngleBracket + "div class\=\"OmerEnglish\">"; 
dayNumberToDate(dayNumberOfCurrendivay,theYear);
{theOmer += leftAngleBracket + "strong>" + "Chag Ha-Shavuot (Feast of Weeks)" + leftAngleBracket + "/strong>";}
theOmer += leftAngleBracket + "/div><br>" + leftAngleBracket + "div class\=\"OmerHebrew\">";
theOmer += leftAngleBracket + "strong>" + "חַג הַשָּׁבֻעוֹת" + leftAngleBracket + "\/strong><br>" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>";

theOmer += "" + leftAngleBracket + "div class\=\"rTableRow\"><br>" + leftAngleBracket + "div class\=\"OmerEnglish\">"; 
theOmer += leftAngleBracket + "strong>" + pagan_month[newMonth] + ' ' + newDate + ', ' + theYear + leftAngleBracket + "/strong> " + leftAngleBracket + "br>Today is the 50th day from the day of the waving of the Omer on the morrow after the Sabbath. Today is the morrow of the seven Sabbath, the Feast of Weeks, the Feast of Harvest, the Day of Firstfruits.";
theOmer += leftAngleBracket + "/div><br>"; 
dayNumberToDate(dayNumberOfCurrendivay,theYear);

theOmer += leftAngleBracket + "div class\=\"OmerHebrew\">";
theOmer += leftAngleBracket + "strong>" + newDate + " " + hebrew_pagan_month[newMonth] + " " + theYear + leftAngleBracket + "/strong>" + leftAngleBracket + "br>" + "הַיּוֹם ‏‎ ‎חֲמִשִּׁים יוֹם‎ ‎מֵהֲנָפַת הָעֹמֶר מִמָּחֳרַת הַשַּׁבָּת. ‏הַיּוֹם הוּא ‏מָחֳרַת הַשַּׁבָּת הַשְּׁבִיעִת, חַג הַשָּׁבֻעוֹת, חַג הַקָּצִיר, יוֹם ‏הַבִּכּוּרִים.‏" + ""
theOmer += "<br>" + leftAngleBracket + "/div><br>" + leftAngleBracket + "/div>"; 
		
theOmer += "<br>" + leftAngleBracket + "/div>";
	
return theOmer;
}