import { onAuthStateChanged } from "@firebase/auth";

export const currentUser = (auth, setAuthUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setAuthUser(user);
      // console.log(user, "auth");
    } else {
      setAuthUser(null);
      // console.log("dont auth");
    }
  });
};

export const updateProfile = (auth, admin, name, photo, about) => {
  // console.log(admin);
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      // console.log(user);

      if (admin != null) {
        user.admin = admin;
      }
      if (name != null) {
        user.name = name;
      }
      if (photo != null) {
        user.photo = photo;
      }
      if (about != null) {
        user.about = about;
      }
    }
  });
};
