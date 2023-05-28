import clsx from 'clsx';
import Link from 'next/link';

import { NavButtonProps } from '@/types/components';

export function SideNavButton({
  title,
  href,
  active,
  ...rest
}: NavButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        'btn btn-wide btn-lg btn-ghost',
        active ? 'btn-active' : ''
      )}
    >
      {title}
    </Link>
  );
}
