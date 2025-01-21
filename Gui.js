import * as dat from 'dat.gui';

export class Gui {
    constructor() {
        this.gui = new dat.GUI();
        this._params_creator();
        this._ambientLight_controls();
        this.sunLight_controls();   
        this._spotLight_controls();
        this._red_star_controls();
        this._green_star_controls();
        this._blue_star_controls();
    }

    _params_creator(){
        this.params = {
            ambientLight : {
                show : true,
                intensity : 0.5,
                color : 0x404040
            },
            sunLight : {
                show : true,
                intensity : 0.5,
                color : 0xffffff,
            },
            spotLight : {
                show : true,
                intensity : 0.5,
                color : 0xffffff,
            },
            red_star : {
                show : true,
                intensity : 10,
                color : 0xff0000,
                x : 0,
                y : 5,
                z : 18,
            },
            green_star : {
                show : true,
                intensity : 10,
                color : 0x00ff00,
                x : 15,
                y : 5,
                z : -5,
            },
            blue_star : {
                show : true,
                intensity : 10,
                color : 0x0000ff,
                x : -35,
                y : 5,
                z : -15,
            },
        }
    }
    _ambientLight_controls(){
        let ambient_light = this.gui.addFolder('Ambient Light');
        ambient_light.add(this.params.ambientLight, 'show', 'Show Ambient Light');
        ambient_light.add(this.params.ambientLight, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        ambient_light.addColor(this.params.ambientLight, 'color', 'Color');
        //ambient_light.open();
    }
    sunLight_controls(){
        let sun_light = this.gui.addFolder('Sun Light');
        sun_light.add(this.params.sunLight, 'show', 'Show Sun Light');
        sun_light.add(this.params.sunLight, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        sun_light.addColor(this.params.sunLight, 'color', 'Color');
        //sun_light.open();
    }
    _spotLight_controls(){
        let spot_light = this.gui.addFolder('Spot Light');
        spot_light.add(this.params.spotLight, 'show', 'Show Spot Light');
        spot_light.add(this.params.spotLight, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        //spot_light.addColor(this.params.spotLight, 'color', 'Color');
    }
    _red_star_controls(){
        let red_star = this.gui.addFolder('Red Star');
        red_star.add(this.params.red_star, 'show', 'Show Red Star');
        red_star.add(this.params.red_star, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        red_star.addColor(this.params.red_star, 'color', 'Color');
        red_star.add(this.params.red_star, 'x').min(-50).max(50).step(1).name('X');
        red_star.add(this.params.red_star, 'y').min(-50).max(50).step(1).name('Y');
        red_star.add(this.params.red_star, 'z').min(-50).max(50).step(1).name('Z');
        //red_star.open(); 
    }
    _green_star_controls(){
        let green_star = this.gui.addFolder('Green Star');
        green_star.add(this.params.green_star, 'show', 'Show Green Star');
        green_star.add(this.params.green_star, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        green_star.addColor(this.params.green_star, 'color', 'Color');
        green_star.add(this.params.green_star, 'x').min(-50).max(50).step(1).name('X');
        green_star.add(this.params.green_star, 'y').min(-50).max(50).step(1).name('Y');
        green_star.add(this.params.green_star, 'z').min(-50).max(50).step(1).name('Z');
        //green_star.open();
    }
    _blue_star_controls(){
        let blue_star = this.gui.addFolder('Blue Star');
        blue_star.add(this.params.blue_star, 'show', 'Show Blue Star');
        blue_star.add(this.params.blue_star, 'intensity').min(0).max(1).step(0.1).name('Intensity');
        blue_star.addColor(this.params.blue_star, 'color', 'Color');
        blue_star.add(this.params.blue_star, 'x').min(-50).max(50).step(1).name('X');
        blue_star.add(this.params.blue_star, 'y').min(-50).max(50).step(1).name('Y');
        blue_star.add(this.params.blue_star, 'z').min(-50).max(50).step(1).name('Z');
        //blue_star.open();
    }
    
}
