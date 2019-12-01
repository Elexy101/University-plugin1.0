/*
	*	Original script by: Ekpe Emmanuel Linus
	*	Email: emmanuellinus013@gmail.com
	*	Version 1.0

	*	Description:
	*	Inserts Nigerian Universities and/or Polytechnic as Dropdown List
	*	How to Use:

		In Head section:
		<script type= "text/javascript" src = "universities.js"></script>
		In Body Section:
		Select Universty:   <select onchange="print_state('state',this.selectedIndex);" id="country" name ="country"></select>
		<br />
		City/District/State: <select name ="state" id ="state"></select>
		<script language="javascript">print_country("country");</script>	

	*
	*	License: OpenSource, Permission for modificatin Granted...
	*	Aurthor's Website: http://www.classworked.com
	*	Facebook Link: https://web.facebook.com/profile.php?id=100006205396667
	*
*/

var country_arr = new Array("Universities", "Polytechnics");

var s_a = new Array();
s_a[0]="";

//Nigerian Universities
s_a[1]="Abia State University|Adekunle Ajasin University|Joseph Ayo Babalola University|Redeemer's University Nigeria|Afe Babalola University|Akwa-Ibom State University|American University of Nigeria|Abubakar Tafawa Balewa University|Adamawa State University|Achievers University|Ahmadu Bello University|Al-Hikmah University|Ambrose Alli University|Anambra State University|Ajayi Crowther University|Bayero University|Babcock University|Bells University of Technology|Benson Idaho University|Benue State University|ECWA Bingham University|Bowen University|Bukar Abba Ibrahim University|CETEP City University|Crawford University|Caleb University|Caritas University|City University|National Open University of Nigeria|City University of Technolgy|Covenant University|Crescent University|Cross-River University of Technolgy|Delta State University, Abraka|Ebonyi State University|Elizade University|Fountain University, Osogbo|Federal University, Dutsin-Ma|Federal University of Technolgy Akure|Federal University Ndufe Alike, Ikwo|Gregory University|Godfrey Okoye University|Igbinedion University|Koladaisi University|Oduduwa University|Landmark University|Michael and Cecilia Ibru University|Lagos State University|Nigerian Turkish Nile|Taraba State University|University of Benin|University of Calabar|University of Ibadan|Umaru Musa Yar'adua University Katsina|University of Lagos|University of Port Harcourt|University of Nigeria, Nsukka|Veritas University|Enugu State University of Science and Technology|Federal University, Birnin Kebbi|Federal Univerity Gashua, Yobe State|Federal University of Petroleum Resource Effurun|Federal University of Technology Minna|Federal University of Technology Owerri|Gombe State University|Ibrahim Babangida University|Ignatius Ajuru University of Education|Kano State University of Science and Technology|Kwara State University|Ladoke Akintola University|Madonna University|Lead City University, Ibadan|Micaheal Okpara Federal University of Agriculture, Umudike|Modibbo Adama University of Technology Yola|Nasarawa State University, Keffi|Nigerian Defense Academy|Nnamdi Azikiwe University|Northwest University|Novena University|Obafemi Awolowo University|Obong University|Olabisi Onabanjo University|Ondo State University of Science and Technolgy|Pan-Atlantic University|Paul University|Ritman University|Rivers State University|Renaissance University|Rhema University|Salem University|Samuel Adegboyega University|Sokoto State University|Tai Solarin University of Education|The University of Idemilli|University of Abuja|University of Ado-Ekiti|University of Agriculture|University of Illorin|University of Jos|University of Maiduguri|University of Mkar|University of Uyo|Usman Dan Fodio University, Sokoto State|Wesley University|Western Delta University|Sule Lamido University|Mountain Top University";

//Nigerian Polytechnics 
s_a[2] = "Dorben Polytechnic|Adamawa State Polytechnic|Federal Polytechnic, Mubi|Akwa-Ibom State Polytechnic|Heritage Polytechnic|Maritime Academy of Nigeria|Federal Polytechnic, Oko|Federal Polytechnic, Bauchi|Federal Polytechnic, Bayelsa|Benue State Polytechnic|Ramat Polytechnic|The Polytechnic, Calabar|Divine Polytechnic, Mkpani|Delta State Polytechnic|Akanu Ibiam Federal Polytechnic|Auchi Polytechnic|Kings Polytechnic|Shaka Polytechnic|Federal Polytechnic, Ado-Ekiti|Institute of Management Technology, Enugu|Federal Polytechnic, Nekede|Temple Gate Polytechnic|Imo State Polytechnic|Hussaini Adamu Federal Polytechnic|Kaduna Polytechnic|Nuhu Bamalli Polytechnic|Kano State Polytechnic|Mohammed Abdullahi Polytechnic|Hassan Usman Katsina Polytechnic|Kebbi State Polytechnic|Federal Polytechnic, Idah|Kogi State Polytechnic|Federal Polytechnic, Offa|Kwara State Polytechnic|Grace Polytechnic|Ronik Polytechnic|Wolex Polytechnic|Yaba College of Technology|Federal Polytechnic, Nassarawa|Nassarawa State Polytechnic|Federal Polytechnic, Bida|Niger State Polytechnic|Abraham Adesanya Polytechnic|Allover Central Polytechnic|Federal Polytechnic, Ilaro|Gateway Polytechnic Saapade|Marvic Polytechnic|Moshood Abiola Polytechnic|Ogun State College of Health Technology|Rufus Giwa Polytechnic|Federal Polytechnic, Ede|Osun State College of Technology|Osun State Polytechnic|Polytechnic Ile-Ife|Interlink Polytechnic|The Polytechnic, Ibadan|The Kings Poly Shaki, Oyo|Tower Polytechnic, Ibadan|Plateau State Polytechnic|Eastern Polytechnic|Port Harcourt Polytechnic|Rivers State Polytechnic|Federal Polytechnic, Damarutu|Mai Idris Alooma Polytechnic|Abdul Gusau Polytechnic|Federal Polytechnic, Namoda|Abdul Gusau Polytechnic";


function print_country(country_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(country_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select Type','');
	option_str.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		option_str.options[option_str.length] = new Option(country_arr[i],country_arr[i]);
	}
}

function print_state(state_id, state_index){
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select University','');
	option_str.selectedIndex = 0;
	var state_arr = s_a[state_index].split("|");
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}
/*
	*	tHANK YOU FOR USING NIGERIAN UNI 1.0 PLUGIN
	
*/

