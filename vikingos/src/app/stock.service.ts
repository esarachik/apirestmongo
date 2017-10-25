import { Injectable } from '@angular/core';
import {  Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class StockService {
  private baseUrl: string = 'http://swapi.co/api';
  
  people: Person[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private http : Http) { 
    console.log("stock");    

    this.getAll()
      .subscribe(
         /* happy path */ p => this.people = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
         
    debugger;
  }
  
  getAll(): Observable<Person[]>{
    let people$ = this.http
      .get(`${this.baseUrl}/people`, { headers: this.getHeaders()})
      .map(mapPersons)
      .catch(handleError);
      return people$;
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }  
  
}

function mapPersons(response:Response): Person[]{
  //throw new Error('ups! Force choke!');
  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(toPerson)
}
// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

function toPerson(r:any): Person{
  let person = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Number.parseInt(r.mass),
    height: Number.parseInt(r.height),
  });
  console.log('Parsed person:', person);
  return person;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
  let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
  return parseInt(extractedId);
}


export interface Person {
  id: number;
  name: string;
  height: number;
  weight: number;

  // it is optional because I know it
  // doesn't exist in the API that we will
  // consume in the next exercise :)
  profession?: string;
}
