const czml = [
  {
    id: "document",
    version: "1.0",
  },
  {
    id: "BatchedColors",
    name: "BatchedColors",
    tileset: {
      uri:
        "../Cesium-1.111/Apps/SampleData/Cesium3DTiles/Batched/BatchedColors/tileset.json",
    },
  },
];




/*●mainへの記載

<script src="./czml/test3.js"></script>

……

const viewer = new Cesium.Viewer("cesiumContainer", {
  shouldAnimate: true,
});

const dataSourcePromise = viewer.dataSources.add(
  Cesium.CzmlDataSource.load(czml)
);

dataSourcePromise
  .then(function (dataSource) {
    viewer.zoomTo(dataSource.entities.getById("BatchedColors"));
  })
  .catch(function (error) {
    window.alert(error);
  });
*/