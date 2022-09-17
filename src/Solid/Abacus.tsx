import * as React from "react";
import { SVGProps, memo } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
interface SVGRProps {
  className?: string;
  color?: string;
  size?: string | number;
  style?: React.CSSProperties;
}

function SvgAbacus({
  color,
  style,
  size = 16,
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) {
  const mergedStyle = { ...style, color };
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={mergedStyle}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="currentColor"
        d="M2 0C.9 0 0 .9 0 2v22h4V2c0-1.1-.9-2-2-2zm15 12c-.55 0-1 .45-1 1v2h-2v-2c0-.55-.45-1-1-1s-1 .45-1 1v2H8v-2c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-2h4v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zm5-12c-1.1 0-2 .9-2 2v22h4V2c0-1.1-.9-2-2-2zm-5 2c-.55 0-1 .45-1 1v2h-4V3c0-.55-.45-1-1-1s-1 .45-1 1v2H8V3c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1V7h2v2c0 .55.45 1 1 1s1-.45 1-1V7h4v2c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z"
      />
    </svg>
  );
}

const Memo = memo(SvgAbacus);
export default Memo;
