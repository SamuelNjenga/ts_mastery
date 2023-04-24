export type Animal = {
  name: string;
};

type Human = {
  firstName: string;
  lastName: string;
};

type GetRequiredInformation<TType> = TType extends Animal
  ? {
      age: number;
    }
  : TType extends Human
  ? {
      socialSecurityNumber: number;
    }
  : TType extends { planet: string }
  ? {
      whyAreYouHere: string;
    }
  : never;

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;

export type RequiredInformationForAlien = GetRequiredInformation<{
  planet: string;
}>;
