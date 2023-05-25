import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-confirm-register-page',
  templateUrl: './confirm-register-page.component.html',
  styleUrls: ['./confirm-register-page.component.scss']
})
export class ConfirmRegisterPageComponent implements OnInit {

  public mailControl: FormControl = new FormControl({value:'mail@xyz.com', disabled: true}, [Validators.required])
  public firstNameControl: FormControl = new FormControl({value:'Cheikh Tidiane', disabled: true}, [Validators.required])
  public lastNameControl: FormControl = new FormControl({value:'Ndiaye', disabled: true}, [Validators.required])
  public companyNameControl: FormControl = new FormControl('', [Validators.required])
  public accountNumberControl: FormControl = new FormControl({
    value: `account-${new Date().getTime().toString()}`, disabled:true
  }, [Validators.required])
  public phoneControl: FormControl = new FormControl('', [Validators.required])
  public activityAreaControl: FormControl = new FormControl('', [Validators.required])

  businessLinesList: string[] = [
    "politics", "construction", "lottery", "communication_agency", "crafts_arts", "directory_community", "ecommerce_marketplace", "energy",
    "blog", "fashion_beauty_wellness", "app_software", "finances_fintech", "horeca", "services", "health", "immovable", "delivery_logistics",
    "media", "gifts", "culture_entertainment", "car_dealer_garage", "travels", "institutions", "association", "agro_business", "bank_insurance",
    "communication", "higher_institute", "edutech", "telecom", "products_FMCG", "house_decoration", "home_appliance",
    "multimedia", "freelance", "cabinet", "partner"
  ];
  filteredBusinessLines?: Observable<string[]>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.filteredBusinessLines = this.activityAreaControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.businessLinesList.filter(option => option.toLowerCase().includes(filterValue));
  }

  logout(){
    this.router.navigate(['/security/login'])
  }

  confirm(){
    this.router.navigate(['/overview'])
  }
}
