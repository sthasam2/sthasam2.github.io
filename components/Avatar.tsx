import Image from "next/image";

export function Avatar({ src, alt }: { src: string; alt?: string }) {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <Image src={src} alt={alt != null ? alt : "Avatar"} />
      </div>
    </div>
  );
}

export function PlaceholderAvatar({ label }: { label: string }): JSX.Element {
  return (
    <div className="placeholder avatar">
      <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
        <span className="text-xs">{label}</span>
      </div>
    </div>
  );
}
