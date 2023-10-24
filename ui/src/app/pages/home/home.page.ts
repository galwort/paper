import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { getFirestore, doc, collection, setDoc, Timestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

export const app = initializeApp(environment.firebase);
export const db = getFirestore(app);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
      private authService: AuthService,
  ) { }

  ngOnInit() {
  }

  async submit() {
    const userId = this.authService.getCurrentUserId();

    const userRankingRef = doc(collection(db, 'papers'));
    await setDoc(userRankingRef, {
      user: userId,
      timestamp: Timestamp.now(),
    });
  }
}
