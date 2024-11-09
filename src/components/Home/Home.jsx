import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../init/firebase_init";

const Home = () => {
  const googleProvider = new GoogleAuthProvider();

  const handelSubmit = (e) => {
    e.preventDefault();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user.displayName);
      })
      .catch((error) => {
        console.log("error", error);
      });
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
        <div className="pt-6 text-center">
          <button onClick={handelSubmit} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
