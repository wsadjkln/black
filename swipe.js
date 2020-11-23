do{
       x1 = random(500,600);
        x2 = random(500,600);
        y1 = random(1400,1500);
        y2 = random(200,300);
        z = random(1500,1600);
        time = random(1000,3000);
        ud = random(1,8) 
        log(ud)
        if(ud>4){
        swipe(x1,y1,x2,y2,z);}
        else{
        swipe(x1,y2,x2,y1,z);}    
        sleep(time);
    }while(true)