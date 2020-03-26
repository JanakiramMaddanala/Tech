import { User } from './User';
import { Company } from './Company';

export interface Mappable {
    location: {
        latitude: number;
        longitude: number;
    };
    markerContent(): string;
    color: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMarker(mappable: Mappable) {
        let marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.latitude,
                lng: mappable.location.longitude,
            }
        })  
        
        marker.addListener('click', (e) => {
            console.log(e)
            let infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        })
    }
}