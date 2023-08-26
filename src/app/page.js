"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";

export default function IndexPage() {
  const root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <TextReveal />
    </div>
  );
}
