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
  : {
      socialSecurityNumber: number;
    };

export type RequiredInformationForAnimal = GetRequiredInformation<Animal>;

export type RequiredInformationForHuman = GetRequiredInformation<Human>;
//31.44