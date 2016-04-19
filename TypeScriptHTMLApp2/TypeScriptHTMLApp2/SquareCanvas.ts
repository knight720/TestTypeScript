class SquareCanvas {
    canvas: HTMLElement
    index: number = 123;

    constructor(canvas: HTMLElement) {
        this.canvas = canvas;
        //window.addEventListener("resize", this.onResize);
        //window.onresize = this.onResize;
    }

    onResize() {
        let length = Math.round(Math.min(window.innerWidth, window.innerHeight) * 0.9);
        console.log(this.index);
        this.canvas.style.width = length + "px";
        this.canvas.style.height = length + "px";
    }

}


