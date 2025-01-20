import * as THREE from 'three';

export class Light{
    constructor(){
    }

    ambient_light({color = 0x404040, intensity = 1} = {}){
        return new THREE.AmbientLight(color, intensity);
    }

    directional_light({color = 0xffffff, intensity = 0.5, x, y, z} = {}){
        let sun_light = new THREE.DirectionalLight(color, intensity);
        sun_light.target.position.set(x, y, z);
        return sun_light;
    }

    spot_light({color = 0xffffff,  
        position = [13, 25, 5], 
        rotation = [-Math.PI / 2, 0, 0],

        /*, helper = false*/} = {}){
        let spot_light = new THREE.SpotLight(color);
        spot_light.position.set(position[0], position[1], position[2]);
        //console.log('Spot light position:', spot_light.position);
        spot_light.rotation.set(rotation[0], rotation[1], rotation[2]);
        
        spot_light.castShadow = true;
        /*
        if(helper){
            const spot_light_helper = new THREE.SpotLightHelper(spot_light);
            //console.log('Spot light helper:', spot_light_helper);
            spot_light.add(spot_light_helper);
        }   */
        return spot_light;
    }

    point_light({color = 0xffffff, intensity = 1,  x = 0, y = 0, z = 20, distance = 0, helper = false} = {}){
        let point_light = new THREE.PointLight(color, intensity, distance);
        point_light.position.set(x, y, z);
        point_light.castShadow = true;

        if(helper){
            const point_light_helper = new THREE.PointLightHelper(point_light);
            point_light.add(point_light_helper);   
        }
        return point_light;
    }
}