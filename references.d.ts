/// <reference path="./node_modules/tns-platform-declarations/ios.d.ts" />
/// <reference path="./node_modules/tns-platform-declarations/android.d.ts" />
// /// <reference path="./node_modules/@types/googlemaps/index.d.ts" />
// /// <reference path="./node_modules/@types/jasmine/index.d.ts" />

// -- android
declare var com; 

declare module android {
    export module Manifest {
        export module permission {
            export var READ_EXTERNAL_STORAGE: any;
            export var CALL_PHONE: any;
            export var CAMERA: any;
        }
    }
}

// -- iOS
declare var GMSServices, GMSGeocoder, NSMakeRange, GMSMapView, GMSCameraPosition;
// firebase messaging
declare var FIRInstanceID, FIRMessaging, MapViewAnnotation;

// // Google Places API for iOS
// declare var GMSPlacesClient, GMSAutocompleteFilter,
//             kGMSPlacesAutocompleteTypeFilterCity, kGMSPlacesAutocompleteTypeFilterGeocode, // константы фильтров 
//             CLLocationCoordinate2DMake, GMSCoordinateBounds