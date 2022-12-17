/*Patron a):

*
**
***
****
*****
******
*******
*********
**********
***********

*/
document.write("A)" + "<br>")

for(let i = 1; i <= 10; ++i) {

    for(let x = 1; x <= i; ++x)document.write("*");

    document.write("<br>")
}       

/*Patron b):

**********
*********
********
*******
******
*****
****
***
**
*

*/
document.write("<br>" + "B)" + "<br>")

    for(let i = -1; i < 10; i++) {
    
        for(let x = 1; x < 10 - i; x++)document.write("*");

        document.write("<br>")
    }
    
/*Patron c):

***********
 **********
  *********
   ********
    *******
     ******
      *****
       ****
        ***
         **
          *

*/
    document.write("<br>" + "C)" + "<br>")
        
    for (let i = -1; i < 10; i++) {

        for (let j = 0; j < i + 1; j++)document.write("&nbsp&nbsp");
            
        for (let j = 1; j < 10 - i; j++) document.write("*");
    
        document.write("<br>"); 
      }

/*Patron d):

          *
         **
        ***
       ****
      *****
    *******
   ********
 **********
***********

*/
    document.write("<br>" + "D)" + "<br>")

    for (let i = 0; i < 10; i++) {
            
        for (let j = 1; j < 10 - i; j++) document.write("&nbsp&nbsp");
          
        for (let j = 0; j < i + 1; j++) document.write("*");
              
        document.write("<br>");          
     }