class Show{
    constructor(){
      this.pictures = [];
      this.pictures[0] = "shop11.jpg";
      this.pictures[1] = "shop15.jpg";
      this.pictures[2] = "shop14.jpg";
      this.item=0;
      this.moveShow();
      setInterval(()=>{
        this.moveShow();
      },3000);
    }
    moveShow(){
      if(this.item<this.pictures.length-1){
         this.item++;
      }else{
         this.item=0;
      }
      document.show.src=this.pictures[this.item];
    }
  }
  onload = new Show();