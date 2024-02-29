import { ServiceItem } from './service-item';

export interface AboutDto {
  title: string;
  breif: string;
  items: ServiceItem[];
}
