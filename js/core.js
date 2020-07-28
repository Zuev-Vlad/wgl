


$(document).ready(function() {
    
    const $body = $('body');
    const canvas = document.querySelector('#first-scene');
// variable
    let width = window.screen.width;
    let height = window.screen.height;
    let ball = {
        rotation: {
            x:0,
            y:0,
            Z:0
        },
        position:{
            x:0,
            y:0,
            z:0
        },
    }

    let gui = new dat.gui.GUI();

    for (let i in ball.rotation) {
        gui.add(ball.rotation, i).min(-0.2).max(0.2).step(0.001);
    }
    for (let i in ball.position) {
        gui.add(ball.position, i).min(-0.2).max(0.2).step(0.001);
    }
    // gui.add(ball, 'rotationY').min(-0.2).max(0.2).step(0.001);
    // gui.add(ball, 'rotationX').min(-0.2).max(0.2).step(0.001);

    resizeFullWidthElementAttr ($('#first-scene'));
    
    $(window).resize(function() {
        resizeFullWidthElementAttr ($('#first-scene'));
    });

    //render
    const render = new THREE.WebGLRenderer({canvas:canvas});
    render.setClearColor(0x000000);
    // camera 
    const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 5000); 
    camera.position.set(0,0,1000);
    // light 
    let light = new THREE.AmbientLight(0xffffff);
    // scene
    let scene = new THREE.Scene();
    scene.add(light);

    // геометрия
    let geometry = new THREE.SphereGeometry(200, 20, 20);
    let material = new THREE.MeshBasicMaterial({color:0xffffff, vertexColors: THREE.FaceColors});
   
    console.log(geometry.faces.length)

    for (let i=0; i < geometry.faces.length; i++) {
         geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
    }

    // Материал
    let mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);

    

    // my function          
    function resizeFullWidthElementAttr (element) {
        $(element).attr({'width':width+'px', 'height':height+'px'});
    }
    function loop () {
        
    for (let i in ball.rotation) {
        mesh.rotation.i += ball.rotation[i];
    }
    for (let i in ball.posiiton) {
        mesh.posiiton.i += ball.position[i];
    }

        render.render(scene, camera);
        requestAnimationFrame(function(){loop();});
    }
loop();
   
});

