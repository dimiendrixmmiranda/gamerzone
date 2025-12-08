// import { collection, query, where, getDocs } from "firebase/firestore";
// import { db } from "../firebase/firebase";

// async function verificarSemanaCorrente() {
//     const q = query(
//         collection(db, "listaDeCraquesDaSemana"),
//         where("semanaCorrente", "==", true)
//     );

//     const snap = await getDocs(q);

//     if (!snap.empty) {
//         console.log("❌ Já existe uma votação ativa");
//         return false;
//     }

//     console.log("✔ Sem votação ativa, pode criar nova");
//     return true;
// }
