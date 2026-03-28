import Image from "next/image";

export default function LogoHero() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "48px",
      }}
    >
      <Image
        src="/omaro-logo.png"
        alt="OMARO"
        width={180}
        height={180}
        priority
      />
    </div>
  );
}
