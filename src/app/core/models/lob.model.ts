export interface LOBRequest {
  lobName: string;
  email: string;
  services: string[];
  providers: {
    [serviceType: string]: {
      name: string;
      weight: number;
    }[];
  };
}
