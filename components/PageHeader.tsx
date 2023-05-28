import { PageHeaderProps } from "@/types/components";

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <div className="justify-start">
        <h1 className="space-x-1 text-[64px] font-bold">{title}</h1>
        <p className="text-2xl">{subtitle}</p>
      </div>
    </>
  );
}
