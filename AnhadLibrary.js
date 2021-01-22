//ALGO1: DETECTS IF 2 RECT ARE TOUCHING EACH OTHER
function anhad(obj1,obj2){
    if(obj1.x-obj2.x< obj1.width/2+ obj2.width/2 &&
      obj2.x-obj1.x<obj1.width/2+ obj2.width/2 &&
      obj1.y-obj2.y< obj1.height/2+ obj2.height/2 &&
    obj2.y-obj1.y<obj1.height/2+ obj2.height/2  ){
  
      //console.log(true);
      return true;
    }
  else{
    //console.log(false);
    return false;
  }
    
  }

  //ALGO2: BOUNCING OFF THE RECTS
function anhad2(o3,o4){
    if(o3.x-o4.x< o3.width/2+ o4.width/2 &&
      o4.x-o3.x<o3.width/2+ o4.width/2 ){
     o3.velocityX=(-1)* o3.velocityX;
     o4.velocityX=(-1)* o4.velocityX;
  }
  if(  o3.y-o4.y< o3.height/2+ o4.height/2 &&
    o4.y-o3.y<o3.height/2+ o4.height/2  ){
   o3.velocityY=(-1)* o3.velocityY;
   o4.velocityY=(-1)* o4.velocityY;
  }
  
  }