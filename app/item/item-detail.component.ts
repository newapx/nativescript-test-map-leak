import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-details",
    moduleId: module.id,
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    id: "google" | "apple";
    protected apple: MKMapView;
    protected google;

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params["id"];
    }

    ngOnUnload(){

    }

    onMapReady($event){
        
    }

    creatingView($event){
        // google
        if (this.id == "google"){
            this.google = $event.view = GMSMapView.mapWithFrameCamera(CGRectZero, 
                GMSCameraPosition.cameraWithLatitudeLongitudeZoomBearingViewingAngle(0, 0, 10, 0, 0)
            );
        }
        
        // apple
        if (this.id == "apple") {
            this.apple = $event.view = MKMapView.alloc().initWithFrame(UIScreen.mainScreen.bounds);
        }
    }

    unloadedView($event){
        $event.view = null;
        // if (this.apple) this.apple.release();
        if (this.google){
            this.google.clear();
            this.google.stopRendering();
            this.google.removeFromSuperview();
        }
        this.google = this.apple = null;
    }
}
