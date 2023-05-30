import { PageHeaderProps } from "@/types/components";

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <div className="justify-start">
        <h1 className="space-x-1 text-4xl font-extrabold leading-[60px] tracking-tight md:text-7xl md:leading-[86px]">
          {title}
        </h1>
        <p className="text-2xl">{subtitle}</p>
      </div>
    </>
  );
}
