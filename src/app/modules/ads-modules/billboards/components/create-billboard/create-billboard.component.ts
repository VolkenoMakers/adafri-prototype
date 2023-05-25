import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BROADCAST_COUNTRY, BROADCAST_LOCATION, TIME_RANGE } from 'src/app/utils/data';
import { PreviewPannelsComponent } from '../preview-pannels/preview-pannels.component';

@Component({
  selector: 'app-create-billboard',
  templateUrl: './create-billboard.component.html',
  styleUrls: ['./create-billboard.component.scss']
})
export class CreateBillboardComponent implements OnInit {

  public typeControl: FormControl = new FormControl([], [Validators.required])
  public locationsToDiffuseControl: FormControl = new FormControl('', [Validators.required])
  public locationsToDiffuseAuchanControl: FormControl = new FormControl('', [Validators.required])
  public range = new FormGroup({
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  public countries: BROADCAST_COUNTRY[] = [
    { "id": 0, "name": "Senegal", "image": "sn.svg"  },
    { "id": 1, "name": "Mali", "image":"ml.svg" }
  ];
  public broadcastTimeRanges: TIME_RANGE[] = [
    { "id": 0, "start": "08", "end": "12" },
    { "id": 1, "start": "16", "end": "20" },
  ];
  public  broadcastLocations: BROADCAST_LOCATION[] = [
    { "id": 0, "name": "Grand Théâtre", "country": this.countries[0], "description": "1000000 véhicules par jour" },
    { "id": 1, "name": "Indépendance", "country": this.countries[0], "description": "900000 véhicules par jour" },
    { "id": 2, "name": "Horizon", "country": this.countries[0], "description": "300000 véhicules par jour" },
    { "id": 3, "name": "Relais", "country": this.countries[0], "description": "30000 véhicules par jour" },
    { "id": 4, "name": "Parking Auchan Mermoz", "country": this.countries[0], "description": "3000 véhicules par jour" },
    { "id": 5, "name": "Almadies", "country": this.countries[0], "description": "17000 véhicules par jour" },
    { "id": 6, "name": "Patte d’Oie", "country": this.countries[0], "description": "20000 véhicules par jour" },
    { "id": 7, "name": "Hippodrome", "country": this.countries[1], "description": "Près du marché" },
    { "id": 8, "name": "Castors", "country": this.countries[1], "description": "Carrefour d'universités et de lycées" },
    { "id": 9, "name": "Cité UNICEF", "country": this.countries[1], "description": "A proximité de l'auto gar, entrée UNICEF" },
    { "id": 10, "name": "Tour d’Afrique", "country": this.countries[1], "description": "Population dynamique exposée" },
    { "id": 11, "name": "Place CAN", "country": this.countries[1], "description": "Emplacement célèbre" },
    { "id": 12, "name": "3eme pont, Route de Koulikoro", "country": this.countries[1], "description": "Zone d'entrée et sortie du 3eme pont" },
    { "id": 13, "name": "Oumou Sangaré", "country": this.countries[1], "description": "A proximité du marche de Kalaban coura" },
    { "id": 14, "name": "Grand marché", "country": this.countries[1], "description": "Poumon économique de Bamako" },
    { "id": 15, "name": "Ecobank-Place de l’indépendance", "country": this.countries[1], "description": "En face du monument de l'indépendance" },
    { "id": 16, "name": "Quartier Mali", "country": this.countries[1], "description": "En face de deux feux tricolores" },
  ]
  public broadcastLocationsAuchan = [
    { "id": 0, "name": "Auchan - Mermoz" },
    { "id": 1, "name": "Auchan - Sacre Coeur" },
    { "id": 2, "name": "Auchan - Gibraltar" },
    { "id": 3, "name": "Auchan - Yoff" },
    { "id": 4, "name": "Auchan - Mairie Ville" },
    { "id": 5, "name": "Auchan - Almadies" },
    { "id": 6, "name": "Auchan - Fann Residence" },
  ]

  public image_country_source: string = "https://flagcdn.com/";
  creatingCampaignLoader: boolean = false;

  selected_countries: BROADCAST_COUNTRY[] = []
  broadcast_locations_to_display: BROADCAST_LOCATION[] = [];
  selected_locations_to_diffuse: BROADCAST_LOCATION[] = [];

  durationDays: number = 0;
  total_amount: number = 0;

  public step: number = 2;
  public videoUrl?:string;
  public imageUrl?:string;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {

  }

  screenTypeChange(){

  }

  selectCountry(country: BROADCAST_COUNTRY){
    this.broadcast_locations_to_display = []
    this.locationsToDiffuseControl.setValue([])
    if(this.selected_countries.includes(country)) {
      for (let i = 0; i < this.selected_countries.length; i++) {
        if(this.selected_countries[i].id === country.id) this.selected_countries.splice(i, i+1);
      }
    }else{
      this.selected_countries.push(country);
    }
    for(let ctr of this.selected_countries){
      for (let i = 0; i < this.broadcastLocations.length; i++) {
        if(this.broadcastLocations[i].country?.name === ctr.name) this.broadcast_locations_to_display.push(this.broadcastLocations[i]);
      }
    }
  }

  unavailableDays(calendarDate: Date): boolean{
    return calendarDate > new Date();
  }

  getDays(){
      // let difference = this.range.value.start - this.range.value.end;
      // let result = Math.ceil(difference / (1000 * 3600 * 24)) * (-1);
      // result > 0 ? this.durationDays = result : this.durationDays =  0;
      alert(this.range.value.start)
      alert(this.range.value.end)
  }

  files: File[] = [];

  onSelectFile(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemoveFile(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  openPreviewDialog(){
    this.dialog.open(PreviewPannelsComponent, {
      height: '80vh',
      width: '80vw',
    });
  }
}
