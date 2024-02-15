<template>
  <div class="home">
    <h2>Firebase</h2>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import {getFirestore, collection, getDocs, get, addDoc, deleteDoc, updateDoc, doc, query, where, onSnapshot} from 'firebase/firestore'
import fb from '../firebase/config'
export default {
  name: 'HomeView',
  components: {},
  setup() {
    onMounted(async ()=> {
      const db = getFirestore(fb);
      const fbRef = collection(db, "books");
      const fbDocs = await getDocs(fbRef);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);
      // console.log(docID);
      // console.log(data);
      // addDoc(fbRef, {
      //   name: "Sokrates'in Savunması",
      //   author: "Platon",
      //   pageCount: 200,
      // });
      // const docRef = doc(db, 'books', '0DlDFcjNtFU2zi7SVgpD');
      // deleteDoc(docRef);
      const q = query(fbRef,where('pageCount','==',200));
      onSnapshot(q, (ss) => {
        let books = [];
        ss.docs.forEach((doc) => {
          books.push({...doc.data(), id:doc.id});
        });
        console.log(books);
      }); 

      const docRef = doc(db, 'books', 'uQuvYTwjSPvyn6OO4K6k');
      updateDoc(docRef, {
        pageCount: 400
      });

      return data;
    })
  }
}
</script>
