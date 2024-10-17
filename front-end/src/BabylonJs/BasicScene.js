import { Engine, Scene, Vector3, ArcRotateCamera, DirectionalLight } from "@babylonjs/core";
import "@babylonjs/loaders";
import ModelImport from "./ModelImport";
// import CustomLoadingScreen from "./CustomLoadingScreen";

export class BasicScene {
  constructor(canvas, cad) {
    const engine = new Engine(canvas, true);
    // engine.setHardwareScalingLevel(0.4); //kasarsa commente al

    // var loadingScreen = new CustomLoadingScreen();
    // engine.loadingScreen = loadingScreen;

    // engine.displayLoadingUI();
    const scene = new Scene(engine);
    scene.autoClear = false;

    if (cad) {
      ModelImport("./models/", cad, scene, engine);
    }

    const camera = new ArcRotateCamera("camera", Math.PI / 4, Math.PI / 3, 1.5, new Vector3(0, 0, 0), scene); //Set Camera
    camera.minZ = 0.1;
    camera.lowerRadiusLimit = 0.55;
    camera.upperRadiusLimit = 1.5;

    const dirLight1 = new DirectionalLight("dirLight1", new Vector3(-1, 0, 1), scene);
    dirLight1.intensity = 3;
    const dirLight2 = new DirectionalLight("dirLight2", new Vector3(-1, 0, -1), scene);
    dirLight2.intensity = 3;

    camera.attachControl();
    camera.inputs.addMouseWheel();
    camera.inputs.attached.mousewheel.wheelPrecision = 20;

    engine.runRenderLoop(() => {
      engine.resize();
      scene.render();
    });
  }
}
