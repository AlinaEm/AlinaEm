var canvas = document.getElementById("stars");
var ctx = canvas.getContext("2d");

var Star= function(x,y,a,b,c,d) {
    this.x=x;
    this.y=y;
    this.a=a;
    this.b=b;
    this.c=c;
    this.d=d;
};


var a=46;
var b=50;
var c=91;
var d=62;

var k=1;
var l=1;


var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
gradient.addColorStop(0, "rgba(196, 247, 253, 0.5)");
gradient.addColorStop(1, 'blue');
  ctx.fillStyle=gradient;

ctx.lineWidth=0.4;
ctx.strokeStyle="PaleGoldenrod";
    

Star.prototype.draw = function() {


ctx.beginPath();
ctx.moveTo(this.x+this.a, this.y+this.b);
ctx.lineTo(this.x+this.c,this.y+this.d);
ctx.lineTo(this.x+this.a-1, this.y+this.d+28);
ctx.lineTo(this.x+this.c-18,this.y+this.d-32);
ctx.lineTo(this.x+this.c-14,this.y+this.d+48);
ctx.lineTo(this.x+this.a, this.y+this.b);


ctx.fill();
};




setInterval(function moveBigStars(){
    a++;
    if(a>48) {
        a=46;
   }
   c++;
   if(c>93){
       c=91;
   }    
}, 70);

setInterval(function moveSmallStars(){
    k++;
    if(k>3){
        k=1;
    };
    l++;
    if(l>5){
        l=1;
    }

}, 600);

function gr () {

    ctx.shadowBlur=15;
    ctx.shadowColor="Yellow";

    var coordinate;

    var offsetS = Math.random()*2-2;
    ctx.shadowBlur +=offsetS;

    coordinate +=offsetS;



    return ctx.shadowBlur;
};


var leftBigStar=new Star(200,200, a, b,c,d);


function blinks () {
    var leftBigStar=new Star(200,200, a, b,c,d);
    var rightBigStar=new Star(940, 200, a, b,c,d);
   
    ctx.clearRect(0,0,2000,2000);
   
    var firstStar = new SmallStars(this.k+190,this.l+200);
    var secondStar = new SmallStars(this.k+930,this.l+200);
    var thirdStar = new SmallStars(this.k+260,this.l+170);
    var fourthStar = new SmallStars(this.k+230,this.l+210);
    var fifthStar = new SmallStars(this.k+290,this.l+202);
    var sixStar = new SmallStars(this.k+360,this.l+222);
    var sevenStar = new SmallStars(this.k+315,this.l+248);
    var eightStar = new SmallStars(this.k+300,this.l+278);
    var nineStar = new SmallStars(this.k+355,this.l+270);
    var tenStar = new SmallStars(this.k+327,this.l+320);
    var elevenStar = new SmallStars(this.k+284,this.l+327);
    var twelveStar = new SmallStars(this.k+245,this.l+350);
    var thirteenStar = new SmallStars(this.k+232,this.l+311);
    var fourteenStar = new SmallStars(this.k+200,this.l+319);
    var fifteenStar = new SmallStars(this.k+207,this.l+230);
    var sixteenStar = new SmallStars(this.k+214,this.l+270);
    var seventeenStar = new SmallStars(this.k+185,this.l+255);
    var eighteenStar = new SmallStars(this.k+965,this.l+223);
    var nineteenStar = new SmallStars(this.k+974,this.l+182);
    var twentyStar = new SmallStars(this.k+1011,this.l+197);
    var twentyOneStar = new SmallStars(this.k+1032,this.l+185);
    var twentyTwoStar = new SmallStars(this.k+1029,this.l+225);
    var twentyThreeStar = new SmallStars(this.k+1042,this.l+205);
    var twentyFourStar = new SmallStars(this.k+1080,this.l+212);
    var twentyFiveStar = new SmallStars(this.k+1072,this.l+248);
    var twentySixStar = new SmallStars(this.k+1042,this.l+254);
    var twentySevenStar = new SmallStars(this.k+1055,this.l+280);
    var twentyEightStar = new SmallStars(this.k+1090,this.l+303);
    var twentyNineStar = new SmallStars(this.k+1020,this.l+320);
    var thirtyStar = new SmallStars(this.k+1000,this.l+350);
    var thirtyOneStar = new SmallStars(this.k+985,this.l+310);
    var thirtyTwoStar = new SmallStars(this.k+950,this.l+330);
    var thirtyThreeStar = new SmallStars(this.k+945,this.l+290);
    var thirtyFourStar = new SmallStars(this.k+920, this.l+260);




    rightBigStar.draw();
    leftBigStar.draw();
    firstStar.draw();
    secondStar.draw();
    thirdStar.draw();
    fourthStar.draw();
    fifthStar.draw();
    sixStar.draw();
    sevenStar.draw();
    eightStar.draw();
    nineStar.draw();
    tenStar.draw();
    elevenStar.draw();
    twelveStar.draw();
    thirteenStar.draw();
    fourteenStar.draw();
    fifteenStar.draw();
    sixteenStar.draw();
    seventeenStar.draw();
    eighteenStar.draw();
    nineteenStar.draw();
    twentyStar.draw();
    twentyOneStar.draw();
    twentyTwoStar.draw();
    twentyThreeStar.draw();
    twentyFourStar.draw();
    twentyFiveStar.draw();
    twentySixStar.draw();
    twentySevenStar.draw();
    twentyEightStar.draw();
    twentyNineStar.draw();
    thirtyStar.draw();
    thirtyOneStar.draw();
    thirtyTwoStar.draw();
    thirtyThreeStar.draw();  
    thirtyFourStar.draw();  

    
    };
    
setInterval (blinks, 40);

setInterval(gr, 50);

    /* m and n are coordinates for small stars */
var SmallStars = function (m,n) {
    this.m=m;
    this.n=n;
    this.k=k;
    this.l=l;
};

SmallStars.prototype.draw=function() {

    ctx.beginPath();
    ctx.moveTo(this.m-1, this.n);
    ctx.lineTo(this.m+7, this.n+6);
    ctx.lineTo(this.m-1, this.n+10);
    ctx.lineTo(this.m+4, this.n-2);
    ctx.lineTo(this.m+4, this.n+12);
    ctx.lineTo(this.m-1, this.n);
    ctx.fill();
    ctx.stroke();
};

