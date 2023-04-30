// npm install fs

var hm_for_tags =  new Map();
var unique_ids_order =  [];
unique_ids_order[0] = '1';
unique_ids_order[1] = '300';
unique_ids_order[2] =  '299'; 

var curr_id = '';
var tag_id = 2;
var arrow_ids = 301 
var clicked_tag = 0;


let popup =  document.getElementById('popup');
function openPopup(evn){   
let b =  evn.target;
if(b != undefined){
     b =  evn.target.arrow_id_for_popup_fun;
     curr_id = b;
     console.log(b);
}
else{
    curr_id =  300;
} 
popup.classList.add("open-popup");
}


function closePopup(){
popup.classList.remove("open-popup");
}


let assignPopup =  document.getElementById('assign_popup');

function openAssignPopup(){
    assignPopup.classList.add("open-assign_popup");
}
 function closeAssignPopup(){
    assignPopup.classList.remove("open-assign_popup");
    let variable_name = document.getElementById('variable-name').value.toString();
    let expression = document.getElementById('value-assign').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    if(variable_name != "" && expression != ""){
    div.innerHTML = variable_name + " = " + expression;
    div.style.visibility = 'visible';
    document.getElementById('variable-name').value = "";
    document.getElementById('value-assign').value = "";
    assign(clicked_tag,variable_name, expression);
    assignJava(clicked_tag,variable_name, expression);
   }
} 



let inputPopup =  document.getElementById('input_popup');
function openInputPopup(){
    inputPopup.classList.add("open-input_popup");
}

function closeInputPopup(){
    inputPopup.classList.remove("open-input_popup");

    let variable_name = document.getElementById('variable-name-assign').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    if(variable_name != ""){
    div.innerHTML = variable_name;
    div.style.visibility =  'visible';
    document.getElementById('variable-name-assign').value = "";
    input(clicked_tag,variable_name);
    inputJava(clicked_tag,variable_name);
   }
}

    
let outputPopup =  document.getElementById('output_popup');
function openOutputPopup(){
    outputPopup.classList.add("open-output_popup");
}

function closeOutputPopup(){
    outputPopup.classList.remove("open-output_popup");
    let expression =  document.getElementById('output-expression').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    if(output !=  ""){
        div.innerHTML   =  expression;
        div.style.visibility =  'visible';
        document.getElementById('output-expression').value =  "";
        output(clicked_tag, expression);
        outputJava(clicked_tag, expression);
    }
}


let ifPopup =  document.getElementById('if_popup');
function openifPopup(){
    ifPopup.classList.add("open-if_popup");
}


function closeifPopup(){
    ifPopup.classList.remove("open-if_popup");

    let condition = document.getElementById('condition-expression').value.toString();
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
    
    if(condition !=  ""){
        div.innerHTML   =  condition;
      //  console.log(div);
        div.style.visibility =  'visible';
        document.getElementById('condition-expression').value =  "";
    }
}




/////////////////////////////////////////////////////working/////////////////////////////

let forPopup =  document.getElementById('for_popup');
function openforPopup(){
    forPopup.classList.add("open-for_popup");
}
function closeforPopup(){
    forPopup.classList.remove("open-for_popup");
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];
   let variable_name_declare =  document.getElementById('variable-name-declare').value.toString();
    if(variable_name_declare != ''){
        div.innerHTML = variable_name_declare;
        div.style.visibility =  'visible';
        document.getElementById('variable-name-declare').value =  "";
  
    }
}


///////////////////////////////////////////////////working/////////////////////////////////

//////////////////////////////////////////////////////////// working ///////////////////////////////////////////
let declarePopup =  document.getElementById('declare_popup')
function openDeclarePopup(){
declarePopup.classList.add("open-declare_popup");
}
function closeDeclarePopup(){
    declarePopup.classList.remove("open-declare_popup");
    let childs =  document.getElementById(clicked_tag).children;
    let div = childs[0];

   let variable_name_declare =  document.getElementById('variable-name-declare').value.toString();
   let data_type =  document.getElementById('data-type').value;
  // console.log(typeof data_type);
    if(variable_name_declare != ''){
        div.innerHTML = variable_name_declare;
        div.style.visibility =  'visible';
        document.getElementById('variable-name-declare').value =  "";
       // hm_variable_name_data_type.put(variable_name_declare,data_type);
        declare(clicked_tag,variable_name_declare,data_type);
        declareJava(clicked_tag,variable_name_declare,data_type);

    }  
}
//////////////////////////////////////////////////////////////working /////////////////////////////////////////////////////





function addTag(type_of_tag){
    
    var pos =  0; 
    for(let i   = 0; i<unique_ids_order.length;  i++){
        if(unique_ids_order[i] == curr_id){
            pos =  i;
            break ;
        }
    }
     
      

    //finding type tag type here
 let tag =  '';
 let color = '';
if(type_of_tag == 1){
tag  =  'declare.png'
color = '#eabbae';

}
else if(type_of_tag == 2){
tag =  'assign.png';
color = '#ffeeb5';

}
else if(type_of_tag == 3){
tag =  'input.png';
color = '#a4ea9e';

}
else if(type_of_tag == 4){
tag =  'output.png';
color = '#bdf7f5';

}
else if(type_of_tag == 5){
tag =  'for.png';
color = '#f9cece';

}
else if(type_of_tag ==  6){
tag =  'if.png';
color = '#fdcea0';
} 




// creating main div and setting its attribute
let m_div  = document.createElement('div');
m_div.setAttribute(
'style',
'height:fit-content; width:fit-content; '
)
//m_div.style.backgroundColor = color;



m_div.id = tag_id;




m_div.addEventListener('click',fun,false); 
m_div.addEventListener('contextmenu',add,false);
m_div.addEventListener('contextmenu',event => event.preventDefault());
m_div.id_after_onclick = m_div.id;




let d1 = tag_id;
hm_for_tags.set(tag_id,tag);
/////////////////******* working */  //////////////////////////
tag_id++;

// creting image and setting up its attribute
let img  = document.createElement('img');
img.src =  tag;
img.setAttribute(
    'style',
    'height:50px; width:100px;'
)




// Creating child/editable div and setting its attribute

let data_div =  document.createElement('div');
data_div.setAttribute(
    'style',
    'height:fit-content; width:fit-content; background-color:white;',
)
//write here
data_div.style.backgroundColor = 'white';
data_div.style.border = '2px solid black';
data_div.style.visibility =  'hidden'


// creating arrow image and setting its attribute
// if(type_of_tag == 6){

//     m_div.appendChild(data_div);
//     m_div.appendChil  d(img);

//      let main_div_condition =  document.createElement('div');
//      main_div_condition.style.display = 'table-row';
    
//      let new_if_condition_div_  =  document.createElement('div');
//      let new_else_condition_div_  =  document.createElement('div');
//      new_if_condition_div_.style.width = '50px';
//      new_if_condition_div_.style.height =  '100px';
//      new_if_condition_div_.id = 'leftbox';
//      new_else_condition_div_.id = 'rightbox';



//      new_if_condition_div_.style.backgroundColor =  'blue';
//      main_div_condition.appendChild(new_if_condition_div_);
//      new_else_condition_div_.style.width = '50px';
//      new_else_condition_div_.style.height =  '100px';
//      new_else_condition_div_.style.backgroundColor =  'blue';
//      main_div_condition.appendChild(m_div);
//      main_div_condition.appendChild(new_else_condition_div_);

     

//      new_if_condition_div_.style.float =  'left';
    
//      m_div.style.float =  'left';
     
//      new_else_condition_div_.style.float =  'right';


    
     
     

     
//     let sib =  nextSib(curr_id);
//     let after  =  document.getElementById(sib);
//     let parent = document.getElementById('flow');
//     parent.insertBefore(main_div_condition, after);
//     parent.insertBefore( new_arrow, after);
//     insert_tag_id(d2,d1,pos);



/////////////////////////////////////////////////////////////////////////////////////////////////////// working///////////////////
     



// }

  let  new_arrow =  document.createElement('img');
    new_arrow.src = 'down-arrow.png';
     new_arrow.setAttribute(
    'style',
    'width:80px; height:70px',
       )
new_arrow.id = arrow_ids;
new_arrow.addEventListener('click', openPopup, false);
new_arrow.arrow_id_for_popup_fun = new_arrow.id;
let d2 =  arrow_ids;
arrow_ids++;
m_div.appendChild(data_div);
m_div.appendChild(img) 
let sib =  nextSib(curr_id);
let after  =  document.getElementById(sib);
// console.log(sib);
let parent = document.getElementById('flow');
parent.insertBefore(m_div, after);
parent.insertBefore( new_arrow, after);
insert_tag_id(d2,d1,pos);
}


function insert_tag_id( t_id, a_id, pos){
   

    for(let i = pos+1;  i<unique_ids_order.length;  i++){
        let a = unique_ids_order[i];
        let t =  unique_ids_order[i+1];
        unique_ids_order[i] = '' + a_id;
        unique_ids_order[i+1] = '' + t_id;
        t_id = t;
        a_id =  a;
        i++;
    }



    
    let l =  unique_ids_order.length;
    unique_ids_order[l] = a_id;
    unique_ids_order[l+1] = t_id;

}

var removing_tag_id =  "";
// removing tags 
function add(e){
    let delete_tag_popup =  document.querySelector('.deleteTag');
    delete_tag_popup.classList.add("open-deleteTag");

    let b =  e.target;
    let id_of_tag = b.parentElement.id;  
    removing_tag_id = id_of_tag; 
   
}
function deleteTag(){
    let id_of_tag = removing_tag_id;
    let teg  = document.getElementById(id_of_tag);
    let parent  = document.getElementById('flow');
    let sib =  teg.nextElementSibling;
    const idn = unique_ids_order.indexOf(id_of_tag);
    unique_ids_order.splice(idn, 1);
    unique_ids_order.splice(idn,1);
    parent.removeChild(teg);
    parent.removeChild(sib);
}

function closeDeletePopup(){
    let delete_tag_popup =  document.querySelector('.deleteTag');
    delete_tag_popup.classList.remove("open-deleteTag");

}


function nextSib(curr){
    let p = 0;
    for(let i = 0; i<unique_ids_order.length;  i++){
        if(curr == unique_ids_order[i]){
            p = i;
            break;
        }
    }
   let d =  document.querySelector('#flow');
    return unique_ids_order[p+1];

}
/////////////////******* working */  //////////////////////////
function fun(e){
    let b =  e.target;
    let id_of_tag = b.parentElement.id;
 
 var d = parseInt(id_of_tag);
 id_of_tag = d;
 let type_of_tag =   hm_for_tags.get(id_of_tag);
 let element = document.getElementById(id_of_tag); 
 var rect = element.getBoundingClientRect();
 //console.log(rect.top, rect.right, rect.bottom, rect.left);
  
 clicked_tag = id_of_tag;

 if(type_of_tag == 'assign.png'){
    openAssignPopup();
 } 

 else if(type_of_tag == 'declare.png'){
    openDeclarePopup();
 }

 else if(type_of_tag == 'input.png'){
    openInputPopup();
}

 else if(type_of_tag == 'output.png'){
    openOutputPopup();
 }
 
 else if(type_of_tag == 'if.png'){
openifPopup()
 }

 else if(type_of_tag == 'for.png'){
 openforPopup();
 } 
     
}
/////////////////******* working */  //////////////////////////




































/////////////////////////////////////////////// c  code Generator //////////////////////////////////////////////////



var hm =  new Map();
// const fs =  require("fs");
//var unique_id = 0;
var data = "";
var javaCode = "";


//var t = getData(unique_ids_order);
//data =  data + t  ;
// fs.writeFileSync("c_code.txt", data);



// declare variable function
function declare(id,    variable_name, dtype){
    var content = "";
    if(dtype ==  "integer"){
        content = "int" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"int");
    }
    else if(dtype =="real"){
        content = "double" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"double");
    }
    else if(dtype == "String" ){
        content = "String" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"String");
    }
    else if(dtype == "boolean"){
        content = "bool" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"boolean");
    }

    hm.set(id,content);
}

// assignment function
function assign(id, variable_name, expression){
    var content =   variable_name + " = " + expression + ";";
    hm.set(id,content);
}

// output function
function output(id, exp){
 hm.set(id, "cout <<" + exp + " ;" );
}

//taking input from user
function input(id, variable_name){
    var d = "cin >> " + variable_name;
         hm.set(id,d);
}

// 
function array_declare(unique_id, array_name, size, dtype){
    var  d =  dtype  + " " +  array_name +  "[" + size + "]" + ";"  ;
   hm.set(unique_id,d);
}


//loops
function loops(id, i, start, end, direction,  step_by){
    let content = "";
    if(direction<0){
         content =  "for(int "  +  i + " = " + start +"; "  + i  + ">=" + end + "; " +  i + " = " +  i + "-" +  step_by + "){" 
    }
    else{
        content =  "for(int"  + " " + i + " = " + start +"; "  + i  + "<=" + end + "; " +  i + " = " +  i + "+" + step_by + "){"
    }
    hm.set(id, content);
}

function condition(id_if, id_else, exp){
  var data_if =   "if( " + exp + " ){" + "\n";
  var data_else =   "else{" + "\n";
  hm.set(id_if,data_if);
  hm.set(id_else,data_else);
}




var ans  = [];

function  display(){
    data = "#include <iostream>" + "\n"  +   "using namespace std;"+  "\n" + "int main(){" + "\n";
  let t =  filterData(unique_ids_order);
    data =  data + t;
    document.getElementById('cont').innerHTML = data;
    console.log(data);
    
}
function filterData(arr){
    let k = 0;
for(let i = 0;  i<arr.length-1;  i++){
    if(arr[i] != 1 && arr[i]<299){
        ans[k] =   arr[i];
        k++;
    }
}
let t = getData(ans);
return t;
}

function getData(sequence){
    var d =  ""; 
    for(let i = 0;  i<sequence.length; i++){
        var cont = sequence[i];
        cont = parseInt(cont);
        if(Array.isArray(cont) == true){
           d = d +   getData(cont);
        }
        else{
           d = d + hm.get(cont)  + "\n";
        }
    }
    d =  d + "}" + "\n";
    return d;
} 


///////////////////////////////////////// java code Generator ///////////////////////////////////

var hm_variable_name_data_type =  new Map();
var hm_java =  new Map();
function declareJava(id,  variable_name, dtype){
    var content = "";
    if(dtype ==  "integer"){
        content = "int" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"int");
    }
    else if(dtype =="real"){
        content = "double" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"double");
    }
    else if(dtype == "String" ){
        content = "String" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"String");
    }
    else if(dtype == "boolean"){
        content = "boolean" + " " + variable_name + " ; ";
        hm_variable_name_data_type.set(variable_name,"boolean");
    }


    hm_java.set(id,content);
}

// assignment function
function assignJava(id, variable_name, expression){
    var content =   variable_name + " = " + expression + ";";
    hm_java.set(id,content);
}

// output function
function outputJava(id, exp){
 hm_java.set(id, "System.out.println( " + exp + " );" );
}

//input
function inputJava(id, variable_name){
    var d = "";
    console.log("hello  everyone ");
    if(hm_variable_name_data_type.has(variable_name) == false){
        d =   variable_name + " = " + "sc.nextInt();";
        hm_java.set(id,d);

    }
    
else{
    let data_type = hm_variable_name_data_type.get(variable_name);
    if(data_type == "int"){

        d =   variable_name + " = " + "sc.nextInt();";
      
         }
         else if(data_type == "String"){
          d =   variable_name + " = " + "sc.nextLine();";
      
         }
        
         else if(data_type == "double"){
          d =  variable_name + " = " + "sc.nextDouble();";
         }
        
         
         else if(data_type == "boolean"){
          d =  variable_name + " = " + "sc.nextBoolean();";
          
         }

         hm_java.set(id,d);
}
    
        
         
        
}

function array_declareJava(unique_id, array_name, size, dtype){
    var  d =  dtype + "[] " + array_name +  " = " + "new " + dtype + "[" + size + "]"  ;
   hm_java.set(unique_id,d);
}


//loops
function loopsJava(id, i, start, end, direction,  step_by){
    let content = "";
    if(direction<0){
         content =  "for(int "  +  i + " = " + start +"; "  + i  + ">=" + end + "; " +  i + " = " +  i + "-" +  step_by + "){" 
    }
    else{
        content =  "for(int"  + " " + i + " = " + start +"; "  + i  + "<=" + end + "; " +  i + " = " +  i + "+" + step_by + "){"
    }
    hm_java.set(id, content);
}

function conditionJava(id_if, id_else, exp){
  var data_if =   "if( " + exp + " ){" + "\n";
  var data_else =   "else{" + "\n";
  hm_java.set(id_if,data_if);   
  hm_java.set(id_else,data_else);
}


/////////////////////////////////////////////////////// code putter end here////////

function displayJava(){

    javaCode ="import java.util.*;" + "\n" + "public class Main{" + "\n" + 
"public static void main(String[] args){"  +"\n" 
+ "Scanner sc = new(System.in);" + "\n";
let t =  filterDataForJava(unique_ids_order);
javaCode =  javaCode +  t;
document.getElementById('cont1').innerHTML = javaCode;
console.log(javaCode);
}

var new_arr = []
function filterDataForJava(arr){
    let k = 0;
for(let i = 0;  i<arr.length-1;  i++){
    if(arr[i] != 1 && arr[i]<299){
        new_arr[k] =   arr[i];
        k++;
    }
}
let t = getDataJava(new_arr);
return t;
}


function getDataJava(sequence){
  //  console.log();
    var d =  "";
    for(let i = 0;  i<sequence.length; i++){
        var cont = sequence[i];
        cont = parseInt(cont);
        if(Array.isArray(cont) == true){
            let dd = getDataJava(cont);
           d = d +   dd; 
          
        }
        else{
           d = d + hm_java.get(cont)  + "\n";
           console.log(hm);
        }
    }
    d =  d + "}" + "\n";
    return d;
} 






