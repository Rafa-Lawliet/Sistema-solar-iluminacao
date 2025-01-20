import * as THREE from 'three';
import { TextureLoader } from 'three';

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

            
            // distancias
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
            
            
            
            //raios
            const sun_real_radius = 696340; // 696.340
            const mercury_real_radius = 2439.7; //2.439,7
            const venus_real_radius = 6051.8; // 6.051,8
            const earth_real_radius = 6378; // 6.378
            const moon_real_radius = 1737.4; // 1.737,4
            const mars_real_radius = 3389.5; // 3.389,5
            const jupiter_real_radius = 69911; // 69.911
            const saturn_real_radius = 58232; // 58.232 
            const uranus_real_radius = 25362; // 25.362
            const neptune_real_radius = 24622; // 24.622
            
            const saturn_ring_real_distance_saturn = 7000 /* 7.000 */ + saturn_real_radius;
            const total_distance = sun_real_radius + neptune_distance + neptune_real_radius * 2;

            const scale1 = 60000; 
            const scale2 = 100;

            
            function sphere_radius(radius){
                const proportional_radius = (radius / total_distance) * scale1;// regra de 3 para reduzir os raios a uma escala de 100
                return proportional_radius;
            }

            

            // Cria a geometria Three.js para o objeto mesh

            //raios porpocionais
            const sun_proportional_radius = sphere_radius(sun_real_radius);
            const mercury_proportional_radius = sphere_radius(mercury_real_radius);
            const venus_proportional_radius = sphere_radius(venus_real_radius);
            const earth_proportional_radius = sphere_radius(earth_real_radius);
            const moon_proportional_radius = sphere_radius(moon_real_radius);
            const mars_proportional_radius = sphere_radius(mars_real_radius);
            const jupiter_proportional_radius = sphere_radius(jupiter_real_radius);
            const saturn_proportional_radius = sphere_radius(saturn_real_radius);
            const saturn_ring_width_proportional_radius = sphere_radius(saturn_ring_real_width);
            const saturn_ring_distance_saturn_proportional_radius = sphere_radius(saturn_ring_real_distance_saturn);
            const uranus_proportional_radius = sphere_radius(uranus_real_radius);
            const neptune_proportional_radius = sphere_radius(neptune_real_radius);

            //console.log(saturn_ring_width_proportional_radius);
            

            //criação dos objetos
            const geometry_sun = new THREE.SphereGeometry(
                sun_proportional_radius, 
                32, 32);

            const geometry_mercury = new THREE.SphereGeometry(
                mercury_proportional_radius, 
                32, 32);

            const geometry_venus = new THREE.SphereGeometry(
                venus_proportional_radius, 
                32, 32);
                
            const geometry_earth = new THREE.SphereGeometry(
                earth_proportional_radius, 
                32, 32);

            const geometry_moon = new THREE.SphereGeometry(
                moon_proportional_radius, 
                32, 32);

            const geometry_mars = new THREE.SphereGeometry(
                mars_proportional_radius, 
                32, 32);

            const geometry_jupiter = new THREE.SphereGeometry(
                jupiter_proportional_radius, 
                32, 32);

            const geometry_saturn = new THREE.SphereGeometry(
                saturn_proportional_radius, 
                32, 32);

            const geometry_saturn_ring = new THREE.TorusGeometry(
                saturn_ring_distance_saturn_proportional_radius,
                saturn_ring_width_proportional_radius,
                2, 32);

            const geometry_uranus = new THREE.SphereGeometry(
                uranus_proportional_radius, 
                32, 32);

            const geometry_neptune = new THREE.SphereGeometry(
                neptune_proportional_radius, 
                32, 32);

            const geometry_supernova = new THREE.SphereGeometry(2, 32, 32);

            const geometry_star = new THREE.SphereGeometry(0.1, 32, 32);

            const geometry_milk_way = new THREE.PlaneGeometry(150, 150);

            //prepara as texturas
            const textureLoader = new TextureLoader();
/*
            const texture_milk_way = textureLoader.load("../Textures/milk_way_texture.jpg");
            const texture_sun = textureLoader.load("../Textures/Sun_texture.jpg");
            const texture_moon = textureLoader.load("../Textures/Moon_texture.jpg");
            const texture_earth = textureLoader.load("../Textures/Earth_texture.jpg");
            const texture_mars = textureLoader.load("../Textures/Mars_texture.jpg");
            const texture_uranus = textureLoader.load("../Textures/Uranus_texture.jpg");
            const texture_supernova = textureLoader.load("../Textures/Supernova_texture.jpg");
            const texture_ocean = textureLoader.load("../Textures/Ocean_texture.jpg");
            const texture_venus = textureLoader.load("../Textures/Venus_texture.jpg");
*/
            //const texture_milk_way = textureLoader.load("./Textures/Milk_way_texture.jpg");
            const texture_milk_way = textureLoader.load("./Textures/Milk_way_texture2.jpg");
            //const texture_milk_way = textureLoader.load("./Textures/Interstellar_texture.jpg");
            //const texture_milk_way = textureLoader.load("./Textures/Galaxy_texture.jpg");
            //const texture_milk_way = textureLoader.load("./Textures/Test_texture.jpg");

            const texture_sun = textureLoader.load("./Textures/Sun_texture.jpg");
            const texture_mercury = textureLoader.load("./Textures/Mercury_texture.jpg");
            const texture_venus = textureLoader.load("./Textures/Venus_texture.jpg");            
            const texture_moon = textureLoader.load("./Textures/Moon_texture.jpg");
            const texture_earth = textureLoader.load("./Textures/Earth_texture.jpg");
            const texture_mars = textureLoader.load("./Textures/Mars_texture.jpg");
            const texture_jupiter = textureLoader.load("./Textures/Jupiter_texture.jpg");
            const texture_saturn = textureLoader.load("./Textures/Saturn_texture.jpg");
            const texture_saturn_ring = textureLoader.load("./Textures/Saturn_ring_texture.jpg");
            const texture_uranus = textureLoader.load("./Textures/Uranus_texture.jpg");
            const texture_neptune = textureLoader.load("./Textures/Neptune_texture.jpg");
            const texture_supernova = textureLoader.load("./Textures/Supernova_texture.jpg");

            // Cria o material Three.js para o objeto mesh

            /*
            const material_basic = new THREE.MeshBasicMaterial();
            const material_phong = new THREE.MeshPhongMaterial(); 
            const material_lambert = new THREE.MeshLambertMaterial();
            const material_normal = new THREE.MeshNormalMaterial();
            const material_physical = new THREE.MeshPhysicalMaterial();
            const material_standard = new THREE.MeshStandardMaterial();
            */

            const material_red_star = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const material_green_star = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
            const material_blue_star = new THREE.MeshBasicMaterial({ color: 0x0000ff });
            // ** fazer mais estrelas

            const material_milk_way = new THREE.MeshBasicMaterial({
                map : texture_milk_way, 
                side : THREE.DoubleSide
            });
            const material_sun = new THREE.MeshBasicMaterial({map : texture_sun});
            const material_supernova = new THREE.MeshBasicMaterial({map : texture_supernova});

            // planetas rochosos
            const material_mercury = new THREE.MeshPhongMaterial({map : texture_mercury});
            const material_venus = new THREE.MeshPhongMaterial({map : texture_venus});
            const material_moon = new THREE.MeshPhongMaterial({map : texture_moon});
            const material_mars = new THREE.MeshPhongMaterial({map : texture_mars});

            const material_earth = new THREE.MeshPhysicalMaterial({map : texture_earth});

            // planetas gasosos
            const material_saturn = new THREE.MeshPhysicalMaterial({map : texture_saturn});
            const material_saturn_ring = new THREE.MeshLambertMaterial({map : texture_saturn_ring});
            const material_jupiter = new THREE.MeshLambertMaterial({map : texture_jupiter});
            const material_uranus = new THREE.MeshLambertMaterial({map : texture_uranus});
            const material_neptune = new THREE.MeshLambertMaterial({map : texture_neptune});


            // Cria o objeto mesh Three.js com a geometria e o material definidos

            const milk_way = new THREE.Mesh(geometry_milk_way, material_milk_way);

            const red_star = new THREE.Mesh(geometry_star, material_red_star);
            const green_star = new THREE.Mesh(geometry_star, material_green_star);
            const blue_star = new THREE.Mesh(geometry_star, material_blue_star);

            const sun = new THREE.Mesh(geometry_sun, material_sun);
            const mercury = new THREE.Mesh(geometry_mercury, material_mercury);
            const venus = new THREE.Mesh(geometry_venus, material_venus);
            const moon = new THREE.Mesh(geometry_moon, material_moon);
            const earth = new THREE.Mesh(geometry_earth, material_earth);
            const mars = new THREE.Mesh(geometry_mars, material_mars);
            const saturn = new THREE.Mesh(geometry_saturn, material_saturn);
            const saturn_ring = new THREE.Mesh(geometry_saturn_ring, material_saturn_ring);
            const jupiter = new THREE.Mesh(geometry_jupiter, material_jupiter);
            const uranus = new THREE.Mesh(geometry_uranus, material_uranus);
            const neptune = new THREE.Mesh(geometry_neptune, material_neptune);
            
            const supernova = new THREE.Mesh(geometry_supernova, material_supernova);
            
            
            // posicionamento
            function real_distance(distance_to_sun){
                const distance = (distance_to_sun + sun_real_radius) * scale1 / (total_distance); //regra de 3 para reduzir as distancias a uma escala de 100
                return distance;
            }

            const red_star_position_x =  17;
            const red_star_position_y =  15;

            const green_star_position_z = 10;
            const green_star_position_x = -12;
            const green_star_position_y = 15;

            const blue_star_position_z = -6.06;
            const blue_star_position_x = -3.5;
            const blue_star_position_y = 15;
            
            const mercury_position = real_distance(mercury_distance);
            const venus_position = real_distance(venus_distance);
            const earth_position = real_distance(earth_distance);
            const moon_position_earth = real_distance(moon_distance_earth);
            const mars_position = real_distance(mars_distance);
            const jupiter_position = real_distance(jupiter_distance);
            const saturn_position = real_distance(saturn_distance);
            const uranus_position = real_distance(uranus_distance);
            const neptune_position = real_distance(neptune_distance);
            console.log(sun_proportional_radius);
            console.log(mercury_position);
            /*let venus_position = 8;
            let earth_position = 12;
            let moon_position_earth = 2;
            let mars_position = 16;
            let saturn_position = 21;
            let uranus_position = 25;*/
            
            
            milk_way.position.y = -4;
            milk_way.rotation.x = Math.PI / 2;
            
            sun.position.set(0, 0, 0);
            
            mercury.position.z = mercury_position;

            venus.position.z = venus_position;

            earth.position.z = earth_position;
            
            moon.position.z = earth_position;
            moon.position.x = moon_position_earth;

            mars.position.z = mars_position;

            jupiter.position.z = jupiter_position;

            saturn.position.z = saturn_position;

            saturn_ring.position.z = saturn_position;

            uranus.position.z = uranus_position;

            neptune.position.z = neptune_position;

            supernova.position.set(13, 23, 5);

            
            red_star.position.x = red_star_position_x;
            red_star.position.y = red_star_position_y;


            green_star.position.z = green_star_position_z;
            green_star.position.x = green_star_position_x;
            green_star.position.y = green_star_position_y;

            blue_star.position.z = blue_star_position_z;
            blue_star.position.x = blue_star_position_x;
            blue_star.position.y = blue_star_position_y; 

            
            // Adiciona o objeto mesh à cena Three.js

            

            scene.add(milk_way);
            scene.add(sun);
            scene.add(mercury)
            scene.add(venus);
            scene.add(earth);
            scene.add(moon);
            scene.add(mars);
            scene.add(saturn);
            scene.add(uranus);
            scene.add(neptune);

            scene.add(supernova);
            scene.add(red_star);
            scene.add(green_star);
            scene.add(blue_star);


            // Define a posição da câmera Three.js

            camera.position.y = 45;
            camera.rotation.x = - Math.PI / 2


            // Adicinando as luzes
            let ambient_light = new THREE.AmbientLight(0x404040, 1);
            scene.add(ambient_light);

            let sun_light = new THREE.DirectionalLight(0xffffff, 0.5);
            sun_light.target.position.set(0, 0, 0);
            scene.add(sun_light);     
            scene.add(sun_light.target);   
            
            let red_point_light = new THREE.PointLight(0xff0000, 0.5, 0);
            red_point_light.position.set(red_star_position_x, red_star_position_y, 0);
            scene.add(red_point_light);

            let green_point_light = new THREE.PointLight(0x00ff00, 0.5, 0);
            green_point_light.position.set(green_star_position_x, green_star_position_y, green_star_position_z); 
            scene.add(green_point_light);

            let blue_point_light = new THREE.PointLight(0x0000ff, 0.5, 0);
            blue_point_light.position.set(blue_star_position_x, blue_star_position_y, blue_star_position_z);
            scene.add(blue_point_light);

            let spot_light = new THREE.SpotLight(0xffffff);
            spot_light.position.set(4, 3, 4);
            spot_light.castShadow = true;   
            scene.add(spot_light);  
             
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

                // Solicita a atualização da animação na próxima renderização do navegador
                const angle = time / 1000;
                requestAnimationFrame(animate);
                // Atualiza a posição e a rotação do objeto mesh


                sun.rotation.y -= year_in_hours / sun_rotation_time; 

                venus.rotation.y -= year_in_hours / venus_rotation_time;

                venus.position.x = center.x + 1 * venus_position * Math.cos(- angle);
                venus.position.z = center.z + 1 * venus_position * Math.sin(- angle);

                earth.rotation.y += year_in_hours / earth_rotation_time;
                earth.position.x = center.x + 1 * earth_position * Math.cos(angle);
                earth.position.z = center.z + 1 * earth_position * Math.sin(angle);

                moon.rotation.y -= year_in_hours / moon_rotation_time;

                moon.position.x = earth.position.x + -1 * moon_position_earth * Math.cos( angle);
                moon.position.z = earth.position.z + -1 * moon_position_earth * Math.sin( angle);

                mars.rotation.y += year_in_hours / mars_rotation_time;
                mars.position.x = center.x + 1 * mars_position * Math.cos(angle);
                mars.position.z = center.z + 1 * mars_position * Math.sin(angle);

                saturn.rotation.y += year_in_hours / saturn_rotation_time;
                saturn.position.x = center.x + 1 * saturn_position * Math.cos(angle);
                saturn.position.z = center.z + 1 * saturn_position * Math.sin(angle);

                uranus.rotation.y += year_in_hours / uranus_rotation_time;
                uranus.position.x = center.x + 1 * uranus_position * Math.cos(angle);
                uranus.position.z = center.z + 1 * uranus_position * Math.sin(angle);



                // Renderiza a cena Three.js com a câmera definida

                renderer.render(scene, camera);

            }

            // Inicia a animação

            animate();
         