import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  color: string;
  companyName: string;
  catchPhrase: string;
  location: {
    longitude: number;
    latitude: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      longitude: parseFloat(faker.address.longitude()),
      latitude: parseFloat(faker.address.latitude())
    };
    this.color = 'blue';
  }

  markerContent(): string {
    return `Company Name: ${this.companyName}   
            Catch Phrase: ${this.catchPhrase}`;
  }
}
