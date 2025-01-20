import * as THREE from 'three';
import { TextureLoader } from 'three';

export class SpaceObject {
    //distancias
    static neptune_distance = 4498396441; // 4.498.396.441 
    static saturn_ring_real_width = 400000 // 400.000

    
    //raios
    static sun_real_radius = 696340; // 696.340
    static mercury_real_radius = 2439.7; //2.439,7
    static venus_real_radius = 6051.8; // 6.051,8
    static earth_real_radius = 6378; // 6.378
    static moon_real_radius = 1737.4; // 1.737,4
    static mars_real_radius = 3389.5; // 3.389,5
    static jupiter_real_radius = 69911; // 69.911
    static saturn_real_radius = 58232; // 58.232 
    static uranus_real_radius = 25362; // 25.362
    static neptune_real_radius = 24622; // 24.622
    
    static saturn_ring_real_distance_saturn = 7000 /* 7.000 */ + SpaceObject.saturn_real_radius;
    static total_distance = SpaceObject.sun_real_radius + SpaceObject.neptune_distance + SpaceObject.neptune_real_radius * 2;

    //prepara as texturas
    /*
        texture_milk_way = this.textureLoader.load("../Textures/milk_way_texture.jpg");
        texture_sun = this.textureLoader.load("../Textures/Sun_texture.jpg");
        texture_moon = this.textureLoader.load("../Textures/Moon_texture.jpg");
        texture_earth = this.textureLoader.load("../Textures/Earth_texture.jpg");
        texture_mars = this.textureLoader.load("../Textures/Mars_texture.jpg");
        texture_uranus = this.textureLoader.load("../Textures/Uranus_texture.jpg");
        texture_supernova = this.textureLoader.load("../Textures/Supernova_texture.jpg");
        texture_ocean = this.textureLoader.load("../Textures/Ocean_texture.jpg");
        texture_venus = this.textureLoader.load("../Textures/Venus_texture.jpg");
        */


    constructor(scale = 60000, dimension = 150){
        this.scale = scale;
        this.textureLoader = new TextureLoader();
        this.sun = this.#sun_creator();
        this.mercury= this.#mercury_creator();
        this.venus = this.#venus_creator();
        this.earth = this.#earth_creator();
        this.moon = this.#moon_creator();
        this.mars = this.#mars_creator();
        this.jupiter = this.#jupiter_creator();
        this.saturn = this.#saturn_creator();
        this.saturn_ring = this.#saturn_ring_creator();
        this.uranus = this.#uranus_creator();
        this.neptune = this.#neptune_creator();
        this.milk_way = this.#milk_way_creator(dimension);
        this.supernova = this.#supernova_creator();

    }

    #sphere_radius(radius){
        const proportional_radius = (radius / SpaceObject.total_distance) * this.scale;// regra de 3 para reduzir os raios a uma escala de 100
        return proportional_radius;
    }

    //-----------------------------------------------------------------
    #sun_creator(){
        const sun_proportional_radius = this.#sphere_radius(SpaceObject.sun_real_radius);
        const geometry_sun = new THREE.SphereGeometry(
            sun_proportional_radius, 
            32, 32);

        const texture_sun = this.textureLoader.load(
            "./Textures/Sun_texture.jpg",
            /*(texture) => {
                console.log('[SpaceObject] sun texture: ', texture);
            },
            undefined,
            (error) => {
                console.error('Error loading texture: ', error);
            }*/

        );

        const material_sun = new THREE.MeshBasicMaterial({map : texture_sun });

        return new THREE.Mesh(geometry_sun, material_sun);
    }

    #mercury_creator(){
        const mercury_proportional_radius = this.#sphere_radius( SpaceObject.mercury_real_radius);
        const geometry_mercury = new THREE.SphereGeometry(
            mercury_proportional_radius, 
            32, 32);

            const texture_mercury = this.textureLoader.load("./Textures/Mercury_texture.jpg");
        
        const material_mercury = new THREE.MeshPhongMaterial({map : texture_mercury });

        return new THREE.Mesh(geometry_mercury, material_mercury);


    }

    #venus_creator(){
        const venus_proportional_radius = this.#sphere_radius( SpaceObject.venus_real_radius);
        //console.log('venus_proportional_radius: ', venus_proportional_radius);
        const geometry_venus = new THREE.SphereGeometry(
            venus_proportional_radius, 
            32, 32);

        const texture_venus = this.textureLoader.load("./Textures/Venus_texture.jpg");            

        const material_venus = new THREE.MeshPhongMaterial({map : texture_venus});

        return new THREE.Mesh(geometry_venus, material_venus);

    }

    #earth_creator(){
        const earth_proportional_radius = this.#sphere_radius( SpaceObject.earth_real_radius);
        const geometry_earth = new THREE.SphereGeometry(
            earth_proportional_radius, 
            32, 32);
        //console.log('earth_proportional_radius: ', earth_proportional_radius);
        const texture_earth = this.textureLoader.load("./Textures/Earth_texture.jpg");

        const material_earth = new THREE.MeshPhysicalMaterial({map : texture_earth});
        
        return new THREE.Mesh(geometry_earth, material_earth);

    }

    #moon_creator(){
        const moon_proportional_radius = this.#sphere_radius( SpaceObject.moon_real_radius);
        const geometry_moon = new THREE.SphereGeometry(
            moon_proportional_radius, 
            32, 32);
        //console.log('moon_proportional_radius: ', moon_proportional_radius);
        const texture_moon = this.textureLoader.load("./Textures/Moon_texture.jpg");
        
        const material_moon = new THREE.MeshPhongMaterial({map : texture_moon});

        return new THREE.Mesh(geometry_moon, material_moon);

    }

    #mars_creator(){
        const mars_proportional_radius = this.#sphere_radius( SpaceObject.mars_real_radius);
        const geometry_mars = new THREE.SphereGeometry(
            mars_proportional_radius, 
            32, 32);
        //console.log('mars_proportional_radius: ', mars_proportional_radius);
        const texture_mars = this.textureLoader.load("./Textures/Mars_texture.jpg");

        const material_mars = new THREE.MeshPhongMaterial({map : texture_mars});

        return new THREE.Mesh(geometry_mars, material_mars);

    }

    #jupiter_creator(){
        const jupiter_proportional_radius = this.#sphere_radius( SpaceObject.jupiter_real_radius);
        const geometry_jupiter = new THREE.SphereGeometry(
            jupiter_proportional_radius, 
            32, 32);
        //console.log('jupiter_proportional_radius: ', jupiter_proportional_radius);
        const texture_jupiter = this.textureLoader.load("./Textures/Jupiter_texture.jpg");

        const material_jupiter = new THREE.MeshLambertMaterial({map : texture_jupiter});
        
        return new THREE.Mesh(geometry_jupiter, material_jupiter);

    }

    #saturn_creator(){
        const saturn_proportional_radius = this.#sphere_radius(SpaceObject.saturn_real_radius);
        const geometry_saturn = new THREE.SphereGeometry(
            saturn_proportional_radius, 
            32, 32);

        const texture_saturn = this.textureLoader.load("./Textures/Saturn_texture.jpg");

        const material_saturn = new THREE.MeshPhysicalMaterial({map : texture_saturn});
        
        return new THREE.Mesh(geometry_saturn, material_saturn);

    }

    #saturn_ring_creator(){
        const saturn_ring_width_proportional_radius = this.#sphere_radius( SpaceObject.saturn_ring_real_width);
        const saturn_ring_distance_saturn_proportional_radius = this.#sphere_radius( SpaceObject.saturn_ring_real_distance_saturn);
        const geometry_saturn_ring = new THREE.TorusGeometry(
            /*saturn_ring_distance_saturn_proportional_radius*/ 1.3,
            /*saturn_ring_width_proportional_radius*/ 0.4,
            2, 32);

        const texture_saturn_ring = this.textureLoader.load("./Textures/Saturn_ring_texture.jpg");
        //console.log('[SpaceObject] saturn_ring texture: ', texture_saturn_ring);
        const material_saturn_ring = new THREE.MeshLambertMaterial({map : texture_saturn_ring});

        return new THREE.Mesh(geometry_saturn_ring, material_saturn_ring);

    }

    #uranus_creator(){
        const uranus_proportional_radius = this.#sphere_radius( SpaceObject.uranus_real_radius);
        const geometry_uranus = new THREE.SphereGeometry(
            uranus_proportional_radius, 
            32, 32);

        const texture_uranus = this.textureLoader.load("./Textures/Uranus_texture.jpg");

        const material_uranus = new THREE.MeshLambertMaterial({map : texture_uranus});
        
        return new THREE.Mesh(geometry_uranus, material_uranus);

    }

    #neptune_creator(){
        const neptune_proportional_radius = this.#sphere_radius( SpaceObject.neptune_real_radius);
        const geometry_neptune = new THREE.SphereGeometry(
            neptune_proportional_radius, 
            32, 32);

        const texture_neptune = this.textureLoader.load("./Textures/Neptune_texture.jpg");

        const material_neptune = new THREE.MeshLambertMaterial({map : texture_neptune});
        return new THREE.Mesh(geometry_neptune, material_neptune);

    }
    #milk_way_creator(dimensao){
        const geometry_milk_way = new THREE.PlaneGeometry(dimensao, dimensao);

        const texture_milk_way = this.textureLoader.load("./Textures/Milk_way_texture2.jpg");
        // const texture_milk_way = this.textureLoader.load("./Textures/Milk_way_texture.jpg");
        // const texture_milk_way = this.textureLoader.load("./Textures/Interstellar_texture.jpg");
        // const texture_milk_way = this.textureLoader.load("./Textures/Galaxy_texture.jpg");
        // const texture_milk_way = this.textureLoader.load("./Textures/Test_texture.jpg");

        const material_milk_way = new THREE.MeshBasicMaterial({
            map : texture_milk_way, 
            side : THREE.DoubleSide
        });

        return new THREE.Mesh(geometry_milk_way, material_milk_way);

    }

    #supernova_creator(){
        const geometry_supernova = new THREE.SphereGeometry(2, 32, 32);

        const texture_supernova = this.textureLoader.load("./Textures/Supernova_texture.jpg");

        const material_supernova = new THREE.MeshBasicMaterial({map : texture_supernova});


        return new THREE.Mesh(geometry_supernova, material_supernova);

    }
    
    _star_creator(color){
        const geometry_star = new THREE.SphereGeometry(0.1, 32, 32);


        const material_star = new THREE.MeshBasicMaterial({ color: color });

        return new THREE.Mesh(geometry_star, material_star);

    }

    _get_sun(){
        return this.sun;
    }
    _get_mercury(){
        return this.mercury;
    }
    _get_venus(){
        return this.venus;
    }
    _get_earth(){
        return this.earth;
    }
    _get_moon(){
        return this.moon;
    }
    _get_mars(){
        return this.mars;
    }
    _get_jupiter(){
        return this.jupiter;
    }
    _get_saturn(){
        return this.saturn;
    }
    _get_saturn_ring(){
        return this.saturn_ring;
    }
    _get_uranus(){
        return this.uranus;
    }
    _get_neptune(){
        return this.neptune;
    }
    _get_milk_way(){
        return this.milk_way;
    }
    _get_supernova(){
        return this.supernova;
    }

}