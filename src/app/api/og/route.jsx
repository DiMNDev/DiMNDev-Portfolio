/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          color: "white",
          backgroundColor: "#121212",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          height={695}
          width={570}
          src={process.env.NEXT_PUBLIC_METADATA_BASE_URL + "images/memoji.png"}
          alt="Memoji of Josh"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            fontSize: "40px",
            justifyContent: "center",
          }}
        >
          <p style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                justifySelf: "flex-end",
                marginRight: "20px",
                color: "none",
                fontSize: "64px",
                backgroundClip: "text",
                background:
                  "linear-gradient(to bottom right, rgb(29, 78, 216) 5%, rgb(147,51,234))",
              }}
            >
              Build
            </span>
            <span style={{ marginTop: "14px" }}>helpful software.</span>
          </p>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,.2)",
            }}
          ></div>
          <p style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                justifySelf: "flex-end",
                marginRight: "20px",
                textDecoration: "underline",
                color: "none",
                fontSize: "64px",
                fontWeight: "900",
                backgroundClip: "text",
                background:
                  "linear-gradient(to bottom left, rgb(147,51,234) 50%, #d10000)",
              }}
            >
              Learn
            </span>
            <span style={{ marginTop: "14px" }}>new technologies.</span>
          </p>
          <div
            style={{
              width: "100%",
              height: "2px",
              background: "rgba(255,255,255,.2)",
            }}
          ></div>
          <p style={{ display: "flex", alignItems: "center" }}>
            <span
              style={{
                justifySelf: "flex-end",
                marginRight: "20px",
                color: "none",
                fontSize: "64px",
                fontWeight: "900",
                backgroundClip: "text",
                background:
                  "linear-gradient(to bottom left, rgb(147,51,234) 15%, #d10000)",
              }}
            >
              Grow
            </span>
            <span style={{ marginTop: "14px" }}>through experience.</span>
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
