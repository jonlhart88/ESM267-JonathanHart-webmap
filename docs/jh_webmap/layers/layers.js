var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Extreme_1 = new ol.format.GeoJSON();
var features_Extreme_1 = format_Extreme_1.readFeatures(json_Extreme_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Extreme_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Extreme_1.addFeatures(features_Extreme_1);
var lyr_Extreme_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Extreme_1, 
                style: style_Extreme_1,
                interactive: false,
                title: '<img src="styles/legend/Extreme_1.png" /> Extreme'
            });
var format_HazardClass_2 = new ol.format.GeoJSON();
var features_HazardClass_2 = format_HazardClass_2.readFeatures(json_HazardClass_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardClass_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardClass_2.addFeatures(features_HazardClass_2);
var lyr_HazardClass_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HazardClass_2, 
                style: style_HazardClass_2,
                interactive: false,
    title: 'Hazard Class<br />\
    <img src="styles/legend/HazardClass_2_0.png" /> Very High<br />\
    <img src="styles/legend/HazardClass_2_1.png" /> Very High (Recommended)<br />'
        });
var format_NewHomeConstructionPost94SRA_3 = new ol.format.GeoJSON();
var features_NewHomeConstructionPost94SRA_3 = format_NewHomeConstructionPost94SRA_3.readFeatures(json_NewHomeConstructionPost94SRA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewHomeConstructionPost94SRA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewHomeConstructionPost94SRA_3.addFeatures(features_NewHomeConstructionPost94SRA_3);
var lyr_NewHomeConstructionPost94SRA_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewHomeConstructionPost94SRA_3, 
                style: style_NewHomeConstructionPost94SRA_3,
                interactive: false,
                title: '<img src="styles/legend/NewHomeConstructionPost94SRA_3.png" /> New Home Construction (Post \'94) {SRA}'
            });
var format_NewHomeConstructionPost94LRA_4 = new ol.format.GeoJSON();
var features_NewHomeConstructionPost94LRA_4 = format_NewHomeConstructionPost94LRA_4.readFeatures(json_NewHomeConstructionPost94LRA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NewHomeConstructionPost94LRA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewHomeConstructionPost94LRA_4.addFeatures(features_NewHomeConstructionPost94LRA_4);
var lyr_NewHomeConstructionPost94LRA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NewHomeConstructionPost94LRA_4, 
                style: style_NewHomeConstructionPost94LRA_4,
                interactive: false,
                title: '<img src="styles/legend/NewHomeConstructionPost94LRA_4.png" /> New Home Construction (Post \'94) {LRA}'
            });
var format_NationalParkServiceLand_5 = new ol.format.GeoJSON();
var features_NationalParkServiceLand_5 = format_NationalParkServiceLand_5.readFeatures(json_NationalParkServiceLand_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalParkServiceLand_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalParkServiceLand_5.addFeatures(features_NationalParkServiceLand_5);
var lyr_NationalParkServiceLand_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NationalParkServiceLand_5, 
                style: style_NationalParkServiceLand_5,
                interactive: true,
                title: '<img src="styles/legend/NationalParkServiceLand_5.png" /> National Park Service Land'
            });
var format_NationalForestLand_6 = new ol.format.GeoJSON();
var features_NationalForestLand_6 = format_NationalForestLand_6.readFeatures(json_NationalForestLand_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NationalForestLand_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalForestLand_6.addFeatures(features_NationalForestLand_6);
var lyr_NationalForestLand_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NationalForestLand_6, 
                style: style_NationalForestLand_6,
                interactive: true,
                title: '<img src="styles/legend/NationalForestLand_6.png" /> National Forest Land'
            });
var format_CountyLines_7 = new ol.format.GeoJSON();
var features_CountyLines_7 = format_CountyLines_7.readFeatures(json_CountyLines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyLines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyLines_7.addFeatures(features_CountyLines_7);
var lyr_CountyLines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CountyLines_7, 
                style: style_CountyLines_7,
                interactive: true,
                title: '<img src="styles/legend/CountyLines_7.png" /> County Lines'
            });
var format_WildfirePerimetersPre1970_8 = new ol.format.GeoJSON();
var features_WildfirePerimetersPre1970_8 = format_WildfirePerimetersPre1970_8.readFeatures(json_WildfirePerimetersPre1970_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimetersPre1970_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimetersPre1970_8.addFeatures(features_WildfirePerimetersPre1970_8);
var lyr_WildfirePerimetersPre1970_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimetersPre1970_8, 
                style: style_WildfirePerimetersPre1970_8,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimetersPre1970_8.png" /> Wildfire Perimeters: Pre-1970'
            });
var format_WildfirePerimeters19701979_9 = new ol.format.GeoJSON();
var features_WildfirePerimeters19701979_9 = format_WildfirePerimeters19701979_9.readFeatures(json_WildfirePerimeters19701979_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimeters19701979_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimeters19701979_9.addFeatures(features_WildfirePerimeters19701979_9);
var lyr_WildfirePerimeters19701979_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimeters19701979_9, 
                style: style_WildfirePerimeters19701979_9,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimeters19701979_9.png" /> Wildfire Perimeters: 1970-1979'
            });
var format_WildfirePerimeters19801989_10 = new ol.format.GeoJSON();
var features_WildfirePerimeters19801989_10 = format_WildfirePerimeters19801989_10.readFeatures(json_WildfirePerimeters19801989_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimeters19801989_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimeters19801989_10.addFeatures(features_WildfirePerimeters19801989_10);
var lyr_WildfirePerimeters19801989_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimeters19801989_10, 
                style: style_WildfirePerimeters19801989_10,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimeters19801989_10.png" /> Wildfire Perimeters: 1980-1989'
            });
var format_WildfirePerimeters19901999_11 = new ol.format.GeoJSON();
var features_WildfirePerimeters19901999_11 = format_WildfirePerimeters19901999_11.readFeatures(json_WildfirePerimeters19901999_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimeters19901999_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimeters19901999_11.addFeatures(features_WildfirePerimeters19901999_11);
var lyr_WildfirePerimeters19901999_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimeters19901999_11, 
                style: style_WildfirePerimeters19901999_11,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimeters19901999_11.png" /> Wildfire Perimeters: 1990-1999'
            });
var format_WildfirePerimeters20002009_12 = new ol.format.GeoJSON();
var features_WildfirePerimeters20002009_12 = format_WildfirePerimeters20002009_12.readFeatures(json_WildfirePerimeters20002009_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimeters20002009_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimeters20002009_12.addFeatures(features_WildfirePerimeters20002009_12);
var lyr_WildfirePerimeters20002009_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimeters20002009_12, 
                style: style_WildfirePerimeters20002009_12,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimeters20002009_12.png" /> Wildfire Perimeters: 2000-2009'
            });
var format_WildfirePerimeters20102019_13 = new ol.format.GeoJSON();
var features_WildfirePerimeters20102019_13 = format_WildfirePerimeters20102019_13.readFeatures(json_WildfirePerimeters20102019_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildfirePerimeters20102019_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildfirePerimeters20102019_13.addFeatures(features_WildfirePerimeters20102019_13);
var lyr_WildfirePerimeters20102019_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildfirePerimeters20102019_13, 
                style: style_WildfirePerimeters20102019_13,
                interactive: true,
                title: '<img src="styles/legend/WildfirePerimeters20102019_13.png" /> Wildfire Perimeters: 2010-2019'
            });
var group_Homes = new ol.layer.Group({
                                layers: [lyr_NewHomeConstructionPost94SRA_3,lyr_NewHomeConstructionPost94LRA_4,],
                                title: "Homes"});
var group_CALFIREWildfireHazardSeverityZones = new ol.layer.Group({
                                layers: [lyr_HazardClass_2,],
                                title: "CAL FIRE Wildfire Hazard Severity Zones"});
var group_CaliforniaPublicUtilitiesCommissionCPUCFireHazardSeverityZones = new ol.layer.Group({
                                layers: [lyr_Extreme_1,],
                                title: "California Public Utilities Commission (CPUC) Fire Hazard Severity Zones"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_GoogleHybrid_0,],
                                title: "Basemap"});

lyr_GoogleHybrid_0.setVisible(true);lyr_Extreme_1.setVisible(false);lyr_HazardClass_2.setVisible(true);lyr_NewHomeConstructionPost94SRA_3.setVisible(true);lyr_NewHomeConstructionPost94LRA_4.setVisible(true);lyr_NationalParkServiceLand_5.setVisible(false);lyr_NationalForestLand_6.setVisible(false);lyr_CountyLines_7.setVisible(false);lyr_WildfirePerimetersPre1970_8.setVisible(false);lyr_WildfirePerimeters19701979_9.setVisible(false);lyr_WildfirePerimeters19801989_10.setVisible(false);lyr_WildfirePerimeters19901999_11.setVisible(false);lyr_WildfirePerimeters20002009_12.setVisible(false);lyr_WildfirePerimeters20102019_13.setVisible(false);
var layersList = [group_Basemap,group_CaliforniaPublicUtilitiesCommissionCPUCFireHazardSeverityZones,group_CALFIREWildfireHazardSeverityZones,group_Homes,lyr_NationalParkServiceLand_5,lyr_NationalForestLand_6,lyr_CountyLines_7,lyr_WildfirePerimetersPre1970_8,lyr_WildfirePerimeters19701979_9,lyr_WildfirePerimeters19801989_10,lyr_WildfirePerimeters19901999_11,lyr_WildfirePerimeters20002009_12,lyr_WildfirePerimeters20102019_13];
lyr_Extreme_1.set('fieldAliases', {'acres': 'acres', 'HazZone': 'HazZone', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_HazardClass_2.set('fieldAliases', {'Type': 'Type', 'Status': 'Status', 'Class': 'Class', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NewHomeConstructionPost94SRA_3.set('fieldAliases', {'FID_1': 'FID_1', });
lyr_NewHomeConstructionPost94LRA_4.set('fieldAliases', {'FID_1': 'FID_1', });
lyr_NationalParkServiceLand_5.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_NationalForestLand_6.set('fieldAliases', {'OID': 'OID', 'Unit': 'Unit', });
lyr_CountyLines_7.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'County', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_WildfirePerimetersPre1970_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_WildfirePerimeters19701979_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_WildfirePerimeters19801989_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_WildfirePerimeters19901999_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_WildfirePerimeters20002009_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_WildfirePerimeters20102019_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'Year', 'STATE': 'STATE', 'UNIT_ID': 'UNIT_ID', 'FIRE_NUM': 'FIRE_NUM', 'FIRE_NAME': 'Fire Name', 'AGENCY': 'AGENCY', 'C_METHOD': 'C_METHOD', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'INC_NUM': 'INC_NUM', 'OBJECTIVE': 'OBJECTIVE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'Size (acres)', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Extreme_1.set('fieldImages', {'acres': 'TextEdit', 'HazZone': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HazardClass_2.set('fieldImages', {'Type': 'TextEdit', 'Status': 'TextEdit', 'Class': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NewHomeConstructionPost94SRA_3.set('fieldImages', {'FID_1': 'TextEdit', });
lyr_NewHomeConstructionPost94LRA_4.set('fieldImages', {'FID_1': 'TextEdit', });
lyr_NationalParkServiceLand_5.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_NationalForestLand_6.set('fieldImages', {'OID': 'Hidden', 'Unit': 'TextEdit', });
lyr_CountyLines_7.set('fieldImages', {'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'COUNTYNS': 'Hidden', 'GEOID': 'Hidden', 'NAME': 'TextEdit', 'NAMELSAD': 'Hidden', 'LSAD': 'Hidden', 'CLASSFP': 'Hidden', 'MTFCC': 'Hidden', 'CSAFP': 'Hidden', 'CBSAFP': 'Hidden', 'METDIVFP': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', });
lyr_WildfirePerimetersPre1970_8.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_WildfirePerimeters19701979_9.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_WildfirePerimeters19801989_10.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_WildfirePerimeters19901999_11.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_WildfirePerimeters20002009_12.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_WildfirePerimeters20102019_13.set('fieldImages', {'OBJECTID': 'Hidden', 'YEAR_': 'TextEdit', 'STATE': 'Hidden', 'UNIT_ID': 'Hidden', 'FIRE_NUM': 'Hidden', 'FIRE_NAME': 'TextEdit', 'AGENCY': 'Hidden', 'C_METHOD': 'Hidden', 'ALARM_DATE': 'Hidden', 'CONT_DATE': 'Hidden', 'CAUSE': 'Hidden', 'INC_NUM': 'Hidden', 'OBJECTIVE': 'Hidden', 'COMMENTS': 'Hidden', 'REPORT_AC': 'Hidden', 'GIS_ACRES': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Extreme_1.set('fieldLabels', {});
lyr_HazardClass_2.set('fieldLabels', {});
lyr_NewHomeConstructionPost94SRA_3.set('fieldLabels', {});
lyr_NewHomeConstructionPost94LRA_4.set('fieldLabels', {});
lyr_NationalParkServiceLand_5.set('fieldLabels', {'Name': 'header label', });
lyr_NationalForestLand_6.set('fieldLabels', {'Unit': 'header label', });
lyr_CountyLines_7.set('fieldLabels', {'NAME': 'header label', });
lyr_WildfirePerimetersPre1970_8.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters19701979_9.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters19801989_10.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters19901999_11.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters20002009_12.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters20102019_13.set('fieldLabels', {'YEAR_': 'header label', 'FIRE_NAME': 'header label', 'GIS_ACRES': 'header label', });
lyr_WildfirePerimeters20102019_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});