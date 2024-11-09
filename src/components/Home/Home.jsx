import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../init/firebase_init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

const Home = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handelSubmit = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("error", error);
        setUser(null);
      });
  };

  const handelSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGithub = (e) => {
    e.preventDefault();

    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-white rounded-2xl p-14 mt-10">
      <form method="POST">
        <div className="grid grid-cols-2 gap-6 ">
          <div className="space-y-3">
            <label>Name:</label> <br />
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Email:</label> <br />
            <input
              name="email"
              type="text"
              placeholder="your email"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Password:</label> <br />
            <input
              name="password"
              type="text"
              placeholder="password"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
          <div className="space-y-3">
            <label>Address:</label> <br />
            <input
              name="address"
              type="text"
              placeholder="your address"
              className="input input-bordered w-full"
              autoComplete="off"
            />
          </div>
        </div>

        <div className="pt-14">
          <textarea
            name="message"
            autoComplete="off"
            placeholder="message"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>
        <div className="pt-6 text-center ">
          {user ? (
            <button onClick={handelSignOut} className="btn">
              sign out
            </button>
          ) : (
            <div>
              <button onClick={handelSubmit} className="btn mr-8">
                log in
              </button>
              <button onClick={handelGithub} className="btn">
                Sing in With Github
              </button>
            </div>
          )}
        </div>
      </form>
      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Home;
