import { OBJLoader } from './examples/jsm/loaders/OBJLoader.js';
		import { MTLLoader } from './examples/jsm/loaders/MTLLoader.js';


			var container = document.getElementById( 'pid_graph' );
			var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 20000 );
			camera.position.set( 5, 5, 5 );
			camera.lookAt( 0, 0, 0 );
			var renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize(container.clientWidth-50, container.clientHeight-50);
			container.appendChild(renderer.domElement);

			renderer.setClearColor( 0x27293d, 1 );	

			THREEx.WindowResize( renderer, camera );

			var axesHelper = new THREE.AxesHelper(5 );
			scene.add( axesHelper );

			var clock  = new THREE.Clock( true );	
			var time;	// for animate

			var lightAmb = new THREE.AmbientLight(0xffffff);
			scene.add(lightAmb);

			var exampleObject = new THREE.Object3D();

			var mtlLoaderExample = new MTLLoader( );

			mtlLoaderExample.load(

				plane_3dmtl,  // License
				
				function (materials) {

					materials.preload();

					var objLoaderExample = new OBJLoader( );
					
					objLoaderExample.setMaterials( materials );
					
					objLoaderExample.load(
					
						plane_3dobj, // License
						
						function (object) {

							exampleObject.add(object);
						
						}
						
					);
				
				}
				
			);

			exampleObject.scale.set( 0.005, 0.005, 0.005);
			var pi = 3.141529625
			exampleObject.rotation.y = pi;
			exampleObject.position.z = 1;

			scene.add( exampleObject );

			animate();

			//..................

			function animate() {	

				requestAnimationFrame( animate );
				time = clock.getElapsedTime();
					
				exampleObject.rotation.x = 0.4 * Math.sin( time / 2);
				exampleObject.rotation.y = 0.4*Math.cos( time ) + pi;
				exampleObject.rotation.z = 0.4*Math.sin( time / 2);
					
				renderer.render( scene, camera );
				
			}

container.addEventListener('resize', onContainerResize);
console.log("disp");

function onContainerResize() {
    var box = container.getBoundingClientRect();
    renderer.setSize(box.width, box.height);
    console.log(box.width);
    console.log(box.height);

    camera.aspect = box.width/box.height
    camera.updateProjectionMatrix()
    // optional animate/renderloop call put here for render-on-changes
}
				



			// instantiate a loader

