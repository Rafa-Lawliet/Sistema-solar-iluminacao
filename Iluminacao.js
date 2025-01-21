import * as THREE from 'three';
//import { TrackballControls } from 'three/examples/jsm/Addons.js';
import { SpacePosition } from './SpacePosition.js';
import { Light } from './Light.js';
import { Gui } from './Gui.js';

            // Cria a cena Three.js

            var scene = new THREE.Scene();

            // Cria a câmera Three.js com visão perspectiva

            var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

            // Cria o renderizador Three.js com suporte a WebGL

            let renderer = new THREE.WebGLRenderer();

            // Define o tamanho do renderizador para o tamanho da janela do navegador

            renderer.setSize(window.innerWidth, window.innerHeight);

            // Adiciona o elemento DOM do renderizador à página HTML

            document.body.appendChild(renderer.domElement);

            scene.background = new THREE.Color(0xffffff);


            // camera
            camera.position.y = 45;
            camera.rotation.x = - Math.PI / 2;
            

/*
            let trackball_controls = new TrackballControls(camera, renderer.domElement);
            trackball_controls.target.set(0, 0, 0);  
            // Configura os botões do mouse
            trackball_controls.mouseButtons = {
                LEFT: THREE.MOUSE.ROTATE,
                MIDDLE: THREE.MOUSE.ZOOM,
                RIGHT: THREE.MOUSE.PAN
            };
    */        
            //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
            /*
            // distancias reais
            const mercury_distance = 57909227; // 57.909.227 
            const venus_distance = 108209475; // 108.209.475
            const earth_distance = 149600000; // 149.600.000
            const moon_distance_earth = 384400; // 384.400
            const mars_distance = 227940000; // 227.940.000
            const jupiter_distance = 778340821; // 778.340.821
            const saturn_distance = 1426666422; // 1.426.666.422
            const saturn_ring_real_width = 400000 // 400.000
            const uranus_distance = 2870658186; // 2.870.658.186
            const neptune_distance = 4498396441; // 4.498.396.441 
            */
            //------------------------------------------------------------------------------
            // posicionamento
            const obj_creator = new SpacePosition();
            //console.log('[Main - iluminacao] sun texture:', creator.sun.material.map);
            // Adiciona o objeto mesh à cena Three.js
            scene.add(obj_creator.milk_way);
            scene.add(obj_creator.sun);
            scene.add(obj_creator.mercury)
            scene.add(obj_creator.venus);
            scene.add(obj_creator.earth);
            scene.add(obj_creator.moon);
            scene.add(obj_creator.mars);
            scene.add(obj_creator.jupiter);
            scene.add(obj_creator.saturn);
            scene.add(obj_creator.saturn_ring);
            scene.add(obj_creator.uranus);
            scene.add(obj_creator.neptune);
            scene.add(obj_creator.supernova);
           
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
           
            let i = 0;
            let vector_stars = [];
            // Adicinando as luzes
            function star_generator({color, x, y, z, helper}){
                //console.log('[Main - iluminacao] i:', i);
                //console.log('[Main - iluminacao] color:', color);  
                let star = obj_creator.star_positioner({color : color, x : x, y : y, z : z});
                vector_stars[i] = star;
                scene.add(vector_stars[i]);
                //console.log('[Main - iluminacao] star:', star);
                const light = new Light();
                let star_point_light = light.point_light({color : color, x : x, y : y, z : z, helper : helper});
                scene.add(star_point_light);
                
                if(helper){
                    const star_point_light_helper = new THREE.PointLightHelper(star_point_light, 1);
                    scene.add(star_point_light_helper);
                }
                i++;
            }
            star_generator({color: 0xff0000, x: 0, y: 5, z: 18, helper: true});
            star_generator({color: 0x00ff00, x: 15, y: 5, z: -5, helper: true});
            star_generator({color: 0x0000ff, x: -35, y: 5, z: -15, helper: true});

            let light = new Light();
            let ambient_light = light.ambient_light();
            scene.add(ambient_light);

            let sun_light = light.directional_light();
            scene.add(sun_light);

            /*          // faz a luz do sol sumir
            scene.add(sun_light.target);
            let sun_light_helper = new THREE.DirectionalLightHelper(sun_light, 30, 0xffff00);
            scene.add(sun_light_helper); */
            
           //console.log('[Main - iluminacao] sun light:', sun_light);

            let supernova_light = light.spot_light(/*{helper : true}*/);
            scene.add(supernova_light);

            const spot_light_helper = new THREE.SpotLightHelper(supernova_light);
            scene.add(spot_light_helper);

            
            //console.log('[Main - iluminacao] ambient light:', light.ambient_light);
            //console.log('[Main - iluminacao] sun light:', light.directional_light);
            //console.log('[Main - iluminacao] supernova light:', light.spot_light);
            
            //...............................................................................
            
            // interface
            let gui = new Gui();
            let objAmbientLight = ambient_light
            console.log('[Main - iluminacao] objAmbientLight:', objAmbientLight);
            console.log('[Main - iluminacao] ambient light:', light.ambient_light);
            let objSunLight = sun_light
            let objSpotLight = supernova_light
            let objRedStar = vector_stars[0];
            console.log('[Main - iluminacao] red-color:', vector_stars[0]);
            let objGreenStar = vector_stars[1];
            let objBlueStar = vector_stars[2];
            /*
            // Plota os eixos
            const axesHelper = new THREE.AxesHelper(5);
            scene.add(axesHelper);
            */
            // Define o loop de animação Three.js

            const center = new THREE.Vector3(0, 0, 0);

            // tempo para uma rotação(horas)
            const year_in_hours = 8766; // 365 dias
            const sun_rotation_time = 648; // 27 dias (média: 24 dias no equador e 30 nos polos)
            const mercury_rotation_time = 1407.6; // 58 dias e 15 horas
            const venus_rotation_time = 5832; // 243 dias e 5 horas
            const earth_rotation_time = 24;  
            const moon_rotation_time = 655; // 27 dias e 7 horas
            const mars_rotation_time = 24;
            const jupiter_rotation_time = 10; // 9 horas e 50 minutos
            const saturn_rotation_time  = 11  
            const uranus_rotation_time = 17;
            const neptune_rotation_time = 16; // 16 horas e 6 minutos

            const moon_position_earth = 2;

            // tempo para uma translação (horas)
            const venus_translation_time = 5400 // 225 dias
            const earth_translation_time = 8766 // 365 dias
            const moon_translation_earth_time = 672 // 28 dias
            const mars_translation_time = 16488 // 687 dias
            const saturn_translation_time = 257720 // 29 anos, 146 dias e 2 horas 
            const uranus_translation_time = 736344 // 84 anos

            // velocidade linear ( km / h)
            const venus_linear_velocity = 126
            const earth_linear_velocity = 107.2
            const moon_linear_velocity_earth = 3679.2
            const mars_linear_velocity = 86.6
            const saturn_linear_velocity = 34.7
            const uranus_linear_velocity = 24.4




            let venus_angle = 0;
            let earth_angle = 0;
            let moon_angle = 0;
            let mars_angle = 0;
            let saturn_angle = 0;
            let uranus_angle = 0;
            /*
            function perimeter(radius){
                let perimeter = 2 * Math.PI * radius;
                return perimeter;
            }
            function translation_angle(translation_time, distance){
                let angle = distance / translation_time;
                return angle;     
            }
            function calculate_angle(radius, translation_time){
                let distance = perimeter(radius);
                let angle = translation_angle(translation_time, distance);
                return angle;
            }
            */
            function animate(time) {

                // Solicita a atualização da animação na próxima renderização do navegador
                const angle = time / 1000;
                requestAnimationFrame(animate);
                // Atualiza a posição e a rotação do objeto mesh

/*              // dimensoes realistas
                obj_creator.sun.rotation.y -= year_in_hours / sun_rotation_time; 

                obj_creator.venus.rotation.y -= year_in_hours / venus_rotation_time;

                obj_creator.venus.position.x = center.x + 1 * venus_position * Math.cos(- angle);
                obj_creator.venus.position.z = center.z + 1 * venus_position * Math.sin(- angle);

                obj_creator.earth.rotation.y += year_in_hours / earth_rotation_time;
                obj_creator.earth.position.x = center.x + 1 * earth_position * Math.cos(angle);
                obj_creator.earth.position.z = center.z + 1 * earth_position * Math.sin(angle);

                obj_creator.moon.rotation.y -= year_in_hours / moon_rotation_time;

                obj_creator.moon.position.x = earth.position.x + -1 * moon_position_earth * Math.cos( angle);
                obj_creator.moon.position.z = earth.position.z + -1 * moon_position_earth * Math.sin( angle);

                obj_creator.mars.rotation.y += year_in_hours / mars_rotation_time;
                obj_creator.mars.position.x = center.x + 1 * mars_position * Math.cos(angle);
                obj_creator.mars.position.z = center.z + 1 * mars_position * Math.sin(angle);

                obj_creator.saturn.rotation.y += year_in_hours / saturn_rotation_time;
                obj_creator.saturn.position.x = center.x + 1 * saturn_position * Math.cos(angle);
                obj_creator.saturn.position.z = center.z + 1 * saturn_position * Math.sin(angle);

                obj_creator.uranus.rotation.y += year_in_hours / uranus_rotation_time;
                obj_creator.uranus.position.x = center.x + 1 * uranus_position * Math.cos(angle);
                obj_creator.uranus.position.z = center.z + 1 * uranus_position * Math.sin(angle);
*/
                // dimensoes reduzidas

                obj_creator.sun.rotation.y -= year_in_hours / sun_rotation_time; 

                //-------------------------- M E R C U R Y --------------------------
                obj_creator.mercury.rotation.y += year_in_hours / mercury_rotation_time;

                obj_creator.mercury.position.x = center.x + 1 * obj_creator.mercury.position.z * Math.cos(angle);
                obj_creator.mercury.position.z = center.z + 1 * obj_creator.mercury.position.z * Math.sin(angle);

                //-------------------------- V E N U S --------------------------

                obj_creator.venus.rotation.y -= year_in_hours / venus_rotation_time;

                obj_creator.venus.position.x = center.x + 1 * obj_creator.venus.position.z * Math.cos(- angle);
                obj_creator.venus.position.z = center.z + 1 * obj_creator.venus.position.z * Math.sin(- angle);
                //-------------------------- E A R T H --------------------------
                obj_creator.earth.rotation.y += year_in_hours / earth_rotation_time;
                obj_creator.earth.position.x = center.x + 1 * obj_creator.earth.z * Math.cos(angle);
                obj_creator.earth.position.z = center.z + 1 * obj_creator.earth.z * Math.sin(angle);
                //-------------------------- M O O N --------------------------
                obj_creator.moon.rotation.y -= year_in_hours / moon_rotation_time;

                obj_creator.moon.position.x = obj_creator.earth.position.x + -1 * moon_position_earth * Math.cos( angle);
                obj_creator.moon.position.z = obj_creator.earth.position.z + -1 * moon_position_earth * Math.sin( angle);
                //-------------------------- M A R S --------------------------
                obj_creator.mars.rotation.y += year_in_hours / mars_rotation_time;
                obj_creator.mars.position.x = center.x + 1 * obj_creator.mars.z * Math.cos(angle);
                obj_creator.mars.position.z = center.z + 1 * obj_creator.mars.z * Math.sin(angle);
                //-------------------------- J U P I T E R --------------------------
                obj_creator.jupiter.rotation.y += year_in_hours / jupiter_rotation_time;
                obj_creator.jupiter.position.x = center.x + 1 * obj_creator.jupiter.z * Math.cos(angle);
                obj_creator.jupiter.position.z = center.z + 1 * obj_creator.jupiter.z * Math.sin(angle);
                //-------------------------- S A T U R N --------------------------
                obj_creator.saturn.rotation.y += year_in_hours / saturn_rotation_time;
                obj_creator.saturn.position.x = center.x + 1 * obj_creator.saturn.z * Math.cos(angle);
                obj_creator.saturn.position.z = center.z + 1 * obj_creator.saturn.z * Math.sin(angle);

                //-------------------------- U R A N U S --------------------------
                obj_creator.uranus.rotation.y += year_in_hours / uranus_rotation_time;
                obj_creator.uranus.position.x = center.x + 1 * obj_creator.uranus.z * Math.cos(angle);
                obj_creator.uranus.position.z = center.z + 1 * obj_creator.uranus.z * Math.sin(angle);
                //-------------------------- N E P T U N E --------------------------
                obj_creator.neptune.rotation.y += year_in_hours / neptune_rotation_time;
                obj_creator.neptune.position.x = center.x + 1 * obj_creator.neptune.z * Math.cos(angle);
                obj_creator.neptune.position.z = center.z + 1 * obj_creator.neptune.z * Math.sin(angle);

                // Atualiza as informacoes com a interface
                objAmbientLight.visible = gui.params.ambientLight.show;
                objAmbientLight.intensity = gui.params.ambientLight.intensity;
                objAmbientLight.color.set(gui.params.ambientLight.color);

                objSunLight.visible = gui.params.sunLight.show;
                objSunLight.intensity = gui.params.sunLight.intensity;
                objSunLight.color.set(gui.params.sunLight.color);

                objSpotLight.visible = gui.params.spotLight.show;
                objSpotLight.intensity = gui.params.spotLight.intensity;
                objSpotLight.color.set(gui.params.spotLight.color);
/*
                objRedStar.visible = gui.params.red_star.show;
                objRedStar.intensity = gui.params.red_star.intensity;
                objRedStar.color.set(gui.params.red_star.color);
                objRedStar.position.x = gui.params.red_star.x;
                objRedStar.position.y = gui.params.red_star.y;
                objRedStar.position.z = gui.params.red_star.z;

                objGreenStar.visible = gui.params.green_star.show;
                objGreenStar.intensity = gui.params.green_star.intensity;
                objGreenStar.color.set(gui.params.green_star.color);
                objGreenStar.position.x = gui.params.green_star.x;
                objGreenStar.position.y = gui.params.green_star.y;
                objGreenStar.position.z = gui.params.green_star.z;

                objBlueStar.visible = gui.params.blue_star.show;
                objBlueStar.intensity = gui.params.blue_star.intensity;
                objBlueStar.color.set(gui.params.blue_star.color);
                objBlueStar.position.x = gui.params.blue_star.x;
                objBlueStar.position.y = gui.params.blue_star.y;
                objBlueStar.position.z = gui.params.blue_star.z;
                */
            

                spot_light_helper.update();

                // Renderiza a cena Three.js com a câmera definida
                setTimeout(() => {
                    renderer.render(scene, camera);
                }, 10000)
/*
                trackball_controls.update();
                console.log('[Main - iluminacao] trackba', trackball_controls); */
            }

            // Inicia a animação

            animate();
         