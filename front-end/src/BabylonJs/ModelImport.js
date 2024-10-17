import { SceneLoader } from "@babylonjs/core";

async function ModelImport(url, fileName, scene, engine) {
  const importedMesh = await SceneLoader.ImportMeshAsync("", url, fileName, scene);

  console.log(importedMesh);

  const boundingBIndex = importedMesh.meshes.findIndex((mesh) => mesh.id === "BoundingB");
  console.log(boundingBIndex);
  const boundingBox = importedMesh.meshes[boundingBIndex];
  boundingBox.setEnabled(false);

  engine.hideLoadingUI();

  return importedMesh;
}

export default ModelImport;
