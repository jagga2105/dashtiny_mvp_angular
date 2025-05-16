import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-timeline',
  templateUrl: './map-timeline.component.html',
  styleUrls: ['./map-timeline.component.scss']
})
export class MapTimelineComponent implements OnInit, AfterViewInit {
  @Input() itineraryData: any;
  private map: L.Map;
  private markers: L.Marker[] = [];
  private path: L.Polyline;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
    if (this.itineraryData) {
      this.plotItinerary();
    }
  }

  private initMap(): void {
    this.map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private async plotItinerary() {
    const coordinates: L.LatLngExpression[] = [];
    
    // Clear existing markers and paths
    this.clearMap();

    for (const day of this.itineraryData.days) {
      for (const activity of day.activities) {
        if (activity.location) {
          try {
            const coords = await this.getCoordinates(activity.location);
            coordinates.push([coords.lat, coords.lon]);
            
            // Create custom icon
            const icon = L.divIcon({
              html: `<div class="custom-marker">
                      <div class="marker-number">${this.markers.length + 1}</div>
                      <div class="marker-tooltip">${activity.time}: ${activity.title}</div>
                    </div>`,
              className: 'custom-marker-container'
            });

            // Add marker
            const marker = L.marker([coords.lat, coords.lon], { icon })
              .bindPopup(`<b>Day ${day.dayNumber}</b><br>${activity.time}<br>${activity.title}`);
            
            this.markers.push(marker);
            marker.addTo(this.map);
          } catch (error) {
            console.error('Error geocoding location:', activity.location);
          }
        }
      }
    }

    // Draw path between markers
    if (coordinates.length > 0) {
      this.path = L.polyline(coordinates, {
        color: '#fe8535',
        weight: 3,
        opacity: 0.7,
        dashArray: '10, 10'
      }).addTo(this.map);

      // Fit map to show all markers
      this.map.fitBounds(L.latLngBounds(coordinates));
    }
  }

  private async getCoordinates(location: string): Promise<{lat: number, lon: number}> {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
    );
    const data = await response.json();
    
    if (data && data[0]) {
      return {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon)
      };
    }
    throw new Error('Location not found');
  }

  private clearMap() {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
    if (this.path) {
      this.path.remove();
    }
  }
}
