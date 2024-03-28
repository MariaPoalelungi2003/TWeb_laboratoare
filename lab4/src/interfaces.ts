// @ts-ignore
interface FirstInterface {
    field1: string;
    field2: number;
    field3: boolean;
    field4: string[];
    field5: { key: string, value: any };
}
interface SecondInterface extends FirstInterface {
    additionalField1: Date;
    additionalField2: string;
}
