var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_frontiera_ro_1 = new ol.format.GeoJSON();
var features_frontiera_ro_1 = format_frontiera_ro_1.readFeatures(json_frontiera_ro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frontiera_ro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frontiera_ro_1.addFeatures(features_frontiera_ro_1);
var lyr_frontiera_ro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frontiera_ro_1, 
                style: style_frontiera_ro_1,
                popuplayertitle: "frontiera_ro",
                interactive: true,
                title: '<img src="styles/legend/frontiera_ro_1.png" /> frontiera_ro'
            });
var format_statii_medusa_2 = new ol.format.GeoJSON();
var features_statii_medusa_2 = format_statii_medusa_2.readFeatures(json_statii_medusa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_statii_medusa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_statii_medusa_2.addFeatures(features_statii_medusa_2);
var lyr_statii_medusa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_statii_medusa_2, 
                style: style_statii_medusa_2,
                popuplayertitle: "statii_medusa",
                interactive: true,
                title: '<img src="styles/legend/statii_medusa_2.png" /> statii_medusa'
            });
var format_arce_medusa_3 = new ol.format.GeoJSON();
var features_arce_medusa_3 = format_arce_medusa_3.readFeatures(json_arce_medusa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arce_medusa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arce_medusa_3.addFeatures(features_arce_medusa_3);
var lyr_arce_medusa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arce_medusa_3, 
                style: style_arce_medusa_3,
                popuplayertitle: "arce_medusa",
                interactive: true,
                title: '<img src="styles/legend/arce_medusa_3.png" /> arce_medusa'
            });
var format_arce_osm_4 = new ol.format.GeoJSON();
var features_arce_osm_4 = format_arce_osm_4.readFeatures(json_arce_osm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_arce_osm_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_arce_osm_4.addFeatures(features_arce_osm_4);
var lyr_arce_osm_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_arce_osm_4, 
                style: style_arce_osm_4,
                popuplayertitle: "arce_osm",
                interactive: true,
                title: '<img src="styles/legend/arce_osm_4.png" /> arce_osm'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_frontiera_ro_1.setVisible(true);lyr_statii_medusa_2.setVisible(true);lyr_arce_medusa_3.setVisible(true);lyr_arce_osm_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_frontiera_ro_1,lyr_statii_medusa_2,lyr_arce_medusa_3,lyr_arce_osm_4];
lyr_frontiera_ro_1.set('fieldAliases', {'OID_': 'OID_', });
lyr_statii_medusa_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'cod': 'cod', 'nume': 'nume', });
lyr_arce_medusa_3.set('fieldAliases', {'id': 'id', 'pair': 'pair', 'FirRC': 'FirRC', 'linia': 'linia', 'den_dc': 'den_dc', 'codst1': 'codst1', 'codst2': 'codst2', });
lyr_arce_osm_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid1': 'ogc_fid1', 'ogc_fid0': 'ogc_fid0', 'pair': 'pair', 'sursa': 'sursa', 'my_flag': 'my_flag', 'lungim': 'lungim', 'atribute_arce_PAIR': 'atribute_arce_PAIR', 'atribute_arce_ARC_FALS': 'atribute_arce_ARC_FALS', 'atribute_arce_KM_TUI': 'atribute_arce_KM_TUI', 'atribute_arce_SECTIA_TUI': 'atribute_arce_SECTIA_TUI', 'atribute_arce_COD_FIR_RC': 'atribute_arce_COD_FIR_RC', 'atribute_arce_CLASA_LINIE': 'atribute_arce_CLASA_LINIE', 'atribute_arce_CATEGORIA_LINIE': 'atribute_arce_CATEGORIA_LINIE', 'atribute_arce_LINIE_DUBLA': 'atribute_arce_LINIE_DUBLA', 'atribute_arce_LINIE_BLA': 'atribute_arce_LINIE_BLA', 'atribute_arce_LINIE_IFTE': 'atribute_arce_LINIE_IFTE', });
lyr_frontiera_ro_1.set('fieldImages', {'OID_': 'TextEdit', });
lyr_statii_medusa_2.set('fieldImages', {'ogc_fid': '', 'cod': '', 'nume': '', });
lyr_arce_medusa_3.set('fieldImages', {'id': '', 'pair': '', 'FirRC': '', 'linia': '', 'den_dc': '', 'codst1': '', 'codst2': '', });
lyr_arce_osm_4.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid1': 'TextEdit', 'ogc_fid0': 'TextEdit', 'pair': 'TextEdit', 'sursa': 'TextEdit', 'my_flag': 'TextEdit', 'lungim': '', 'atribute_arce_PAIR': 'TextEdit', 'atribute_arce_ARC_FALS': 'TextEdit', 'atribute_arce_KM_TUI': 'Range', 'atribute_arce_SECTIA_TUI': 'Range', 'atribute_arce_COD_FIR_RC': 'Range', 'atribute_arce_CLASA_LINIE': 'TextEdit', 'atribute_arce_CATEGORIA_LINIE': 'TextEdit', 'atribute_arce_LINIE_DUBLA': 'TextEdit', 'atribute_arce_LINIE_BLA': 'TextEdit', 'atribute_arce_LINIE_IFTE': 'TextEdit', });
lyr_frontiera_ro_1.set('fieldLabels', {'OID_': 'inline label - always visible', });
lyr_statii_medusa_2.set('fieldLabels', {'ogc_fid': 'inline label - always visible', 'cod': 'inline label - always visible', 'nume': 'inline label - always visible', });
lyr_arce_medusa_3.set('fieldLabels', {'id': 'inline label - always visible', 'pair': 'inline label - always visible', 'FirRC': 'inline label - always visible', 'linia': 'inline label - always visible', 'den_dc': 'inline label - always visible', 'codst1': 'inline label - always visible', 'codst2': 'inline label - always visible', });
lyr_arce_osm_4.set('fieldLabels', {'ogc_fid': 'inline label - always visible', 'ogc_fid1': 'inline label - always visible', 'ogc_fid0': 'inline label - always visible', 'pair': 'inline label - always visible', 'sursa': 'inline label - always visible', 'my_flag': 'inline label - always visible', 'lungim': 'inline label - always visible', 'atribute_arce_PAIR': 'inline label - always visible', 'atribute_arce_ARC_FALS': 'inline label - always visible', 'atribute_arce_KM_TUI': 'inline label - always visible', 'atribute_arce_SECTIA_TUI': 'inline label - always visible', 'atribute_arce_COD_FIR_RC': 'inline label - always visible', 'atribute_arce_CLASA_LINIE': 'inline label - always visible', 'atribute_arce_CATEGORIA_LINIE': 'inline label - always visible', 'atribute_arce_LINIE_DUBLA': 'inline label - always visible', 'atribute_arce_LINIE_BLA': 'inline label - always visible', 'atribute_arce_LINIE_IFTE': 'inline label - always visible', });
lyr_arce_osm_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});