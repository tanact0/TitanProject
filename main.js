import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let y_rotation = 0;
let z_rotation = Math.PI/7;
let min = 1;
let max = 15;
let rotationX = Math.random() * (max - min) + min;

const link = [ './rose/scene.gltf', './simple_glass_vase/scene.gltf'];
var sceneMain = document.getElementById('sceneMain');

  
  // let data = document.querySelector('#input').value;
  // loader.load(link[1], (gltf) =>{
  //   console.log(gltf);
  //   model = gltf.scene;
  //   model.scale.set(1, 1, 1, 1);
  //   model.position.set(0.1, -0.8, 0);
  //   scene.add(gltf.scene);
  // });
  // let count = document.querySelector('input').value;
let count = 0;
document.getElementById('plus').onclick = function() {
  loader.load(link[0], (gltf) =>{
    console.log(gltf);
    model = gltf.scene;
    model.scale.set(1, 1, 1, 1);
    model.rotation.y = count * Math.PI / 5;
    if (count != 1) {
      console.log(rotationX);
      model.rotation.z = z_rotation;
    } 
    else {
      model.rotation.z = 0;
      model.position.y = -0.05;
    };
    scene.add(gltf.scene);
  });
  count = count + 1;
};

document.getElementById('minus').onclick = function() {
  scene.remove(scene.children.at(-1));
  console.log(scene);
  count = count - 1;
};
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0, 2, 1)

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

function animate(){
  requestAnimationFrame(animate);
  renderer.render(scene, camera)
}
animate();