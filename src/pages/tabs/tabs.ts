import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import{ ContactPage} from '../contact/contact';
import { HomePage } from '../home/home';
import {ProfilePage }from '../profile/profile'; 

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
//sets root to the various pages in the nav bar at bottom of screen 
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
