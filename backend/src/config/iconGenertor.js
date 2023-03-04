var icons = require("user-icon-generator");

const iconGenertor = async(name)=>{
    let userIcon = await icons(name,"black").then((icon)=>
 {
   if(!icon.error)
   {
       let image=icon.file;
       console.log(image);
       return image;
   }
   else
   {
       console.log(icon.error);
   }   
})
 return userIcon;
}

module.exports = iconGenertor;