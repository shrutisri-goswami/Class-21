function bounceOff(p3,p4){
    if (p3.x - p4.x < p4.width/2 + p3.width/2
        && p4.x - p3.x < p4.width/2 + p3.width/2) {
      p3.velocityX = p3.velocityX * (-1);
      p4.velocityX = p4.velocityX * (-1);
    }
    if (p3.y - p4.y < p4.height/2 + p3.height/2
      && p4.y - p3.y < p4.height/2 + p3.height/2){
      p3.velocityY = p3.velocityY * (-1);
      p4.velocityY = p4.velocityY * (-1);
    }


}