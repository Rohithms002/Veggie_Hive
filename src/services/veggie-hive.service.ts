import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeggieHiveService {

  constructor(private httpClient: HttpClient) { }
  /**
   * Method to post the registered users data to backend
   * @param data registered user data
   */
  register(data) {
    return this.httpClient.post('http://ec2-52-77-243-25.ap-southeast-1.compute.amazonaws.com:8080/nec/auth/register', data);
  }
  /**
   * Method to post the logged in user data to backend
   * @param data logged in user data
   */
  login(data) {
    return this.httpClient.post('http://ec2-52-77-243-25.ap-southeast-1.compute.amazonaws.com:8080/nec/auth/login', data);
  }
  /**
   * Method to display all available slots for user
   */
  getAllSlotsAvailable() {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
    let token = {
      headers: headers
    };
    return this.httpClient.get('http://ec2-52-77-243-25.ap-southeast-1.compute.amazonaws.com:8080/nec/slots',
      token)
  }

  bookSlot(data: any, slotID: number) {
    let headers = new HttpHeaders().set('Authorization', 'Bearer ' +
      localStorage.getItem('token'));
    let token = {
      headers: headers
    };
    return this.httpClient.put(`http://ec2-52-77-243-25.ap-southeast-1.compute.amazonaws.com:8080/nec/book/slots/${slotID}`, data,
      token)
  }
}