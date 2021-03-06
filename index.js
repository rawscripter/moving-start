// create a canvas element and set background color white
var canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


// create a circle 
var circle = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 2,
    color: "white",
    draw: function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    },
    move: function () {
        this.y += Math.random() * .5;
        this.x += Math.random() * .5;
    },

    reset: function () {
        this.x = canvas.width / .5;
        this.y = canvas.height / .5;
        this.radius = 10;
    },

    changeColor: function () {
        this.color = "rgba(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.random() * 1 + ")";
    }
    ,


};


let particles = [];
function animate() {
    requestAnimationFrame(animate);
    // setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(function (particle) {
        particle.move();
        particle.changeColor();
        particle.draw();
    });



    // }, 100);

}


// on load of window draw a circle
window.addEventListener("load", function () {
    setInterval(() => {
        for (let i = 0; i < Math.random() * 10; i++) {
            let newCircle = Object.create(circle);
            let randomX = Math.random() * canvas.width;
            let randomY = Math.random() * canvas.height;
            newCircle.x = randomX;
            newCircle.y = randomY;
            newCircle.radius = Math.random() * 5;
            particles.push(newCircle);
        }
    }, 500);

    animate();
});