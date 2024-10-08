// src/types.ts
export interface MenuItem {
    name: string;
    description: string;
    course: string;
    price: number;
  }
  
  export interface HomeScreenProps {}
 
  // types.ts
export type StackParamList = {
  Home: undefined;  // Home screen does not require any parameters
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }; // AddMenuItem expects setMenuItems
};

export interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: number;
}
