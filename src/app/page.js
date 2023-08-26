"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";

export default function IndexPage() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page" ref={root}>
      <h1>Home Page</h1>
      <div className="box">Home</div>
      <p>
        <Link href="/about">About Page</Link>
      </p>

      <style jsx global>{`
        .page {
          font-family: Avenir, Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        }

        .box {
          width: 100px;
          height: 100px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          background-color: #28a92b;
          font-weight: 600;
          color: #fff;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
