

size=0;
var savedata=[];
var namesfilter=[];
var data = {
    name:'',
    age:0,
    skills:'',
    study:'',
    email:'',
    phonenumber:0,
    sex:"",
  
  
    setname: function(name) {
      this.name=name;
    },
    getname: function(){
      return name;
    },
    setage: function(age){
        this.age=age;
    },
    getage: function() {
     return age;
    },
    setskills: function(skills) {
      this.skills=skills;
    },
    getskills: function(){
      return skills;
    },
    setemail: function(email){
      this.email=email;
    },
    getemail: function() {
      return email;
    },
    setstudy: function(study){
      this.study=study;
    },
    getstudy: function(){
      return study;
    },
    getphone: function(){
      return phonenumber;
    },
    setphone: function(phonenumber){
      this.phonenumber=phonenumber;
    },
    getsex: function(){
        return sex;
      },
      setsex: function(sex){
        this.sex=sex;
      }
}
//insert new profile
function storeData(name,age,sex,email,phonenumber,skills,study){
    let clone = {};
    for (let key in data) {
      clone[key] = data[key];
      
    }
  
    clone.setname(name);
    clone.setage(age);
    clone.setsex(sex);
    clone.setemail(email);
    clone.setphone(phonenumber);
    clone.setskills(skills);
    clone.setstudy(study);
    
    
    


    savedata.push(clone);
    size=size+1;
     
  }
  //edit a profile
  function editdata(index,name,age,sex,email,phonenumber,skills,study){
    savedata[index].setname(name);
    savedata[index].setage(age);
    savedata[index].setsex(sex);
    savedata[index].setemail(email);
    savedata[index].setphone(phonenumber);
    savedata[index].setskills(skills);
    savedata[index].setstudy(study);
  }
//delete a profile
function deletdata(index){
  var items=savedata.splice(index,1);
  size=size-1;
  return items;
}

function search(age){

var si=0;
   savedata.find(function(element) {
  if (element.age = age){
  namesfilter[si]=element.name;
  console.log(namesfilter[si]);
  si=si+1;
  }
  return namesfilter;
  
});


}

//print all fprofiles in Console.....
  function print(){
    savedata.forEach(function(item, index) {
      console.log('['+(index+1)+'] '+item.name+' '+item.age+'  '+item.sex+'  '+item.email+'  '+item.phonenumber+'  '+item.skills+'  '+item.study);
    });

  }


module.exports={storeData,savedata,print,editdata,deletdata,search,namesfilter,size};

