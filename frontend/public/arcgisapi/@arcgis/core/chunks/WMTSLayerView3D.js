/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import"./ArrayPool.js";import"./object.js";import"./deprecate.js";import"../core/lang.js";import"../config.js";import{L as r}from"./Logger.js";import"./string.js";import"./metadata.js";import{property as o}from"../core/accessorSupport/decorators/property.js";import"../core/Accessor.js";import"./PropertyOrigin.js";import"../core/scheduling.js";import"../core/promiseUtils.js";import"./Message.js";import s from"../core/Error.js";import"./compilerUtils.js";import"./ensureType.js";import{subclass as e}from"../core/accessorSupport/decorators/subclass.js";import"./Evented.js";import"../core/Collection.js";import"./collectionUtils.js";import"./JSONSupport.js";import"./Promise.js";import"./Loadable.js";import"./asyncUtils.js";import"./loadAll.js";import"../core/urlUtils.js";import"../core/accessorSupport/decorators/aliasOf.js";import"../core/accessorSupport/decorators/cast.js";import"./jsonMap.js";import"./enumeration.js";import"./reader.js";import"./writer.js";import"./resourceExtension.js";import"./persistableUrlUtils.js";import"../geometry/SpatialReference.js";import"./locale.js";import"./number.js";import"../intl.js";import"../kernel.js";import"../request.js";import"./assets.js";import"../geometry/Geometry.js";import"../geometry/Point.js";import"./Ellipsoid.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Extent.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalFolder.js";import"../portal/PortalGroup.js";import"../portal/PortalUser.js";import"../portal/Portal.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../portal/PortalItem.js";import"../Basemap.js";import"./writeUtils.js";import"./mathUtils2.js";import"./vec3f64.js";import"./common.js";import"./vec3.js";import"./mathUtils.js";import"../Camera.js";import"./colorUtils.js";import"../Color.js";import"./zmUtils.js";import"../geometry/Multipoint.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../geometry.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./domains.js";import"./arcadeOnDemand.js";import"../layers/support/fieldUtils.js";import"../popup/content/Content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/CustomContent.js";import"./date.js";import"../popup/support/FieldInfoFormat.js";import"../popup/FieldInfo.js";import"../popup/content/FieldsContent.js";import"./MediaInfo.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../popup/content/support/ChartMediaInfoValue.js";import"./chartMediaInfoUtils.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/MediaContent.js";import"../popup/content/TextContent.js";import"../popup/content.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/RelatedRecordsInfo.js";import"./Identifiable.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../PopupTemplate.js";import"../symbols/Symbol.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol3DLayer.js";import"./screenUtils.js";import"./opacityUtils.js";import"./materialUtils.js";import"../symbols/edges/Edges3D.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"./utils.js";import"./Symbol3DMaterial.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/FillSymbol.js";import"../symbols/patterns/StylePattern3D.js";import"../symbols/FillSymbol3DLayer.js";import"./colors.js";import"./Symbol3DOutline.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/Symbol3D.js";import"./Thumbnail.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"./Symbol3DVerticalOffset.js";import"../symbols/LabelSymbol3D.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"./urlUtils.js";import"../symbols/PictureFillSymbol.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../symbols/support/jsonUtils.js";import"./uid.js";import"../Graphic.js";import"../Ground.js";import"../core/Handles.js";import"./CollectionFlattener.js";import"./basemapUtils.js";import"../Map.js";import"../layers/Layer.js";import"./TablesMixin.js";import"./LegendOptions.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../tasks/support/ColorRamp.js";import"../tasks/support/AlgorithmicColorRamp.js";import"../tasks/support/MultipartColorRamp.js";import"./colorRamps.js";import"../renderers/Renderer.js";import"../renderers/visualVariables/VisualVariable.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../renderers/visualVariables/SizeVariable.js";import"./sizeVariableUtils.js";import"./unitUtils.js";import"./lengthUtils.js";import"./visualVariableUtils.js";import"./VisualVariablesMixin.js";import"../renderers/support/ClassBreakInfo.js";import"./commonProperties.js";import"../renderers/ClassBreaksRenderer.js";import"./diffUtils.js";import"../renderers/support/UniqueValueInfo.js";import"./devEnvironmentUtils.js";import"./styleUtils.js";import"../renderers/UniqueValueRenderer.js";import"../geometry/support/normalizeUtils.js";import"./MemCache.js";import"./ItemCache.js";import"./utils3.js";import"../symbols/support/cimSymbolUtils.js";import"./utils2.js";import"./LRUCache.js";import"../renderers/DictionaryRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../renderers/HeatmapRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/support/jsonUtils.js";import"./timeUtils.js";import"../TimeExtent.js";import"../Viewpoint.js";import"./ReadOnlyMultiOriginJSONSupport.js";import"./MultiOriginJSONSupport.js";import{whenTrueOnce as i}from"../core/watchUtils.js";import"./arcgisLayerUrl.js";import"../tasks/support/ProjectParameters.js";import"./fieldType.js";import"./Version.js";import"../geometry/HeightModelInfo.js";import"./mat4.js";import"./pe.js";import"./aaBoundingRect.js";import"./geodesicConstants.js";import"../geometry/support/GeographicTransformationStep.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/projection.js";import"./heightModelInfoUtils.js";import"./spatialReferenceSupport.js";import"../webscene/Lighting.js";import"../webscene/background/Background.js";import"../webscene/background/ColorBackground.js";import"../webscene/Environment.js";import"./OperationalLayer.js";import"./ElevationInfo.js";import"./unitConversionUtils.js";import"./commonProperties2.js";import"../core/HandleOwner.js";import"./_commonjsHelpers.js";import"../core/workers/Connection.js";import"./Scheduler.js";import"../core/workers/workers.js";import"./vec4f64.js";import"./screenshotUtils.js";import"../geometry/support/MeshTexture.js";import"../geometry/support/MeshMaterial.js";import"../geometry/support/MeshMaterialMetallicRoughness.js";import"../geometry/support/MeshComponent.js";import"./earcut.js";import"./deduplicate.js";import"./triangulationUtils.js";import"./quatf64.js";import"./mat3.js";import"./BufferView.js";import"./vec2.js";import"./vec4.js";import"./projection.js";import"./vec32.js";import"./quat.js";import"./domUtils.js";import"./widgetUtils.js";import"./projector.js";import"./accessibleHandler.js";import"./messageBundle.js";import"./renderable.js";import"./vmEvent.js";import"./index.js";import"../widgets/support/widget.js";import"../widgets/Widget.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"./zscale.js";import"./queryZScale.js";import"../layers/support/Field.js";import"../tasks/support/FeatureSet.js";import"./ArcGISService.js";import"./BlendLayer.js";import"./CustomParametersMixin.js";import"./PortalLayer.js";import"./RefreshableLayer.js";import"./ScaleRangeLayer.js";import"./labelUtils.js";import"../layers/support/LabelClass.js";import"./defaultsJSON.js";import"./defaults.js";import"../layers/support/FeatureTemplate.js";import"../layers/support/FeatureType.js";import"../layers/support/FieldsIndex.js";import"./DataLayerSource.js";import"../support/popupUtils.js";import"../tasks/support/AttachmentQuery.js";import"../tasks/support/Query.js";import"../tasks/support/StatisticDefinition.js";import"../tasks/support/RelationshipQuery.js";import"./serviceTileInfoProperty.js";import"./TilemapCache.js";import"./ArcGISCachedService.js";import"../layers/ElevationLayer.js";import"./GraphicsCollection.js";import"../tasks/Task.js";import"./OptimizedGeometry.js";import"./featureConversionUtils.js";import"../tasks/QueryTask.js";import"./pbf.js";import"./pbfQueryUtils.js";import"./query.js";import"../layers/support/AttachmentInfo.js";import"./aaBoundingBox.js";import"./scaleUtils.js";import"./SublayersOwner.js";import"../layers/support/Sublayer.js";import"./sublayerUtils.js";import"../views/BasemapView.js";import"./MapUtils.js";import"../views/View.js";import{R as p}from"./RefreshableLayerView.js";import"./Queue.js";import"./InputManager.js";import"./interactiveToolUtils.js";import"./throttle.js";import"../widgets/Attachments.js";import"../widgets/Attachments/AttachmentsViewModel.js";import"../widgets/Feature/FeatureViewModel.js";import"../widgets/Feature.js";import"./AnchorElementViewModel.js";import"../widgets/Spinner/SpinnerViewModel.js";import"../widgets/Popup.js";import"./layerViewUtils.js";import"./actions.js";import"./GoTo.js";import"../widgets/Popup/PopupViewModel.js";import"./screenUtils2.js";import"../views/input/gamepad/GamepadInputDevice.js";import"../views/input/gamepad/GamepadSettings.js";import"../views/input/Input.js";import"../views/navigation/gamepad/GamepadSettings.js";import"../views/navigation/Navigation.js";import"../layers/TileLayer.js";import"../layers/VectorTileLayer.js";import"./TileKey.js";import"./TileIndex.js";import"./jsonContext.js";import"./StyleRepository.js";import"./unitBezier.js";import"./definitions.js";import"./capabilities2.js";import"../layers/support/ElevationSampler.js";import"./layerUtils.js";import"./quantizationUtils.js";import"./mat2d.js";import"./mat2df32.js";import"./vec2f32.js";import"./dehydratedFeatures.js";import"./ElevationProvider.js";import"./TerrainConst.js";import"../views/GroundView.js";import"./WebGLRequirements.js";import"../views/ViewAnimation.js";import"./mat2df64.js";import"./vec2f64.js";import"./viewpointUtils.js";import"./mat3f32.js";import"../views/2d/ViewState.js";import"./PointerClickHoldAndDrag.js";import"../views/ui/UI.js";import"../widgets/Attribution/AttributionViewModel.js";import"../widgets/Attribution.js";import"../widgets/Compass/CompassViewModel.js";import"../widgets/Compass.js";import"../widgets/NavigationToggle/NavigationToggleViewModel.js";import"../widgets/NavigationToggle.js";import"../widgets/Zoom.js";import"../widgets/Zoom/ZoomViewModel.js";import"../views/ui/DefaultUI.js";import{T as m,L as a}from"../views/SceneView.js";import"./requestImageUtils.js";import"./PiUtils.glsl.js";import"./Program.js";import"./isWebGL2Context.js";import"./glUtil.js";import"./InterleavedLayout.js";import"./mat4f32.js";import"./vec3f32.js";import"./geometryUtils.js";import"./ColorMaterial.js";import"./Util.js";import"./Geometry.js";import"./VertexArrayObject.js";import"./sdfPrimitives.js";import"./lineUtils.js";import"./Object3D.js";import"./intersectorUtils.js";import"./Intersector.js";import"./Camera.js";import"./resources.js";import"./DefaultTextureUnits.js";import"./GLMaterialTexture.js";import"./VerticalOffset.glsl.js";import"./labelFormatUtils.js";import"./elevationAlignmentUtils.js";import"./mat2f64.js";import"./RenderingContext.js";import"./PhysicallyBasedRendering.glsl.js";import"./CameraSpace.glsl.js";import"./lineStippleUtils.js";import"./vec42.js";import"./callExpressionWithFeature.js";import"./RenderGeometry.js";import"./Texture.js";import"./NativeLineMaterial.js";import"./symbolLayerUtils3D.js";import"./objectResourceUtils.js";import"./PropertiesPool.js";import"./vec4f32.js";import"./geometryServiceUtils.js";import"../views/3d/support/SceneViewPerformanceInfo.js";import"./terrainUtils.js";import"../views/3d/support/LayerPerformanceInfo.js";import"./config.js";import"./VectorTile.js";import"./DisplayObject.js";import"./TiledDisplayObject.js";import"./rasterUtils.js";import"./SymbolRepository.js";import l from"../views/layers/LayerView.js";import"./tileUtils.js";import"./quatf32.js";import"./EdgeProcessingWorker.js";import"./hitTestSelectUtils.js";const j=r.getLogger("esri.views.3d.layers.WMTSLayerView3d");let n=class extends(p(m(a(l)))){get hasMixedImageFormats(){return!0}initialize(){const t=i(this.view,"basemapTerrain.tilingSchemeDone").then((()=>{const t=()=>new s("layerview:no-compatible-tiling-scheme","None of the tiling schemes supported by the service are compatible with the scene.");if(!this.view.basemapTerrain.tilingSchemeLocked)throw t();const r=this.view.basemapTerrain.tilingScheme,o=this.layer.activeLayer;let e;if(o&&o.tileMatrixSet){e=o.tileMatrixSet;const t=e.tileInfo,s=this._getTileInfoSupportError(t,e.fullExtent)||this._getTileInfoCompatibilityError(t,r);if(s)throw s}else{if(e=this._getCompatibleTileMatrixSet(),!e)throw t();o.tileMatrixSetId=e.id}this._set("tileInfo",e.tileInfo),this._set("fullExtent",e.fullExtent),this.layer.fullExtent=e.fullExtent}));this.addResolvingPromise(t),this.when((()=>this._initialized()))}refresh(){this.emit("data-changed")}canResume(){if(!super.canResume())return!1;const t=this.layer.activeLayer.tileMatrixSet;return t&&!this._getTileInfoError(t.tileInfo,t.fullExtent)}async doRefresh(){this.suspended||this.emit("data-changed")}_initialized(){this.updatingHandles.add(this,"layer.activeLayer.styleId",(()=>this.refresh())),this.updatingHandles.add(this,"tileMatrixSet",(()=>this.refresh())),this.updatingHandles.add(this.layer,"activeLayer",(t=>{let r=t.tileMatrixSet;if(r){const t=this._getTileInfoError(r.tileInfo,r.fullExtent);t&&(j.error("The selected tile matrix set is not compatible with the view",t),r=null)}else r=this._getCompatibleTileMatrixSet(),r?t.tileMatrixSetId=r.id:j.error("The layer does not provide a tiling scheme that is compatible with the view");this.notifyChange("suspended"),this.canResume()&&this.refresh()}))}_getCompatibleTileMatrixSet(){return this.layer.activeLayer.tileMatrixSets.find((t=>{const r=t.tileInfo;return!this._getTileInfoError(r,t.fullExtent)}))}_getTileInfoError(t,r){return this._getTileInfoSupportError(t,r)||this._getTileInfoCompatibilityError(t,this.view.basemapTerrain.tilingScheme)}};t([o({readOnly:!0})],n.prototype,"hasMixedImageFormats",null),t([o()],n.prototype,"fullExtent",void 0),t([o()],n.prototype,"layer",void 0),t([o({dependsOn:["layer.activeLayer"]})],n.prototype,"suspended",void 0),t([o()],n.prototype,"tileInfo",void 0),n=t([e("esri.views.3d.layers.WMTSLayerView3D")],n);var u=n;export default u;
