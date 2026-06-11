import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

// Social share card — full Nepa Invest logo + title + description on brand navy.
export const alt = "Nepa Invest — Investicije i razvoj nekretnina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVY = "#051325";
const GOLD = "#d8b25e";
const IVORY = "#f5f1e8";
const MUTED = "#aab2c0";

const TITLE = "Investicije i razvoj nekretnina";
const DESC =
  "Akvizicija, razvoj i prodaja stambenih i poslovnih nekretnina na lokacijama s visokim potencijalom rasta.";

/** Load a subsetted Google font as an ArrayBuffer for Satori. */
async function loadGoogleFont(
  family: string,
  weight: number,
  text: string,
): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(
    / /g,
    "+",
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\(/)?.[1];
  if (!src) throw new Error(`Font not found: ${family}`);
  return (await fetch(src)).arrayBuffer();
}

export default async function Image() {
  const logo = readFileSync(
    join(process.cwd(), "public/logo/nepa-invest-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  type Font = {
    name: string;
    data: ArrayBuffer;
    weight: 400 | 600;
    style: "normal";
  };
  let fonts: Font[] | undefined;
  try {
    const [display, body] = await Promise.all([
      loadGoogleFont("Cormorant Garamond", 600, TITLE),
      loadGoogleFont("Inter", 400, DESC),
    ]);
    fonts = [
      { name: "Cormorant", data: display, weight: 600, style: "normal" },
      { name: "Inter", data: body, weight: 400, style: "normal" },
    ];
  } catch {
    fonts = undefined; // fall back to ImageResponse default font
  }

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: NAVY,
          padding: "0 80px",
        }}
      >
        {/* gold ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(216,178,94,0.22), rgba(216,178,94,0))",
          }}
        />
        {/* full logo */}
        <img
          src={logoSrc}
          alt=""
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
        />
        {/* gold divider */}
        <div
          style={{
            width: 1,
            height: 320,
            margin: "0 48px",
            background: "rgba(216,178,94,0.35)",
          }}
        />
        {/* title + description */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontFamily: "Cormorant",
              fontSize: 62,
              lineHeight: 1.05,
              color: IVORY,
            }}
          >
            {TITLE}
          </div>
          <div
            style={{ width: 90, height: 3, background: GOLD, margin: "26px 0" }}
          />
          <div
            style={{
              fontFamily: "Inter",
              fontSize: 27,
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            {DESC}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
