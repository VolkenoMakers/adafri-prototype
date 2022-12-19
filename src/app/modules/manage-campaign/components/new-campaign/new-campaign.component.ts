import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  public objectifs: any[] = [
    {
      'icon': 'sell',
      'title': 'Ventes',
      'description': 'Générer des ventes en ligne, via une application, par téléphone ou en magasin'
    },
    {
      'icon': 'group',
      'title': 'Prospects',
      'description': 'Attirer les prospects et générer d\'autres conversions en encourageant les clients à passer à l\'action'
    },
    {
      'icon': 'ads_click',
      'title': 'Trafic vers le site Web',
      'description': 'Attirer sur votre site Web les personnes intéressées par vos produits ou services'
    },
    {
      'icon': 'auto_awesome',
      'title': 'Considération du produit et de la marque',
      'description': 'Inciter les utilisateurs à découvrir vos produits ou services'
    },
    {
      'icon': 'campaign',
      'title': 'Couverture et notoriété de la marque',
      'description': 'Toucher une audience élargie et renforcer la notoriété de votre marque'
    },
    {
      'icon': 'phone_iphone',
      'title': 'Toucher une audience élargie et renforcer la notoriété de votre marque',
      'description': 'Générer plus d\'installations, d\'engagement et de préinscriptions pour votre application'
    },
    {
      'icon': 'location_on',
      'title': 'Promotions et visites en magasin',
      'description': 'Attirer des visiteurs dans votre établissement (y compris un restaurant ou une concession automobile)'
    },
    {
      'icon': 'settings',
      'title': 'Créer une campagne sans objectif spécifique',
      'description': 'Choisir directement un type de campagne sans passer par les recommandations basées sur vos objectifs'
    },
  ]
  public selectedObjectif:any = undefined

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  progressValue:number = 0
  selectObjectif(index:number): void{
    if(this.selectedObjectif && this.selectedObjectif === this.objectifs[index]) return this.selectedObjectif = undefined
    this.selectedObjectif = this.objectifs[index]
    window.scrollBy(0, 100);
    setTimeout(() => {
      window.scrollBy(0, 200);
      this.progressValue = 20
    }, 50);
  }
  cancelCampaign(){
    this.router.navigate(['/overview'])
  }
}
