const gltf = {
  accessors: [
    {
      name: "cube_1_0_positions",
      componentType: 5126,
      count: 24,
      min: [-1, -1, -1],
      max: [1, 1, 1],
      type: "VEC3",
      bufferView: 0,
      byteOffset: 0,
    },
    {
      name: "cube_1_0_normals",
      componentType: 5126,
      count: 24,
      min: [-1, -1, -1],
      max: [1, 1, 1],
      type: "VEC3",
      bufferView: 1,
      byteOffset: 0,
    },
    {
      name: "cube_1_0_indices",
      componentType: 5123,
      count: 36,
      min: [0],
      max: [23],
      type: "SCALAR",
      bufferView: 2,
      byteOffset: 0,
    },
  ],
  asset: { generator: "obj2gltf", version: "2.0" },
  buffers: [
    {
      name: "19bd138d-63f9-4012-890c-30ab6b478824",
      byteLength: 648,
      uri:
        "data:application/octet-stream;base64,AACAvwAAgL8AAIC/AACAPwAAgD8AAIC/AACAPwAAgL8AAIC/AACAvwAAgD8AAIC/AACAvwAAgL8AAIC/AACAvwAAgD8AAIA/AACAvwAAgD8AAIC/AACAvwAAgL8AAIA/AACAvwAAgD8AAIC/AACAPwAAgD8AAIA/AACAPwAAgD8AAIC/AACAvwAAgD8AAIA/AACAPwAAgL8AAIC/AACAPwAAgD8AAIC/AACAPwAAgD8AAIA/AACAPwAAgL8AAIA/AACAvwAAgL8AAIC/AACAPwAAgL8AAIC/AACAPwAAgL8AAIA/AACAvwAAgL8AAIA/AACAvwAAgL8AAIA/AACAPwAAgL8AAIA/AACAPwAAgD8AAIA/AACAvwAAgD8AAIA/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AAAAAAAAAAAAAIC/AACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAACAvwAAAAAAAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAAAAAAAAgD8AAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAgL8AAAAAAAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAAAAAAAAAAAAIA/AAABAAIAAAADAAEABAAFAAYABAAHAAUACAAJAAoACAALAAkADAANAA4ADAAOAA8AEAARABIAEAASABMAFAAVABYAFAAWABcA",
    },
  ],
  bufferViews: [
    {
      name: "bufferView_0",
      buffer: 0,
      byteLength: 288,
      byteOffset: 0,
      byteStride: 12,
      target: 34962,
    },
    {
      name: "bufferView_1",
      buffer: 0,
      byteLength: 288,
      byteOffset: 288,
      byteStride: 12,
      target: 34962,
    },
    {
      name: "bufferView_2",
      buffer: 0,
      byteLength: 72,
      byteOffset: 576,
      target: 34963,
    },
  ],
  materials: [
    {
      name: "default",
      pbrMetallicRoughness: {
        baseColorFactor: [0.5, 0.5, 0.5, 1],
        metallicFactor: 0,
        roughnessFactor: 1,
      },
      emissiveFactor: [0, 0, 0],
      alphaMode: "OPAQUE",
      doubleSided: false,
    },
  ],
  meshes: [
    {
      name: "cube_1",
      primitives: [
        {
          attributes: { POSITION: 0, NORMAL: 1 },
          indices: 2,
          material: 0,
          mode: 4,
        },
      ],
    },
  ],
  nodes: [{ name: "cube", mesh: 0 }],
  scene: 0,
  scenes: [{ nodes: [0] }],
};

const encoded = btoa(JSON.stringify(gltf));

const dataUrl = `data:application/json;charset=utf-8;base64,${encoded}`;

const czml = [
  {
    id: "document",
    name: "CZML Model",
    version: "1.0",
  },
  {
    id: "cube",
    name: "Cube",
    position: {
      cartographicDegrees: [-77, 37, 10000],
    },
    model: {
      gltf: dataUrl,
      scale: 2.0,
      minimumPixelSize: 128,
    },
  },
];

/*●mainへの記載

<script src="./czml/test2.js"></script>

……

const viewer = new Cesium.Viewer("cesiumContainer", {
  shouldAnimate: true,
});

const dataSourcePromise = viewer.dataSources.add(
  Cesium.CzmlDataSource.load(czml)
);

dataSourcePromise
  .then(function (dataSource) {
    viewer.trackedEntity = dataSource.entities.getById("cube");
  })
  .catch(function (error) {
    window.alert(error);
  });
*/