import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E60000",
        }}
      >
        <img
          src="/logo-claro-rojo.svg"
          alt="Claro"
          style={{
            width: 520,
            height: "auto",
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
    ),
    size
  );
}

