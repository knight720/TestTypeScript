class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

class SquareCanvas {
    canvas: HTMLElement;
    value: number;

    constructor(canvas: HTMLElement) {
        this.canvas = canvas;
        //window.addEventListener("resize", this.onResize);
        //window.onresize = this.onResize;
    }

    onResize() {
        let length = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.9);
        console.log(this.value);
        this.canvas.style.width = length + "px";
        this.canvas.style.height = length + "px";
    }

}

var sc;

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();

    var canvas = document.getElementById('canv');
    //var sc = new SquareCanvas(canvas);
    sc = new SquareCanvas(canvas);
    //sc.onResize();
    window.onresize = sc.onResize;
    
};