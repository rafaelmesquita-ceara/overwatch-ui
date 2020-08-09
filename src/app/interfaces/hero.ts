export interface Hero{
  //overview
  id : number;
  name : string;
  role : string;
  difficulty : number;
  skills : [{
    name : string;
    description : string;
  },
  {
    name : string;
    description : string;
  },
  {
    name : string;
    description : string;
  },
  {
    name : string;
    description : string;
  }]
  //biography
  real_name : string;
  age : number;
  occupation : string;
  base_of_operations : string;
  affiliation : string;
  history: string;
}
