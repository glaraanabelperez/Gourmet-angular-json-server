import { Person } from "./person.model";

export interface ISession  {

  session:Person;

  setSession(data:Person);

  getSession();

}