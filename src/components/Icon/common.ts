import Cap from '../../assets/academic-cap.svg';

export const icons: Record<
  string,
  (arg?: boolean) => React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  cap: () => Cap,
};
