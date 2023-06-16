class Overworld {

    constructor (config){
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");

    }

    init() {

        const img = new Image();
        img.onload = () => {
            this.ctx.drawImage(img, 0, 0) 
        };
        img.src = 'assets/images/maps/DemoLower.png';
        
        const x = 0;
        const y = 0;
        const hero  = new Image();
        hero.onload = () => {
        this.ctx.drawImage(hero, 0, 0, 32, 32, x, y,) 
        };
        hero.src = 'assets/images/characters/people/hero.png';
    }

}