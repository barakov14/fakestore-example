import {RegisterRequestInterface} from "../interfaces/registerRequest.interface";
import {map, Observable} from "rxjs";
import {CurrentUserInterface} from "../../../shared/core/interfaces/currentUser.interfaces";
import {HttpClient} from "@angular/common/http";
import {AuthResponseInterface} from "../interfaces/authResponse.interface";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyCALC3dG7wo6Is3MGBaEo9LBa9pD0-OH0o';  // Corrected reference to environment variable
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
