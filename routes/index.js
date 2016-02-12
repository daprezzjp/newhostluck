
/*
 * GET home page.
 */

 exports.view = function(req, res){

   res.render('index', {
     'projects': [
       { 'name': 'Pot Pie',
         'image': 'http://goo.gl/1v48ya',
         'id': 'project1'
       },
       { 'name': 'Yogurt',
         'image': 'https://goo.gl/f2NsPU',
         'id': 'project2'
       },
       { 'name': 'Pop Corn',
         'image': 'https://goo.gl/TRa1HR',
         'id': 'project3'
       },
       { 'name': 'Sangria',
         'image': 'http://goo.gl/DZjkCg',
         'id': 'project4'
       },
       { 'name': 'Spaghetti',
         'image': 'http://goo.gl/7CtUHm',
         'id': 'project5'
       },
       { 'name': 'Sushi',
         'image': 'https://goo.gl/HK51RO',
         'id': 'project6'
       },
       { 'name': 'Hot Dogs',
         'image': 'http://goo.gl/bN2axu',
         'id': 'project7'
       },
       { 'name': 'Hamburgers',
         'image': 'http://goo.gl/GtuQ76',
         'id': 'project8'
       }
     ]
   }
 )
 };
