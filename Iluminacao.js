import * as THREE from 'three';
//import { TrackballControls } from 'three/examples/jsm/Addons.js';
import { SpacePosition } from './SpacePosition.js';
import { Light } from './Light.js';


            // Cria a cena Three.js

            var scene = new THREE.Scene();

            // Cria a câmera Three.js com visão perspectiva

            var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

            // Cria o renderizador Three.js com suporte a WebGL

            var renderer = new THREE.WebGLRenderer();

            // Define o tamanho do renderizador para o tamanho da janela do navegador

            renderer.setSize(window.innerWidth, window.innerHeight);

            // Adiciona o elemento DOM do renderizador à página HTML

            document.body.appendChild(renderer.domElement);

            scene.background = new THREE.Color(0xffffff);


            // camera
            camera.position.y = 45;
            camera.rotation.x = - Math.PI / 2;
            
           
            //------------------------------------------------------------------------------
            // posicionamento
            const creator = new SpacePosition();
            //console.log('[Main - iluminacao] sun texture:', creator.sun.material.map);
            // Adiciona o objeto mesh à cena Three.js
            scene.add(creator.milk_way);
            scene.add(creator.sun);
            scene.add(creator.mercury)
            scene.add(creator.venus);
            scene.add(creator.earth);
            scene.add(creator.moon);
            scene.add(creator.mars);
            scene.add(creator.jupiter);
            scene.add(creator.saturn);
            scene.add(creator.saturn_ring);
            scene.add(creator.uranus);
            scene.add(creator.neptune);
            scene.add(creator.supernova);
           
            //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            
            // Adicinando as luzes
            let light = new Light();
            let ambient_light = light.ambient_light();

            let sun_light = light.directional_light();

            let supernova_light = light.spot_light(/*{helper : true}*/);
            const spotLightHelper = new THREE.SpotLightHelper(supernova_light);
            scene.add(spotLightHelper);

            scene.add(ambient_light);
            scene.add(sun_light);
            scene.add(supernova_light);

            //console.log('[Main - iluminacao] ambient light:', light.ambient_light);
            //console.log('[Main - iluminacao] sun light:', light.directional_light);
            //console.log('[Main - iluminacao] supernova light:', light.spot_light);
            
            //...............................................................................


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
            const venus_rotation_time = 5832 // 243 dias e 5 horas
            const earth_rotation_time = 24  
            const moon_rotation_time = 655 // 27 dias e 7 horas
            const mars_rotation_time = 24 
            const saturn_rotation_time  = 11  /// Equivalente a saturno
            const uranus_rotation_time = 17;

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
/*
                // Solicita a atualização da animação na próxima renderização do navegador
                const angle = time / 1000;
                requestAnimationFrame(animate);
                // Atualiza a posição e a rotação do objeto mesh


                creator.sun.rotation.y -= year_in_hours / sun_rotation_time; 

                creator.venus.rotation.y -= year_in_hours / venus_rotation_time;

                creator.venus.position.x = center.x + 1 * venus_position * Math.cos(- angle);
                creator.venus.position.z = center.z + 1 * venus_position * Math.sin(- angle);

                creator.earth.rotation.y += year_in_hours / earth_rotation_time;
                creator.earth.position.x = center.x + 1 * earth_position * Math.cos(angle);
                creator.earth.position.z = center.z + 1 * earth_position * Math.sin(angle);

                creator.moon.rotation.y -= year_in_hours / moon_rotation_time;

                creator.moon.position.x = earth.position.x + -1 * moon_position_earth * Math.cos( angle);
                creator.moon.position.z = earth.position.z + -1 * moon_position_earth * Math.sin( angle);

                creator.mars.rotation.y += year_in_hours / mars_rotation_time;
                creator.mars.position.x = center.x + 1 * mars_position * Math.cos(angle);
                creator.mars.position.z = center.z + 1 * mars_position * Math.sin(angle);

                creator.saturn.rotation.y += year_in_hours / saturn_rotation_time;
                creator.saturn.position.x = center.x + 1 * saturn_position * Math.cos(angle);
                creator.saturn.position.z = center.z + 1 * saturn_position * Math.sin(angle);

                creator.uranus.rotation.y += year_in_hours / uranus_rotation_time;
                creator.uranus.position.x = center.x + 1 * uranus_position * Math.cos(angle);
                creator.uranus.position.z = center.z + 1 * uranus_position * Math.sin(angle);
*/

                //trackball_controls.update();
                // Renderiza a cena Three.js com a câmera definida
                setTimeout(() => {
                    renderer.render(scene, camera);
                }, 1000)

            }

            // Inicia a animação

            animate();
         