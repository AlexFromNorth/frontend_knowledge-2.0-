// import { onAuthStateChanged, signOut } from "firebase/auth";
// import React, { useEffect, useState } from "react";
// import { auth, database } from "../../request/firebase-config";

// const AuthDetails = () => {
//   const [authUser, setAuthUser] = useState(null);

//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         setAuthUser(null);
//       }
//     });

//     console.log(database)

//   });
//   useEffect(() => {
//     // console.log(authUser);
//   }, [authUser]);

//   const userSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("success");
//       })
//       .catch((e) => console.log(e));
//   };

//   return (
//     <div>
//       {authUser ? (
//         <div>
//           <p>{authUser.email}</p>
//           <button
//             onClick={() => {
//               userSignOut();
//             }}
//           >
//             Sign out
//           </button>
//         </div>
//       ) : (
//         <div>
//           <p>Sign Out</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthDetails;
