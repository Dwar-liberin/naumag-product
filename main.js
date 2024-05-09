
    import { videoLoader } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/videoLoader/videoLoader.js";
    import { loadGLTF } from "https://cdn.jsdelivr.net/gh/aadarshbabu/lib/loader.js"
    import * as THREE from "three";
    import { MindARThree } from "mindar-image-three";

    document.addEventListener("DOMContentLoaded", () => {

    async function start(){

      
  const textureLoader = new THREE.TextureLoader();
  const mindThree = new MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);
  
    
      const target_imageebd29f_iconGeometry = new THREE.PlaneGeometry(1, 0.7090729783037475);
   const target_imageebd29f_texture = textureLoader.load("assets/fizik.png");
  const target_imageebd29f_image = new THREE.MeshBasicMaterial({
      map: target_imageebd29f_texture,
    });
    const target_imageebd29f = new THREE.Mesh(target_imageebd29f_iconGeometry, target_imageebd29f_image);
    target_imageebd29f.scale.set(1, 1, 1);
    target_imageebd29f.position.set(0, 0, 0);
    target_imageebd29f.rotation.set(-0.0007963267948964958, 0, 0);
    

    const [ video_asset_f94faa, video_asset_f94faa_video ] = await videoLoader({
        path: "assets/fizik.mp4",
        ratio: 1
      });

      video_asset_f94faa.position.set(0, 0, 0.1);

    const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;

    video_asset_f94faa_video.muted=isIOS
    
      video_asset_f94faa.scale.set(1, 0.7, 1);

    video_asset_f94faa.rotation.set(-0.0007963267948964958, 0, 0);

      
  
const logo_a0d441cb_9ddd_iconGeometry = new THREE.CircleGeometry(0.5);
   const logo_a0d441cb_9ddd_texture = textureLoader.load("assets/circle-buy-sm_115.png");
  const logo_a0d441cb_9ddd_image = new THREE.MeshBasicMaterial({
      map: logo_a0d441cb_9ddd_texture,
    });
    const logo_a0d441cb_9ddd = new THREE.Mesh(logo_a0d441cb_9ddd_iconGeometry, logo_a0d441cb_9ddd_image);
    logo_a0d441cb_9ddd.scale.set(0.3, 0.3, 1);
    logo_a0d441cb_9ddd.position.set(0, -0.5, 0.1);
    logo_a0d441cb_9ddd.rotation.set(-0.0007963267948964958, 0, 0);
    logo_a0d441cb_9ddd.userData.clickable = true
const logo_747b7557_578e_iconGeometry = new THREE.CircleGeometry(0.5);
   const logo_747b7557_578e_texture = textureLoader.load("assets/circle-web-sm_114.png");
  const logo_747b7557_578e_image = new THREE.MeshBasicMaterial({
      map: logo_747b7557_578e_texture,
    });
    const logo_747b7557_578e = new THREE.Mesh(logo_747b7557_578e_iconGeometry, logo_747b7557_578e_image);
    logo_747b7557_578e.scale.set(0.2, 0.2, 1);
    logo_747b7557_578e.position.set(-0.3, -0.9, 0);
    logo_747b7557_578e.rotation.set(-0.0007963267948964958, 0, 0);
    logo_747b7557_578e.userData.clickable = true
const logo_25ede333_ed84_iconGeometry = new THREE.CircleGeometry(0.5);
   const logo_25ede333_ed84_texture = textureLoader.load("assets/circle-yt-sm_114.png");
  const logo_25ede333_ed84_image = new THREE.MeshBasicMaterial({
      map: logo_25ede333_ed84_texture,
    });
    const logo_25ede333_ed84 = new THREE.Mesh(logo_25ede333_ed84_iconGeometry, logo_25ede333_ed84_image);
    logo_25ede333_ed84.scale.set(0.2, 0.2, 1);
    logo_25ede333_ed84.position.set(0, -0.9, 0);
    logo_25ede333_ed84.rotation.set(-0.0007963267948964958, 0, 0);
    logo_25ede333_ed84.userData.clickable = true
const logo_d56dab7b_57f7_iconGeometry = new THREE.CircleGeometry(0.5);
   const logo_d56dab7b_57f7_texture = textureLoader.load("assets/circle-wa-sm_113.png");
  const logo_d56dab7b_57f7_image = new THREE.MeshBasicMaterial({
      map: logo_d56dab7b_57f7_texture,
    });
    const logo_d56dab7b_57f7 = new THREE.Mesh(logo_d56dab7b_57f7_iconGeometry, logo_d56dab7b_57f7_image);
    logo_d56dab7b_57f7.scale.set(0.2, 0.2, 1);
    logo_d56dab7b_57f7.position.set(0.3, -0.9, 0);
    logo_d56dab7b_57f7.rotation.set(-0.0007963267948964958, 0, 0);
    logo_d56dab7b_57f7.userData.clickable = true
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

       if (o.userData.clickable) window.showLoadingScreen();
        
      if (o.userData.clickable && o === logo_a0d441cb_9ddd) {
          window.location.href = "https://nau-ra.com"
        }
      

      if (o.userData.clickable && o === logo_747b7557_578e) {
          window.location.href = "https://nau-ra.com"
        }
      

      if (o.userData.clickable && o === logo_25ede333_ed84) {
          window.location.href = "https://www.youtube.com/user/NAURAru/featured"
        }
      

      if (o.userData.clickable && o === logo_d56dab7b_57f7) {
          window.location.href = "https://api.whatsapp.com/send/?phone=79175704772"
        }
      
      }

    })
    
      
    const anchor =  mindThree.addAnchor(0);
    anchor.group.add(target_imageebd29f)
anchor.group.add(video_asset_f94faa)
anchor.group.add(logo_a0d441cb_9ddd)
anchor.group.add(logo_747b7557_578e)
anchor.group.add(logo_25ede333_ed84)
anchor.group.add(logo_d56dab7b_57f7)


      anchor.onTargetFound = () => {
      video_asset_f94faa_video.play();
    };


    anchor.onTargetLost = () => {
      video_asset_f94faa_video.pause();
    }
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
    
    
    }
    
    start()
  
    })
    
    
