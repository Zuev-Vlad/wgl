


$(document).ready(function() {
    
    const $body = $('body');
    const canvas = document.querySelector('#first-scene');

    let width = window.screen.width;
    let height = window.screen.height;
    
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
    let geometry = new THREE.SphereGeometry(200, 100,100);
    let material = new THREE.MeshBasicMaterial({color:0x00ff00, wireframe:true});
    // Материал
    let mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    

    // my function          
    function resizeFullWidthElementAttr (element) {
        $(element).attr({'width':width+'px', 'height':height+'px'});
    }
    function loop () {
        render.render(scene, camera);
    }
});

