import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-map',
  template: `<div #mapEl class="map-root" role="img" aria-label="Mapa de Itajubá, MG"></div>`,
  styles: `
    :host { display: block; width: 100%; height: 100%; }
    .map-root { width: 100%; height: 100%; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnDestroy {
  private readonly mapEl = viewChild.required<ElementRef<HTMLElement>>('mapEl');
  private map?: import('leaflet').Map;

  // Itajubá
  private readonly center: [number, number] = [-22.4269, -45.4539];
  private readonly route: [number, number][] = [
    [-22.4269, -45.4539],
    [-22.422, -45.449],
    [-22.418, -45.451],
    [-22.415, -45.456],
    [-22.419, -45.46],
  ];

  constructor() {
    // afterNextRender só roda no browser → seguro para prerender (SSG).
    afterNextRender(async () => {
      // Leaflet é CommonJS: o objeto real fica em `.default` após o interop do bundler.
      const L = (await import('leaflet')).default;

      this.map = L.map(this.mapEl().nativeElement, {
        center: this.center,
        zoom: 13,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false,
      });

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      ).addTo(this.map);

      L.polyline(this.route, {
        color: '#E0A458',
        weight: 3,
        dashArray: '5, 10',
        opacity: 0.8,
      }).addTo(this.map);

      const startIcon = L.divIcon({
        className: 'custom-marker-icon',
        html: '<div class="marker-pin"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });
      L.marker(this.route[0], { icon: startIcon })
        .addTo(this.map)
        .bindPopup('<strong>Ponto de Partida</strong><br/>Análise de Rota');

      const end = this.route[this.route.length - 1];
      L.circleMarker(end, {
        radius: 6,
        color: '#E0A458',
        fillColor: '#ecb978',
        fillOpacity: 0.8,
      })
        .addTo(this.map)
        .bindPopup('<strong>Destino</strong><br/>Otimização Concluída');

      for (const pos of this.route.slice(1, -1)) {
        L.circleMarker(pos, {
          radius: 4,
          color: '#ffffff',
          fillColor: '#ffffff',
          fillOpacity: 0.5,
          weight: 1,
        }).addTo(this.map);
      }
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
