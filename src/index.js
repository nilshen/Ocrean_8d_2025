
document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const arr = [];
    let hue = 0;

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // ctx.fillStyle = 'white';
        // ctx.fillRect(10, 10, 50, 50);
    });

    const mouse = {
        x: undefined,
        y: undefined,
    };

    canvas.addEventListener('click', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        // drawCircle();
        for (let i = 0; i < 10; i++) {
            arr.push(new Particle());
        }
    });

    canvas.addEventListener('mousemove', function () {
        mouse.x = event.x;
        mouse.y = event.y;
        // drawCircle();
        for (let i = 0; i < 10; i++) {
            arr.push(new Particle());
        }
    });

    function drawCircle() {
        ctx.fillStyle = 'blue';
        // ctx.strokeStyle = 'white'
        // ctx.lineWidth = 50;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
        ctx.fill();
        // ctx.stroke();
    }

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            // this.x = Math.random() * canvas.width;
            // this.y = Math.random() * canvas.height;
            this.size = Math.random() * 15 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = 'hsl(' + hue + ', 100%, 50%)';
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            // ctx.fillStyle = 'white';
            // ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
            ctx.fillStyle = this.color;
            // ctx.strokeStyle = 'white';
            // ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            // ctx.stroke();
        }
    }

    // function init() {
    //     for (let i = 0; i < 10; i++) {
    //         arr.push(new Particle());
    //     }
    // }
    // init();

    function handleParticles() {
        for (let i = 0; i < arr.length; i++) {
            arr[i].update();
            arr[i].draw();

            for (let j = i; j < arr.length; j++) {
                const dx = arr[i].x - arr[j].x;
                const dy = arr[i].y - arr[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = arr[i].color;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(arr[i].x, arr[i].y);
                    ctx.lineTo(arr[j].x, arr[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            if (arr[i].size <= 3) {
                arr.splice(i, 1);
                i--;
            }
        }
    }


    function animate() {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // drawCircle();
        // ctx.fillStyle = 'black'
        ctx.fillStyle = 'rgba(0,0,0,0.1';


        ctx.fillRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        hue += 2;
        requestAnimationFrame(animate);
    }
    animate();
});