"use client";

import { useEffect } from "react";
import anime from "animejs";

export default function Home() {
  useEffect(() => {
    anime({
      targets: ".circle",
      translateY: -500, // This will move the circle vertically
      height: "500px",
      width: "500px",
      duration: 3000,
      easing: "linear",
      direction: "alternate",
      loop: true,
    });
  }, []);

  return (
    <main className="bg-gray-500 h-screen flex justify-center items-center">
      <div
        className="circle flex justify-center items-center"
        style={{
          backgroundColor: "red",
          height: "250px",
          width: "250px",
          borderRadius: "50%",
          color: "white",
          fontSize: "24px",
        }}
      >
        Your Text Here
      </div>
    </main>
  );
}
