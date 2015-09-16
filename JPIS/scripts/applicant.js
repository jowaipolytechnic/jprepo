window.onload=function(){
	var d=new Date();
	var y=d.getFullYear();
	var selYear=document.getElementById('selYear');
	var op;
	for (var i=10;i<41;i++)
	{	op=document.createElement("option");
		var yyyy=y-i;
		op.value=yyyy;
		op.innerHTML=yyyy;
		selYear.appendChild(op);
	}
	var sel=document.getElementById('selSex');
	sel.value='';
	sel=document.getElementById('selDay');
	sel.value='';
	sel=document.getElementById('selMonth');
	sel.value='';
	sel=document.getElementById('selYear');
	sel.value='';
	sel=document.getElementById('selCategory');
	sel.value='';
	sel=document.getElementById('selDivision10');
	sel.value='';
	sel=document.getElementById('selDivision12');
	sel.value='';
	sel=document.getElementById('selFirstPreference');
	sel.value='';
	sel=document.getElementById('selSecondPreference');
	sel.value='';
	sel=document.getElementById('selThirdPreference');
	sel.value='';
	sel=document.getElementById('selDiscontinued');
	sel.value='';
}

function firstChoiceSelected(){
	var obj=getE('selFirstPreference');
	var op1=getE('secondPreferenceChoice1');
	var op2=getE('secondPreferenceChoice2');
	var op=getE('thirdPreferenceChoice');
	if (obj.value=='AE')
	{
		op1.value='AA';
		op1.innerHTML="Architectural Assistantship";
		op2.value='CDGT';
		op2.innerHTML="Costume Design & Garment Technology";
		secondChoiceSelected();
	}
	if (obj.value=='AA')
	{
		op1.value='AE';
		op1.innerHTML="Automobile Engineering";
		op2.value='CDGT';
		op2.innerHTML="Costume Design & Garment Technology";
		secondChoiceSelected();
	}
	if (obj.value=='CDGT')
	{
		op1.value='AA';
		op1.innerHTML="Architectural Assistantship";
		op2.value='AE';
		op2.innerHTML="Automobile Engineering";
		secondChoiceSelected();
	}
}

function secondChoiceSelected(){
	var obj=getE('selSecondPreference');
	var op=getE('thirdPreferenceChoice');
	var op1=getE('secondPreferenceChoice1');
	var op2=getE('secondPreferenceChoice2');
	if(obj.value==op1.value)
	{
		op.value=op2.value;
		op.innerHTML=op2.innerHTML;
	}
	else{
		op.value=op1.value;
		op.innerHTML=op1.innerHTML;
	}
}

function calculatePercentage(exam){
	var marks;
	var total;
	var percent;
	if (exam==10){
		marks=document.getElementById("tbMarksSecured10").value;
		total=document.getElementById("tbOutOf10").value
		percent=document.getElementById("tbPercentage10")
	}
	if (exam==12){
		marks=document.getElementById("tbMarksSecured12").value;
		total=document.getElementById("tbOutOf12").value
		percent=document.getElementById("tbPercentage12")
	}
	var pc=marks*100/total;
	if ((pc=="Infinity")||(pc=="0")||(isNaN(pc))){
		percent.style.color="Red";
		percent.style.fontWeight="bold";
	}
	else{
		percent.style.color="Black";
		percent.style.fontWeight="normal";
	}
	percent.innerHTML=formatNumber(pc,2);
}
 

function fillSavedData(data){
  //--------------Personal Information-------------------------------------
  getE('tbName').value=data.name;getE('tbFathersName').value=data.fathersName;getE('tbMothersName').value=data.mothersName;
  getE('selSex').value=data.sex;getE('selDay').value=data.dobDay;getE('selMonth').value=data.dobMonth;getE('selYear').value=data.dobYear;
  getE('tbNationality').value=data.nationality;getE('tbReligion').value=data.religion;getE('tbMotherTongue').value=data.motherTongue;
  getE('selCategory').value=data.category;
  //--------------Communication Details-------------------------------------
  getE('txPermanentAddress').value=data.permanentAddress;getE('txCommunicationAddress').value=data.communicationAddress;
  getE('tbPhoneNumber').value=data.phone;getE('tbMobileNumber').value=data.mobile;
  //--------------Other Personal Information--------------------------------
  getE('tbGuardian').value=data.localGuardianName;getE('tbGuardianRelationship').value=data.localGuardianRelationship;
  getE('txGuardianAddress').value=data.localGuardianAddress;getE('tbMaintenanceSource').value=data.source;
  getE('tbMaintenanceSource').value=data.source;getE('tbAnnualIncome').value=data.annualIncome;
  //---------------Academic Information-------------------------------------
       //---------------Examination Passed----------------------------
  getE('tbBoard10').value=data.board10;getE('tbInstitute10').value=data.institute10;
  getE('tbYearPassing10').value=data.year10;getE('selDivision10').value=data.division10;
  getE('txSubjects10').value=data.subjects10;
  getE('tbBoard12').value=data.board12;getE('tbInstitute12').value=data.institute12;
  getE('tbYearPassing12').value=data.year12;getE('selDivision12').value=data.division12;
  getE('txSubjects12').value=data.subjects12;
      //---------------Class 10 Marks--------------------------------
  getE('tbSubject101').value=data.subject101;getE('tbSubject102').value=data.subject102;getE('tbSubject103').value=data.subject103;
  getE('tbMarksMaths10').value=data.marksMaths10;getE('tbMarksScience10').value=data.marksScience10;getE('tbMarksEnglish10').value=data.marksEnglish10;
  getE('tbMarksSubject101').value=data.marksSubject101;getE('tbMarksSubject102').value=data.marksSubject102;getE('tbMarksSubject103').value=data.marksSubject103;
  getE('tbMarksSecured10').value=data.marksSecured10;getE('tbOutOf10').value=data.outOf10;calculatePercentage(10);
      //---------------Class 12 Marks--------------------------------
  getE('tbSubject121').value=data.subject121;getE('tbSubject122').value=data.subject122;getE('tbSubject123').value=data.subject123;
  getE('tbSubject124').value=data.subject124;getE('tbSubject125').value=data.subject125;getE('tbSubject126').value=data.subject126;
  getE('tbMarksSubject121').value=data.marksSubject121;getE('tbMarksSubject122').value=data.marksSubject122;getE('tbMarksSubject123').value=data.marksSubject123;
  getE('tbMarksSubject124').value=data.marksSubject124;getE('tbMarksSubject125').value=data.marksSubject125;getE('tbMarksSubject126').value=data.marksSubject126;
  getE('tbMarksSecured12').value=data.marksSecured12;getE('tbOutOf12').value=data.outOf12;calculatePercentage(12);
  //-------------------------Branch of Study-------------------------  
  getE('selFirstPreference').value=data.firstPreference;firstChoiceSelected();
  getE('selSecondPreference').value=data.secondPreference;secondChoiceSelected();// no need to load third choice as it is already done by secondChoiceSelected()
  //-------------------------Uncategorized----------------------------  
  getE('selDiscontinued').value=data.discontinued;getE('tbParentName').value=data.parentName;getE('txOfficeAndAddress').value=data.officeAndAddress;
  getE('tbGovtDeptt').value=data.govtDeptt;getE('tbPostHeld').value=data.postHeld;getE('tbSinceDate').value=data.sinceDate;

  //-------------------Close loadBar and show form--------------------
  closeLoadBar();
}
