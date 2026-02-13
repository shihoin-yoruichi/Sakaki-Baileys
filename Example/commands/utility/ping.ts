export default {

   data: 
   {
     name: '',
     description: ''
   },


   async execute ( sock )
   {
     await sock.sendMessage();
   },



} 

