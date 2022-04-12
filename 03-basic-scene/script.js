
// create scene
const scene = new THREE.Scene();

// create red cube
const geometry = new THREE.BoxGeometry(1, 2, 0.5);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// sizes for camera
const sizes = {
  width: 600,
  height: 800
}

// Camera
const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height); //fov, aspect-ratio 
camera.position.x = 5
camera.position.y = 4
camera.position.z = 7
camera.rotation.x = -0.6 // looks down
// camera.rotation.x = 0
camera.rotation.y = 0.3; // looks left
camera.rotation.z = -0.5 // tips right
scene.add(camera);

// Renderer
const canvas = document.getElementById('webgl')
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas,
});
// renderer.setSize(sizes.width, sizes.height);
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera); //scene, camera

console.log(camera )