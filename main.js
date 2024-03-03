import inputEvents from 'orbit-controls/lib/input';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const link = [ './rose/scene.gltf',  './rose/scene1.gltf',  './rose/scene2.gltf',  './rose/scene3.gltf',  './rose/scene4.gltf',  './rose/scene5.gltf',  './rose/scene6.gltf', './simple_glass_vase/scene.gltf'];
var sceneMain = document.getElementById('sceneMain');

document.querySelector('#input').addEventListener('change', () => {
  let data = document.querySelector('#input').value;
  loader.load(link[7], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.1, -0.8, 0);
    scene.add(gltf.scene);
  });
  if (data == 1) {
    loader.load(link[0], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.rotation.z = Math.PI/12;
      scene.add(gltf.scene);
    });
  }
  if (data == 2) {
    loader.load(link[1], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0.1, 0, 0);
      model.rotation.y = 60;
      model.rotation.z = Math.PI/15;
      scene.add(model);
    });
  }
  if (data == 3) {
    loader.load(link[2], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0, 0, 0.1);
      model.rotation.y = 15;
      model.rotation.z = Math.PI/12;
      scene.add(model);
    });
  }
  if (data == 4) {
    loader.load(link[3], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0, 0, -0.1);
      model.rotation.y = 30;
      model.rotation.z = Math.PI/12;
      scene.add(model);
    });
  }
  if (data == 5) {
    loader.load(link[4], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0.2, 0, 0.1);
      model.rotation.y = 15;
      model.rotation.z = Math.PI/8;
      scene.add(model);
    });
  }
  if (data == 6) {
    loader.load(link[5], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0.05, 0, -0.1);
      model.rotation.y = 10;
      model.rotation.z = Math.PI/6;
      scene.add(model);
    });
  }
  if (data == 7) {
    loader.load(link[6], (gltf) =>{
      console.log(gltf);
      model = gltf.scene;
      model.scale.set(1, 1, 1, 1);
      model.position.set(0.15, 0, -0.05);
      model.rotation.y = 3;
      model.rotation.z = Math.PI/6;
      scene.add(model);
    });
  }
});

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 0.5, 1)

const hlight = new THREE.AmbientLight (0x404040,100);
scene.add(hlight);

const directionalLight = new THREE.DirectionalLight(0xffffff,10);
directionalLight.position.set(0,10,0);
directionalLight.castShadow = true;
scene.add(directionalLight);
const light = new THREE.PointLight(0xc4c4c4,10);
light.position.set(0,300,500);
scene.add(light);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 900, 500);
sceneMain.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

let model;

document.getElementById('china').onclick = function() {
  alert("pega");
  loader.load(link[0], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.rotation.z = Math.PI/12;
    scene.add(gltf.scene);
  });
  loader.load(link[1], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.1, 0, 0);
    model.rotation.y = 60;
    model.rotation.z = Math.PI/15;
    scene.add(model);
  });
  loader.load(link[2], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0, 0, 0.1);
    model.rotation.y = 15;
    model.rotation.z = Math.PI/12;
    scene.add(model);
  });
  loader.load(link[3], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0, 0, -0.1);
    model.rotation.y = 30;
    model.rotation.z = Math.PI/12;
    scene.add(model);
  });
  loader.load(link[4], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.2, 0, 0.1);
    model.rotation.y = 15;
    model.rotation.z = Math.PI/8;
    scene.add(model);
  });
  loader.load(link[5], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.05, 0, -0.1);
    model.rotation.y = 10;
    model.rotation.z = Math.PI/6;
    scene.add(model);
  });
  loader.load(link[6], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.15, 0, -0.05);
    model.rotation.y = 3;
    model.rotation.z = Math.PI/6;
    scene.add(model);
  });
  loader.load(link[7], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.position.set(0.1, -0.8, 0);
    scene.add(gltf.scene);
  });
};

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}
animate();