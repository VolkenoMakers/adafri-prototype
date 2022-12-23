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
      'title': 'sales',
      'description': 'Générer des ventes en ligne, via une application, par téléphone ou en magasin'
    },
    {
      'icon': 'group',
      'title': 'prospects',
      'description': 'Attirer les prospects et générer d\'autres conversions en encourageant les clients à passer à l\'action'
    },
    {
      'icon': 'ads_click',
      'title': 'trafic_to_website',
      'description': 'Attirer sur votre site Web les personnes intéressées par vos produits ou services'
    },
    {
      'icon': 'auto_awesome',
      'title': 'promotion_product_brand',
      'description': 'Inciter les utilisateurs à découvrir vos produits ou services'
    },
    {
      'icon': 'campaign',
      'title': 'brand_coverage_awareness',
      'description': 'Toucher une audience élargie et renforcer la notoriété de votre marque'
    },
    {
      'icon': 'phone_iphone',
      'title': 'wider_audience',
      'description': 'Générer plus d\'installations, d\'engagement et de préinscriptions pour votre application'
    },
    {
      'icon': 'location_on',
      'title': 'promotions_visits',
      'description': 'Attirer des visiteurs dans votre établissement (y compris un restaurant ou une concession automobile)'
    },
    {
      'icon': 'settings',
      'title': 'without_goal',
      'description': 'Choisir directement un type de campagne sans passer par les recommandations basées sur vos objectifs'
    },
  ]

  public campaignTypes:any[] = [
    {
      'image': 'video.svg',
      'title': 'ecran',
      'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' 
    },
    {
      'image': 'phone.svg',
      'title': 'audio',
      'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      'image': 'chat.svg',
      'title': 'sms',
      'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    },
    {
      'image': 'image.svg',
      'title': 'web',
      'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
    }
  ]
  public broadcastChannels:any[] = [
    {
      'image': 'facebook.svg',
      'title': 'Facebook Ads',
      'badge': 'bêta',
      'description': 'Apparaissez dans le fil d\'actualité Facebook de votre public cible.',
      'campaignType': this.campaignTypes[3]
    },
    {
      'image': 'google.svg',
      'title': 'Google Ads - Display',
      'description': 'Diffusez vos annonces illustrées sur des sites Web pertinents sur le Web.',
      'campaignType': this.campaignTypes[3]
    },
    {
      'image': 'linkedin.svg',
      'title': 'LinkedIn Ads',
      'badge': 'bientôt',
      'description': 'Apparaissez dans le fil d\'actualité LinkedIn de votre public cible.',
      'campaignType': this.campaignTypes[3]
    },
    {
      'image': 'billboards.svg',
      'title': 'Panneaux Publicitaires',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'campaignType': this.campaignTypes[0]
    },
    {
      'image': 'voice.svg',
      'badge': 'bêta',
      'title': 'Messages Vocals',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'campaignType': this.campaignTypes[1]
    },
    {
      'image': 'chat-icon.svg',
      'title': 'Campagnes SMS',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'campaignType': this.campaignTypes[2]
    },
    {
      'image': 'radio.svg',
      'title': 'Radios',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'campaignType': this.campaignTypes[1]
    },
    {
      'image': 'tv.svg',
      'title': 'TV',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'campaignType': this.campaignTypes[0]
    },
    {
      'image': 'google.svg',
      'title': 'Google Ads - Search',
      'description': 'Apparaissez sur le premier moteur de recherche au monde : Google.',
      'campaignType': this.campaignTypes[3]
    }
  ]
  public selectedObjectif:any = undefined
  public selectedCampaignType: any = undefined
  public selectedBroadcastChannel: any = undefined 
  public campaignName: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.campaignName = `campaign-${new Date().getTime().toString()}`
  }
  progressValue:number = 0
  selectObjectif(index:number): void{
    if(this.selectedObjectif && this.selectedObjectif === this.objectifs[index]) {
      this.progressValue = 0;
      this.selectedCampaignType = undefined
      return this.selectedObjectif = undefined
    }
    this.selectedObjectif = this.objectifs[index]
    // AUTO SELECT CAMPAIGN TYPE
    setTimeout(() => {
      if (this.selectedObjectif.title === 'sales') this.selectCampaignType(0)
      if (this.selectedObjectif.title === 'prospects') this.selectCampaignType(3)
      if (this.selectedObjectif.title === 'trafic_to_website') this.selectCampaignType(3)
      if (this.selectedObjectif.title === 'promotion_product_brand') this.selectCampaignType(3)
      if (this.selectedObjectif.title === 'brand_coverage_awareness') this.selectCampaignType(0)
      if (this.selectedObjectif.title === 'wider_audience') this.selectCampaignType(2)
      if (this.selectedObjectif.title === 'promotions_visits') this.selectCampaignType(3)
    }, 200);
    this.progressValue = 33;
    this.scrollDown()
  }
  selectCampaignType(index:number):void{
    if(this.selectedCampaignType && this.selectedCampaignType === this.campaignTypes[index]) {
      this.progressValue = 33
      this.selectedBroadcastChannel = undefined
      return this.selectedCampaignType = undefined
    }
    this.selectedCampaignType = this.campaignTypes[index]

    // AUTO SELECT BROADCAST CHANNEL
    setTimeout(() => {
      if (this.selectedCampaignType.title === 'ecran') this.selectBroadcastChannel(3)
      if (this.selectedCampaignType.title === 'audio') this.selectBroadcastChannel(4)
      if (this.selectedCampaignType.title === 'sms') this.selectBroadcastChannel(5)
      if (this.selectedCampaignType.title === 'web') this.selectBroadcastChannel(8)
    }, 200);

    this.selectedBroadcastChannel = undefined
    this.progressValue = 66
    this.scrollDown()
  }
  selectBroadcastChannel(index:number):void {
    if(this.selectedBroadcastChannel && this.selectedBroadcastChannel === this.broadcastChannels[index]) {
      this.progressValue = 66
      return this.selectedBroadcastChannel = undefined
    }
    this.selectedBroadcastChannel = this.broadcastChannels[index]
    this.progressValue = 100
    this.scrollDown()
  }
  scrollDown(){
    setTimeout(() => {
      window.scrollBy(0, 1000);
    }, 50);
  }
  cancelCampaign(){
    this.router.navigate(['/overview'])
  }
  createCampaign(){
    // SAVE DRAFT
    this.router.navigate(['/campaign/list'])
  }
}
