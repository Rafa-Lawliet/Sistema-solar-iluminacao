import { SpaceObject } from "./SpaceObject";

export class SpacePosition extends SpaceObject{
    constructor(scale, dimension){
        super(scale, dimension)
        this.sun_positioner();
        this.mercury_positioner();
        this.venus_positioner();
        this.earth_positioner();
        this.moon_positioner();
        this.jupiter_positioner();
        this.saturn_positioner();
        this.saturn_ring_positioner();
        this.uranus_positioner();
        this.neptune_positioner();
        this.milk_way_positioner();
        this.supernova_positioner();
    }
    sun_positioner(x = 0, y = 0, z = 0){
        this.sun = super._get_sun();
        this.sun.position.set(x, y, z);
        /*
        if(this.sun.material.map){
            console.log('[SpacePosition] sun texture: ', this.sun.material.map);
        } else {
            console.log('Sun has no map');
        }*/
    }
    
    mercury_positioner(x = 0, y = 0, z = 13){
        this.mercury = super._get_mercury();

        this.mercury.position.set(x, y, z);
    }

    venus_positioner(x = 0, y = 0, z = 15){
        this.venus = super._get_venus();
        this.venus.position.set(x, y, z);
    }

    earth_positioner(x = 0, y = 0, z = 17){
        this.earth = super._get_earth();
        this.earth.position.set(x, y, z);

    }

    moon_positioner(x = 2, y = 0, z = 17){
        this.moon = super._get_moon();
        this.moon.position.set(x, y, z);
    }

    mars_positioner(x = 0, y = 0, z = 20){
        this.mars = super._get_mars();
        this.mars.position.set(x, y, z);
    }

    jupiter_positioner(x = 0, y = 0, z = 24){
        this.jupiter = super._get_jupiter();
        this.jupiter.position.set(x, y, z);
    }

    saturn_positioner(x = 0, y = 0, z = 28){
        this.saturn = super._get_saturn();
        this.saturn.position.set(x, y, z);
    }

    saturn_ring_positioner(x = 0, y = 0, z = 28, rotation_x = Math.PI / 2){ 
        this.saturn_ring = super._get_saturn_ring();
        this.saturn_ring.position.set(x, y, z);
        this.saturn_ring.rotation.x = rotation_x;
    }

    uranus_positioner(x = 0, y = 0, z = 31){
        this.uranus = super._get_uranus();
        this.uranus.position.set(x, y, z);
    }

    neptune_positioner(x = 0, y = 0, z = 34){
        this.neptune = super._get_neptune();
        this.neptune.position.set(x, y, z);
    }

    milk_way_positioner(x = 0, y = -10, z = 0, rotation_x = Math.PI / 2){
        this.milk_way = super._get_milk_way();
        this.milk_way.position.set(x, y, z);
        this.milk_way.rotation.x = rotation_x;
    }

    supernova_positioner(x = 13, y = 25, z = 5){
        this.supernova = super._get_supernova();
        this.supernova.position.set(x, y, z);
        console.log('Supernova position:', this.supernova.position);
    }

    star_positioner(x = 0, y = 15, z = 0, color){
        const star = SpaceObject._star_creator(color);
        star.position.set(x, y, z);
        return star;
    }
}