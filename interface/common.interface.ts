import { ReactElement, ReactNode, ComponentType } from "react";

export interface NextPageProps {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
}
