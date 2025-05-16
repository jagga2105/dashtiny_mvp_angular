import { Component, Input, OnInit, AfterViewInit, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import * as L from 'leaflet';

interface LocationMarker {
  name: string;
  coordinates: { lat: number; lng: number };
  type: string;
  day?: number;
  description?: string;
}

@Component({
  selector: 'app-map-display',
  templateUrl: './map-display.component.html',
  styleUrls: ['./map-display.component.scss']
})
export class MapDisplayComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() locations: LocationMarker[] = [];
  private map: any = null;
  private mapElements: any[] = [];
  private isMapInitialized = false;

  private readonly ICON_MAP: { [key: string]: string } = {
    'restaurant': 'restaurant',
    'cafe': 'local_cafe',
    'temple': 'temple_hindu',
    'park': 'park',
    'museum': 'museum',
    'hotel': 'hotel',
    'monument': 'account_balance',
    'departure': 'flight_takeoff',
    'arrival': 'flight_land',
    'transport': 'directions_bus',
    'hiking': 'hiking',
    'shopping': 'shopping_bag',
    'landmark': 'location_on',
    'waterfall': 'water',
    'lake': 'water',
    'viewpoint': 'landscape'
  };

  constructor() { }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isMapInitialized && changes['locations']) {
      this.updateMapElements();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initMap();
      this.isMapInitialized = true;
      if (this.locations?.length > 0) {
        this.updateMapElements();
      }
    }, 100);
  }

  ngOnDestroy(): void {
    this.clearMap();
  }

  private initMap(): void {
    if (this.map) {
      this.clearMap();
    }

    try {
      this.map = L.map('map', {
        center: [20.5937, 78.9629],
        zoom: 5
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(this.map);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  }

  private async updateMapElements(): Promise<void> {
    if (!this.map || !this.locations?.length) return;

    try {
      this.clearMapElements();
      const bounds = L.latLngBounds([]);

      // Add markers first
      this.locations.forEach(location => {
        if (location.coordinates) {
          try {
            const marker = this.addMarker(location);
            if (marker) {
              this.mapElements.push(marker);
              bounds.extend([location.coordinates.lat, location.coordinates.lng]);
            }
          } catch (error) {
            console.error('Error adding marker:', error);
          }
        }
      });

      // Then add routes
      await this.drawRoutes();

      if (bounds.isValid()) {
        this.map.fitBounds(bounds, { padding: [50, 50] });
      }
    } catch (error) {
      console.error('Error updating map elements:', error);
    }
  }

  private addMarker(location: LocationMarker): any {
    if (!this.map) return null;

    try {
      const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
        icon: L.divIcon({
          className: `marker-icon ${location.type}`,
          html: `<i class="material-icons">${this.getMarkerIcon(location.type)}</i>`,
          iconSize: [30, 30],
          iconAnchor: [15, 30]
        })
      });

      marker.bindPopup(this.createPopupContent(location), {
        className: 'custom-popup-container',
        maxWidth: 300,
        closeButton: true
      });

      marker.addTo(this.map);
      return marker;
    } catch (error) {
      console.error('Error creating marker:', error);
      return null;
    }
  }

  private createPopupContent(location: LocationMarker): string {
    const popupContent = `
      <div class="custom-popup">
        <div class="popup-header ${location.type}">
          <i class="material-icons">${this.getMarkerIcon(location.type)}</i>
          <h4>${location.name}</h4>
        </div>
        ${location.day ? `
          <div class="popup-day">
            <i class="material-icons">event</i>
            <span>Day ${location.day}</span>
          </div>
        ` : ''}
        ${location.description ? `
          <div class="popup-description">
            <i class="material-icons">info</i>
            <p>${location.description}</p>
          </div>
        ` : ''}
        <div class="popup-type">
          <i class="material-icons">category</i>
          <span>${this.formatPlaceType(location.type)}</span>
        </div>
      </div>
    `;
    return popupContent;
  }

  private async drawRoutes(): Promise<void> {
    for (let i = 0; i < this.locations.length - 1; i++) {
      const current = this.locations[i];
      const next = this.locations[i + 1];

      if (current.coordinates && next.coordinates) {
        try {
          // Draw a curved line between points
          const curvedLine = this.createCurvedLine(
            [current.coordinates.lat, current.coordinates.lng],
            [next.coordinates.lat, next.coordinates.lng]
          );
          this.mapElements.push(curvedLine);

          // Add direction arrows along the line
          this.addDirectionArrows(curvedLine);
        } catch (error) {
          console.error('Error creating route:', error);
        }
      }
    }
  }

  private createCurvedLine(start: [number, number], end: [number, number]): any {
    // Calculate a control point to create a curve
    const mid = [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2
    ];
    const offset = (end[1] - start[1]) * 0.1; // Adjust curve intensity here
    const controlPoint = [mid[0] + offset, mid[1]];

    // Create a curved path using quadratic Bezier curve
    const pathPoints = this.getBezierPoints(start, controlPoint as [number, number], end);
    
    const line = L.polyline(pathPoints, {
      color: '#2196F3',
      weight: 3,
      opacity: 0.8,
      dashArray: '10, 10',
      lineJoin: 'round',
      lineCap: 'round'
    }).addTo(this.map);

    return line;
  }

  private getBezierPoints(start: [number, number], control: [number, number], end: [number, number]): [number, number][] {
    const points: [number, number][] = [];
    const steps = 50; // Number of points in the curve

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const lat = Math.pow(1 - t, 2) * start[0] + 
                 2 * (1 - t) * t * control[0] + 
                 Math.pow(t, 2) * end[0];
      const lng = Math.pow(1 - t, 2) * start[1] + 
                 2 * (1 - t) * t * control[1] + 
                 Math.pow(t, 2) * end[1];
      points.push([lat, lng]);
    }

    return points;
  }

  private addDirectionArrows(line: any): void {
    if (!this.map) return;

    const points = line.getLatLngs();
    const arrowCount = 3; // Number of arrows to add
    const interval = Math.floor(points.length / (arrowCount + 1));

    for (let i = interval; i < points.length - interval; i += interval) {
      const point = points[i];
      const prevPoint = points[i - 1];

      const angle = Math.atan2(
        point.lng - prevPoint.lng,
        point.lat - prevPoint.lat
      ) * (180 / Math.PI);

      const arrow = L.marker([point.lat, point.lng], {
        icon: L.divIcon({
          className: 'route-arrow',
          html: `<i class="material-icons" style="transform: rotate(${angle}deg)">arrow_right_alt</i>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })
      }).addTo(this.map);

      this.mapElements.push(arrow);
    }
  }

  private clearMapElements(): void {
    this.mapElements.forEach(element => {
      try {
        if (element && typeof element.remove === 'function') {
          element.remove();
        }
      } catch (error) {
        console.error('Error removing map element:', error);
      }
    });
    this.mapElements = [];
  }

  private clearMap(): void {
    this.clearMapElements();
    if (this.map) {
      try {
        this.map.remove();
        this.map = null;
      } catch (error) {
        console.error('Error removing map:', error);
      }
    }
  }

  private getMarkerIcon(type: string): string {
    return this.ICON_MAP[type.toLowerCase()] || 'place';
  }

  private formatPlaceType(type: string): string {
    return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  }
}
