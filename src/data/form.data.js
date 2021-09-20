
const FormData = 
    {
        topic : {
            header :'SHSN Awards voting.' ,
            description:'You have nominated and these top nominees for each category.Now you must vote the ONE who goes home with the award... You only get one vote, make it count!' ,
            auth_mail : 'shotbymustapha@gmail.com',
        },
        fields: [
            {
                id : 0 ,
                name : 'Email',
                required : 'yes' ,
                checkbox : {required : 'no' , options : []}
            },
            {
                id : 1 ,
                name : 'Exco of the year.' ,
                required : 'no' ,
                checkbox : {required : 'yes' , options : ['ilegbusi Kehinde Benson' , `Olusegun Samuel 'Dre'` , `Olarinjoye Olayinka "Epiphany"`]}
            },
            {
                id : 2 ,
                name: 'Fresher of the year male.',
                required: 'no' ,
                checkbox : {required : 'yes' , options : ['Andrew' , 'Remilekun' , 'Olumide', 'Joseph' ,'Otunba']}
            },
            {
                id : 3 ,
                name : 'Fresher of the year female.',
                required : "no",
                checkbox: {required:'yes' , options : ['Animashaun Morolake' , 'Adesola Adebote', 'Doyin' , 'Christiana' , 'Juana']}

            },
            {
                id : 4 ,
                name: 'Sportsperson of the year 100 level male.',
                required : 'no',
                checkbox: {required:'yes' , options : ['Olumide' , 'Tunde' ,'Remy' , 'Lezzy' , 'Waji' , 'Idris Adelotun']}
            },
            {   
                id : 5 ,
                name: 'Sportsperson of the year 100 level female.',
                required : 'no',
                checkbox: {required:'yes' , options : ['Bamila' , 'Dickson Damilare' ,'Adonis' , 'Hendricks' , 'Tobi' , 'Jayson' , 'Sam Payne']}
        },
            
        ]
      

    };

export default FormData; 
