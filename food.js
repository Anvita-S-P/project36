class Food{
     
    constructor(foodStock,lastFed){
        var options ={

        }
        this.body=Matter.Bodies.rectangle(x,y,20,20,options);
          World.add(world,this.body);
         this.img=loadImage("images/Milk.png");

    }
    getFoodCount(){
        var countRef=database.ref("milkBottleCount");
        countRef.on("value",function(data){
         foodS=data.val();
         foodObj.foodStock = foodS;
        });
    }
    updateFoodCount(count){
          database.ref("/").update({
              milkBottleCount:count
          })
    }
    detuctFood(){
      var milkBottleIndex="milkBottles/milkBottle"+this.index
      database.ref("/").set({
          name:this.name,
          distance:this.distance

      })
    }
    display(){
        if(food=0){
            var pos=this.body.position;
     push ();
     imageMode(CENTER);
     
     image(this.img,pos.x,pos.y,20,20);
        }
        else{
              
        }
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10==0){
                    x=80;
                    y=y+50;

                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }


}