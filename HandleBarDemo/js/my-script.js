/**
 * Created by saan on 10/11/13.
 */


$(document).ready(function(){


var studentMethod = {

        handlerData:function(resJSON){

            var templateSource   = $("#student-template").html();

            var template = Handlebars.compile(templateSource);

            var studentHTML = template(resJSON);

           $('#my-container').html(studentHTML);


        },
        loadStudentData : function(){

            $.ajax({
                url:"data/studentData.json",
                method:'get',
                success:this.handlerData

            })
        }
};



    studentMethod.loadStudentData();
});