import Image from "next/image";

export default function Home() {
  const textStyle: React.CSSProperties = {
    color: "#F9DC5C",
    fontSize: "33vh",
    fontVariationSettings: '"wdth" 100, "wght" 1000',
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div style={textStyle}>
        dunce.party
      </div>
    </div>
  );
}
