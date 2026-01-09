// apps\admin\components\pages\login\signin.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function SigninComponent() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Redirect if logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setErrorMsg(res.error);
      setLoading(false);
      return;
    }

    router.replace("/");
  };

  if (status === "authenticated") return null;

  return (
    <>
      <div className="main-wrapper">

        {/* <div className="comming-soon-pg w-100"><div className="coming-soon-box"><div className="pos-logo"><img alt="Img" src="assets/img/logo-small.png"></div><span>Our Website is</span><h1><span> COMING </span> SOON </h1><p>Please check back later, We are working hard to get everything just right.</p><ul className="coming-soon-timer"><li><span className="days">54</span>days</li><li className="seperate-dot">:</li><li><span className="hours">10</span>Hrs</li><li className="seperate-dot">:</li><li><span className="minutes">47</span>Min</li><li className="seperate-dot">:</li><li><span className="seconds">00</span>Sec</li></ul><div className="subscribe-form"><div className="mb-3"><label className="form-label">Subscribe to get notified!</label><a className="btn btn-primary subscribe-btn" href="#">Subscribe</a></div></div><ul className="social-media-icons"><li><a href="#"><i className="fab fa-facebook-f"></i></a></li><li><a href="#"><i className="fab fa-instagram"></i></a></li><li><a href="#"><i className="fab fa-twitter"></i></a></li><li><a href="#"><i className="fab fa-pinterest-p"></i></a></li><li><a href="#"><i className="fab fa-linkedin"></i></a></li></ul></div></div>
 */}

        <div className="account-content">
          <div className="login-wrapper">
            <div className="grid grid-cols-1 lg:grid-cols-2 m-0 w-full">
              <div className="p-0 flex items-center justify-center">
                <div className="login-content  w-full max-w-md">
                  <form onSubmit={handleLogin}>
                    <div className="login-userset">
                      <Link href="/login" className="login-logo logo-white">
                        <Image
                          src="/assets/img/logo.jpg"
                          alt="Logo"
                          width={120}
                          height={40}
                          priority
                        />
                      </Link>
                      <div className="login-userheading">
                        <h3>Sign In</h3>

                        {errorMsg && (
                          <p className="text-red-500 mb-3">{errorMsg}</p>
                        )}

                        <h4 className="text-[16px]">
                          Access the Dinel panel using your email and passcode.
                        </h4>
                      </div>
                      <div className="mb-4">
                        {" "}
                        <label className="form-label block mb-2">
                          Email <span className="text-red-600"> *</span>
                        </label>
                        <div className="input-group w-auto input-group-flat">
                          <input
                            type="text"
                            className="form-control"
                            name="username"
                          />
                          <span className="input-group-text text-black">
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="form-label block mb-2">
                          Password<span className="text-red-600"> *</span>
                        </label>
                        <div className="relative pass-group">
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            className="form-control w-full pass-input"
                            defaultValue=""
                            name="password"
                          />
                          <span
                            className={`input-group-text cursor-pointer fa toggle-password ${
                              isPasswordVisible ? "fa-eye-slash" : "fa-eye"
                            }`}
                            onClick={() =>
                              setPasswordVisible(!isPasswordVisible)
                            }
                          ></span>
                        </div>
                      </div>
                      <div className="form-login">
                        <button className="btn btn-login" disabled={loading}>
                          {loading ? "Signing in..." : "Sign In"}
                        </button>
                      </div>

                      <div className="my-6 flex justify-center items-center copyright-text">
                        <p>Copyright &copy; 2026 Dinel</p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-0">
                <div className="login-img h-screen w-full relative justify-items-center content-center">
                  <Image
                    src="/assets/img/signup-pg.png"
                    alt="Signup"
                    fill
                    priority
                    className="object-cover"
                    // width={400}
                    // height={400}
                    // className="align-middle justify-items-center   w-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}