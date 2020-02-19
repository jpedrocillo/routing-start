export class AuthService {
  isLogin = false;

  authenticated() {
     console.log(this.isLogin);
    const promise = new Promise (
      (resolve, reject) => {
          setTimeout( () => { resolve(this.isLogin); } , 800);
       }
    );
    return promise;
  }

  loggedIn() {
    console.log(this.isLogin);
    return this.isLogin = true;

  }

  loggedOut() {
    console.log(this.isLogin);
    return this.isLogin = false;
    console.log(this.isLogin);
  }

}
