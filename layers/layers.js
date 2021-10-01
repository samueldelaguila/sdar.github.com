ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([277663.773550, 8683706.257364, 277972.620901, 8683908.282512]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MosaicoGEP_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "MosaicoGEP",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MosaicoGEP_1.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [277714.319321, 8683762.119840, 277932.383675, 8683884.820774]
                            })
                        });
var format_Sectores_2 = new ol.format.GeoJSON();
var features_Sectores_2 = format_Sectores_2.readFeatures(json_Sectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Sectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sectores_2.addFeatures(features_Sectores_2);
var lyr_Sectores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sectores_2, 
                style: style_Sectores_2,
                interactive: true,
                title: '<img src="styles/legend/Sectores_2.png" /> Sectores'
            });
var format_Plataforma_3 = new ol.format.GeoJSON();
var features_Plataforma_3 = format_Plataforma_3.readFeatures(json_Plataforma_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Plataforma_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plataforma_3.addFeatures(features_Plataforma_3);
var lyr_Plataforma_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Plataforma_3, 
                style: style_Plataforma_3,
                interactive: true,
                title: '<img src="styles/legend/Plataforma_3.png" /> Plataforma'
            });
var format_Veredas_4 = new ol.format.GeoJSON();
var features_Veredas_4 = format_Veredas_4.readFeatures(json_Veredas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Veredas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veredas_4.addFeatures(features_Veredas_4);
var lyr_Veredas_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Veredas_4, 
                style: style_Veredas_4,
                interactive: true,
                title: '<img src="styles/legend/Veredas_4.png" /> Veredas'
            });
var format_Arboles_5 = new ol.format.GeoJSON();
var features_Arboles_5 = format_Arboles_5.readFeatures(json_Arboles_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Arboles_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arboles_5.addFeatures(features_Arboles_5);
var lyr_Arboles_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arboles_5, 
                style: style_Arboles_5,
                interactive: true,
                title: '<img src="styles/legend/Arboles_5.png" /> Arboles'
            });
var format_FuentesdeAgua_6 = new ol.format.GeoJSON();
var features_FuentesdeAgua_6 = format_FuentesdeAgua_6.readFeatures(json_FuentesdeAgua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_FuentesdeAgua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FuentesdeAgua_6.addFeatures(features_FuentesdeAgua_6);
var lyr_FuentesdeAgua_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FuentesdeAgua_6, 
                style: style_FuentesdeAgua_6,
                interactive: true,
                title: '<img src="styles/legend/FuentesdeAgua_6.png" /> Fuentes de Agua'
            });
var format_Bancas_7 = new ol.format.GeoJSON();
var features_Bancas_7 = format_Bancas_7.readFeatures(json_Bancas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Bancas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bancas_7.addFeatures(features_Bancas_7);
var lyr_Bancas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bancas_7, 
                style: style_Bancas_7,
                interactive: true,
                title: '<img src="styles/legend/Bancas_7.png" /> Bancas'
            });
var format_PostesdeLuz_8 = new ol.format.GeoJSON();
var features_PostesdeLuz_8 = format_PostesdeLuz_8.readFeatures(json_PostesdeLuz_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PostesdeLuz_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostesdeLuz_8.addFeatures(features_PostesdeLuz_8);
var lyr_PostesdeLuz_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PostesdeLuz_8, 
                style: style_PostesdeLuz_8,
                interactive: true,
                title: '<img src="styles/legend/PostesdeLuz_8.png" /> Postes de Luz'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MosaicoGEP_1.setVisible(true);lyr_Sectores_2.setVisible(true);lyr_Plataforma_3.setVisible(true);lyr_Veredas_4.setVisible(true);lyr_Arboles_5.setVisible(true);lyr_FuentesdeAgua_6.setVisible(true);lyr_Bancas_7.setVisible(true);lyr_PostesdeLuz_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MosaicoGEP_1,lyr_Sectores_2,lyr_Plataforma_3,lyr_Veredas_4,lyr_Arboles_5,lyr_FuentesdeAgua_6,lyr_Bancas_7,lyr_PostesdeLuz_8];
lyr_Sectores_2.set('fieldAliases', {'id': 'id', 'Zona': 'Zona', 'Area (m2)': 'Area (m2)', });
lyr_Plataforma_3.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_Veredas_4.set('fieldAliases', {'id': 'id', 'Ancho': 'Ancho', 'Colind': 'Colind', 'Long_m': 'Long_m', });
lyr_Arboles_5.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Altura (m)': 'Altura (m)', });
lyr_FuentesdeAgua_6.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', });
lyr_Bancas_7.set('fieldAliases', {'id': 'id', 'Tipo': 'Tipo', 'Medidas': 'Medidas', });
lyr_PostesdeLuz_8.set('fieldAliases', {'id': 'id', 'Altura (m)': 'Altura (m)', });
lyr_Sectores_2.set('fieldImages', {'id': 'TextEdit', 'Zona': 'TextEdit', 'Area (m2)': '', });
lyr_Plataforma_3.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', });
lyr_Veredas_4.set('fieldImages', {'id': 'TextEdit', 'Ancho': 'TextEdit', 'Colind': 'TextEdit', 'Long_m': 'TextEdit', });
lyr_Arboles_5.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Altura (m)': '', });
lyr_FuentesdeAgua_6.set('fieldImages', {'id': 'TextEdit', 'Tipo': '', });
lyr_Bancas_7.set('fieldImages', {'id': 'TextEdit', 'Tipo': 'TextEdit', 'Medidas': 'TextEdit', });
lyr_PostesdeLuz_8.set('fieldImages', {'id': 'TextEdit', 'Altura (m)': '', });
lyr_Sectores_2.set('fieldLabels', {'id': 'no label', 'Zona': 'no label', 'Area (m2)': 'header label', });
lyr_Plataforma_3.set('fieldLabels', {'id': 'no label', 'Area': 'header label', });
lyr_Veredas_4.set('fieldLabels', {'id': 'no label', 'Ancho': 'no label', 'Colind': 'no label', 'Long_m': 'header label', });
lyr_Arboles_5.set('fieldLabels', {'id': 'header label', 'Tipo': 'header label', 'Altura (m)': 'no label', });
lyr_FuentesdeAgua_6.set('fieldLabels', {'id': 'no label', 'Tipo': 'no label', });
lyr_Bancas_7.set('fieldLabels', {'id': 'no label', 'Tipo': 'no label', 'Medidas': 'no label', });
lyr_PostesdeLuz_8.set('fieldLabels', {'id': 'no label', 'Altura (m)': 'no label', });
lyr_PostesdeLuz_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});