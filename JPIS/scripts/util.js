//==========================================VALIDATION FUNCTION==============================================
function isNonNumericCode(obj,key,booSigned,booDecimal){
	var keycode=key.keyCode;
	var shift =key.shiftKey;
	if (!shift){
		if(keycode==32){return false;}
		if (keycode > 64 && keycode < 91){return false}//alphabet a to z from 65 to 90
		if (keycode > 185 && keycode < 189){return false}//; = , from 186 to 188
		if (keycode > 190 && keycode < 223){return false}// / (\)' from 191 to 222
		if (keycode == 106 || keycode == 111){return false}// numpad multipy and divide
		if(keycode==189 || keycode==107||keycode==109){
			if(booSigned){
				if(obj.value.length==1){return true;}
				else{return false;}
			}
			else{return false;}
		}
		if (keycode==110 ||keycode==190) {//decimal and period
			if (booDecimal){
				var num=obj.value.toString();
				var cnt=num.split('.');
				if (cnt.length==2){return true;}
				else{return false;}
			}
			else{return false;}
		}
	}else{
		if(booSigned && (keycode==187)){
			if(obj.value.length==1){return true;}
			else{return false;}
		}else{return false;}
	}
	return true;
}

function validateNumber(obj,key){
	if(!isNonNumericCode(obj,key,false,true)){obj.value=obj.value.substring(0,obj.value.length-1);}
}

function validateInteger(obj,key){
	if(!isNonNumericCode(obj,key,false,false)){obj.value=obj.value.substring(0,obj.value.length-1);}
}

function validateSignedNumber(obj,key){
	if(!isNonNumericCode(obj,key,true,true)){obj.value=obj.value.substring(0,obj.value.length-1);}
}

function validateSignedInteger(obj,key){
	if(!isNonNumericCode(obj,key,true,false)){obj.value=obj.value.substring(0,obj.value.length-1);}
}

function validateNumberAndRange(obj,key,minValue,maxValue){
	//### validates positive number where the min value is from 0 to 9 ######

	//check pressed keycodes
	if(!isNonNumericCode(obj,key,false,true)){obj.value=obj.value.substring(0,obj.value.length-1);}

	if (obj.value<minValue){
		obj.value="";
		alert("Number should be at least "+minValue);
	}
	if (obj.value>maxValue){
		obj.value=obj.value.substring(0,obj.value.length-1);
		alert("Number should be at most "+maxValue);
	}
}

function validateMobileNumber(obj){
    var minValue=1000000000;
    var maxValue=9999999999;
    if(isNaN(obj.value)){alert('Mobile Number should be Numeric.');obj.value='';}
    else{
    	if(obj.value>=minValue && obj.value<=maxValue){
        	if(obj.value.indexOf('+')!==-1){alert('Mobile number should not contain a +.');obj.value='';}
		if (obj.value.indexOf('0')==0){alert('Mobile number should not start with 0.');obj.value='';}
      	}
    	else{alert('Mobile Number should be a valid 10 digit number.');obj.value='';}
    }
}

function validateDate(obj){
  if(isValidDate(obj.value)==false){obj.value='';alert('Invalid Date');obj.value='';}
}

function isValidDate(inputText){  
	var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/; 
   	// Match the date format through regular expression 
        if(inputText.match(dateformat)){ 
            var opera1 = inputText.split('/');  
            var opera2 = inputText.split('-');  
            var lopera1 = opera1.length;  
            var lopera2 = opera2.length;  
            // Extract the string into month, date and year  
            if (lopera1>1){var pdate = inputText.split('/');}  
            else if (lopera2>1){var pdate = inputText.split('-');}  
            var dd = parseInt(pdate[0]);  
            var mm  = parseInt(pdate[1]);  
            var yy = parseInt(pdate[2]);  
            // Create list of days of a month [assume there is no leap year by default]  
            var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];  
            if (mm==1 || mm>2)  
            {  
                if (dd>ListofDays[mm-1])  
                    {   
                    return false;  
                    }  
            }  
            if (mm==2)  
            {  
                var lyear = false;  
                if ( (!(yy % 4) && yy % 100) || !(yy % 400))   
                {  
                    lyear = true;  
                }  
                if ((lyear==false) && (dd>=29))  
                {   
                return false;  
                }  
                if ((lyear==true) && (dd>29))  
                {    
                    return false;  
                }  
            }  
            return true
        }  
        else  
        {  
            return false;  
	}  
}
//===================================END VALIDATION FUNCTION==============================================

//==================================================ELEMENT CREATION FUNCTION==============================

function createTable(id,nRow,nCol){
	var table=document.createElement('table');
	table.setAttribute("id",id);
	var body=document.createElement('tbody');
	table.appendChild(body);
	var eId;
	var tr=[];
	var td=[];
	for(var row=0;row<nRow;row++){
		tr[row]=document.createElement('tr');
		eId=id+"[" + row + "]";
		tr[row].setAttribute("id",eId);
		body.appendChild(tr[row]);
		for(var col=0;col<nCol;col++){
			td[col]=document.createElement('td');
			eId=id + "["+ row + "]" + "[" + col +"]";
			td[col].setAttribute("id",eId);
			tr[row].appendChild(td[col]);
		}
	}
	return table;
}

function createTableWithHeading(id,nRow,nCol,headers){
	var table=document.createElement('table');
	table.setAttribute("id",id);
	var body=document.createElement('tbody');
	table.appendChild(body);
	var heading=document.createElement('tr');
	for(var i=0;i<nCol;i++){
		var th=document.createElement('th');
		th.innerHTML=headers[i];
		heading.appendChild(th);
	}
	body.appendChild(heading);
	var eId;
	var tr=[];
	var td=[];
	for(var row=0;row<nRow;row++){
		tr[row]=document.createElement('tr');
		eId=id+"[" + row + "]";
		tr[row].setAttribute("id",eId);
		body.appendChild(tr[row]);
		for(var col=0;col<nCol;col++){
			td[col]=document.createElement('td');
			eId=id + "["+ row + "]" + "[" + col +"]";
			td[col].setAttribute("id",eId);
			tr[row].appendChild(td[col]);
		}
	}
	return table;
}


function json2Table(jsonObj,id,tableState,headers,headersCaption){
     /* this function create a table and fill the data from the json object
	parameters: jsonObj - the json object containing the data
	id - the id of the table
	tableState - values = NEW (a new table) or EXISTING (an existing table)
	headers - Contains the texts of the table heading.
    */
	if(tableState.toUpperCase()=='NEW'){
	  //create a new table
	  var tbl=createE('table');
	  tbl.setAttribute('id',id);
	  var tbody=createE('tbody');
	  tbl.appendChild(tbody);
	}
	else if (tableState.toUpperCase()=='EXISTING'){
	  //get the existing table and remove all children from the body
	  var tbl=getE(id);
	  var tbodies=tbl.tBodies;
	  if (tbodies.length==0){
		var tbody=createE('tbody');
		tbl.appendChild(tbody);
	  }
	  else{
	    for (var i=tbl.rows.length-1;i>-1;i--){
		tbl.deleteRow(i);
	    }
	    var tbody=tbodies[0];
	  }
	}
	else{
	  //return null
	  return null;
	}
	if(arguments.length==5){
	  //the table has headers
	  var tr=createE('tr');
	  for(var i=0;i<headersCaption.length;++i){
	    var th=createE('th');
	    th.innerHTML=headersCaption[i];
	    tr.appendChild(th);
	  }
	  tbody.appendChild(tr);
	}
	for (var i=0;i<jsonObj.length;++i){
	  var tr=createE('tr');
	  for(var j=0;j<headers.length;j++){
		var td=createE('td');
		td.innerHTML=jsonObj[i][headers[j]];
		tr.appendChild(td)
	    }
	  tbody.appendChild(tr);
	}
	return tbl;
}

function json2EditableTable(jsonObj,id,tableState,headers,headersCaption){
     /* this function create a table and fill the data from the json object
	parameters: jsonObj - the json object containing the data
	id - the id of the table
	tableState - values = NEW (a new table) or EXISTING (an existing table)
	headers - Contains the texts of the table heading.
    */
	if(tableState.toUpperCase()=='NEW'){
	  //create a new table
	  var tbl=createE('table');
	  tbl.setAttribute('id',id);
	  var tbody=createE('tbody');
	  tbl.appendChild(tbody);
	}
	else if (tableState.toUpperCase()=='EXISTING'){
	  //get the existing table and remove all children from the body
	  var tbl=getE(id);
	  var tbodies=tbl.tBodies;
	  if (tbodies.length==0){
		var tbody=createE('tbody');
		tbl.appendChild(tbody);
	  }
	  else{
	    for (var i=tbl.rows.length-1;i>-1;i--){
		tbl.deleteRow(i);
	    }
	    var tbody=tbodies[0];
	  }
	}
	else{
	  //return null
	  return null;
	}
	if(arguments.length==5){
	  //the table has headers
	  var tr=createE('tr');
	  for(var i=0;i<headersCaption.length;++i){
	    var th=createE('th');
	    th.innerHTML=headersCaption[i];
	    tr.appendChild(th);
	  }
	  tbody.appendChild(tr);
	}
	for (var i=0;i<jsonObj.length;++i){
	  var tr=createE('tr');
	  for(var j=0;j<headers.length;j++){
		var td=createE('td');
        var txt=createE('input');
        var id='cells['+i+']['+j+']';
        txt.setAttribute('id',id);
        txt.value=jsonObj[i][headers[j]];
        td.appendChild(txt);
		//td.innerHTML=jsonObj[i][headers[j]];
		tr.appendChild(td)
	    }
	  tbody.appendChild(tr);
	}
	return tbl;
}

function json2List(jsonObj,id,listState,key){
	if(listState.toUpperCase()=='EXISTING'){
		var lst=getE(id);
		var nodes=lst.childNodes;
		if(!(nodes.length==0)){
			for(var i=nodes.length-1;i>-1;i--){
				lst.removeChild(nodes[i]);
			}
		}
	}
	else{
		var lst=createE('ul');
		lst.setAttribute('id',id);
	}
	for (var i=0;i<jsonObj.length;i++){
		var li=createE('li');
		li.innerHTML=jsonObj[i][key];
		lst.appendChild(li)
	}
	return lst;
}

function json2Select(jsonObj,id,selectState,captionKey,valueKey,defaultBlank){
	if(selectState.toUpperCase()=='EXISTING'){
		var sel=getE(id);
		var nodes=sel.childNodes;
		if(!(nodes.length==0)){
			for(var i=nodes.length-1;i>-1;i--){
				sel.removeChild(nodes[i]);
			}
		}
	}
	else{
		var sel=createE('select');
		sel.setAttribute('id',id);
	}
	if(defaultBlank==true){
		var op=createE('option');
		op.innerHTML='';
		op.setAttribute('value','blank');
		sel.appendChild(op);
	}
	for (var i=0;i<jsonObj.length;i++){
		var op=createE('option');
		op.innerHTML=jsonObj[i][captionKey];
		op.setAttribute('value',jsonObj[i][valueKey]);
		sel.appendChild(op);
	}
	return sel;
}

function array2Select(arr,id,selectState,defaultBlank){
	if(selectState.toUpperCase()=='EXISTING'){
		var sel=getE(id);
		var nodes=sel.childNodes;
		if(!(nodes.length==0)){
			for(var i=nodes.length-1;i>-1;i--){
				sel.removeChild(nodes[i]);
			}
		}
	}
	else{
		var sel=createE('select');
		sel.setAttribute('id',id);
	}
	if(defaultBlank==true){
		var op=createE('option');
		op.innerHTML='';
		op.setAttribute('value','blank');
		sel.appendChild(op);
	}
	for (var i=0;i<arr.length;i++){
		var op=createE('option');
		op.innerHTML=arr[i];
		op.setAttribute('value',arr[i]);
		sel.appendChild(op);
	}
	return sel;
}

//==================================================END ELEMENT CREATION FUNCTION==============================

//==================================================GRAPHIC FUNCTION===========================================

function drawDashedLine(context, fromX, fromY, toX, toY, dashPattern) {
 
	//####function to draw dashed lines in canvas context elements

	context.beginPath();
 	var dx = toX - fromX;
	var dy = toY - fromY;
	var angle = Math.atan2(dy, dx);
	var x = fromX;
	var y = fromY;
	context.moveTo(fromX, fromY);
	var idx = 0;
	var draw = true;
	while (!((dx < 0 ? x <= toX : x >= toX) && (dy < 0 ? y <= toY : y >= toY))) {
		var dashLength = dashPattern[idx++ % dashPattern.length];
		var nx = x + (Math.cos(angle) * dashLength);
		x = dx < 0 ? Math.max(toX, nx) : Math.min(toX, nx);
		var ny = y + (Math.sin(angle) * dashLength);
		y = dy < 0 ? Math.max(toY, ny) : Math.min(toY, ny);
		if (draw) {
			context.lineTo(x, y);
		} else {
			context.moveTo(x, y);
		}
		draw = !draw;
	}
 
	context.closePath();
	context.stroke();
}

//==============================================END GRAPHIC FUNCTION===========================================

//==================================================NUMBER FUNCTION===========================================

function formatNumber(num,precision){
	var fNum;
	var intNum;
	var decNum;
	var expNum;
	var posExponent=String(num).indexOf("e");
	if (posExponent>-1){
		var x=String(num).split("e");
		fNum=parseFloat(x[0]);
		expNum=x[1];
	}
	else{
		fNum=parseFloat(num);
	}
	var lenNum=String(fNum).length;
	var posDecimal=String(fNum).indexOf(".");
	var p;
	switch(posDecimal){
		case -1:
			intNum=fNum;
			decNum=0;
		break;
		default:
			var n=String(fNum).split(".");
			if (n[0]=="0"){
				intNum=n[0];
				p=parseInt(precision,10);
				if(n[1].length>=p){
					decNum=n[1].substr(0,p)
					while((parseInt(n[1].substr(0,p))==0) && (p<n[1].length+1)){
						p+=1;
						decNum=n[1].substr(0,p);
					}
				}
				else{
					decNum=n[1];
				}
			}
			else{
				p=parseInt(precision,10);
				intNum=n[0];
				decNum=n[1].substr(0,p);
			}
	}
	return parseFloat(intNum+"."+decNum+"e"+expNum);
}

function inWords(number,prefix,postfix){
	var word;//the variable to return
	var unit=['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
	var tens=['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];
	var teens=['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];

	//check if number is a number
	if(isNaN(number)||number==''){return 'not a number';}

	//number is numeric, split to integer & decimal parts
	number=number.toString();
	var parts=number.split('.');//parts[0] is integer & parts[1] is decimal

	//this function is limited to 9999999999999 i.e nine lakh ninety nine thousand nine hundred ninety nine crore and nine lakh......
	if(parts[0].length>13){return 'cannot name numbers greater than 13 digits';}

	//extract the digits from the integer part & name

	var house=[];//these are just slots to keep the digits with Unit digit in position 0
	house.length=13;//we talk of numbers upto 13 digits
	pLen=parts[0].length;
	for (var i=0;i<pLen;i++){
		house[i]=parseFloat(parts[0].substring(pLen-i-1,pLen-i));
	}
	//lets name numbers first upto 10 lakhs
	var word1=groupName();
	//now for the crores
	var word2=groupName('crore');
	if(word2=='Zero'||word2==undefined||word2==''){word=word1;}
	else{word=word2+' Crore '+word1;}

	//naming the decimal parts
	if(parts.length==2){
		var word3='';
		for(var i=0;i<parts[1].length;i++){
			word3+=unit[parseFloat(parts[1].substring(i,i+1))]+' ';
		}
		if(word3!=''){word+=' Point '+word3;}
	}

	//adding prefix and suffix
	if(arguments.length==2){word=prefix+' '+word;}
	if(arguments.length==3){word=prefix+' '+word+' '+postfix;}
	function groupName(crore){
		var group={'lakh':'','thousand':'','hundred':'','ut':''};//we don't say ut while naming nos but used the word and for unit tens
		var gName='';var base=0;
		if (arguments.length>0){base=7;}
		group.ut=UTPair(house[1+base],house[0+base]);
		group.hundred=UTPair(house[2+base]);
		group.thousand=UTPair(house[4+base],house[3+base]);
		group.lakh=UTPair(house[6+base],house[5+base]);
		if(group.lakh!=undefined && group.lakh!='Zero'){gName+=group.lakh +' Lakh ';}
		if(group.thousand!=undefined && group.thousand!='Zero'){gName+=group.thousand +' Thousand ';}
		if(group.hundred!=undefined && group.hundred!='Zero'){gName+=group.hundred +' Hundred ';}
		if(group.ut!=undefined && group.ut!='Zero'){gName+=group.ut;}
		if(group.ut=='Zero' && parseFloat(parts[0])==0){gName=group.ut;}
		return gName;
	}

	function UTPair(t,u){		
		if (arguments.length==2){
			if(t==undefined && u==undefined){return;}
			if(t==undefined){return unit[u];}
			if(t==0){return unit[u];}
			if (t==1){return teens[u];}
			if(t>1 && u==0){return tens[t];}
			if(t>1 && u!=0){return tens[t]+' '+unit[u];}
		}
		else{
			if (t==undefined){return;}
			return unit[t];
		}
	}

	return word;
}

function CDate(ddmmyyyy){
  var d;
  if (!(ddmmyyyy.indexOf('/')==-1)){
    d=ddmmyyyy.split('/');
  }
  else if (!(ddmmyyyy.indexOf('-')==-1)){
    d=ddmmyyyy.split('-');
  }
  else {}
  var dat=new Date();
  dat.setDate(d[0]);
  dat.setMonth(d[1]-1);
  dat.setFullYear(d[2]);
  return dat;
}

function CDateTime(dateTime){
  var parts=dateTime.split(' ');
  var dat=CDate(parts[0]);
  var t=parts[1].split(':');
  dat.setHours(t[0]);
  dat.setMinutes(t[1]);
  dat.setSeconds(t[2]);
  return dat;
}

//==================================================NUMBER FUNCTION===========================================

//==================================================DOCUMENT FUNCTION===========================================

function getE(id){
	return document.getElementById(id);
}


//like getE(), uses name instead of id. This is for reducing typing works only

function getN(elementName){
  return document.getElementByName(elementName);
}

function createE(element){
	return document.createElement(element);
}


//use for toggling the visibility of an element specified by divId
function toggle(divId,obj){
  var cDiv=getE(divId);
  if(cDiv.getAttribute('class')=='hidden'){
    cDiv.setAttribute('class','');
    obj.innerHTML='[-]';
  }
  else{
    cDiv.setAttribute('class','hidden');
    obj.innerHTML='[+]';
  }
}

//==============================================END DOCUMENT FUNCTION===========================================

//==============================OBJECT FUNCTION==============================================================================


//copy one array to another
function arrayCopy(src,dest){
  for (var i=0;i<src.length;i++){
    dest.push(src[i]);
  }
}

//copy one json to another
function jsonCopy(src,dest){
  for(var key in src){dest[key]=src[key];}
}

//searchObjectArray- return the object meeting the criteriaObj
//criteriaObj - an array of json in the form {'key':'headerName','op':'comparisonOperator','value':'fieldValue'}

function searchObjectArray(data,criteriaObj){

  //add a serial no the data
  for (var i=0;i<data.length;i++){
    data[i].recordNumber=i;
  }
  //if criteria is not an array or its length is even, something is wrong, return an empty array
  if(criteriaObj instanceof Array){if(criteriaObj.length % 2==0){return [];}}
  else{return [];}

  //do the search
  var searchResult=[];
  var recsNo=search(data,criteriaObj);//recsNo store only the rec number not the objec
  for (var i=0;i<recsNo.length;i++){
    searchResult.push(data[recsNo[i]]);
  }
  return searchResult;
  
  function search(obj,criteria){
    // the search is done recursively because criteria may be in compound form like [[A,and,B],and,C,or,[D,and,F]
    //search() return an array of recordNumber and not the actual object, beacause atomSearch return so
    var result;
    if(criteria instanceof Array){
      var critLength=criteria.length;
      var results=[];//a variable to store the result from each criteria e.g (A) AND (B) OR (C) i.e results from (A),(B) & (C)
      var ops=[];//stores the operator
      for (var i=0;i<critLength;i++){
        if(i % 2==0){
          results.push(search(obj,criteria[i]));
        }
        else{ops.push(criteria[i].toUpperCase());}
      }
      //now for anding an orring
      var acc;//the accumulator for the result
      acc=results[0];
      for (var i=0;i<ops.length;i++){
	if (ops[i]=='&&'){acc=doAnding(acc,results[i+1]);}
	if (ops[i]=='||'){acc=doOrring(acc,results[i+1]);}
      }	
      return acc;
    }
    else{
      //criteria is a json,check if it contains the key,value,op properties
      if(criteria.key==undefined ||criteria.value==undefined ||criteria.op==undefined){return [];}
      var sResult;
      sResult=atomSearch(criteria,obj);  
      return sResult;
    }
  }
  
  function atomSearch(crit,obj){
    var result=[];
    for (var i=0;i<obj.length;i++){
      if(crit.op=='='){if(obj[i][crit.key]==crit.value){result.push(i)}}
      if(crit.op=='>'){if(parseFloat(obj[i][crit.key])>parseFloat(crit.value)){result.push(i)}}
      if(crit.op=='<'){if(parseFloat(obj[i][crit.key])<parseFloat(crit.value)){result.push(i)}}
      if(crit.op=='>='){if(parseFloat(obj[i][crit.key])>=parseFloat(crit.value)){result.push(i)}}
      if(crit.op=='<='){if(parseFloat(obj[i][crit.key])<=parseFloat(crit.value)){result.push(i)}}
      if(crit.op=='!='){if(parseFloat(obj[i][crit.key])!=parseFloat(crit.value)){result.push(i)}}
    }
    return result;
  }
  
  function doAnding(arr1,arr2){
    var arrAnd=[];
    for (var i=0;i<arr1.length;i++){
      for (var j=0;j<arr2.length;j++){
      	if(arr1[i]==arr2[j]){arrAnd.push(arr1[i]);break;}
      }      
    }
    return arrAnd;
  }

  function doOrring(arr1,arr2){
    var arrOr=[];
    for (var i=0;i<arr1.length;i++){
      arrOr.push(arr1[i]);
    }
    for (var i=0;i<arr2.length;i++){
      var boo=false;
      for (var j=0;j<arr1.length;j++){
	if(arr2[i]==arr1[j]){boo=true;break;}
      }
      if(boo==false){arrOr.push(arr2[i]);}
    }
    return arrOr;
  }
}

function distinctValue(data,key){
//returns the distinct values for a particular key in an data array
  var obj=[];
  for (var i=0;i<data.length;i++){
    if (i==0){obj.push(data[i][key]);}
    else{
      var present=false;
      for (var j=0;j<obj.length;j++){
        if(data[i][key]==obj[j]){present=true;break;}	
      }
      if(present==false && data[i][key]!=''){obj.push(data[i][key]);}
    }
  }
  return obj;
}

//====================END OBJECT FUNCTION==================================================================================

//===================LOADBAR ALERT CONFIRM Functions========================================================================
function showLoadBar(displayText){
    // this function requires a div with id = 'bodyContainer' to function
    try{
      getE('bodyContainer').style.display='none';
      var lbar=createE('div');
      lbar.setAttribute('id', 'jpLoadBarV1');
      lbar.setAttribute('class', 'visible');
      
      var ltxt=createE('div');
      ltxt.setAttribute('id','jpLoadBarTextV1');
      
      ltxt.innerHTML=displayText;
      lbar.appendChild(ltxt);
      document.body.appendChild(lbar);
    }
    catch(e){
      }
  }

function closeLoadBar(){
    try{
      getE('bodyContainer').style.display='block';
      var lbar=getE('jpLoadBarV1');      
      var ltxt=getE('jpLoadBarTextV1');
      lbar.removeChild(ltxt);
      document.body.removeChild(lbar);
    }
    catch(e){
      }
}

//---global variables----

  var screenOffsetX;
  var screenOffsetY;
  
function alert(displayText,title){
  if (arguments.length==2){
    showAlert(displayText,title);
  }
  else{
    showAlert(displayText,"Message:");
  }
}

function jpConfirm(displayText,functionOK,functionCancel){
  
    showAlert(displayText,"Important!",functionOK,functionCancel);
}

function showAlert(displayText,title,functionOK,functionCancel){
  try{
      screenOffsetX=window.pageXOffset;
      screenOffsetY=window.pageYOffset;
      getE('bodyContainer').style.display='none';
      var alertBox=createE('div');
      alertBox.setAttribute('id','jpAlertWindowV1');
      alertBox.setAttribute('class','MessageBox');

    
      var alertTitle=createE('div');
      alertTitle.setAttribute('class','MessageTitle');

      alertTitle.innerHTML=title;
      
      var alertBody=createE('div');
      alertBody.setAttribute('class','MessageBody');
      alertBody.innerHTML=displayText;

    
      var alertFooter=createE('div');
      alertFooter.setAttribute('class','MessageFooter');

      if (arguments.length==4){
        var btn=createE('input');
        btn.type='button';
        btn.value="OK";
        btn.setAttribute('onclick',functionOK);
        alertFooter.appendChild(btn);

        var btnC=createE('input');
        btnC.type='button';
        btnC.value="Cancel";
        btnC.setAttribute('onclick',functionCancel);
        alertFooter.appendChild(btnC);
      }
      else{      
        var btn=createE('input');
        btn.type='button';
        btn.value="OK";
        btn.setAttribute('onclick','return closeAlert()');
        alertFooter.appendChild(btn);
      }
      
      alertBox.appendChild(alertTitle);
      alertBox.appendChild(alertBody);
      alertBox.appendChild(alertFooter);
      document.body.appendChild(alertBox);
    }
    catch(e){
        window.alert(displayText);
    }
  }
  
  function closeAlert(){
      var alertBox=getE('jpAlertWindowV1');
      document.body.removeChild(alertBox);
      getE('bodyContainer').style.display='block';  
      window.scrollBy(screenOffsetX,screenOffsetY);
}

  
  function closeConfirm(){
      closeAlert();
  }

//===================END LOADBAR ALERT CONFIRM Functions========================================================================
//===================== Flexible Data Table ===================================================================================

/*
create a Flex Table for Inputing Data
args: divId- the id of the div to place the table
      headersCaption - captions at the header row
      tableCaption - caption for the table
      OKFunction - the function to execute when OK button is pressed
      OKButtonCaption - The caption on the OK button
      
Note: The functions addEditableTableRow(tableId) and deleteLastTableRow(tableId) works in conjunction with the flex Table
*/
function createFlexTable(divId,headersCaption,tableCaption,OKFunction,OKButtonCaption){
  //remove all element from the div
  var div=getE(divId);
  for (var i=div.childNodes.length-1;i>-1;i--){
  	div.removeChild(div.childNodes[i]);
  }
  //create caption
  var b=createE('b');
  var u=createE('u');
  u.innerHTML=tableCaption;
  b.appendChild(u);
  div.appendChild(b);
  var p=createE('p');
  div.appendChild(p);
  
  //create a new table
  var tbl=createE('table');
  tbl.setAttribute('id',divId+'-table');
  var tbody=createE('tbody');
  tbl.appendChild(tbody);
  div.appendChild(tbl);

   //create headersCaption
   var tr=createE('tr');
   for(var i=0;i<headersCaption.length;++i){
	  var th=createE('th');
	  th.innerHTML=headersCaption[i];
	  tr.appendChild(th);
	}
	tbody.appendChild(tr);
    
    //create row
   var tr=createE('tr');
   for(var i=0;i<headersCaption.length;i++){
	  var td=createE('td');
	  var input=createE('input');
      input.setAttribute('id','cells[0]['+i+']');
      td.appendChild(input);
	  tr.appendChild(td);
	}
	tbody.appendChild(tr);
    
    //create <p>
    var p=createE('p');
    div.appendChild(p);
    
    //create buttons
    var addButton=createE('input');
    addButton.setAttribute('type','button');
    addButton.setAttribute('value','Add Row');
    var onclick='return addEditableTableRow("'+divId+'-table")';
    addButton.setAttribute('onclick',onclick);
    div.appendChild(addButton);
    
    var deleteButton=createE('input');
    deleteButton.setAttribute('type','button');
    deleteButton.setAttribute('value','Delete Last Row');
    var onclick='return deleteLastTableRow("'+divId+'-table")';
    deleteButton.setAttribute('onclick',onclick);
    div.appendChild(deleteButton);
    
    var OKButton=createE('input');
    OKButton.setAttribute('type','button');
    OKButton.setAttribute('value',OKButtonCaption);
    var onclick='return '+OKFunction;
    OKButton.setAttribute('onclick',onclick);
    div.appendChild(OKButton);
}

function addEditableTableRow(tableId){
  var tbl=getE(tableId);
  var nRows=tbl.rows.length;
  var nCols=tbl.rows[0].cells.length;  
  //create rows
  tbl.insertRow(-1);
  //create columns   var tr=createE('tr');
   for(var i=0;i<nCols;i++){
	  var td=createE('td');
	  var input=createE('input');
      input.setAttribute('id','cells['+(nRows-1)+']['+i+']');
      td.appendChild(input);
	  tbl.rows[nRows].appendChild(td);
	}
}

function deleteLastTableRow(tableId){
  var tbl=getE(tableId);
  var nRows=tbl.rows.length;
  if(!(nRows==2)){tbl.deleteRow(nRows-1);}
}

/*
  Convert table data to json
  Note: Table should have a <th> element
        makes a call to the function array2Objects(data, keys)
*/
function table2json(tableId){  
  var tbl=getE(tableId);
  var nodeName='';
  var obj=[];
  try{nodeName=tbl.rows[0].childNodes[0].nodeName}
  catch(e){return obj;}//no childNode in first row so return an empty array
  if(!(nodeName=='TH')){return obj;};//the table has no th element, return empty array
  var nRows=tbl.rows.length;
  var nCols=tbl.rows[0].cells.length;  
  var headers=[];
  var data=[];
  for (var i=0;i<nCols;i++){
    headers.push(tbl.rows[0].cells[i].innerHTML)
  }
  for (var i=1;i<nRows;i++){
    var arr=[];
    for (var j=0;j<tbl.rows[i].cells.length;j++){
      if(tbl.rows[i].cells[j].hasChildNodes()){
        arr.push(tbl.rows[i].cells[j].childNodes[0].value);
      }
      else{ arr.push(tbl.rows[i].cells[j].innerHTML);}
    }
    data.push(arr);
  }
  return array2Objects(data, normalizeHeaders(headers));
}

/*
    Convert an array of data to an objects array with keys as defined by the keys argument
    Note: the length of keys should be the same as the columns of the array
*/
function array2Objects(data, keys) {
  var objects = [];
  for (var i = 0; i < data.length; ++i) {
    var object = {};
    for (var j = 0; j < data[i].length; ++j) {
      var cellData = data[i][j];
        if (typeof(cellData)=='object') {
        var dd=cellData.getDate();
        var mm=cellData.getMonth()+1;
        var yyyy=cellData.getFullYear();
        var cellDataStr=dd+'/'+mm+'/'+yyyy;
        object[keys[j]] = cellDataStr;
      }
      else{
        object[keys[j]] = cellData;
      }
    }
    objects.push(object);
  }
  return objects;
}
// Returns an Array of normalized Strings.
// Arguments:
//   - headers: Array of Strings to normalize
function normalizeHeaders(headers) {
  var keys = [];
  for (var i = 0; i < headers.length; ++i) {
    var key = normalizeHeader(headers[i]);
    if (key.length > 0) {
      keys.push(key);
    }
  }
  return keys;
}

// Normalizes a string, by removing all alphanumeric characters and using mixed case
// to separate words. The output will always start with a lower case letter.
// This function is designed to produce JavaScript object property names.
// Arguments:
//   - header: string to normalize
// Examples:
//   "First Name" -> "firstName"
//   "Market Cap (millions) -> "marketCapMillions
//   "1 number at the beginning is ignored" -> "numberAtTheBeginningIsIgnored"
function normalizeHeader(header) {
  var key = "";
  var upperCase = false;
  for (var i = 0; i < header.length; ++i) {
    var letter = header[i];
    if (letter == " " && key.length > 0) {
      upperCase = true;
      continue;
    }
    if (!isAlnum(letter)) {
      continue;
    }
    if (key.length == 0 && isDigit(letter)) {
      continue; // first character must be a letter
    }
    if (upperCase) {
      upperCase = false;
      key += letter.toUpperCase();
    } else {
      key += letter.toLowerCase();
    }
  }
  return key;
}

// Returns true if the cell where cellData was read from is empty.
// Arguments:
//   - cellData: string
function isCellEmpty(cellData) {
  return typeof(cellData) == "string" && cellData == "";
}

// Returns true if the character char is alphabetical, false otherwise.
function isAlnum(char) {
  return char >= 'A' && char <= 'Z' ||
    char >= 'a' && char <= 'z' ||
    isDigit(char);
}

// Returns true if the character char is a digit, false otherwise.
function isDigit(char) {
  return char >= '0' && char <= '9';
}
//remove spaces from string to be used as Field in SMSes
function removeSpaces(string){
  var parts=string.trim().split(' ');
  var joined='';
  for (var i=0;i<parts.length;i++){
    joined+=parts[i];
  }
  return joined;
}

//============================ Mobile and URL Encodings Functions==========================================
function isValidMobileNumber(num){
    var minValue=1000000000;
    var maxValue=9999999999;
    if(isNaN(num)){return false;}
    else{
    	if(num>=minValue && num<=maxValue){
        	if(num.indexOf('+')!==-1){return false;}
		if (num.indexOf('0')==0){return false;}
      	}
    	else{return false;}
    }
    return true;
}

function urlEncodingRequired(char){
  var boo=false;
  switch(char){
    case ';': boo=true;break;
    case '?': boo=true;break;
    case '/': boo=true;break;
    case ':': boo=true;break;
    case '#': boo=true;break;
    case '&': boo=true;break;
    case '=': boo=true;break;
    case '+': boo=true;break;
    case '$': boo=true;break;
    case ',': boo=true;break;
    case ' ': boo=true;break;
    case '%': boo=true;break;
    case '<': boo=true;break;
    case '>': boo=true;break;
    case '~': boo=true;break;
    case '%': boo=true;break;
  }
  return boo;
}

function urlEncodeString(string){
  var encode='';
  for(var i=0; i<string.length;i++){
    encode+=urlEncodeChar(string.charAt(i));
  }
  return encode;
}

function urlEncodeChar(char){
  var encoded=char;
  switch(char){
    case ';': encoded='%3B';break;
    case '?': encoded='%3F';break;
    case '/': encoded='%2F';break;
    case ':': encoded='%3A';break;
    case '#': encoded='%23';break;
    case '&': encoded='%26';break;
    case '=': encoded='%3D';break;
    case '+': encoded='%2B';break;
    case '$': encoded='%24';break;
    case ',': encoded='%2C';break;
    case ' ': encoded='%20';break;
    case '%': encoded='%25';break;
    case '<': encoded='%3C';break;
    case '>': encoded='%3E';break;
    case '~': encoded='%7E';break;
    case '%': encoded='%25';break;
  }
  return encoded;
}

//===============================Checked Radio Button Value==================================
function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}
//--------------------------------------------------------------------------------------