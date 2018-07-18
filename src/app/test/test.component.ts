import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize, map } from 'rxjs/internal/operators';
import { firestore } from 'firebase';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent {

  public items: Observable<any[]>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(
    private db: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {
    this.items = this.db.collection('items').valueChanges();
    // const dados = {nome: 'DAVID',
    //   gdg: 'Google Developer Group',
    //   img: 'https://firebasestorage.googleapis.com/v0/b/gdg-poa.appspot.com/o/04oxr3fv5kxx?alt=media&token=a4d05876-209e-4ffe-9f26-7b3f60e2409a'};
    // this.db.collection('items').doc('usuarios').set(dados);

    //this.db.collection('items').doc('usuarios').update({nome: 'Filipe'});

    // Mesclar dados
    //  var cityRef = db.collection('cities').doc('BJ');
    // var setWithMerge = cityRef.set({
    //     capital: true
    // }, { merge: true });

    //   add  -> cria id
    //  set  -> usa id

    // this.db.collection('items').doc('usuarios').update({
    //   timestamp: firestore.FieldValue.serverTimestamp()
    // });

    // return db.runTransaction(function(transaction) {
    //   // This code may get re-run multiple times if there are conflicts.
    //   return transaction.get(sfDocRef).then(function(sfDoc) {
    //     if (!sfDoc.exists) {
    //       throw "Document does not exist!";
    //     }
    //
    //     var newPopulation = sfDoc.data().population + 1;
    //     transaction.update(sfDocRef, { population: newPopulation });
    //   });
    // }).then(function() {
    //   console.log("Transaction successfully committed!");
    // }).catch(function(error) {
    //   console.log("Transaction failed: ", error);
    // });

    // db.collection("cities").where("capital", "==", true)
    //   .get()
    //   .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //     });
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    //   });
  }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    this.uploadProgress = this.task.percentageChanges();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = this.ref.getDownloadURL();
      })).subscribe();
  }




}
