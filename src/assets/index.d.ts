declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGAttributes<SVGSVGElement>>;
  const src: string;
  export default src;
}
