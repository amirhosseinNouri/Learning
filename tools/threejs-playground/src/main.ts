import * as THREE from 'three';
import './style.css';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';

// scene
const scene = new THREE.Scene();

// Sphere
const geo = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({ color: '#00ff83' });
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light
const light = new THREE.PointLight(0xffffff, 100, 100);
light.position.set(0, 10, 10);
scene.add(light);

// camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.setZ(20);
scene.add(camera);

// Renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({ canvas: canvas! });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.render(scene, camera);

// Controls
const controls = new OrbitControls(camera, canvas as HTMLElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.updateProjectionMatrix();
  camera.aspect = sizes.width / sizes.height;
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

// Timeline
const timeline = gsap.timeline({
  defaults: {
    duration: 1,
  },
});

timeline.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 });
timeline.fromTo('nav', { y: '-100%' }, { y: '0%' });
timeline.fromTo('.title', { opacity: 0 }, { opacity: 1 });

// Mouse animations
let mouseDown = false;
let rgb = [];
window.addEventListener('mousedown', () => {
  mouseDown = true;
});

window.addEventListener('mouseup', () => {
  mouseDown = false;
});

window.addEventListener('mousemove', (e) => {
  if (mouseDown) {
    rgb = [
      Math.round((e.pageX / sizes.width) * 255),
      Math.round((e.pageY / sizes.height) * 255),
      150,
    ];

    const { r, g, b } = new THREE.Color(`rgb(${rgb.join(',')})`);

    gsap.to(mesh.material.color, { r, g, b });
  }
});
