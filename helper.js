'use strict'

exports.distincData = function (valueArray) { 
    var result = [];
    var currentNim;
    valueArray.forEach(element => {
      if(currentNim != element.nim){
        result.push({
            "id_mahasiswa" : element.id_mahasiswa,
            "nim" : element.nim,
            "faculty" : element.faculty,
            "name_course" : [],
            "credit_course" : element.credit_course,
        });
      }
      currentNim = element.nim;
    });
    return result;
 }